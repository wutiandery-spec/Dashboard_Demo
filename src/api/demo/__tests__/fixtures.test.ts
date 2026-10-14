import { describe, expect, it } from 'vitest'
import type { InternalAxiosRequestConfig } from 'axios'
import demoAdapter from '@/api/demo'
import fixtures from '@/api/demo/fixtures'

/**
 * 真实录制数据与回放适配器之间的契约测试
 *
 * 录制的键（方法 + 归一化路径 + 参数）与运行时请求必须完全对得上，
 * 否则演示站会在某些页面提示「该接口未录制」。这里逐条走一遍录制的接口，
 * 把这类不匹配挡在提交之前。未录制（fixtures 为空）时自动跳过。
 */
const hasFixtures = fixtures.endpoints.length > 0

const call = (method: string, url: string, params?: Record<string, unknown>) =>
  demoAdapter({
    method,
    url,
    params,
    headers: {},
  } as unknown as InternalAxiosRequestConfig).then((response) => response.data as any)

describe.skipIf(!hasFixtures)('演示数据契约', () => {
  it('登录接口返回可用的 token，可供前端写入登录态', async () => {
    const body = await call('POST', '/login')
    expect(typeof body.data.token).toBe('string')
    expect(body.data.token.length).toBeGreaterThan(0)
  })

  it('用户信息返回菜单树（动态路由依赖它）', async () => {
    const body = await call('POST', '/getinfo')
    const menus = body.data.menus
    expect(Array.isArray(menus)).toBe(true)
    expect(menus.length).toBeGreaterThan(0)
  })

  it('首页统计接口返回卡片数据', async () => {
    const body = await call('GET', '/statistics1')
    expect(Array.isArray(body.data.panels)).toBe(true)
  })

  it('所有不含路径参数的分页接口都能命中录制数据', async () => {
    const paged = fixtures.endpoints.filter(
      (item) => item.kind === 'paged' && !item.pattern.includes(':id'),
    )
    expect(paged.length).toBeGreaterThan(5)

    for (const endpoint of paged) {
      const url = endpoint.pattern.replace('{page}', '1')
      const body = await call('GET', url, { limit: 10, ...(endpoint.params ?? {}) })
      expect(body.msg, `${endpoint.note} 应命中录制数据`).not.toBe('演示模式：该接口未录制')
      expect(Array.isArray(body.data.list), `${endpoint.note} 应返回列表`).toBe(true)
      expect(body.data.list.length, `${endpoint.note} 应返回数据`).toBe(
        Math.min(10, endpoint.list?.length ?? 0),
      )
      expect(body.data.totalCount, `${endpoint.note} 的总条数应与录制条数一致`).toBe(
        endpoint.list?.length ?? 0,
      )
    }
  })

  it('写接口返回成功桩响应', async () => {
    const body = await call('POST', '/goods/1/delete')
    expect(body.code).toBe(200)
  })

  it('页码写在路径末段的图库接口也能命中录制数据', async () => {
    const endpoint = fixtures.endpoints.find((item) => item.pattern === '/image_class/:id/image/{page}')
    const classId = endpoint?.list?.[0] ? Number((endpoint.list[0] as { image_class_id?: number }).image_class_id) : 0
    if (!classId) return

    const body = await call('GET', `/image_class/${classId}/image/1`, { limit: 12 })
    expect(body.data.list.length).toBeGreaterThan(0)
    expect(body.data.list[0].image_class_id).toBe(classId)
  })
})
