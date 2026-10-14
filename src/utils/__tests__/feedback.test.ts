import { beforeEach, describe, expect, it, vi } from 'vitest'

const { message, confirm } = vi.hoisted(() => ({ message: vi.fn(), confirm: vi.fn() }))

vi.mock('element-plus/es', () => ({
  ElMessage: message,
  ElMessageBox: { confirm },
}))
// 按需导入的样式文件在 Node 环境下无法解析，测试中直接置空
vi.mock('element-plus/es/components/base/style/css', () => ({}))
vi.mock('element-plus/es/components/message/style/css', () => ({}))
vi.mock('element-plus/es/components/message-box/style/css', () => ({}))

const { toast } = await import('@/utils/feedback')
const { confirmAction } = await import('@/utils/confirm')

describe('toast 统一消息提示', () => {
  beforeEach(() => vi.clearAllMocks())

  it('按类型调用 ElMessage', () => {
    toast.success('保存成功')
    expect(message).toHaveBeenCalledWith({ message: '保存成功', type: 'success' })

    toast.warning('注意')
    expect(message).toHaveBeenCalledWith({ message: '注意', type: 'warning' })

    toast.error('失败')
    expect(message).toHaveBeenCalledWith({ message: '失败', type: 'error' })

    toast.info('提示')
    expect(message).toHaveBeenCalledWith({ message: '提示', type: 'info' })
  })

  it('save 根据新增 / 修改给出不同文案', () => {
    toast.save(true)
    expect(message).toHaveBeenLastCalledWith({ message: '修改成功', type: 'success' })
    toast.save(false)
    expect(message).toHaveBeenLastCalledWith({ message: '增加成功', type: 'success' })
  })

  it('remove 支持自定义文案', () => {
    toast.remove()
    expect(message).toHaveBeenLastCalledWith({ message: '删除成功', type: 'success' })
    toast.remove('已清空')
    expect(message).toHaveBeenLastCalledWith({ message: '已清空', type: 'success' })
  })

  it('status 根据开关结果给出成功或警告提示', () => {
    toast.status(true)
    expect(message).toHaveBeenLastCalledWith({ message: '已开启', type: 'success' })
    toast.status(false)
    expect(message).toHaveBeenLastCalledWith({ message: '已关闭', type: 'warning' })
  })
})

describe('confirmAction 通用确认弹窗', () => {
  beforeEach(() => vi.clearAllMocks())

  it('确认时返回 true', async () => {
    confirm.mockResolvedValue('confirm')
    await expect(confirmAction('确定删除吗？')).resolves.toBe(true)
    expect(confirm).toHaveBeenCalledWith(
      '确定删除吗？',
      '提示',
      expect.objectContaining({ type: 'warning', distinguishCancelAndClose: true }),
    )
  })

  it('取消或关闭时返回 false', async () => {
    confirm.mockRejectedValue('cancel')
    await expect(confirmAction('确定删除吗？')).resolves.toBe(false)
  })

  it('支持自定义标题、按钮文案与类型', async () => {
    confirm.mockResolvedValue('confirm')
    await confirmAction('内容', { title: '删除确认', confirmText: '删除', cancelText: '再想想', type: 'error' })
    expect(confirm).toHaveBeenCalledWith('内容', '删除确认', {
      confirmButtonText: '删除',
      cancelButtonText: '再想想',
      type: 'error',
      distinguishCancelAndClose: true,
    })
  })
})
