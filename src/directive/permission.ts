import type { Directive } from 'vue'
import { useUserStore } from '@/stores/user'
import { hasAnyPermission } from '@/utils/permission'

/** v-permission：无权限时移除元素 */
export const permission: Directive<HTMLElement, string | string[]> = {
  mounted(el, binding) {
    const value = Array.isArray(binding.value) ? binding.value : [binding.value]
    if (!hasAnyPermission(useUserStore().userInfo, value)) {
      el.parentNode?.removeChild(el)
    }
  },
}
