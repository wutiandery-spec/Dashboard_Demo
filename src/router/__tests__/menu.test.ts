import { describe, expect, it, vi } from 'vitest'
import {
  buildMenuRoutes,
  getMenuIndex,
  getMenuTitle,
  getMenuTree,
  normalizeMenuPath,
  resolveMenuComponent,
  toAdminChildPath,
  toAdminRoutePath,
} from '@/router/menu'

const menuTree = [
  {
    id: 1,
    name: '商品管理',
    frontpath: '/goods',
    icon: 'goods',
    child: [
      { id: 11, name: '商品列表', frontpath: '/goods/list', permission: 'goods,GET' },
      { id: 12, name: '商品规格', frontpath: '/goods/skus' },
      { id: 13, name: '重复菜单', frontpath: '/goods/skus' },
    ],
  },
  { id: 2, name: '首页', frontpath: '/index' },
]

describe('菜单路径归一化', () => {
  it('补齐前导斜杠并压缩重复斜杠', () => {
    expect(normalizeMenuPath('user/list')).toBe('/user/list')
    expect(normalizeMenuPath('//user//list')).toBe('/user/list')
    expect(normalizeMenuPath('  /user/list  ')).toBe('/user/list')
  })

  it('空值与空白值返回空字符串', () => {
    expect(normalizeMenuPath('')).toBe('')
    expect(normalizeMenuPath('   ')).toBe('')
    expect(normalizeMenuPath(undefined)).toBe('')
  })

  it('转换 /admin 前缀下的路径，已带前缀时不重复拼接', () => {
    expect(toAdminRoutePath('/user/list')).toBe('/admin/user/list')
    expect(toAdminRoutePath('/admin/index')).toBe('/admin/index')
    expect(toAdminRoutePath('')).toBe('')
    expect(toAdminChildPath('/user/list')).toBe('user/list')
    expect(toAdminChildPath('/index')).toBe('index')
  })

  it('拼接菜单索引与标题', () => {
    expect(getMenuIndex({ frontpath: '/index' })).toBe('/admin/index')
    expect(getMenuIndex({ id: 3, frontpath: '/user/list' })).toBe('/admin/user/list')
    expect(getMenuTitle({ name: '别名' })).toBe('别名')
    expect(getMenuTitle({ title: '标题' })).toBe('标题')
  })
})

describe('getMenuTree', () => {
  it('递归补全 child 字段，叶子节点为数组', () => {
    const tree = getMenuTree([{ id: 1, child: [{ id: 2 }] }, { id: 3 }])
    expect(tree[0]?.child?.[0]?.child).toEqual([])
    expect(tree[1]?.child).toEqual([])
  })

  it('支持对象与异常数据', () => {
    expect(getMenuTree({ id: 1 })).toHaveLength(1)
    expect(getMenuTree(null)).toEqual([])
    expect(getMenuTree('bad')).toEqual([])
  })
})

describe('buildMenuRoutes', () => {
  it('拍平叶子菜单并生成 /admin 子路由', () => {
    const routes = buildMenuRoutes(menuTree)
    expect(routes.map((route) => route.path)).toEqual(['goods/list', 'goods/skus', 'index'])
  })

  it('相同路径的菜单只注册一次', () => {
    const routes = buildMenuRoutes(menuTree)
    expect(routes.filter((route) => route.path === 'goods/skus')).toHaveLength(1)
  })

  it('路由 meta 携带标题、图标、权限与高亮路径', () => {
    const routes = buildMenuRoutes(menuTree)
    const detail = routes.find((route) => route.path === 'goods/list')

    expect(String(detail?.name)).toMatch(/^menu-/)
    expect(detail?.meta).toMatchObject({
      requiresAuth: true,
      title: '商品列表',
      icon: '',
      permission: 'goods,GET',
      activeMenu: '/admin/goods/list',
      menuId: 11,
    })
  })

  it('图标字段存在时写入 meta', () => {
    const routes = buildMenuRoutes([
      { id: 9, name: '分类', frontpath: '/category/list', icon: 'folder' },
    ])
    expect(routes[0]?.meta?.icon).toBe('folder')
  })

  it('菜单为空时返回空数组并给出提示', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    expect(buildMenuRoutes(null)).toEqual([])
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})

describe('resolveMenuComponent', () => {
  it('按 frontpath 命中真实存在的视图组件', () => {
    expect(typeof resolveMenuComponent({ frontpath: '/user/list' })).toBe('function')
    expect(typeof resolveMenuComponent({ frontpath: '/goods/list' })).toBe('function')
  })

  it('候选路径全部未命中时回退 404 组件', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    expect(typeof resolveMenuComponent({ frontpath: '/not-exist/whatever' })).toBe('function')
    expect(warn).toHaveBeenCalled()
    warn.mockRestore()
  })
})
