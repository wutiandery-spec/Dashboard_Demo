import type { FormInstance, FormRules } from 'element-plus'
import { updatePassword } from '@/api/modules/user'
import { throttle } from '@/utils/interaction'

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
      ElMessage.error('两次输入的密码不一致')
      return
    }
    formEl.validate(async (valid) => {
      if (!valid) {
        console.log('error submit!')
        return
      }
      submitting.value = true
      try {
        await updatePassword(ruleForm.oldPassword, ruleForm.newPassword, ruleForm.confirmPassword)
        ruleFormRef.value?.resetFields()
        drawerVisible.value = false
        ElMessage.success('密码修改成功，请重新登录')
      } catch (error) {
        // 接口失败时拦截器已弹出错误提示，这里仅记录日志避免复用拦截器弹窗
        console.error('修改密码失败:', error)
      } finally {
        submitting.value = false
      }
    })
  }, 500)

  function onClose() {
    ElMessageBox.confirm('Do you want to cancel?')
      .then(() => {
        ruleFormRef.value?.resetFields()
        drawerVisible.value = false
        ElMessage.info('已取消')

      })
      .catch(() => {
      })
  }

  function onClosed() {
    ruleFormRef.value?.resetFields()
  }
  return {drawerVisible,ruleFormRef,ruleForm,rules,submitForm,onClose,onClosed}
}
