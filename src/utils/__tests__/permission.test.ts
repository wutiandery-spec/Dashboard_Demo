import { describe, expect, it } from 'vitest'
import {
  collectPermissionSet,
  hasAnyPermission,
  hasPermission,
  pickMenuPermission,
} from '@/utils/permission'
import type { UserInfo } from '@/type'

describe('collectPermissionSet', () => {
  it('合并 permissions / authList / ruleNames 三种字段并去重', () => {
    const userInfo: UserInfo = {
      permissions: ['goods,GET', 'order,GET'],
      authList: ['order,GET', 'user,POST'],
      ruleNames: ['notice,GET'],
    }
    expect([...collectPermissionSet(userInfo)].sort()).toEqual([
      'goods,GET',
      'notice,GET',
      'order,GET',
      'user,POST',
    ])
  })

  it('去除空白项与重复项', () => {
    const set = collectPermissionSet({ permissions: ['  ', '', 'a', ' a '] })
    expect([...set]).toEqual(['a'])
  })

  it('字段缺失或类型异常时返回空集合', () => {
    expect(collectPermissionSet(null).size).toBe(0)
    expect(collectPermissionSet({ permissions: undefined }).size).toBe(0)
    expect(collectPermissionSet({ permissions: 'goods,GET' as unknown as string[] }).size).toBe(0)
  })
})

describe('hasPermission', () => {
  it('未声明所需权限时直接放行', () => {
    expect(hasPermission(null, undefined)).toBe(true)
    expect(hasPermission(null, '   ')).toBe(true)
  })

  it('后端未返回权限数据时视为未启用权限配置，全部放行', () => {
    expect(hasPermission({ permissions: [] }, 'goods,GET')).toBe(true)
  })

  it('拥有权限时放行，缺失时拦截', () => {
    const userInfo: UserInfo = { permissions: ['goods,GET'] }
    expect(hasPermission(userInfo, 'goods,GET')).toBe(true)
    expect(hasPermission(userInfo, 'order,GET')).toBe(false)
  })
})

describe('hasAnyPermission', () => {
  it('命中任意一个权限即可通过', () => {
    const userInfo: UserInfo = { ruleNames: ['goods,GET'] }
    expect(hasAnyPermission(userInfo, ['goods,GET', 'order,GET'])).toBe(true)
    expect(hasAnyPermission(userInfo, ['order,GET'])).toBe(false)
  })

  it('与路由守卫保持一致：未配置权限数据时不隐藏按钮', () => {
    expect(hasAnyPermission(null, ['goods,GET'])).toBe(true)
    expect(hasAnyPermission({ authList: [] }, ['goods,GET'])).toBe(true)
  })
})

describe('pickMenuPermission', () => {
  it('按优先级取第一个非空字段', () => {
    expect(pickMenuPermission({ permission: 'a', auth: 'b' })).toBe('a')
    expect(pickMenuPermission({ auth: 'b', rule_name: 'c' })).toBe('b')
    expect(pickMenuPermission({ ruleName: 'd' })).toBe('d')
    expect(pickMenuPermission({ code: 'e' })).toBe('e')
  })

  it('字段全空时返回空字符串', () => {
    expect(pickMenuPermission({ permission: '  ' })).toBe('')
    expect(pickMenuPermission({})).toBe('')
  })
})
