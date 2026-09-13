// src/stores/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getInfo } from '@/api/modules/user'
import type { UserInfo } from '@/type'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string>('')
    const userInfo = ref<UserInfo | null>(null)

    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const setUserInfo = (info: UserInfo) => {
      userInfo.value = info
    }

    const logout = () => {
      token.value = ''
      userInfo.value = null
      // 注意：不再需要手动操作 localStorage
    }

    const fetchUserInfo = async () => {
      try {
        const res = await getInfo()
        userInfo.value = res.data as UserInfo
        return res
      } catch (error) {
        logout()
        throw error
      }
    }

    return { token, userInfo, setToken, setUserInfo, logout, fetchUserInfo }
  },
  {
    // 关键：添加 persist 选项，启用持久化
    persist: {
      pick: ['token', 'userInfo'],
    },
  },
)
