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
                <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange" />
            </div>
        </template>
    </el-card>
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
                    <el-pagination class="pb-3" background layout="prev, next" :total="classListTotal" :current-page="page"
                        @current-change="handleListChange" />
                </el-aside>
                <el-main>
                    <el-row :gutter="10" v-if="classImageList.length">
                        <el-col :span="6" :offset="0" v-for="(item, index) in classImageList" :key="item.id" class="">
                            <el-card shadow="hover" class="mb-2" :bodyStyle="{ padding: 0 }">
                                <div class="relative">
                                    <el-image class="w-full h-40" :initial-index="index" :src="item.url"
                                        fit="scale-down" :preview-src-list="srcList" infinite />
                                    <div class="absolute bottom-0 left-0 right-0 
                 bg-linear-to-t from-gray-600/60 to-transparent overflow-hidden">
                                        <span class="text-white text-sm font-medium">{{ item.name }}</span>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-empty v-else description="当前分类下暂无图片" class="h-[90%]"/>
                    <el-pagination class="justify-center" size="small" background layout="prev, pager, next" :total="imageListTotal"
                        :current-page="page" @current-change="handleImageChange" />
                </el-main>
            </el-container>
        </el-card>
    </Dialog>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import type { FormInstance } from 'element-plus'
import { getManagerList, addManagerList, deleteManagerList, setManager, updateManagerState, } from '@/api/modules/manager'
import { Plus } from '@element-plus/icons-vue'
const searchFormRef = ref<FormInstance>()
const formRef = ref<FormInstance>()
const page = ref(1)
const total = ref(0)
const onEditId = ref(0)
const roleList = ref([])
const visible = ref(false)
const dialogVisible = ref(false)
const loading = ref(false)
const editState = ref(false)
const title = computed(() => (editState.value ? '修改管理员' : '新增管理员'))
const options = ref<[{ id: number, name: string }] | []>([])
const form = ref({
    username: '',
    password: '',
    role_id: '',
    status: 1,
    avatat: ''
})

const searchForm = reactive({
    keyword: ''
})

const getList = async () => {
    loading.value = true
    try {
        const res = await getManagerList(page.value, 10, searchForm.keyword ? searchForm.keyword : '')
        roleList.value = res.data.list.map((item: { statusLoading: boolean }) => {
            item.statusLoading = false
            return item
        })
        total.value = res.data.totalCount
        options.value = res.data.roles
    } finally {
        loading.value = false
    }
}
getList()

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    searchForm.keyword = ''
    getList()
}
const addManager = () => {
    visible.value = true
    editState.value = false
}


/* 修改状态开启或关闭 */
const hanleStatusChange = async (status: any, row: any) => {
    row.statusLoading = true
    try {
        const res = await updateManagerState(row.id, status)
        row.status = status
        if (status) {
            ElMessage({ message: "已开启", type: "success" })
        } else {
            ElMessage({ message: "已关闭", type: "warning" })
        }
    } finally {
        row.statusLoading = false
    }
}

const handleEdit = async (index: number, row: any) => {
    editState.value = true
    visible.value = true
    onEditId.value = row.id as number
    form.value.username = row.username
}
/* 删除功能 */
const handleDelete = async (index: number, row: any) => {
    loading.value = true
    try {
        deleteManagerList(row.id as number)
        ElMessage({ message: "删除成功", type: 'success' })
        getList()
    }
    catch (err: any) {
        console.log(err);
    }
    finally {
        loading.value = false
    }
}

const handleClose = () => {
    form.value = {
        username: '',
        password: '',
        role_id: '',
        status: 1,
        avatat: ''
    }
}
/* 按下提交后处理 */
const handleConfirm = async (formRef: FormInstance | undefined) => {
    if (!formRef) return
    formRef.validate(async (valid) => {
        if (valid) {
            loading.value = true
            try {
                if (editState.value) {
                    setManager(onEditId.value, form.value)
                    visible.value = false
                    ElMessage({ message: "修改成功", type: "success" })
                } else {
                    addManagerList(form.value)
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
/* 页面改变触发 */
const handleChange = (pag: any) => {
    page.value = pag
    getList()
    ElMessage({ message: "已更新", type: "success" })
}
const handleListChange = (pag: any) => {
    page.value = pag
    getdata()
}
const activeid = ref(0)
const handleImageChange = (pag: any) => {
    page.value = pag
    showClassImage(activeid.value)
}
/* 打开图库选图 */
import  {getClassImage,getImageList, type ImageClassItem,type ImageAssetItem, } from '@/api/modules/imageClass'
const imageDataList = ref<ImageClassItem[] | []>([])
const classListTotal = ref(0)
const getdata = async () => {
    try{
        const res =await getImageList(10,page.value)
        imageDataList.value = res.data.list
        classListTotal.value = res.data.totalCount as number
        showClassImage(res.data.list[0]?.id as number)
    }finally{

    }
}
const openDialog = () => {
    dialogVisible.value = true
    getdata()
}
const srcList = ref([])
const classImageList = ref<ImageAssetItem[]>([])
const imageListTotal = ref(0)
const showClassImage =async (id: number) => {
    try{
        activeid.value = id
        const res = await getClassImage(id,12,page.value)
        classImageList.value = res.data.list
        imageListTotal.value =res.data.totalCount as number
    }finally{

    }
}
</script>

<style scoped>
.active {
  background-color: rgb(222, 227, 255);
}
</style>