/** 统一消息反馈：集中管理提示文案与类型，避免各页面重复调用 ElMessage */

export const toast = {
  success: (message: string) => ElMessage({ message, type: 'success' }),
  warning: (message: string) => ElMessage({ message, type: 'warning' }),
  error: (message: string) => ElMessage({ message, type: 'error' }),
  info: (message: string) => ElMessage({ message, type: 'info' }),
  /** 新增 / 修改结果提示 */
  save: (isEdit: boolean) => toast.success(isEdit ? '修改成功' : '增加成功'),
  /** 删除结果提示 */
  remove: (message = '删除成功') => toast.success(message),
  /** 状态开关结果提示 */
  status: (enabled: boolean) => (enabled ? toast.success('已开启') : toast.warning('已关闭')),
}
