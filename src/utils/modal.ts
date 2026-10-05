import { useUserStore } from '@/stores/user'
import router from '@/router'
import { confirmAction } from '@/utils/confirm'
import { toast } from '@/utils/feedback'

/**
 * 通用操作确认弹窗（默认用于退出登录）
 * @param content 弹窗内容
 * @param typeOrOnConfirm 弹窗类型（success/warning/info/error）或确认回调
 * @param title 弹窗标题
 * @param onConfirm 确认回调
 */
export const openModal = async (
  content = '确认退出登录吗？',
  typeOrOnConfirm: 'success' | 'warning' | 'info' | 'error' | (() => void | Promise<void>) = 'warning',
  title = '提示',
  onConfirm?: () => void | Promise<void>,
) => {
  const type = typeof typeOrOnConfirm === 'function' ? 'warning' : typeOrOnConfirm
  const confirmHandler = typeof typeOrOnConfirm === 'function' ? typeOrOnConfirm : onConfirm

  if (!(await confirmAction(content, { title, type }))) return toast.info('已取消')

  if (confirmHandler) {
    await confirmHandler()
  } else {
    useUserStore().logout()
    await router.push('/login')
  }
  toast.success('已退出账号')
}
