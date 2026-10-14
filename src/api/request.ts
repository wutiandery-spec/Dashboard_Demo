//axios 实例封装(拦截器/基础路径)
import axios, { type InternalAxiosRequestConfig } from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

/**
 * 演示模式：静态托管环境没有可用后端，请求改为回放录制好的接口数据。
 * 回放模块按需动态加载——生产构建不会把演示数据打进包里。
 * 这里直接读 import.meta.env（而不是引入 flag.ts 的常量），
 * 便于构建期把整段分支连同演示数据一起摇掉。
 */
if (import.meta.env.VITE_DEMO === '1') {
  service.defaults.adapter = async (config) => {
    const { demoAdapter } = await import('@/api/demo')
    return demoAdapter(config as InternalAxiosRequestConfig)
  }
}
//请求拦截器
service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.token
    if (token) {
      config.headers.token = token
    }

    return config
  },
  (error) => Promise.reject(error),
)
//响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error?.response?.data?.msg || error?.message || '登录失败，请稍后重试'
    ElMessage.error({ message,dangerouslyUseHTMLString:true })
    if (error.response?.status === 401) {
      // token 无效或过期，清除并跳转登录
      const userStore = useUserStore()
      userStore.logout()
      // 跳转到登录页
      router.push('/login')
    }

    return Promise.reject(error)
  },
)

export default service
