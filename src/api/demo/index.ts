import type { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { DemoEndpoint } from './types'
import fixtures from './fixtures'

/**
 * 演示模式适配器
 *
 * 静态托管环境（GitHub Pages）无法代理到后端：测试后端只有 HTTP 且未开放跨域，
 * 直连会被浏览器的混合内容与同源策略拦下。因此线上版本改为回放录制好的数据：
 * 请求不发出网络，直接由本适配器按「方法 + 归一化路径 + 参数」命中并返回，
 * 写操作返回成功并就地修改内存数据，保证演示环境可交互。
 */

/** 分页参数：不参与接口匹配，仅用于数据切片 */
const PAGINATION_KEYS = ['page', 'limit', 'l']
/** 模拟网络往返，让加载态在演示中可见 */
const DEMO_LATENCY = 120
/** 单次切片上限，避免异常参数导致超大数组 */
const MAX_PAGE_SIZE = 100

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** 数字段归一化：/goods/12/delete → /goods/:id/delete */
function toPattern(segments: string[]): string {
  return `/${segments.map((segment) => (/^\d+$/.test(segment) ? ':id' : segment)).join('/')}`
}

interface RequestInfo {
  method: string
  pattern: string
  page: number
  /** 原始请求里的数字段（按顺序），用于写操作定位 id */
  numericSegments: number[]
  params: Record<string, unknown>
}

function parseRequest(config: InternalAxiosRequestConfig): RequestInfo {
  const method = String(config.method ?? 'get').toUpperCase()
  const rawPath = String(config.url ?? '')
    .split('?')[0]!
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/api/, '')

  const segments = rawPath.split('/').filter(Boolean)
  const params: Record<string, unknown> =
    typeof config.params === 'object' && config.params !== null
      ? { ...(config.params as Record<string, unknown>) }
      : {}

  const limit = params.limit ?? params.l
  const last = segments[segments.length - 1]
  let page = 1

  if (params.page !== undefined) {
    page = Number(params.page) || 1
  } else if (limit !== undefined && last !== undefined && /^\d+$/.test(last)) {
    // 页码在路径末段：/{resource}/{page}、/{resource}/{id}/image/{page}
    page = Number(last) || 1
    segments[segments.length - 1] = '{page}'
  }

  return {
    method,
    pattern: toPattern(segments),
    page,
    numericSegments: rawPath.split('/').filter((s) => /^\d+$/.test(s)).map(Number),
    params,
  }
}

/** 参与匹配的参数（排除分页参数与空值），按 key 排序保证稳定 */
function paramEntries(params: Record<string, unknown>): [string, string][] {
  return Object.entries(params)
    .filter(
      ([key, value]) =>
        !PAGINATION_KEYS.includes(key) && value !== undefined && value !== null && String(value) !== '',
    )
    .map(([key, value]) => [key, String(value)] as [string, string])
    .sort((a, b) => a[0].localeCompare(b[0]))
}

const serializeParams = (entries: [string, string][]): string =>
  entries.length ? `?${entries.map(([key, value]) => `${key}=${value}`).join('&')}` : ''

interface MatchResult {
  endpoint: DemoEndpoint
  /** 请求里多出来、录制数据未覆盖的参数（如搜索词），用于本地过滤 */
  leftover: [string, string][]
}

function matchEndpoint(
  method: string,
  pattern: string,
  params: [string, string][],
): MatchResult | null {
  const samePath = fixtures.endpoints.filter(
    (item) => item.method === method && item.pattern === pattern,
  )
  if (!samePath.length) return null

  const requested = new Map(params)
  const requestedKey = serializeParams(params)

  const exact = samePath.find(
    (item) => serializeParams(paramEntries(item.params ?? {})) === requestedKey,
  )
  if (exact) return { endpoint: exact, leftover: [] }

  // 子集匹配：命中参数最多的一条（搜索请求会回退到不带搜索词的列表）
  const subset = samePath
    .filter((item) => Object.keys(item.params ?? {}).length > 0)
    .filter((item) =>
      Object.entries(item.params ?? {}).every(([key, value]) => requested.get(key) === String(value)),
    )
    .sort((a, b) => Object.keys(b.params ?? {}).length - Object.keys(a.params ?? {}).length)[0]

  if (subset) {
    const used = new Set(Object.keys(subset.params ?? {}))
    return { endpoint: subset, leftover: params.filter(([key]) => !used.has(key)) }
  }

  const ignoreParams = samePath.find((item) => item.ignoreParams)
  return ignoreParams ? { endpoint: ignoreParams, leftover: [] } : null
}

/** 本地过滤：把请求里多出的参数当作包含匹配，让演示中的搜索框有反馈 */
function applyFilters(list: unknown[], filters: [string, string][]): unknown[] {
  if (!filters.length) return list
  return list.filter((item) => {
    const text = JSON.stringify(item)?.toLowerCase() ?? ''
    return filters.every(([, value]) => text.includes(value.toLowerCase()))
  })
}

function buildPagedBody(
  endpoint: DemoEndpoint,
  page: number,
  limit: number,
  leftover: [string, string][],
): Record<string, unknown> {
  const all = Array.isArray(endpoint.list) ? endpoint.list : []
  const filtered = applyFilters(all, leftover)
  const totalCount = leftover.length ? filtered.length : (endpoint.totalCount ?? filtered.length)
  const size = Math.min(Math.max(limit, 1), MAX_PAGE_SIZE)
  const start = Math.max(page - 1, 0) * size
  const envelope = endpoint.envelope ?? {}
  const envelopeData =
    typeof envelope.data === 'object' && envelope.data !== null
      ? (envelope.data as Record<string, unknown>)
      : {}

  return {
    code: 200,
    msg: 'ok',
    ...envelope,
    data: {
      ...envelopeData,
      list: filtered.slice(start, start + size),
      totalCount,
    },
  }
}

/** 找出某个资源对应的分页数据仓库 */
function findStores(resource: string): DemoEndpoint[] {
  return fixtures.endpoints.filter(
    (item) => item.kind === 'paged' && item.pattern.startsWith(`/${resource}/`),
  )
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

/**
 * 写操作：接口本身返回成功，同时就地修改内存里的列表数据，
 * 让新增 / 修改 / 删除 / 状态开关在演示环境中都有可见反馈。
 */
function applyMutation(info: RequestInfo, config: InternalAxiosRequestConfig): void {
  const payload = parsePayload(config.data)
  const segments = info.pattern.split('/').filter(Boolean)
  const resource = segments[0] ?? ''
  const stores = findStores(resource)
  if (!stores.length) return

  const removeById = (id: number) => {
    stores.forEach((store) => {
      if (!Array.isArray(store.list)) return
      const index = store.list.findIndex((item) => Number((item as { id?: number })?.id) === id)
      if (index > -1) {
        store.list.splice(index, 1)
        store.totalCount = Math.max((store.totalCount ?? 1) - 1, 0)
      }
    })
  }

  const patchById = (ids: number[], patch: Record<string, unknown>) => {
    stores.forEach((store) => {
      if (!Array.isArray(store.list)) return
      store.list.forEach((item) => {
        const target = item as { id?: number }
        if (ids.includes(Number(target.id))) Object.assign(target, patch)
      })
    })
  }

  // 批量删除：[1,2] 形式的 ids 由调用方传入
  if (/\/delete_all$|\/destroy$/.test(info.pattern)) {
    const ids = Array.isArray(payload?.ids) ? payload.ids.map(Number) : []
    ids.forEach(removeById)
    return
  }

  if (/\/changestatus$/.test(info.pattern)) {
    const ids = Array.isArray(payload?.ids) ? payload.ids.map(Number) : []
    patchById(ids, { status: Number(payload?.status ?? 1) })
    return
  }

  if (/\/restore$/.test(info.pattern)) {
    const ids = Array.isArray(payload?.ids) ? payload.ids.map(Number) : []
    patchById(ids, { status: 1 })
    return
  }

  if (/\/update_status$/.test(info.pattern)) {
    const id = info.numericSegments[info.numericSegments.length - 1]
    if (id !== undefined) patchById([id], { status: Number(payload?.status ?? 1) })
    return
  }

  if (/\/delete$/.test(info.pattern)) {
    const id = info.numericSegments[info.numericSegments.length - 1]
    if (id !== undefined) removeById(id)
    return
  }

  // 新增：插入到各仓库首位
  if (segments.length === 1 && info.method === 'POST') {
    stores.forEach((store) => {
      if (!Array.isArray(store.list)) return
      store.list.unshift({ id: Date.now(), ...payload })
      store.totalCount = (store.totalCount ?? store.list.length - 1) + 1
    })
    return
  }

  // 修改：按 id 合并载荷
  if (segments.length === 2 && segments[1] === ':id') {
    const id = info.numericSegments[info.numericSegments.length - 1]
    if (id !== undefined) patchById([id], payload ?? {})
  }
}

function parsePayload(data: unknown): Record<string, any> | null {
  if (!data) return null
  if (typeof data === 'string') {
    try {
      return JSON.parse(data)
    } catch {
      return null
    }
  }
  if (typeof data === 'object') return data as Record<string, any>
  return null
}

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 100000
  }
  return hash
}

/**
 * 图片占位图：录制数据里的图片地址指向测试后端的 HTTP 域名，
 * 在 HTTPS 页面属于混合内容会被拦截，因此统一替换为本地生成的 SVG 占位图，
 * 保证图库、商品封面等位置在演示环境中正常显示。
 */
function placeholderImage(seed: string): string {
  const hue = hashString(seed) % 360
  const label = (seed.split('/').pop() ?? 'image').replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 18)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="hsl(${hue} 72% 80%)"/>` +
    `<stop offset="1" stop-color="hsl(${(hue + 45) % 360} 68% 62%)"/>` +
    `</linearGradient></defs>` +
    `<rect width="320" height="320" fill="url(#g)"/>` +
    `<text x="160" y="168" font-family="system-ui,sans-serif" font-size="22" fill="rgba(255,255,255,0.95)" text-anchor="middle">${label}</text>` +
    `</svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const REMOTE_MEDIA = /^https?:\/\/[^\s]+\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/i
const UPLOAD_PATH = /^\/?uploads?\//

function isRemoteMedia(value: string): boolean {
  return REMOTE_MEDIA.test(value) || UPLOAD_PATH.test(value)
}

/** 递归替换响应中的远程图片地址 */
function rewriteMedia<T>(value: T, depth = 0): T {
  if (typeof value === 'string') {
    return (isRemoteMedia(value) ? placeholderImage(value) : value) as unknown as T
  }
  if (Array.isArray(value) && depth < 12) {
    return value.map((item) => rewriteMedia(item, depth + 1)) as unknown as T
  }
  if (value && typeof value === 'object' && depth < 12) {
    const result: Record<string, unknown> = {}
    Object.entries(value as Record<string, unknown>).forEach(([key, item]) => {
      result[key] = rewriteMedia(item, depth + 1)
    })
    return result as T
  }
  return value
}

export const demoAdapter: AxiosAdapter = async (config) => {
  const requestConfig = config as InternalAxiosRequestConfig
  await sleep(DEMO_LATENCY)

  const info = parseRequest(requestConfig)
  const match = matchEndpoint(info.method, info.pattern, paramEntries(info.params))
  const limit = Number(info.params.limit ?? info.params.l ?? 10) || 10

  let body: unknown
  if (!match) {
    console.warn(`[demo] 未录制的接口：${info.method} ${info.pattern}`)
    body = { code: 200, msg: '演示模式：该接口未录制', data: [] }
  } else if (match.endpoint.kind === 'paged') {
    body = buildPagedBody(match.endpoint, info.page, limit, match.leftover)
  } else {
    body = clone(match.endpoint.data ?? { code: 200, msg: 'ok', data: true })
  }

  if (info.method !== 'GET') applyMutation(info, requestConfig)

  return {
    data: rewriteMedia(body),
    status: 200,
    statusText: 'OK',
    headers: {},
    config: requestConfig,
  } as AxiosResponse
}

export default demoAdapter
