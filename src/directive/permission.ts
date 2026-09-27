import type { Directive } from "vue"
import { useUserStore } from '@/stores/user'
export const PERMISSION_FIELDS = ['permission', 'auth', 'ruleName', 'rule_name', 'code'] as const

function hasPermission(permission: string[] | string ,el: HTMLElement) {
  const permissionList = ref<string[]>([])
  const userStore = useUserStore()
  permissionList.value = userStore.userInfo?.ruleNames as string[]
  if (!Array.isArray(permission)) {
    throw new Error ('未配置权限')
  }
  const hasAuth =  permission.some(item => permissionList.value.includes(item))
  if(el && !hasAuth){
    el.parentNode?.removeChild(el)
  }
  return hasAuth
}

export const permission: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string | string[]>) {
    const { value } = binding
    hasPermission(value,el)
  },
}

