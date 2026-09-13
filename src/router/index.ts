// src/router/index.ts — 路由入口
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { buildMenuRoutes } from './menu'
import { fixedRoutes } from './routes'
import type { UserInfo } from '@/type'

const router = createRouter({
  history: createWebHistory(),
  routes: fixedRoutes,
})

// -------------------------------------------------
// 动态路由状态
// -------------------------------------------------
let menuRoutesReady = false
const dynamicRouteNames = new Set<string>()

/** 清除所有已注册的动态路由 */
function removeDynamicRoutes(): void {
  dynamicRouteNames.forEach((routeName) => {
    if (router.hasRoute(routeName)) {
      router.removeRoute(routeName)
    }
  })
  dynamicRouteNames.clear()
  menuRoutesReady = false
}

/** 根据当前用户菜单构建并注册 /admin 下的动态子路由 */
async function ensureMenuRoutes(): Promise<void> {
  const userStore = useUserStore()
  const menuRoutes = buildMenuRoutes(userStore.userInfo?.menus)
  const fixedAdminChildren = new Set(
    (fixedRoutes.find((route) => route.name === 'admin')?.children || [])
      .map((route) => String(route.path).replace(/^\//, '')),
  )

  removeDynamicRoutes()

  menuRoutes
    .filter((route) => !fixedAdminChildren.has(String(route.path)))
    .forEach((route) => {
      const routeName = String(route.name)
      router.addRoute('admin', route)
      dynamicRouteNames.add(routeName)
    })
  menuRoutesReady = true
}

// -------------------------------------------------
// 权限工具
// -------------------------------------------------

/** 从用户信息中收集所有权限标识（兼容多种字段名） */
function collectPermissionSet(userInfo: UserInfo | null): Set<string> {
  const permissions = [
    ...(Array.isArray(userInfo?.permissions) ? userInfo.permissions : []),
    ...(Array.isArray(userInfo?.authList) ? userInfo.authList : []),
    ...(Array.isArray(userInfo?.ruleNames) ? userInfo.ruleNames : []),
  ]
  return new Set(permissions.map((item) => String(item).trim()).filter(Boolean))
}

/** 校验当前路由权限 */
function hasRoutePermission(userInfo: UserInfo | null, permission: string): boolean {
  const normalizedPermission = String(permission || '').trim()
  if (!normalizedPermission) return true
  const permissionSet = collectPermissionSet(userInfo)
  return permissionSet.size === 0 || permissionSet.has(normalizedPermission)
}

// -------------------------------------------------
// 路由守卫
// -------------------------------------------------
router.beforeEach(async (to) => {
  const userStore = useUserStore()
  const token = userStore.token
  const needsAuth = to.matched.some((record) => Boolean(record.meta?.requiresAuth))

  document.title = (to.meta?.title as string | undefined) || '管理后台'

  // 1. 需要鉴权但没有 token → 跳转登录页
  if (needsAuth && !token) {
    ElMessage.error('请先登录')
    return '/login'
  }

  // 2. 已登录还访问登录页 → 跳转后台首页
  if (to.path === '/login' && token) {
    return '/admin'
  }

  // 3. 有 token 但未拉取用户信息 → 请求接口
  if (token && !userStore.userInfo) {
    try {
      await userStore.fetchUserInfo()
      menuRoutesReady = false
    } catch {
      userStore.logout()
      removeDynamicRoutes()
      ElMessage.error('身份已过期，请重新登录')
      return '/login'
    }
  }

  // 4. 已获取用户信息但动态路由未构建 → 构建动态路由，并强制重新导航
  //    刷新页面时，/admin/xxx 这类 URL 会被兜底路由 /:pathMatch(.*)* 匹配，
  //    to.matched 中不含 /admin 父路由，needsAuth 为 false，不能依赖 needsAuth 判断
  if (token && !menuRoutesReady) {
    await ensureMenuRoutes()
    // 添加临时查询参数 _r 使重定向 URL 与当前不同，Vue Router 才会处理重定向
    return { path: to.path, query: { ...to.query, _r: '1' } }
  }

  // 5. 权限校验
  const currentPermission = to.meta?.permission as string | undefined
  if (needsAuth && currentPermission) {
    if (!hasRoutePermission(userStore.userInfo, currentPermission)) {
      ElMessage.error('暂无访问权限')
      return '/admin/index'
    }
  }

  return true
})

// 清理 _r 临时参数
router.afterEach((to) => {
  if (to.query._r) {
    const query = { ...to.query }
    delete query._r
    router.replace({ path: to.path, query })
  }
})

// 兜底：路由就绪后若当前路由仍为 404 且有 token，强制重新导航
router.isReady().then(async () => {
  const userStore = useUserStore()
  if (userStore.token && router.currentRoute.value.name === 'NotFound') {
    if (!userStore.userInfo) {
      try {
        await userStore.fetchUserInfo()
        menuRoutesReady = false
      } catch {
        return
      }
    }
    if (!menuRoutesReady) {
      await ensureMenuRoutes()
    }
    router.replace(router.currentRoute.value.fullPath)
  }
})

export { ensureMenuRoutes, removeDynamicRoutes }
export default router