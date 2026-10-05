<template>
    <el-card>
        <template #header>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="getList"><el-icon size="20">
                            <Refresh />
                        </el-icon></el-button>
                </el-tooltip>
            </div>
        </template>

        <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default" highlight-current-row
            empty-text="空数据">
            <el-table-column label="时间" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon size="16">
                            <timer />
                        </el-icon>
                        <span style="margin-left: 10px">{{ scope.row.update_time }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="标题" width="150" fit="false">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>标题: {{ scope.row.title }}</div>
                        </template>
                        <template #reference>
                            <span>{{ scope.row.title }}</span>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="内容" show-overflow-tooltip>
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>内容: {{ scope.row.content }}</div>

                        </template>
                        <template #reference>
                            <span>{{ scope.row.content }}</span>

                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template #default="scope">
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
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <div class="flex justify-center">
                <el-pagination :current-page="page" layout="prev, pager, next" :total="total" @current-change="handleChange" />
            </div>
        </template>
    </el-card>
    <Dialog v-model:visible="visible" :title="title" :close-on-esc="true" @close="handleClose">
        <el-form :model="form" :rules="rules" ref="formRef">
            <el-form-item label="标题" prop="title">
                <el-input v-model="form.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <el-input v-model="form.content" autocomplete="off" type="textarea" :rows="7" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="flex justify-center">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="handleConfirm" :loading="loading">
                    确认
                </el-button>
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/common/Dialog.vue'
import {
    addNoticeList,
    deleteNoticeList,
    getNoticeList,
    setNoticeList,
} from '@/api/modules/notice'
import { useCrudTable } from '@/hooks/useCrudTable'

const rules = {
    title: [{ required: true, message: '必须输入标题', trigger: 'blur' }],
    content: [{ required: true, message: '必须输入内容', trigger: 'blur' }],
}

const {
    dataList,
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
} = useCrudTable({
    api: {
        list: getNoticeList,
        add: addNoticeList,
        update: setNoticeList,
        remove: deleteNoticeList,
    },
    defaults: () => ({ title: '', content: '' }),
    titles: ['修改公告', '新增公告'],
    toForm: (row) => ({ title: row.title, content: row.content }),
})
</script>

<style scoped>
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}

.el-slider {
    margin-top: 20px;
}
</style>
