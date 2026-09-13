import { useUserStore } from '@/stores/user'
import router from '@/router'

/**
 * 退出登录确认弹窗
 * @param content 弹窗内容
 * @param type 弹窗类型（success/warning/info/error）
 * @param title 弹窗标题
 */
export const openModal = (
  content = '确认退出登录吗？',
  typeOrOnConfirm: 'success' | 'warning' | 'info' | 'error' | (() => void | Promise<void>) = 'warning',
  title = '提示',
  onConfirm?: () => void | Promise<void>,
) => {
  const type = typeof typeOrOnConfirm === 'function' ? 'warning' : typeOrOnConfirm
  const confirmHandler = typeof typeOrOnConfirm === 'function' ? typeOrOnConfirm : onConfirm

  ElMessageBox.confirm(content, title, {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: type,
    distinguishCancelAndClose: true,
  })
    .then(async () => {
      try {
        if (confirmHandler) {
          await confirmHandler()
        } else {
          const userStore = useUserStore()
          userStore.logout()
          await router.push('/login')
        }
        ElMessage.success('已退出账号')
      } catch (error) {
        ElMessage.error('退出失败，请重试')
        console.error('退出登录异常:', error)
      }
    })
    .catch((action) => {
      if (action === 'cancel' || action === 'close') {
        ElMessage.info('已取消')
      }
    })
}
