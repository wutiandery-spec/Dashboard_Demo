<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-3">
          <el-input v-model="searchForm.keyword" placeholder="手机号 / 邮箱 / 用户名" clearable class="w-60!"
            @keyup.enter="handleSearch" />
          <el-select v-model="searchForm.user_level_id" placeholder="会员等级" clearable class="w-40!">
            <el-option v-for="item in levels" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </div>
        <el-button type="primary" @click="handleAdd">新增用户</el-button>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default">
      <el-table-column label="用户" min-width="200">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-avatar :size="36" :src="row.avatar">{{ row.username?.charAt(0) }}</el-avatar>
            <div class="ml-2">
              <p>{{ row.username }}</p>
              <small class="text-gray-400">id : {{ row.id }}</small>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="昵称" prop="nickname" min-width="120" />
      <el-table-column label="手机 / 邮箱" min-width="200">
        <template #default="{ row }">
          <div class="text-xs">{{ row.phone || '-' }}</div>
          <div class="text-xs text-gray-500">{{ row.email || '-' }}</div>
        </template>
      </el-table-column>
      <el-table-column label="会员等级" width="140">
        <template #default="{ row }">{{ row.user_level?.name ?? '-' }}</template>
      </el-table-column>
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            @change="handleStatusChange($event, row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="handleEdit(row)">修改</el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(row)">
            <template #reference>
              <el-button size="small" link type="primary">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="flex justify-center">
        <el-pagination :current-page="page" layout="prev, pager, next" :total="total" @current-change="handleChange" />
      </div>
    </template>
  </el-card>

  <AppDrawer v-model="visible" :title="title" size="30%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="90px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" :placeholder="editState ? '不修改请留空' : '请输入密码'" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item label="会员等级">
        <el-select v-model="form.user_level_id" placeholder="请选择会员等级" class="w-full">
          <el-option v-for="item in levels" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="头像">
        <div class="relative flex items-center gap-3">
          <el-avatar v-if="form.avatar" :size="60" :src="form.avatar" />
          <el-button @click="dialogVisible = true">选择头像</el-button>
        </div>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>

  <ImagePicker v-model:visible="dialogVisible" v-model="form.avatar" title="选择头像" />
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import ImagePicker from '@/components/common/ImagePicker.vue'
import {
  getMemberList,
  addMember,
  updateMember,
  deleteMember,
  updateMemberStatus,
} from '@/api/modules/member'
import { useCrudTable } from '@/hooks/useCrudTable'

const levels = ref<{ id: number; name: string }[]>([])
const searchForm = reactive<{ keyword: string; user_level_id: number | '' }>({ keyword: '', user_level_id: '' })
const dialogVisible = ref(false)

const {
  dataList,
  loading,
  total,
  page,
  visible,
  editState,
  formRef,
  form,
  title,
  getList,
  handleChange,
  handleAdd,
  handleEdit,
  handleDelete,
  handleClose,
  handleConfirm,
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getMemberList,
    add: addMember,
    update: updateMember,
    remove: deleteMember,
    updateStatus: updateMemberStatus,
  },
  defaults: () => ({
    username: '',
    password: '',
    nickname: '',
    phone: '',
    email: '',
    user_level_id: '',
    avatar: '',
    status: 1,
  }),
  titles: ['修改用户', '新增用户'],
  params: () => ({
    ...(searchForm.keyword ? { keyword: searchForm.keyword } : {}),
    ...(searchForm.user_level_id ? { user_level_id: searchForm.user_level_id } : {}),
  }),
  onData: (data) => {
    levels.value = data.user_level ?? []
  },
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({
    username: row.username,
    password: '',
    nickname: row.nickname,
    phone: row.phone,
    email: row.email,
    user_level_id: row.user_level_id,
    avatar: row.avatar,
    status: row.status,
  }),
  toPayload: (form) => {
    const payload: Record<string, any> = { ...form, user_level_id: Number(form.user_level_id) }
    if (!payload.password) delete payload.password
    return payload
  },
})

const handleSearch = () => {
  page.value = 1
  getList()
}
const handleReset = () => {
  searchForm.keyword = ''
  searchForm.user_level_id = ''
  handleSearch()
}
</script>
