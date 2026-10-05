export interface ConfirmOptions {
  title?: string
  confirmText?: string
  cancelText?: string
  type?: 'success' | 'warning' | 'info' | 'error'
}

/** 通用确认弹窗：确认返回 true，取消 / 关闭返回 false */
export async function confirmAction(content: string, options: ConfirmOptions = {}): Promise<boolean> {
  const { title = '提示', confirmText = '确认', cancelText = '取消', type = 'warning' } = options
  try {
    await ElMessageBox.confirm(content, title, {
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      type,
      distinguishCancelAndClose: true,
    })
    return true
  } catch {
    return false
  }
}
