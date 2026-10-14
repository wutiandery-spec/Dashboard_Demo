import { describe, expect, it, vi } from 'vitest'
import type { InternalAxiosRequestConfig } from 'axios'

/** 隔离真实录制数据，用一组可控的示例数据验证回放逻辑 */
vi.mock('@/api/demo/fixtures', () => ({
  default: {
    generatedAt: '2026-10-14T00:00:00.000Z',
    baseURL: 'http://example.com',
    endpoints: [
      {
        note: '商品列表 · 全部',
        method: 'GET',
        pattern: '/goods/{page}',
        params: { tab: 'all' },
        kind: 'paged',
        envelope: { code: 200, msg: 'ok', data: {} },
        list: Array.from({ length: 20 }, (_, index) => ({
          id: index + 1,
          title: `商品${index + 1}`,
          status: 1,
          cover: 'http://ceshi13.dishait.cn/uploads/cover.png',
        })),
        totalCount: 20,
      },
      {
        note: '规格列表',
        method: 'GET',
        pattern: '/skus/{page}',
        kind: 'paged',
        envelope: { code: 200, msg: 'ok', data: {} },
        list: [
          { id: 1, name: '规格一', status: 1 },
          { id: 2, name: '规格二', status: 1 },
          { id: 3, name: '规格三', status: 1 },
        ],
        totalCount: 3,
      },
      {
        note: '图库图片',
        method: 'GET',
        pattern: '/image_class/:id/image/{page}',
        kind: 'paged',
        envelope: { code: 200, msg: 'ok', data: {} },
        list: Array.from({ length: 5 }, (_, index) => ({ id: index + 1, url: '/uploads/a.png' })),
        totalCount: 5,
      },
      {
        note: '分类关联商品',
        method: 'GET',
        pattern: '/app_category_item/list',
        params: { category_id: '1' },
        ignoreParams: true,
        kind: 'static',
        data: { code: 200, msg: 'ok', data: { list: [{ id: 1, goods_id: 8 }] } },
      },
      {
        note: '首页统计',
        method: 'GET',
        pattern: '/statistics1',
        kind: 'static',
        data: { code: 200, msg: 'ok', data: { panels: [{ title: '今日订单', value: 12 }] } },
      },
      {
        note: '登录',
        method: 'POST',
        pattern: '/login',
        kind: 'static',
        data: { code: 200, msg: 'ok', data: { token: 'demo-token' } },
      },
      { note: '规格 · 删除', method: 'POST', pattern: '/skus/:id/delete', kind: 'stub', data: { code: 200, msg: 'ok' } },
      {
        note: '规格 · 状态',
        method: 'POST',
        pattern: '/skus/:id/update_status',
        kind: 'stub',
        data: { code: 200, msg: 'ok' },
      },
      { note: '规格 · 新增', method: 'POST', pattern: '/skus', kind: 'stub', data: { code: 200, msg: 'ok' } },
    ],
  },
}))

const { default: demoAdapter } = await import('@/api/demo')

const call = (method: string, url: string, params?: Record<string, unknown>, data?: unknown) =>
  demoAdapter({
    method,
    url,
    params,
    data,
    headers: {},
  } as unknown as InternalAxiosRequestConfig)

const bodyOf = async (method: string, url: string, params?: Record<string, unknown>, data?: unknown) => {
  const response = await call(method, url, params, data)
  return response.data as Record<string, any>
}

describe('演示模式：接口匹配与数据回放', () => {
  it('只读接口直接返回录制数据', async () => {
    const body = await bodyOf('GET', '/statistics1')
    expect(body.data.panels).toEqual([{ title: '今日订单', value: 12 }])
  })

  it('登录接口返回录制到的 token', async () => {
    const body = await bodyOf('POST', '/login', undefined, JSON.stringify({ username: 'x', password: 'y' }))
    expect(body.data.token).toBe('demo-token')
  })

  it('分页接口按 page / limit 切片并保留总条数', async () => {
    const first = await bodyOf('GET', '/goods/1', { limit: 10, tab: 'all' })
    expect(first.data.list).toHaveLength(10)
    expect(first.data.list[0].id).toBe(1)
    expect(first.data.totalCount).toBe(20)

    const second = await bodyOf('GET', '/goods/2', { limit: 10, tab: 'all' })
    expect(second.data.list).toHaveLength(10)
    expect(second.data.list[0].id).toBe(11)
  })

  it('页码在路径末段的接口同样支持切片', async () => {
    const body = await bodyOf('GET', '/image_class/3/image/2', { limit: 2 })
    expect(body.data.list.map((item: { id: number }) => item.id)).toEqual([3, 4])
    expect(body.data.totalCount).toBe(5)
  })

  it('请求参数多于录制数据时按子集匹配并在本地过滤', async () => {
    const body = await bodyOf('GET', '/goods/1', { limit: 10, tab: 'all', title: '商品13' })
    expect(body.data.list).toHaveLength(1)
    expect(body.data.list[0].title).toBe('商品13')
    expect(body.data.totalCount).toBe(1)
  })

  it('标记了 ignoreParams 的接口忽略参数变化', async () => {
    const body = await bodyOf('GET', '/app_category_item/list', { category_id: 99 })
    expect(body.data.list).toEqual([{ id: 1, goods_id: 8 }])
  })

  it('未录制的接口返回空数据并给出提示', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const body = await bodyOf('GET', '/not-recorded')
    expect(body.data).toEqual([])
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })

  it('远程图片地址替换为本地占位图，避免 HTTPS 页面的混合内容拦截', async () => {
    const body = await bodyOf('GET', '/goods/1', { limit: 10, tab: 'all' })
    expect(String(body.data.list[0].cover)).toMatch(/^data:image\/svg\+xml/)
  })
})

describe('演示模式：写操作与内存数据联动', () => {
  it('删除后列表不再包含该记录', async () => {
    await call('POST', '/skus/1/delete')
    const body = await bodyOf('GET', '/skus/1', { limit: 10 })
    expect(body.data.list.map((item: { id: number }) => item.id)).toEqual([2, 3])
    expect(body.data.totalCount).toBe(2)
  })

  it('状态开关写回列表行', async () => {
    await call('POST', '/skus/2/update_status', undefined, JSON.stringify({ status: 0 }))
    const body = await bodyOf('GET', '/skus/1', { limit: 10 })
    expect(body.data.list.find((item: { id: number }) => item.id === 2).status).toBe(0)
  })

  it('新增记录出现在列表首位', async () => {
    await call('POST', '/skus', undefined, JSON.stringify({ name: '新规格', status: 1 }))
    const body = await bodyOf('GET', '/skus/1', { limit: 10 })
    expect(body.data.list[0].name).toBe('新规格')
    expect(body.data.totalCount).toBe(3)
  })
})
