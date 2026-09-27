<template>
    <el-card shadow='always'>
        <!-- 搜索,新增,刷新 -->
        <template #header>
            <el-form ref="searchFormRef" style="max-width: 600px" :model="searchForm" label-width="auto"
                class="flex gap-4">
                <el-form-item label="搜索 :">
                    <el-input v-model="searchForm.keyword" type='text' autocomplete="off" placeholder="关键词" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList">
                        搜索
                    </el-button>
                    <el-button @click="resetForm(searchFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="addManager">新增</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="handleChange(1)">
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
                        :disabled="row.super === 1" :inactive-value="0" @change="hanleStatusChange($event, row)" />
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template #default="scope">
                    <p v-if="scope.row.super === 1">暂无操作</p>
                    <div v-else>
                        <el-button size="small" @click.stop="handleEdit(scope.$index, scope.row)" link type="primary">
                            编辑
                        </el-button>
                        <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.$index, scope.row)">
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
                <el-button size="large" class="h-20!"><el-icon size="50" @click="openDialog">
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
                <el-button type="primary" @click="handleConfirm(formRef)">确认</el-button>
                <el-button @click="visible = false">取消</el-button>
            </el-form-item>
        </el-form>
    </AppDrawer>
    <!-- 选择头像-调用图库 -->
    <Dialog v-model:visible="dialogVisible" title="选择图片" width="80%">
        <el-card>
            <el-container>
                <el-aside width="260px" class="border-r border-r-gray-200 flex flex-col items-center">
                    <div class="w-full flex-1 overflow-auto px-2 py-2">
                        <div v-for="item in imageDataList" :key="item.id" class="mb-2 rounded-lg hover:bg-blue-100 p-2"
                            :class="{ active: activeid === item.id }" @click="showClassImage(item.id)">
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">{{ item.name }}</div>
                                <div class="mt-1 text-xs text-gray-500">排序：{{ item.order }} id : {{ item.id }}</div>
                            </div>
                        </div>
                        <el-empty v-if="!imageDataList.length" description="暂无图库分类" />
                    </div>
                    <el-pagination class="pb-3" background layout="prev, next" :total="classListTotal"
                        :current-page="page" @current-change="handleListChange" />
                </el-aside>
                <el-main class="relative">
                    <el-row :gutter="20" v-if="classImageList.length">
                        <el-col :span="6" :offset="0" v-for="(item, index) in classImageList" :key="item.id"
                            class="mb-3">
                            <el-card @click.stop="handleSelect(item)" shadow="hover" class="mb-2 relative"
                                :bodyStyle="{ padding: 0 }" :class="{ active: selectId === item.id }">
                                <!-- 选择框 -->
                                <div v-if="item.selectStatus" class="absolute right-1 -top-2"><el-checkbox
                                        v-model="item.selectStatus" size="large" class="" />
                                </div>
                                <div class="relative">
                                    <el-image class="w-full h-40" :initial-index="index" :src="item.url"
                                        fit="scale-down" infinite>
                                    </el-image>
                                    <div class="absolute bottom-0 left-0 right-0 
                 bg-linear-to-t from-gray-600/60 to-transparent overflow-hidden">
                                        <span class="text-white text-sm font-medium">{{ item.name }}</span>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-empty v-else description="当前分类下暂无图片" class="h-[90%]" />
                    <el-pagination class="absolute left-1/2 -translate-x-1/2 bottom-3 " size="small" background
                        layout="prev, pager, next" :total="imageListTotal" :current-page="page"
                        @current-change="handleImageChange" />
                    <div class="absolute right-1 bottom-3">
                        <el-button type="primary" @click="hanleConfirmAvatar">确认</el-button>
                        <el-button @click="handleCancel">取消</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-card>
    </Dialog>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import { Delete, Plus } from '@element-plus/icons-vue'

import { useTable } from '@/hooks/useTable';
const {
    searchFormRef,
    formRef,
    page,
    total,
    roleList,
    visible,
    dialogVisible,
    loading,
    activeid,
    title,
    options,
    searchForm,
    form,
    imageDataList,
    classListTotal,
    imageListTotal,
    selectId,
    classImageList,
    getList,
    resetForm,
    addManager,
    hanleStatusChange,
    handleEdit,
    handleDelete,
    handleClose,
    handleConfirm,
    handleChange,
    handleListChange,
    handleImageChange,
    openDialog,
    showClassImage,
    handleSelect,
    hanleConfirmAvatar,
    handleCancel,
} = useTable()


</script>

<style scoped>
.active {
    background-color: rgb(222, 227, 255);
}
</style>