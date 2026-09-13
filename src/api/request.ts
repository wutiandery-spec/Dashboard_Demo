//axios 实例封装(拦截器/基础路径)
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
})
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
