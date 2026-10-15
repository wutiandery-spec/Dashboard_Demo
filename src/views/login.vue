<template>
  <el-row :gutter="0" class="h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans">
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute left-[20%] bottom-[5%] h-56 w-56 rounded-full bg-violet-300/15 blur-3xl animate-floating delay-1000"
      ></div>
    </div>
    <el-col
      :sm="24"
      :md="24"
      :lg="12"
      :xs="24"
      class="relative z-10 overflow-hidden bg-linear-to-br from-white via-slate-50 to-slate-100 px-10 py-16 md:px-16 lg:px-20 flex! justify-center items-center"
    >
      <div class="relative z-10 max-w-xl">
        <div class="space-y-6">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-tight text-slate-900 animate-fadeInUp"
          >
            后台登录
          </h1>
          <p
            class="max-w-xl text-base sm:text-lg text-slate-600 leading-8 animate-fadeInUp delay-100"
          ></p>
        </div>
      </div>
    </el-col>

    <el-col
      :sm="24"
      :md="24"
      :lg="12"
      :xs="24"
      class="relative z-10 flex! flex-col justify-center items-center px-4 py-10 sm:px-8"
    >
      <div
        class="w-full max-w-md rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_40px_80px_rgba(15,23,42,0.08)]"
      >
        <div class="mb-8 text-center">
          <h2 class="mt-6 text-3xl font-bold text-slate-900">欢迎回来</h2>
          <p class="mt-3 text-sm text-slate-500">请输入账号与密码，进入管理后台。</p>
        </div>

        <el-form
          :model="userForm"
          :rules="rules"
          ref="userFormRef"
          @submit.prevent="onLogin"
          class="space-y-5"
        >
          <el-form-item label="账户" prop="account" class="m-0">
            <el-input
              v-model="userForm.account"
              class="rounded-[20px] border border-slate-200 bg-slate-50 text-slate-900"
              placeholder="请输入账户"
            >
              <template #prefix>
                <i-ep-user class="text-sky-500" />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" class="m-0">
            <el-input
              v-model="userForm.password"
              class="rounded-[20px] border border-slate-200 bg-slate-50 text-slate-900"
              type="password"
              placeholder="请输入密码"
              show-password
            >
              <template #prefix>
                <i-ep-lock class="text-sky-500" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="mb-0">
            <el-button
              type="primary"
              native-type="submit"
              :loading="loading"
              class="w-full rounded-[30px]! py-4 text-base font-semibold tracking-wide"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <div class="mt-6 text-sm text-slate-500">测试账号：admin / admin</div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup name="Login">
import type { FormInstance } from 'element-plus'
import { login } from '@/api/modules/user'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { ensureMenuRoutes } from '@/router'
import type { LoginResult } from '@/type'
const userStore = useUserStore()

const userForm = ref({
  account: '',
  password: '',
})

const rules = {
  account: [{ required: true, message: '请输入正确账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
}

const userFormRef = ref<FormInstance | null>(null)
const loading = ref(false)

const onLogin = async () => {
  if (!userFormRef.value) return
  if (loading.value) return

  loading.value = true
  try {
    const valid = await userFormRef.value.validate().catch(() => false)
    if (!valid) return

    const result: LoginResult = await login(userForm.value.account, userForm.value.password)
    const isSuccess =
      result?.status === 200 ||
      result?.code === 200 ||
      Boolean(result?.token) ||
      Boolean(result?.data?.token)
    const token = result?.data?.token ?? result?.token

    if (isSuccess) {
      if (token) {
        userStore.setToken(token)
      }
      await userStore.fetchUserInfo()
      await ensureMenuRoutes()
      ElMessage({ message: '登录成功', type: 'success', duration: 2000 })
      router.push({ name: 'index' })
    } else {
      const message = result?.message || result?.msg || '登录失败'
      ElMessage.error({ message, duration: 2000 })
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* 说明：字体样式改为在全局样式（src/assets/styles/index.css）中声明，
   避免 scoped 内 :root 因 data-v 属性注入而失效，也避免运行时依赖 Google Fonts */
.el-col {
  transition:
    flex-basis 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.3s ease;
}

.animate-fadeInUp {
  animation: fadeInUp 0.9s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp.delay-100 {
  animation-delay: 0.15s;
}

.animate-floating {
  animation: floating 16s ease-in-out infinite;
}

.animate-floating.delay-1000 {
  animation-delay: 1s;
}

.animate-floating.delay-2000 {
  animation-delay: 2s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-14px) translateX(6px);
  }
}

:deep(.el-form-item__label) {
  color: #64748b;
  font-weight: 600;
}

:deep(.el-input__inner) {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: #0f172a;
}

:deep(.el-input__inner::placeholder) {
  color: #94a3b8;
}

:deep(.el-button--primary) {
  background-color: #0ea5e9;
  border: none;
}

:deep(.el-button--primary:hover) {
  background-image: linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%);
}
</style>
