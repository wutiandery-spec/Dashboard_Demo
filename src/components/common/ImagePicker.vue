<template>
  <Dialog v-model:visible="visible" :title="title" width="80%">
    <el-card>
      <el-container class="h-[60vh]">
        <!-- 分类列表 -->
        <el-aside width="260px" class="border-r border-r-gray-200 flex flex-col items-center">
          <div class="w-full flex-1 overflow-auto px-2 py-2">
            <div v-for="item in classList" :key="item.id" class="mb-2 rounded-lg hover:bg-blue-100 p-2"
              :class="{ active: activeid === item.id }" @click="selectClass(item.id)">
              <div class="truncate font-medium">{{ item.name }}</div>
              <div class="mt-1 text-xs text-gray-500">排序：{{ item.order }} id : {{ item.id }}</div>
            </div>
            <el-empty v-if="!classList.length" description="暂无图库分类" />
          </div>
          <el-pagination class="pb-3" background layout="prev, next" :total="classTotal"
            :current-page="classPage" @current-change="handleClassPageChange" />
        </el-aside>
        <!-- 图片列表 -->
        <el-main class="relative">
          <el-row :gutter="20" v-if="imageList.length" class="pb-10">
            <el-col :span="6" v-for="(item, index) in imageList" :key="item.id" class="mb-3">
              <el-card @click.stop="onToggle(item)" shadow="hover" class="mb-2 relative"
                :bodyStyle="{ padding: 0 }" :class="{ active: isSelected(item) }">
                <div v-if="isSelected(item)" class="absolute right-1 -top-2">
                  <el-checkbox :model-value="true" size="large" @click.stop="onToggle(item)" />
                </div>
                <div class="relative">
                  <el-image class="w-full h-40" :initial-index="index" :src="item.url" fit="scale-down" infinite />
                  <div
                    class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-gray-600/60 to-transparent overflow-hidden">
                    <span class="text-white text-sm font-medium">{{ item.name }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-empty v-else description="当前分类下暂无图片" class="h-[90%]" />
          <el-pagination class="absolute left-1/2 -translate-x-1/2 bottom-3" size="small" background
            layout="prev, pager, next" :total="imageTotal" :current-page="imagePage"
            @current-change="handleImagePageChange" />
          <div class="absolute right-1 bottom-3 flex items-center">
            <span class="text-xs text-gray-500 mr-2">
              已选 {{ selectedUrls.length }}{{ limit > 0 ? ` / ${limit}` : '' }}
            </span>
            <el-button type="primary" @click="confirm">确认</el-button>
            <el-button @click="visible = false">取消</el-button>
          </div>
        </el-main>
      </el-container>
    </el-card>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/common/Dialog.vue'
import { useImageGallery } from '@/hooks/useImageGallery'
import { toast } from '@/utils/feedback'
import type { ImageAssetItem } from '@/api/modules/imageClass'

const props = withDefaults(
  defineProps<{
    /** 是否多选 */
    multiple?: boolean
    /** 多选上限，0 表示不限制 */
    limit?: number
    title?: string
  }>(),
  { multiple: false, limit: 0, title: '选择图片' },
)

/** 单选为 string，多选为 string[] */
const value = defineModel<string | string[]>({ default: '' })
const visible = defineModel<boolean>('visible', { default: false })
const emit = defineEmits<{ confirm: [value: string | string[]] }>()

const {
  classList,
  classTotal,
  classPage,
  imageList,
  imageTotal,
  imagePage,
  activeId: activeid,
  selectedUrls,
  loadClasses,
  selectClass,
  toggleAsset,
  setSelection,
  isSelected,
  handleClassPageChange,
  handleImagePageChange,
} = useImageGallery({ multiple: props.multiple })

/** 打开时用当前值回显选中，并加载图库 */
watch(visible, (open) => {
  if (!open) return
  const current = Array.isArray(value.value) ? value.value : value.value ? [value.value] : []
  setSelection(current.filter(Boolean) as string[])
  loadClasses(1)
})

const onToggle = (item: ImageAssetItem) => {
  if (props.multiple && props.limit > 0 && !isSelected(item) && selectedUrls.value.length >= props.limit) {
    return toast.warning(`最多选择 ${props.limit} 张图片`)
  }
  toggleAsset(item)
}

const confirm = () => {
  value.value = props.multiple ? [...selectedUrls.value] : (selectedUrls.value[0] ?? '')
  visible.value = false
  emit('confirm', value.value)
}
</script>

<style scoped>
.active {
  background-color: rgb(222, 227, 255);
}
</style>
