import type { FormInstance, FormRules } from 'element-plus'
import { updatePassword } from '@/api/modules/user'
import { throttle } from '@/utils/interaction'
import { toast } from '@/utils/feedback'
import { confirmAction } from '@/utils/confirm'

export function useUpdatePassword() {
  const drawerVisible = ref(false)
  const submitting = ref(false)
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const rules = reactive<FormRules<typeof ruleForm>>({
    oldPassword:
      [{ required: true, message: 'Please input oldPassword', trigger: 'blur' },
      { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' },],
    newPassword:
      [{ required: true, message: 'Please input newPassword', trigger: 'blur' },
      { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' },],
    confirmPassword:
      [{ required: true, message: 'Please input confirmPassword', trigger: 'blur' },
      { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' },],
  })

  // 节流 + 提交中状态，防止「确认」按钮连续点击重复提交
  const submitForm = throttle(async (formEl: FormInstance | undefined) => {
    if (!formEl || submitting.value) return
    if (ruleForm.newPassword !== ruleForm.confirmPassword) {
      return toast.error('两次输入的密码不一致')
    }
    if (!(await formEl.validate().catch(() => false))) return
    submitting.value = true
    try {
      await updatePassword(ruleForm.oldPassword, ruleForm.newPassword, ruleForm.confirmPassword)
      ruleFormRef.value?.resetFields()
      drawerVisible.value = false
      toast.success('密码修改成功，请重新登录')
    } finally {
      submitting.value = false
    }
  }, 500)

  async function onClose() {
    if (!(await confirmAction('Do you want to cancel?', { title: '' }))) return
    ruleFormRef.value?.resetFields()
    drawerVisible.value = false
    toast.info('已取消')
  }

  function onClosed() {
    ruleFormRef.value?.resetFields()
  }
  return {drawerVisible,ruleFormRef,ruleForm,rules,submitForm,onClose,onClosed}
}
