<template>
  <el-container class="h-full">
    <el-header class="border-b border-b-gray-200">
      <el-button type="primary" :icon="Plus" size="default" @click="handleAddClass">
        添加分类
      </el-button>
    </el-header>

    <el-container class="overflow-auto">
      <el-aside width="260px" class="border-r border-r-gray-200 flex flex-col items-center">
        <div class="w-full flex-1 overflow-auto px-2 py-2">
          <div v-for="item in dataList" :key="item.id" class="mb-2 rounded-lg hover:bg-blue-100 p-2"
            :class="{ active: activeid === item.id }" @click="showClassImage(item.id)">
            <div class="flex items-center justify-between gap-2">
              <div class="min-w-0 flex-1">
                <div class="truncate font-medium">{{ item.name }}</div>
                <div class="mt-1 text-xs text-gray-500">排序：{{ item.order }} id : {{ item.id }}</div>
              </div>

              <div class="flex items-center gap-1">
                <el-button text size="small" type="primary" :icon="Edit" circle @click.stop="handleSetClass(item)" />
                <el-button text size="small" type="danger" :icon="Delete" circle :loading="deleteLoadingId === item.id"
                  @click.stop="handleDelete(item)" />
              </div>
            </div>
          </div>

          <el-empty v-if="!dataList.length" description="暂无图库分类" />
        </div>

        <el-pagination class="pb-3" background layout="prev, next" :total="total" :current-page="currentPage"
          :page-size="pageSize" @current-change="handleCurrentChange" />
      </el-aside>

      <el-main>
        <div v-if="classImageList.length" class="flex flex-wrap gap-3">
          <div v-for="(item, index) in classImageList" :key="item.id" class="max-w-50">
            <div class="relative">
              <el-image style="width: 200px; height: 200px" :initial-index="index" :src="item.url" fit="cover"
                :preview-src-list="srcList" infinite />
              <div class="absolute bottom-0 left-0 right-0 
                 bg-linear-to-t from-black/60 to-transparent">
                <span class="text-white text-sm font-medium">{{ item.name }}</span>
              </div>
            </div>

            <div class="flex justify-around py-2 border border-gray-300 ">
              <el-button size="default" type="primary" text @click="handleSetClass(item)">
                重命名
              </el-button>
              <el-button size="default" type="primary" text @click.stop="handleDelete(item)"" :loading="
                deleteLoadingId===item.id">
                删除
              </el-button>
            </div>
          </div>
        </div>
        <el-empty v-else description="当前分类下暂无图片" />
        <el-pagination class="fixed bottom-0 left-1/2" :page-size="9" size="default" background
          layout="prev, pager, next" :total="total2" :current-page="imgCurrentPage"
          @current-change="handleImgCurrentChange" />
      </el-main>
    </el-container>
  </el-container>

  <AppDrawer v-model="open" :title="drawerTitle" size="30%" @closed="resetFormState">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="90px">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name" maxlength="20" show-word-limit clearable placeholder="请输入分类名称" />
      </el-form-item>

      <el-form-item label="排序值" prop="order">
        <el-input-number v-model="form.order" class="w-full" :min="0" :max="9999" :precision="0"
          controls-position="right" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="submitting" @click="onSubmit">
          {{ submitButtonText }}
        </el-button>
        <el-button :disabled="submitting" @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>

  <AppDrawer v-model="open2" title="修改图片名称" size="30%" @closed="resetFormState">
    <el-form :model="form" :rules="rules" label-width="90px">
      <el-form-item label="图片名称" prop="name">
        <el-input v-model="form.name" maxlength="50" show-word-limit clearable placeholder="请输入图片名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="submitting" @click="onSubmit">
          {{ submitButtonText }}
        </el-button>
        <el-button :disabled="submitting" @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>
</template>

<script setup lang="ts">
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import {
  addImageClass,
  deleteImageClass,
  getClassImage,
  getImageList,
  setImageClass,
  uploadImage,
  deleteImage,
  setImageName,
  type ImageAssetItem,
  type ImageClassItem,
} from '@/api/modules/imageClass'
import type { number } from 'echarts'

// 列表状态
const dataList = ref<ImageClassItem[]>([])
const classImageList = ref<ImageAssetItem[]>([])
const srcList = ref<string[]>([])
const total = ref(0)
const total2 = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const activeid = ref<number | null>(null)

// 表单状态
const formRef = ref<FormInstance>()
const open = ref(false)
const open2 = ref(false)
const isEditMode = ref(false)
const editingId = ref<number | null>(null)
const submitting = ref(false)
const deleteLoadingId = ref<number | null>(null)
const form = reactive({ name: '', order: 100 })
const imgCurrentPage = ref(1)
const drawerTitle = computed(() => (isEditMode.value ? '修改图库分类' : '新增图库分类'))
const submitButtonText = computed(() => (isEditMode.value ? '确认修改' : '确认新增'))

const rules: FormRules = {
  name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
  order: [{ required: true, message: '请输入排序值', trigger: 'change' }],
}

// 加载分类列表
async function loadList() {
  try {
    const response = await getImageList(pageSize.value, currentPage.value)
    const list = Array.isArray(response.data?.list) ? response.data.list : []
    dataList.value = list
    total.value = Number(response.data?.totalCount ?? list.length)
    const nextActiveId =
      activeid.value && list.some((item) => item.id === activeid.value) ? activeid.value : (list[0]?.id ?? null)
    if (nextActiveId) {
      await showClassImage(nextActiveId)
    } else {
      activeid.value = null
      classImageList.value = []
      srcList.value = []
    }
  } catch (err) {
    console.log(err);
  }
}

// 加载指定分类下的图片并同步预览地址
async function showClassImage(id: number) {
  try {
    activeid.value = id
    const response = await getClassImage(id, 9, imgCurrentPage.value)
    const list = Array.isArray(response.data?.list) ? response.data.list : []
    classImageList.value = list
    total2.value = response.data.totalCount as number
    srcList.value = list.map((item) => item.url).filter(Boolean)
  } catch (err) {
    console.log(err);
  }
}

// 分页切换
function handleCurrentChange(page: number) {
  currentPage.value = page
  void loadList()
}

// 打开新增分类抽屉
function handleAddClass() {
  isEditMode.value = false
  form.name = ''
  form.order = 100
  open.value = true
}

// 打开编辑抽屉并回显数据
function handleSetClass(item: ImageClassItem) {
  isEditMode.value = true
  editingId.value = item.id
  form.name = item.name
  form.order = item.order as number
  if (item.order) {
    open.value = true
  } else {
    open2.value = true
  }
}

// 删除分类（二次确认后直接调接口并刷新）
async function handleDelete(item: ImageClassItem) {
  try {
    await ElMessageBox.confirm(`确认删除分类“${item.name}”吗？删除后不可恢复。`, '删除确认', {
      type: 'warning',
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
    })

    deleteLoadingId.value = item.id
    try {
      if (item.order) {
        await deleteImageClass(item.id)
        ElMessage.success('删除分类成功')
      } else {
        await deleteImage([item.id])
        ElMessage.success('删除图片成功')
      }
      if (dataList.value.length === 1 && currentPage.value > 1) {
        currentPage.value -= 1
      }
      activeid.value = activeid.value === item.id ? null : activeid.value
      await loadList()
    } catch (err) {
      console.log(err);
    } finally {
      deleteLoadingId.value = null
    }
  } catch (err) {
    console.log(err);
  }
}

// 提交表单：新增或修改
async function onSubmit() {
  submitting.value = true
  try {
    if (isEditMode.value) {
      if (open.value) {
        await setImageClass(form.name, Number(form.order), editingId.value!)
        ElMessage.success('修改分类成功')
      } else {
        await setImageName(editingId.value as number, form.name)
        ElMessage.success('修改名称成功')
      }
    } else {
      await addImageClass(form.name, Number(form.order))
      ElMessage.success('新增分类成功')
      currentPage.value = 1
    }
    open.value = false
    open2.value = false
    await loadList()
  } catch (err) {
    console.log(err);
  } finally {
    submitting.value = false
  }
}

function handleClose() {
  open.value = false
  open2.value = false
}
function resetFormState() {
  isEditMode.value = false
  editingId.value = null
  form.name = ''
  form.order = 0
}

interface itemType {
  id: number;
  url: string;
  name: string;
  path: string;
  create_time: string;
  update_time: string;
  image_class_id: number;
}
async function handleImgCurrentChange(page: number) {
  imgCurrentPage.value = page
  const response = await getClassImage(activeid.value as number, 9, imgCurrentPage.value)
  const list = Array.isArray(response.data?.list) ? response.data.list : []
  classImageList.value = list
  total2.value = response.data.totalCount as number
  srcList.value = list.map((item) => item.url).filter(Boolean)
}
function handleRename(item: itemType) {
  open2.value = true
}
async function handleDeleteImage(item: itemType) {
  try {
  } catch (err) {

  } finally {

  }
}

onMounted(() => {
  void loadList()
})
</script>

<style scoped>
.active {
  background-color: rgb(222, 227, 255);
}
</style>