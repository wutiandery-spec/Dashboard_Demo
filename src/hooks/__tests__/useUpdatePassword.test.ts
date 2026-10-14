import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useUpdatePassword } from '@/hooks/useUpdatePassword'
import { toast } from '@/utils/feedback'

const { updatePassword } = vi.hoisted(() => ({ updatePassword: vi.fn() }))
const { confirmAction: confirmMock } = vi.hoisted(() => ({ confirmAction: vi.fn() }))

vi.mock('@/api/modules/user', () => ({ updatePassword }))
vi.mock('@/utils/confirm', () => ({ confirmAction: confirmMock }))
vi.mock('@/utils/feedback', () => ({
  toast: { success: vi.fn(), warning: vi.fn(), error: vi.fn(), info: vi.fn() },
}))

const validForm = () => ({ validate: vi.fn(async () => true), resetFields: vi.fn() }) as never

describe('useUpdatePassword', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    updatePassword.mockResolvedValue({ code: 200 })
    confirmMock.mockResolvedValue(true)
  })

  it('初始状态：抽屉关闭、表单为空、校验规则齐备', () => {
    const { drawerVisible, ruleForm, rules } = useUpdatePassword()
    expect(drawerVisible.value).toBe(false)
    expect(ruleForm.oldPassword).toBe('')
    expect(Object.keys(rules)).toEqual(['oldPassword', 'newPassword', 'confirmPassword'])
  })

  it('两次输入的新密码不一致时给出提示且不提交', async () => {
    const hook = useUpdatePassword()
    hook.ruleForm.oldPassword = 'old123'
    hook.ruleForm.newPassword = 'new123'
    hook.ruleForm.confirmPassword = 'new456'

    await hook.submitForm(validForm())
    expect(vi.mocked(toast.error)).toHaveBeenCalledWith('两次输入的密码不一致')
    expect(updatePassword).not.toHaveBeenCalled()
  })

  it('表单校验失败时终止提交', async () => {
    const hook = useUpdatePassword()
    hook.ruleForm.oldPassword = 'old123'
    hook.ruleForm.newPassword = 'new123'
    hook.ruleForm.confirmPassword = 'new123'

    const failing = { validate: vi.fn(async () => false), resetFields: vi.fn() } as never
    await hook.submitForm(failing)
    expect(updatePassword).not.toHaveBeenCalled()
  })

  it('校验通过后提交、重置表单并关闭抽屉', async () => {
    const hook = useUpdatePassword()
    const formEl = validForm()
    hook.ruleFormRef.value = formEl
    hook.ruleForm.oldPassword = 'old123'
    hook.ruleForm.newPassword = 'new123'
    hook.ruleForm.confirmPassword = 'new123'

    await hook.submitForm(formEl)
    // submitForm 经过节流包装，内部异步流程需要等待一个事件循环
    await vi.waitFor(() => expect(updatePassword).toHaveBeenCalled())
    expect(updatePassword).toHaveBeenCalledWith('old123', 'new123', 'new123')
    expect((formEl as { resetFields: () => void }).resetFields).toHaveBeenCalled()
    expect(hook.drawerVisible.value).toBe(false)
    expect(vi.mocked(toast.success)).toHaveBeenCalled()
    expect(hook.ruleFormRef.value).toBeDefined()
  })

  it('关闭抽屉需要二次确认，取消时保持打开', async () => {
    const hook = useUpdatePassword()
    hook.drawerVisible.value = true
    confirmMock.mockResolvedValue(false)
    await hook.onClose()
    expect(hook.drawerVisible.value).toBe(true)
    expect(vi.mocked(toast.info)).not.toHaveBeenCalled()

    confirmMock.mockResolvedValue(true)
    hook.ruleFormRef.value = validForm()
    await hook.onClose()
    expect(hook.ruleFormRef.value?.resetFields).toHaveBeenCalled()
    expect(vi.mocked(toast.info)).toHaveBeenCalledWith('已取消')
  })

  it('抽屉关闭后重置表单字段', () => {
    const hook = useUpdatePassword()
    hook.ruleFormRef.value = validForm()
    hook.onClosed()
    expect(hook.ruleFormRef.value?.resetFields).toHaveBeenCalled()
  })
})
