// 根据后端返回的菜单数据，自动解析生成 /admin 下的子路由
import type { RouteRecordRaw } from 'vue-router'
import { PERMISSION_FIELDS } from '@/directive/permission'
import type { MenuItem } from '@/type'

export type { MenuItem }
type GlobModules = Record<string, () => Promise<{ default: unknown }>>
const menuViewModules: GlobModules = import.meta.glob('../views/**/*.vue') as unknown as GlobModules
const fallbackView = () => import('@/views/404.vue')

const explicitViewMap: Record<string, string> = {
  '/index': '../views/index.vue',
}

export function normalizeMenuPath(frontpath?: string): string {
  if (!frontpath) return ''
  const trimmedPath = String(frontpath).trim()
  if (!trimmedPath) return ''
  const withLeadingSlash = trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`
  return withLeadingSlash.replace(/\/{2,}/g, '/')
}

export function toAdminRoutePath(frontpath?: string): string {
  const normalizedPath = normalizeMenuPath(frontpath)
  if (!normalizedPath) return ''
  if (normalizedPath === '/admin' || normalizedPath.startsWith('/admin/')) {
    return normalizedPath
  }
  return `/admin${normalizedPath}`
}

export function toAdminChildPath(frontpath?: string): string {
  const adminPath = toAdminRoutePath(frontpath)
  return adminPath.replace(/^\/admin\/?/, '')
}

function ensureArray(data: unknown): unknown[] {
  if (Array.isArray(data)) return data
  if (data && typeof data === 'object') return [data]
  return []
}

export function getMenuTree(rawMenus: unknown): MenuItem[] {
  const menus = ensureArray(rawMenus)
  return (menus as MenuItem[]).map((menu) => ({
    ...menu,
    child: getMenuTree(menu.child),
  }))
}

function isLeafMenu(menu: MenuItem): boolean {
  return !menu.child || !Array.isArray(menu.child) || menu.child.length === 0
}

export function getMenuTitle(menu: MenuItem): string {
  return menu.title || menu.name || ''
}

export function getMenuPermission(menu: MenuItem): string {
  const permissionCandidate = (PERMISSION_FIELDS as readonly string[])
    .map((field: string) => (menu as Record<string, unknown>)[field])
    .find((item) => item !== undefined && item !== null && String(item).trim() !== '')
  return permissionCandidate ? String(permissionCandidate) : ''
}

function stripAdminPrefix(path: string): string {
  return path.replace(/^\/admin(?:\/|$)/, '/')
}

function buildViewCandidates(frontpath?: string): string[] {
  const normalizedPath = normalizeMenuPath(frontpath)
  if (!normalizedPath) return []

  const viewPath = stripAdminPrefix(normalizedPath)
  const lastSegment = viewPath.split('/').filter(Boolean).pop() || ''

  return Array.from(
    new Set(
      [
        explicitViewMap[normalizedPath],
        explicitViewMap[viewPath],
        `../views${viewPath}.vue`,
        `../views${viewPath}/index.vue`,
        lastSegment ? `../views/menus/${lastSegment}.vue` : undefined,
        lastSegment ? `../views/menus/${lastSegment}/index.vue` : undefined,
        lastSegment ? `../views/${lastSegment}.vue` : undefined,
        lastSegment ? `../views/${lastSegment}/index.vue` : undefined,
      ].filter((s): s is string => Boolean(s)),
    ),
  )
}

export function resolveMenuComponent(menu: MenuItem): () => Promise<{ default: unknown }> {
  try {
    const candidates = buildViewCandidates(menu.frontpath)
    for (const candidate of candidates) {
      const matchedView = menuViewModules[candidate]
      if (matchedView) {
        return matchedView
      }
    }
    console.warn(`[menu] 未找到 ${menu.frontpath} 对应的组件，使用 404 兜底`)
  } catch (error) {
    console.error(`[menu] 解析组件失败 ${menu.frontpath}:`, error)
  }
  return fallbackView
}

function flattenLeafMenus(menus: MenuItem[]): MenuItem[] {
  const leafMenus: MenuItem[] = []
  for (const menu of menus) {
    if (isLeafMenu(menu)) {
      leafMenus.push(menu)
      continue
    }
    leafMenus.push(...flattenLeafMenus(menu.child || []))
  }
  return leafMenus
}

export function getMenuIndex(menu: MenuItem): string {
  const adminPath = toAdminRoutePath(menu.frontpath)
  if (adminPath === '/admin/') {
    return adminPath + 'index'
  } else return adminPath || `/${menu.id || ''}`
}

export function buildMenuRoutes(rawMenus: unknown): RouteRecordRaw[] {
  if (!rawMenus) {
    console.warn('[menu] 菜单数据为空，跳过动态路由生成')
    return []
  }

  const menus = getMenuTree(rawMenus)
  const uniqueRoutes = new Map<string, RouteRecordRaw>()

  for (const menu of flattenLeafMenus(menus)) {
    const path = toAdminChildPath(menu.frontpath)
    const fullPath = toAdminRoutePath(menu.frontpath)

    if (!path || !fullPath || uniqueRoutes.has(path)) {
      continue
    }

    const routeName = `menu-${String(menu.id ?? path).replace(/[^\w-]/g, '-')}`

    uniqueRoutes.set(path, {
      path,
      name: routeName,
      component: resolveMenuComponent(menu),
      meta: {
        requiresAuth: true,
        title: getMenuTitle(menu),
        icon: menu.icon || '',
        permission: getMenuPermission(menu),
        menuId: menu.id,
        activeMenu: fullPath,
      },
    })
  }

  return [...uniqueRoutes.values()]
}

export function findMenuOpenKeys(menus: MenuItem[], activePath: string): string[] {
  if (!Array.isArray(menus)) return []

  for (const menu of menus) {
    if (isLeafMenu(menu) && getMenuIndex(menu) === activePath) {
      return []
    }

    const childTrail = findMenuOpenKeys(menu.child || [], activePath)

    if (
      childTrail.length > 0 ||
      (menu.child || []).some((child) => getMenuIndex(child) === activePath)
    ) {
      return [getMenuIndex(menu), ...childTrail]
    }
  }

  return []
}
