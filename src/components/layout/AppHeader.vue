<template>
  <div class="toolbar flex justify-between bg-blue-600 h-15 p-0">
    <div class="flex items-center gap-8 text-white">
      <a href="#" class="flex items-center whitespace-nowrap ml-7 hover:bg-blue-500 p-1 rounded-md">
        <i-ep-homeFilled class="text-white mr-2" /> 后台中心
      </a>
      <el-button @click="handleToggle" class="bg-blue-600! border-0! hover:bg-blue-500!">
        <i-ep-fold
          v-if="!appStore.isCollapse && !isMobile"
          class="text-white cursor-pointer w-5 h-5"
        />
        <i-ep-expand v-else class="text-white cursor-pointer w-5 h-5" />
      </el-button>
    </div>

    <el-dropdown>
      <div
        class="flex w-40 text-white items-center justify-center gap-2 cursor-pointer hover:bg-blue-500"
      >
        <el-avatar
          :size="25"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <p class="hidden sm:block">{{ username }}</p>
        <i-ep-arrowDown class="text-white" />
      </div>
      <template #dropdown>
        <el-dropdown-menu class="px-5! py-2!">
          <el-dropdown-item @click="drawerVisible = true">修改密码</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 抽屉内容 -->
    <AppDrawer v-model="drawerVisible" @closed="onClosed" :before-close="onClose" title="修改密码">
      <el-form
        ref="ruleFormRef"
        style="max-width: 500px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
      >
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input v-model="ruleForm.oldPassword" type="password" autocomplete="off" clearable />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="ruleForm.newPassword" type="password" autocomplete="off" clearable />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model="ruleForm.confirmPassword"
            type="password"
            autocomplete="off"
            clearable
          />
        </el-form-item>
        <div class="flex justify-end gap-3">
          <el-button @click="onClose">取消</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
        </div>
      </el-form>
    </AppDrawer>
  </div>
</template>

<script setup lang="ts">
import { openModal } from '@/utils/modal'
import { useUserStore } from '@/stores/user'
import router, { removeDynamicRoutes } from '@/router'
import { useAppStore } from '@/stores/app'
import { useUpdatePassword } from '@/hooks/useUpdatePassword'
import AppDrawer from './AppDrawer.vue'
import { throttle } from '@/utils/interaction'

defineProps<{ isMobile?: boolean }>()
const emit = defineEmits<{ (e: 'toggle'): void }>()

// 折叠/抽屉入口交由父布局（AdminLayout）按断点分发
const handleToggle = throttle(() => emit('toggle'), 200)

// 用户昵称和退出登录
const userStore = useUserStore()
const username = computed(() => userStore.userInfo?.username || '')
const handleLogout = () => {
  openModal('是否要退出登录?', async () => {
    userStore.logout()
    removeDynamicRoutes()
    await router.push('/login')
  })
}

// 抽屉和修改密码表单验证
const { drawerVisible, ruleFormRef, ruleForm, rules, submitForm, onClose, onClosed } =
  useUpdatePassword()

// 侧边栏折叠状态（用于图标切换）
const appStore = useAppStore()
</script>

<style scoped>
*:focus-visible {
  outline: none !important;
}
</style>
