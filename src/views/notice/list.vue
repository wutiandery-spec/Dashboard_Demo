<template>
    <el-card>
        <template #header>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="addNotice">新增</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="handleChange(page)"><el-icon size="20">
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
                    <el-button size="small" @click.stop="handleEdit(scope.$index, scope.row)">
                        编辑
                    </el-button>
                    <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.$index, scope.row)">
                        <template #reference>
                            <el-button :loading="loading" size="small" type="danger">
                                删除
                            </el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <div class="flex justify-center">
                <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange" />

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
                <el-button type="primary" @click="handleConfirm(formRef)" :loading="loading">
                    确认
                </el-button>
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import { getNoticeList, addNoticeList, setNoticeList, deleteNoticeList } from '@/api/modules/notice'
import Dialog from '@/components/common/Dialog.vue'
import type { FormInstance } from 'element-plus'

interface DataListType {
    id?: number
    order?: number
    title?: string
    content?: string
    update_time?: string
}
const total = ref(0)
const visible = ref(false)
const loading = ref(false)
const dataList = ref<DataListType[] | []>([])
const page = ref(1)
const formRef = ref<FormInstance>()
const editState = ref(false)
const onEditId = ref(0)
const title = computed(() => (editState.value ? '修改公告' : '新增公告'))
const form = reactive({
    title: '',
    content: '',
})
const rules = {
    title: [{ required: true, message: '必须输入标题', trigger: 'blur' },],
    content: [{ required: true, message: '必须输入标题', trigger: 'blur' }]
}

async function getList(page: number) {
    const res = await getNoticeList(page)
    total.value = res.data.totalCount
    dataList.value = res.data.list
}
getList(page.value)


const addNotice = async () => {
    visible.value = true
    editState.value = false
}

const handleEdit = async (index: number, row: DataListType) => {
    editState.value = true
    visible.value = true
    form.title = row.title as string
    form.content = row.content as string
    onEditId.value = row.id as number
}

const handleDelete = async (index: number, row: DataListType) => {
    loading.value = true
    try {
        await deleteNoticeList(row.id as number)
        ElMessage({ message: "删除成功", type: 'success' })
        await getList(page.value)
    }
    catch (err: any) {
        console.log(err);
    }
    finally {
        loading.value = false
    }
}

const handleClose = () => { formRef.value?.resetFields() }

const handleChange = async (page: number) => {
    loading.value = true
    try {
        await getList(page)
    } finally {
        loading.value = false
    }
}

const handleConfirm = async (formRef: FormInstance | undefined) => {
    if (!formRef) return
    formRef.validate(async (valid) => {
        if (valid) {
            loading.value = true
            try {
                if (editState.value) {
                    await setNoticeList(onEditId.value, form)
                    await getList(page.value)
                    visible.value = false
                    ElMessage({ message: "修改成功", type: "success" })
                } else {
                    await addNoticeList(form)
                    await getList(page.value)
                    visible.value = false
                    ElMessage({ message: "增加成功", type: "success" })
                }
            }
            catch (err: any) {
                const message = err.data.msg || '增加失败'
                ElMessage({ message, type: 'warning' })
            }
            finally {
                loading.value = false
            }
        }
    })
}



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
