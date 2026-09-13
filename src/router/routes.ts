// src/router/routes.ts — 固定路由配置
import type { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/components/layout/AdminLayout.vue'

const LoginView = () => import('@/views/login.vue')
const HomeView = () => import('@/views/index.vue')
const NotFoundView = () => import('@/views/404.vue')

export const fixedRoutes: RouteRecordRaw[] = [
  { path: '/', redirect: '/admin' },
  {
    path: '/login',
    component: LoginView,
    name: 'login',
    meta: { requiresAuth: false, title: '登录页' },
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    redirect: { name: 'index' },
    meta: { requiresAuth: true, title: '管理后台' },
    children: [
      {
        path: 'index',
        component: HomeView,
        name: 'index',
        meta: { requiresAuth: true, title: '首页', activeMenu: '/admin/index' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
    name: 'NotFound',
    meta: { title: '页面不存在' },
  },
]
