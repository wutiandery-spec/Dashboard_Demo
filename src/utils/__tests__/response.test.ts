import { describe, expect, it } from 'vitest'
import { pickList } from '@/utils/response'
import { formatNumber } from '@/utils/format'

describe('pickList', () => {
  it('解析标准分页响应 { data: { list, totalCount } }', () => {
    const res = { code: 200, msg: 'ok', data: { list: [{ id: 1 }, { id: 2 }], totalCount: 42 } }
    expect(pickList(res)).toEqual({ list: [{ id: 1 }, { id: 2 }], total: 42 })
  })

  it('缺少 totalCount 时退化为当前页条数', () => {
    expect(pickList({ data: { list: [1, 2, 3] } })).toEqual({ list: [1, 2, 3], total: 3 })
  })

  it('list 不是数组时返回空列表', () => {
    expect(pickList({ data: { list: null } })).toEqual({ list: [], total: 0 })
    expect(pickList({ data: {} })).toEqual({ list: [], total: 0 })
  })

  it('响应为空时返回空列表而不是抛错', () => {
    expect(pickList(null)).toEqual({ list: [], total: 0 })
    expect(pickList(undefined)).toEqual({ list: [], total: 0 })
  })
})

describe('formatNumber', () => {
  it('默认取整并添加千分位', () => {
    expect(formatNumber(1234567)).toBe('1,234,567')
    expect(formatNumber(999)).toBe('999')
    expect(formatNumber(0)).toBe('0')
  })

  it('按精度补零并保留千分位', () => {
    expect(formatNumber(1234.5, 2)).toBe('1,234.50')
    expect(formatNumber(1234567.891, 1)).toBe('1,234,567.9')
  })

  it('支持负数', () => {
    expect(formatNumber(-1234567)).toBe('-1,234,567')
    expect(formatNumber(-1234.5, 2)).toBe('-1,234.50')
  })
})
