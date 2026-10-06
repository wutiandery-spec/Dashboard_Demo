<template>
    <el-card shadow='always'>
        <!-- 搜索,新增,刷新 -->
        <template #header>
            <el-form style="max-width: 600px" :model="searchForm" label-width="auto" class="flex gap-4">
                <el-form-item label="搜索 :">
                    <el-input v-model="searchForm.keyword" type='text' autocomplete="off" placeholder="关键词" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">
                        搜索
                    </el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="getList">
                        <el-icon size="20">
                            <Refresh />
                        </el-icon>
                    </el-button>
                </el-tooltip>
            </div>
        </template>
        <!-- 数据展示 -->
        <el-table :data="roleList" style="width: 100%" size="large" v-loading="loading">
            <el-table-column label="管理员">
                <template #default="{ row }">
                    <div class="flex">
                        <el-avatar size="default" :src="row.avatar">
                            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                        </el-avatar>
                        <div class="ml-2">
                            <p>{{ row.username }}</p>
                            <small style="margin-left: 10px">id :{{ row.id }}</small>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="所属角色">
                <template #default="{ row }">
                    <h3>{{ row.role.name }}</h3>
                </template>
            </el-table-column>
            <el-table-column label="状态" width="120">
                <template #default="{ row }">
                    <el-switch :loading="row.statusLoading" :model-value="row.status" size="default" :active-value="1"
                        :disabled="row.super === 1" :inactive-value="0" @change="handleStatusChange($event, row)" />
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template #default="scope">
                    <p v-if="scope.row.super === 1">暂无操作</p>
                    <div v-else>
                        <el-button size="small" @click.stop="handleEdit(scope.row)" link type="primary">
                            编辑
                        </el-button>
                        <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.row)">
                            <template #reference>
                                <el-button :loading="loading" size="small" link type="primary">
                                    删除
                                </el-button>
                            </template>
                        </el-popconfirm>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <div class="flex justify-center">
                <el-pagination :current-page="page" layout="prev, pager, next" :total="total" @current-change="handleChange" />
            </div>
        </template>
    </el-card>
    <!-- 修改-新增打开的抽屉 -->
    <AppDrawer v-model="visible" :title="title" @close="handleClose">
        <el-form :model="form" label-width="auto" ref="formRef" size="small" label-position="left">
            <el-form-item label="用户名 : ">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码 : ">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="头像 : ">
                <el-button size="large" class="h-20!"><el-icon size="50" @click="dialogVisible = true">
                        <Plus />
                    </el-icon></el-button>
                <div class="relative">
                    <el-button v-if="form.avatar" type="danger" :icon="Delete" circle class="absolute bottom-0 -right-1"
                        @click="form.avatar = ''" />
                    <el-avatar v-if="form.avatar" :size="80" class="ml-3" :src="form.avatar"></el-avatar>
                </div>
            </el-form-item>
            <el-form-item label="启用状态 : ">
                <el-switch v-model="form.status" :active-value="1" :inactive-value="0" />
            </el-form-item>
            <el-form-item label="所属角色 : ">
                <el-select v-model="form.role_id" placeholder="选择所属角色">
                    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleConfirm">确认</el-button>
                <el-button @click="visible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </AppDrawer>
    <!-- 选择头像-调用图库 -->
    <ImagePicker v-model:visible="dialogVisible" v-model="form.avatar" title="选择图片" />
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import ImagePicker from '@/components/common/ImagePicker.vue'
import { Delete, Plus } from '@element-plus/icons-vue'
import {
    addManagerList,
    deleteManagerList,
    getManagerList,
    setManager,
    updateManagerState,
} from '@/api/modules/manager'
import { useCrudTable } from '@/hooks/useCrudTable'

const options = ref<{ id: number; name: string }[]>([])
const searchForm = reactive({ keyword: '' })
const dialogVisible = ref(false)

const {
    dataList: roleList,
    loading,
    total,
    page,
    visible,
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
        list: (page, params = {}) => getManagerList(page, params.limit, params.keyword),
        add: addManagerList,
        update: setManager,
        remove: deleteManagerList,
        updateStatus: updateManagerState,
    },
    defaults: () => ({ username: '', password: '', role_id: '', status: 1, avatar: '' }),
    titles: ['修改管理员', '新增管理员'],
    params: () => (searchForm.keyword ? { keyword: searchForm.keyword } : {}),
    onData: (data) => {
        options.value = data.roles ?? []
    },
    mapRow: (row) => ({ ...row, statusLoading: false }),
    toForm: (row) => ({ username: row.username, role_id: row.role_id, avatar: row.avatar }),
})

/** 搜索 / 重置 */
const handleSearch = () => {
    page.value = 1
    getList()
}
const handleReset = () => {
    searchForm.keyword = ''
    handleSearch()
}
</script>

<style scoped>
.active {
    background-color: rgb(222, 227, 255);
}
</style>
