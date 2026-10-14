#!/usr/bin/env node
/**
 * 演示数据录制脚本
 *
 * 用测试账号登录真实的商城后台接口，抓取各业务模块的只读接口数据，
 * 生成 src/api/demo/fixtures.ts，供静态托管的演示站（VITE_DEMO=1）回放。
 *
 * 安全约束：只读取数据，不执行任何写操作（新增/修改/删除一律生成本地桩响应），
 * 因此不会污染共享的测试后端。
 *
 * 用法：
 *   1. 在项目根目录创建 .env.record（已被 .gitignore 忽略）：
 *        DEMO_USER=你的测试账号
 *        DEMO_PASS=你的测试密码
 *        DEMO_API_BASE=http://ceshi13.dishait.cn/admin   # 可选
 *   2. 执行 npm run record:demo
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import axios from 'axios'

const root = process.cwd()
const OUT_FILE = join(root, 'src/api/demo/fixtures.ts')
const DEFAULT_BASE = 'http://ceshi13.dishait.cn/admin'

// Node 20.12+ 支持直接读取 .env 文件，避免额外引入 dotenv
if (existsSync(join(root, '.env.record'))) {
  process.loadEnvFile(join(root, '.env.record'))
}

/** 清理编辑器可能带进来的 BOM、空格与引号 */
const clean = (value) => value?.replace(/^\uFEFF/, '').trim().replace(/^["']|["']$/g, '')

const apiBase = clean(process.env.DEMO_API_BASE) || DEFAULT_BASE
const username = clean(process.env.DEMO_USER)
const password = clean(process.env.DEMO_PASS)

if (!username || !password) {
  console.error('缺少测试账号：请在项目根目录创建 .env.record 并写入 DEMO_USER / DEMO_PASS')
  process.exit(1)
}

const http = axios.create({ baseURL: apiBase, timeout: 20000 })
let token = ''

http.interceptors.request.use((config) => {
  if (token) config.headers.token = token
  return config
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** 需要脱敏的字段名：演示数据会随仓库公开，任何密钥类字段都不落盘 */
const SECRET_KEY_PATTERN =
  /^(token|access_token|refresh_token|api_secret|private_key|secret|secret_key|access_key|key|password|pass|app_secret|cert_client|cert_key)$/i
const JWT_PATTERN = /^ey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}$/

/** 递归脱敏：密钥字段与 JWT 一律替换为占位符 */
function sanitize(value, depth = 0) {
  if (typeof value === 'string') {
    return JWT_PATTERN.test(value) ? 'demo-token' : value
  }
  if (Array.isArray(value)) {
    return depth > 12 ? value : value.map((item) => sanitize(item, depth + 1))
  }
  if (value && typeof value === 'object') {
    if (depth > 12) return value
    const result = {}
    Object.entries(value).forEach(([key, item]) => {
      result[key] =
        SECRET_KEY_PATTERN.test(key) && typeof item === 'string' && item.length > 2
          ? '<演示数据已脱敏>'
          : sanitize(item, depth + 1)
    })
    return result
  }
  return value
}

/**
 * 只读抓取
 *
 * 关键：请求方法必须与前端调用保持一致——登录与用户信息是 POST（数据放在请求体），
 * 其余查询接口是 GET + query 参数，方法不对后端会直接拒绝。
 */
async function fetchJson({ method = 'GET', path, params, data, quiet }) {
  try {
    const res = await http.request({ method, url: path, params, data })
    return res.data
  } catch (error) {
    const status = error?.response?.status
    const detail = error?.response?.data
      ? JSON.stringify(error.response.data).slice(0, 200)
      : error.message
    if (!quiet) console.warn(`  跳过 ${method} ${path}：${status ?? ''} ${detail}`)
    return null
  }
}

const endpoints = []
const responses = new Map()

function toKey(method, pattern, params = {}) {
  const entries = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && String(value) !== '')
    .map(([key, value]) => `${key}=${value}`)
    .sort()
  return `${method} ${pattern}${entries.length ? `?${entries.join('&')}` : ''}`
}

const toRecordedParams = (params) =>
  Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)]))

function push(entry) {
  endpoints.push(entry)
  if (entry.kind !== 'stub') responses.set(entry.__key, entry)
  delete entry.__key
}

/** 分页接口：按页抓取并合并为一份全量数据，运行时再按 page/limit 切片 */
async function recordPaged({ note, pattern, path, params = {}, pageSize = 10, maxPages = 2, ignoreParams }) {
  const key = toKey('GET', pattern, params)
  const list = []
  let totalCount = 0
  let envelope = null
  let page = 1

  while (page <= maxPages) {
    const query = { limit: pageSize, ...params }
    const body = await fetchJson({ path: String(path).replace('{page}', String(page)), params: query })
    if (!body || !Array.isArray(body.data?.list)) break
    if (!envelope) {
      // 保留除 list / totalCount 之外的响应字段，回放时原样带回
      const rest = { ...body.data }
      delete rest.list
      delete rest.totalCount
      envelope = { ...body, data: rest }
    }
    totalCount = Number(body.data.totalCount ?? body.data.list.length)
    list.push(...body.data.list)
    if (list.length >= totalCount || body.data.list.length < pageSize) break
    page += 1
    await sleep(120)
  }

  push({
    __key: key,
    note,
    method: 'GET',
    pattern,
    ...(Object.keys(params).length ? { params: toRecordedParams(params) } : {}),
    ...(ignoreParams ? { ignoreParams: true } : {}),
    kind: 'paged',
    envelope: envelope ?? { code: 200, msg: 'ok', data: {} },
    list,
    // 演示数据只保留录到的子集，分页总数按实际条数收敛，避免翻页出现空白页
    totalCount: list.length,
    sourceTotalCount: totalCount,
  })
  console.log(`  ${note}：录到 ${list.length} 条（后端共 ${totalCount} 条）`)
}

/** 只读接口：整段响应对应一份数据 */
async function recordStatic({ note, method = 'GET', pattern, path, params, body, data, ignoreParams }) {
  const key = toKey(method, pattern, params)
  let responseBody = data
  if (responseBody === undefined) {
    responseBody = await fetchJson({
      method,
      path: path ?? pattern.replace('{page}', '1'),
      params,
      data: body,
    })
  }
  push({
    __key: key,
    note,
    method,
    pattern,
    ...(params && Object.keys(params).length ? { params: toRecordedParams(params) } : {}),
    ...(ignoreParams ? { ignoreParams: true } : {}),
    kind: 'static',
    data: responseBody ?? { code: 200, msg: 'ok', data: null },
  })
  console.log(`  ${note}：${responseBody ? 'ok' : '空'}`)
}

/** 写接口：仅生成本地桩响应，不触碰后端数据 */
function recordStub({ note, method = 'POST', pattern }) {
  push({ note, method, pattern, kind: 'stub', data: { code: 200, msg: 'ok', data: true } })
}

const resourceWrites = (resource, note) => [
  { note: `${note} · 新增`, pattern: `/${resource}` },
  { note: `${note} · 修改`, pattern: `/${resource}/:id` },
  { note: `${note} · 删除`, pattern: `/${resource}/:id/delete` },
  { note: `${note} · 状态`, pattern: `/${resource}/:id/update_status` },
]

/** 从按需图标清单里读出已注册的图标名 */
function readRegisteredIcons() {
  const file = join(root, 'src/icons/element-plus-icons.ts')
  if (!existsSync(file)) return new Set()
  const source = readFileSync(file, 'utf8')
  const block = source.slice(source.indexOf('export const elementPlusIcons'))
  return new Set([...block.matchAll(/^\s{2}([A-Z][A-Za-z0-9]*),$/gm)].map((match) => match[1]))
}

/** 后端下发的菜单图标是短横线命名，Vue 解析时会转成驼峰 */
const camelize = (name) => name.split(/[-_]/).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')

/** 收集菜单数据里用到的全部图标名（含子菜单） */
function collectMenuIcons(menus, result = new Set()) {
  if (!Array.isArray(menus)) return result
  menus.forEach((menu) => {
    if (typeof menu?.icon === 'string' && menu.icon.trim()) result.add(camelize(menu.icon.trim()))
    collectMenuIcons(menu?.child, result)
  })
  return result
}

async function main() {
  console.log(`后端：${apiBase}`)
  console.log(`账号：${username.slice(0, 2)}***（读取自 .env.record）`)

  console.log('1/5 登录并获取用户信息（菜单数据决定动态路由能否建立）')
  const loginResult = await fetchJson({
    method: 'POST',
    path: '/login',
    data: { username, password },
  })
  token =
    loginResult?.data?.token ??
    loginResult?.data?.access_token ??
    loginResult?.token ??
    loginResult?.data?.data?.token ??
    ''
  if (!token) {
    console.error('登录失败：未拿到 token')
    console.error(
      '后端返回：',
      loginResult ? JSON.stringify(loginResult).slice(0, 300) : '无响应，请查看上方「跳过」提示里的状态码',
    )
    console.error('请确认 .env.record 中的账号密码以及后端地址是否正确。')
    process.exit(1)
  }
  console.log('  登录成功，已获取 token')
  await recordStatic({ note: '登录', method: 'POST', pattern: '/login', data: loginResult })
  await recordStatic({ note: '用户信息与菜单', method: 'POST', pattern: '/getinfo' })

  console.log('2/5 抓取统计、配置类接口')
  await recordStatic({ note: '首页统计卡片', pattern: '/statistics1' })
  await recordStatic({ note: '店铺与交易提示', pattern: '/statistics2' })
  for (const type of ['hour', 'week', 'month']) {
    await recordStatic({ note: `订单趋势图 · ${type}`, pattern: '/statistics3', params: { type } })
  }
  await recordStatic({ note: '系统设置', pattern: '/sysconfig' })
  await recordStatic({ note: '分销配置', pattern: '/distribution_setting/get' })
  await recordStatic({ note: '分销统计', pattern: '/agent/statistics' })
  await recordStatic({ note: '快递公司', pattern: '/express_company/:id', path: '/express_company/1' })

  console.log('3/5 抓取业务列表（分页接口合并为全量数据）')
  for (const tab of ['all', 'checking', 'saling', 'off', 'min_stock', 'delete']) {
    await recordPaged({
      note: `商品列表 · ${tab}`,
      pattern: '/goods/{page}',
      path: '/goods/{page}',
      params: { tab },
      maxPages: 3,
    })
  }
  for (const tab of ['all', 'nopay', 'noship', 'shiped', 'received', 'finish', 'closed', 'refunding']) {
    await recordPaged({
      note: `订单列表 · ${tab}`,
      pattern: '/order/{page}',
      path: '/order/{page}',
      params: { tab },
      // 订单数据结构较大，仅「全部」保留两页，其余各保留一页
      maxPages: tab === 'all' ? 2 : 1,
    })
  }
  await recordPaged({ note: '推广员列表', pattern: '/agent/{page}', path: '/agent/{page}', params: { type: 'all' }, ignoreParams: true })
  await recordPaged({ note: '推广订单列表', pattern: '/user_bill/{page}', path: '/user_bill/{page}', params: { type: 'all' }, ignoreParams: true })
  await recordPaged({ note: '图库分类', pattern: '/image_class/{page}', path: '/image_class/{page}' })
  await recordPaged({ note: '用户列表', pattern: '/user/{page}', path: '/user/{page}' })
  await recordPaged({ note: '会员等级', pattern: '/user_level/{page}', path: '/user_level/{page}' })
  await recordPaged({ note: '管理员列表', pattern: '/manager/{page}', path: '/manager/{page}' })
  await recordPaged({ note: '角色列表', pattern: '/role/{page}', path: '/role/{page}' })
  await recordPaged({ note: '公告列表', pattern: '/notice/{page}', path: '/notice/{page}' })
  await recordPaged({ note: '优惠券列表', pattern: '/coupon/{page}', path: '/coupon/{page}' })
  await recordPaged({ note: '商品评价列表', pattern: '/goods_comment/{page}', path: '/goods_comment/{page}' })
  await recordPaged({ note: '商品规格列表', pattern: '/skus/{page}', path: '/skus/{page}' })

  await recordStatic({ note: '分类树', pattern: '/category' })
  await recordStatic({ note: '权限规则树', pattern: '/rule/:id', path: '/rule/1' })

  console.log('4/5 抓取依赖具体 id 的详情接口')
  const goods = responses.get('GET /goods/{page}?tab=all')
  const goodsId = goods?.list?.find((item) => item?.id)?.id
  if (goodsId) {
    await recordStatic({ note: '商品资料详情', pattern: '/goods/read/:id', path: `/goods/read/${goodsId}` })
  }

  const classes = responses.get('GET /image_class/{page}')
  const classId = classes?.list?.find((item) => item?.id)?.id
  if (classId) {
    await recordPaged({
      note: `图库图片 · 分类 ${classId}`,
      pattern: '/image_class/:id/image/{page}',
      path: `/image_class/${classId}/image/{page}`,
      pageSize: 12,
      maxPages: 2,
    })
  }

  const categoryTree = responses.get('GET /category')
  const findCategoryId = (nodes) => {
    if (!Array.isArray(nodes)) return null
    for (const node of nodes) {
      if (node?.id !== undefined) return node.id
      const child = findCategoryId(node?.child)
      if (child !== null) return child
    }
    return null
  }
  // 分类接口直接返回数组（{ msg, data: [...] }），兼容再包一层 list 的写法
  const categoryId = findCategoryId(
    categoryTree?.data?.list ?? categoryTree?.data?.data ?? categoryTree?.data,
  )
  if (categoryId !== null) {
    await recordStatic({
      note: `分类关联商品 · 分类 ${categoryId}`,
      pattern: '/app_category_item/list',
      path: '/app_category_item/list',
      params: { category_id: categoryId },
      ignoreParams: true,
    })
  }

  console.log('5/5 生成写接口桩响应（不对后端做任何写操作）')
  resourceWrites('goods', '商品').forEach(recordStub)
  recordStub({ note: '商品 · 审核', pattern: '/goods/:id/check' })
  recordStub({ note: '商品 · 轮播图', pattern: '/goods/banners/:id' })
  recordStub({ note: '商品 · 批量上下架', pattern: '/goods/changestatus' })
  recordStub({ note: '商品 · 批量删除', pattern: '/goods/delete_all' })
  recordStub({ note: '商品 · 批量恢复', pattern: '/goods/restore' })
  recordStub({ note: '商品 · 彻底删除', pattern: '/goods/destroy' })
  recordStub({ note: '订单 · 批量删除', pattern: '/order/delete_all' })
  recordStub({ note: '订单 · 发货', pattern: '/order/:id/ship' })
  recordStub({ note: '订单 · 退款处理', pattern: '/order/:id/handle_refund' })
  resourceWrites('skus', '规格').forEach(recordStub)
  recordStub({ note: '规格 · 批量删除', pattern: '/skus/delete_all' })
  resourceWrites('category', '分类').forEach(recordStub)
  recordStub({ note: '分类 · 关联商品', pattern: '/app_category_item' })
  recordStub({ note: '分类 · 取消关联', pattern: '/app_category_item/:id/delete' })
  resourceWrites('image_class', '图库分类').forEach(recordStub)
  recordStub({ note: '图库 · 批量删除图片', pattern: '/image/delete_all' })
  recordStub({ note: '图库 · 重命名图片', pattern: '/image/:id' })
  recordStub({ note: '图库 · 上传图片', pattern: '/image/upload' })
  resourceWrites('rule', '权限规则').forEach(recordStub)
  resourceWrites('role', '角色').forEach(recordStub)
  recordStub({ note: '角色 · 配置权限', pattern: '/role/set_rules' })
  resourceWrites('notice', '公告').forEach(recordStub)
  resourceWrites('coupon', '优惠券').forEach(recordStub)
  resourceWrites('user_level', '会员等级').forEach(recordStub)
  resourceWrites('manager', '管理员').forEach(recordStub)
  resourceWrites('user', '会员').forEach(recordStub)
  recordStub({ note: '评价 · 状态', pattern: '/goods_comment/:id/update_status' })
  recordStub({ note: '评价 · 回复', pattern: '/goods_comment/review/:id' })
  recordStub({ note: '系统设置 · 保存', pattern: '/sysconfig' })
  recordStub({ note: '系统设置 · 上传证书', pattern: '/sysconfig/upload' })
  recordStub({ note: '分销配置 · 保存', pattern: '/distribution_setting/set' })
  recordStub({ note: '修改密码', pattern: '/updatepassword' })
  recordStub({ note: '退出登录', pattern: '/logout' })

  const fixtures = {
    generatedAt: new Date().toISOString(),
    baseURL: apiBase,
    // 脱敏后再落盘：演示数据会随仓库公开，密钥与 token 一律替换为占位符
    endpoints: sanitize(endpoints),
  }

  const content =
    `import type { DemoFixtures } from './types'\n\n` +
    `/**\n * 演示数据（由 scripts/record-demo.mjs 生成，请勿手动编辑）\n` +
    ` * 录制时间：${fixtures.generatedAt}\n` +
    ` * 录制来源：${apiBase}\n` +
    ` * 仅包含只读接口数据；写接口为本地桩响应，未对后端做任何写操作。\n` +
    ` */\n` +
    `const fixtures: DemoFixtures = ${JSON.stringify(fixtures, null, 2)}\n\n` +
    `export default fixtures\n`

  writeFileSync(OUT_FILE, content, 'utf8')

  const emptyLists = endpoints.filter((item) => item.kind === 'paged' && !item.list?.length)
  console.log(
    `\n完成：${endpoints.length} 个接口（${endpoints.filter((e) => e.kind === 'paged').length} 个分页、` +
      `${endpoints.filter((e) => e.kind === 'static').length} 个只读、${endpoints.filter((e) => e.kind === 'stub').length} 个写桩）`,
  )
  if (emptyLists.length) {
    console.warn(`注意：${emptyLists.length} 个列表接口没有抓到数据，演示站对应页面会是空的：`)
    emptyLists.slice(0, 8).forEach((item) => console.warn(`  - ${item.note}`))
  }

  // 菜单图标以字符串下发，必须已在按需清单里注册，否则侧边栏会没有图标
  const registered = readRegisteredIcons()
  const menuIcons = collectMenuIcons(fixtures.endpoints.find((item) => item.pattern === '/getinfo')?.data?.data?.menus)
  const missingIcons = [...menuIcons].filter((name) => !registered.has(name))
  if (missingIcons.length) {
    console.warn(`\n注意：${missingIcons.length} 个菜单图标尚未注册，请补进 src/icons/element-plus-icons.ts：`)
    console.warn(`  ${missingIcons.join(', ')}`)
  } else if (menuIcons.size) {
    console.log(`菜单图标校验通过（共 ${menuIcons.size} 个，均已注册）`)
  }
  console.log(`写入 ${OUT_FILE}`)
  console.log('下一步：npm run build:demo && npm run preview 本地验证演示站')
}

main().catch((error) => {
  console.error('录制失败：', error.message)
  process.exit(1)
})
