<template>
  <el-container class="h-full">
    <!-- 头部区域 -->
    <el-header class="border-b border-b-gray-200 flex gap-3">
      <el-button type="primary" :icon="Plus" size="default" @click="openClassCreator">
        添加分类
      </el-button>
      <el-upload action="#" :http-request="customUpload" list-type="text" :multiple="true" :show-file-list="false">
        <el-button type="warning" :icon="Plus" size="default">
          添加图片
        </el-button>
      </el-upload>
    </el-header>
    <!-- 内容区域 -->
    <el-container class="overflow-auto">
      <!-- 侧边栏区域 -->
      <el-aside width="260px" class="border-r border-r-gray-200 flex flex-col items-center">
        <div class="w-full flex-1 overflow-auto px-2 py-2">
          <div v-for="item in dataList" :key="item.id" class="mb-2 rounded-lg hover:bg-blue-100 p-2"
            :class="{ active: activeid === item.id }" @click="selectClass(item.id)">
            <div class="flex items-center justify-between gap-2">
              <div class="min-w-0 flex-1">
                <div class="truncate font-medium">{{ item.name }}</div>
                <div class="mt-1 text-xs text-gray-500">排序：{{ item.order }} id : {{ item.id }}</div>
              </div>

              <div class="flex items-center">
                <el-button text size="default" type="primary" :icon="Edit" circle @click.stop="openClassEditor(item)" />
                <el-button text size="default" type="danger" :icon="Delete" circle class='ml-0!'
                  :loading="deleteLoadingId === item.id" @click.stop="handleDelete(item)" />
              </div>
            </div>
          </div>

          <el-empty v-if="!dataList.length" description="暂无图库分类" />
        </div>

        <el-pagination class="pb-3" background layout="prev, next" :total="total" :current-page="currentPage"
          :page-size="classPageSize" @current-change="handleCurrentChange" />
      </el-aside>
      <!-- 内容展示区域 -->
      <el-main>
        <el-row :gutter="10" v-if="classImageList.length">
          <el-col :span="6" :offset="0" v-for="(item, index) in classImageList" :key="item.id" class="">
            <el-card shadow="hover" class="mb-2" :bodyStyle="{ padding: 0 }">
              <div class="relative">
                <el-image class="w-full h-40" :initial-index="index" :src="item.url" fit="scale-down"
                  :preview-src-list="srcList" infinite />
                <div class="absolute bottom-0 left-0 right-0 
                 bg-linear-to-t from-gray-600/60 to-transparent overflow-hidden">
                  <span class="text-white text-sm font-medium">{{ item.name }}</span>
                </div>
              </div>

              <div class="flex justify-around py-2 border-t border-gray-300 overflow-hidden">
                <el-button size="default" type="primary" text @click="openImageRename(item)">
                  重命名
                </el-button>
                <el-button size="default" type="primary" text @click.stop="handleDelete(item)" :loading="deleteLoadingId === item.id">
                  删除
                </el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-empty v-else description="当前分类下暂无图片" />
        <el-pagination class="fixed bottom-0 left-1/2" size="default" background
          layout="prev, pager, next" :total="total2" :current-page="imgCurrentPage" :page-size="imagePageSize"
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
        <el-button :disabled="submitting" @click="closeDrawers">取消</el-button>
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
        <el-button :disabled="submitting" @click="closeDrawers">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>
</template>

<script setup lang="ts">
import { Delete, Edit, Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules, UploadRequestOptions } from 'element-plus'
import { UploadAjaxError } from 'element-plus/es/components/upload/src/ajax.mjs'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import {
  addImageClass,
  deleteImage,
  deleteImageClass,
  setImageClass,
  setImageName,
  uploadImage,
  type ImageAssetItem,
  type ImageClassItem,
} from '@/api/modules/imageClass'
import { useImageGallery } from '@/hooks/useImageGallery'
import { confirmAction } from '@/utils/confirm'
import { toast } from '@/utils/feedback'

/** 图库浏览：分类与图片分页、预览地址 */
const {
  classList: dataList,
  classTotal: total,
  classPage: currentPage,
  classPageSize,
  imageList: classImageList,
  imageTotal: total2,
  imagePage: imgCurrentPage,
  imagePageSize,
  activeId: activeid,
  srcList,
  loadClasses,
  selectClass,
  reload,
  handleClassPageChange: handleCurrentChange,
  handleImagePageChange: handleImgCurrentChange,
} = useImageGallery({ imagePageSize: 12 })

// 表单状态
const formRef = ref<FormInstance>()
const open = ref(false)
const open2 = ref(false)
const isEditMode = ref(false)
const editingId = ref<number | null>(null)
const submitting = ref(false)
const deleteLoadingId = ref<number | null>(null)
const form = reactive({ name: '', order: 100 })
const drawerTitle = computed(() => (isEditMode.value ? '修改图库分类' : '新增图库分类'))
const submitButtonText = computed(() => (isEditMode.value ? '确认修改' : '确认新增'))

const rules: FormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  order: [{ required: true, message: '请输入排序值', trigger: 'change' }],
}

/** 打开新增分类抽屉 */
const openClassCreator = () => {
  isEditMode.value = false
  editingId.value = null
  form.name = ''
  form.order = 100
  open.value = true
}

/** 打开分类编辑抽屉 */
const openClassEditor = (item: ImageClassItem) => {
  isEditMode.value = true
  editingId.value = item.id
  form.name = item.name
  form.order = Number(item.order ?? 0)
  open.value = true
}

/** 打开图片重命名抽屉 */
const openImageRename = (item: ImageAssetItem) => {
  isEditMode.value = true
  editingId.value = item.id
  form.name = item.name
  open2.value = true
}

/** 关闭抽屉 */
const closeDrawers = () => {
  open.value = false
  open2.value = false
}

const resetFormState = () => {
  isEditMode.value = false
  editingId.value = null
  form.name = ''
  form.order = 100
}

/** 提交分类新增 / 修改或图片重命名 */
const onSubmit = async () => {
  submitting.value = true
  try {
    if (open2.value) {
      await setImageName(editingId.value as number, form.name)
      toast.success('修改名称成功')
      closeDrawers()
      await reload()
    } else if (isEditMode.value) {
      await setImageClass(form.name, Number(form.order), editingId.value as number)
      toast.success('修改分类成功')
      closeDrawers()
      await reload()
    } else {
      await addImageClass(form.name, Number(form.order))
      toast.success('新增分类成功')
      closeDrawers()
      await loadClasses(1)
    }
  } finally {
    submitting.value = false
  }
}

/** 删除分类或图片（分类含 order 字段，图片没有） */
const handleDelete = async (item: ImageClassItem | ImageAssetItem) => {
  const isClass = 'order' in item
  const ok = await confirmAction(
    `确认删除${isClass ? '分类' : '图片'}“${item.name}”吗？删除后不可恢复。`,
    { title: '删除确认', confirmText: '确认删除' },
  )
  if (!ok) return
  deleteLoadingId.value = item.id
  try {
    if (isClass) {
      await deleteImageClass(item.id)
      toast.success('删除分类成功')
    } else {
      await deleteImage([item.id])
      toast.success('删除图片成功')
    }
    await reload()
  } finally {
    deleteLoadingId.value = null
  }
}

const customUpload = async (options: UploadRequestOptions) => {
  try {
    const res = await uploadImage({
      imageClassId: activeid.value as number,
      fileList: [options.file],
    })
    options.onSuccess(res.data)
    toast.success('上传成功')
    await reload()
  } catch (err) {
    options.onError(err as UploadAjaxError)
    toast.error('上传失败')
  }
}

onMounted(() => {
  loadClasses()
})
</script>

<style scoped>
.active {
  background-color: rgb(222, 227, 255);
}
</style>
