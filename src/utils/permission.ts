import type { UserInfo } from '@/type'

/** 菜单项中可承载权限标识的字段（按优先级排列） */
export const PERMISSION_FIELDS = ['permission', 'auth', 'ruleName', 'rule_name', 'code'] as const

/** 汇总用户信息中的权限标识（兼容 permissions / authList / ruleNames 三种字段） */
export function collectPermissionSet(userInfo: UserInfo | null): Set<string> {
  const groups = [userInfo?.permissions, userInfo?.authList, userInfo?.ruleNames]
  const items = groups.flatMap((group) => (Array.isArray(group) ? group : []))
  return new Set(items.map((item) => String(item).trim()).filter(Boolean))
}

/** 判断是否拥有指定权限；无任何权限数据时视为放行（与路由守卫策略一致） */
export function hasPermission(userInfo: UserInfo | null, permission?: string): boolean {
  const target = String(permission ?? '').trim()
  if (!target) return true
  const owned = collectPermissionSet(userInfo)
  return owned.size === 0 || owned.has(target)
}

/** 判断是否命中任意权限（v-permission 指令使用） */
export function hasAnyPermission(userInfo: UserInfo | null, permissions: string[]): boolean {
  const owned = collectPermissionSet(userInfo)
  return permissions.some((item) => owned.has(String(item).trim()))
}

/** 从菜单项中提取权限标识 */
export function pickMenuPermission(menu: Record<string, any>): string {
  const value = PERMISSION_FIELDS.map((field) => menu[field]).find(
    (item) => item != null && String(item).trim() !== '',
  )
  return value == null ? '' : String(value)
}
