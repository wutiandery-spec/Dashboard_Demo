<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between">
        <el-button type="primary" @click="handleAdd">新增分类</el-button>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default" row-key="id"
      :tree-props="{ children: 'child' }" default-expand-all>
      <el-table-column label="分类名称" prop="name" min-width="240" />
      <el-table-column label="排序" prop="order" width="100" />
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            @change="handleStatusChange($event, row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="handleEdit(row)">修改</el-button>
          <el-button size="small" link type="primary" @click="openItems(row)">关联产品</el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(row)">
            <template #reference>
              <el-button size="small" link type="primary">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <AppDrawer v-model="visible" :title="title" size="30%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="90px">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入分类名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>

  <!-- 分类关联产品 -->
  <Dialog v-model:visible="itemsVisible" :title="`关联产品 - ${currentCategory.name}`" width="60%">
    <div class="flex justify-end mb-3">
      <el-button type="primary" @click="openGoodsPicker">关联产品</el-button>
    </div>
    <el-table :data="itemList" max-height="50vh">
      <el-table-column label="商品" min-width="240">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-image class="w-10 h-10 rounded" :src="row.cover" fit="cover" />
            <span class="ml-2">{{ row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="order" width="100" />
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-popconfirm title="确认删除吗?" @confirm="removeItem(row)">
            <template #reference>
              <el-button size="small" link type="primary">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </Dialog>

  <!-- 选择要关联的商品 -->
  <Dialog v-model:visible="goodsVisible" title="选择商品" width="60%">
    <div class="flex items-center gap-3 mb-3">
      <el-input v-model="goodsKeyword" placeholder="商品标题" clearable class="w-60!" @keyup.enter="loadGoods" />
      <el-button type="primary" @click="loadGoods">搜索</el-button>
    </div>
    <el-table :data="goodsList" max-height="50vh" @selection-change="onGoodsSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column label="商品" min-width="240">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-image class="w-10 h-10 rounded" :src="row.cover" fit="cover" />
            <span class="ml-2">{{ row.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="价格" prop="min_price" width="100" />
    </el-table>
    <template #footer>
      <div class="flex justify-end">
        <el-button @click="goodsVisible = false">取消</el-button>
        <el-button type="primary" @click="relateGoods">确认关联</el-button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import Dialog from '@/components/common/Dialog.vue'
import {
  getCategoryList,
  addCategory,
  updateCategory,
  deleteCategory,
  updateCategoryStatus,
  getCategoryItems,
  addCategoryItems,
  deleteCategoryItem,
} from '@/api/modules/category'
import { getGoodsList } from '@/api/modules/goods'
import { useCrudTable } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

const {
  dataList,
  loading,
  visible,
  formRef,
  form,
  title,
  getList,
  handleAdd,
  handleEdit,
  handleDelete,
  handleClose,
  handleConfirm,
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getCategoryList,
    add: addCategory,
    update: updateCategory,
    remove: deleteCategory,
    updateStatus: updateCategoryStatus,
  },
  defaults: () => ({ name: '' }),
  titles: ['修改分类', '新增分类'],
  transform: (res) => ({ list: res.data ?? [], total: (res.data ?? []).length }),
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({ name: row.name }),
})

/** 分类关联产品 */
const itemsVisible = ref(false)
const itemList = ref<any[]>([])
const currentCategory = reactive<{ id: number; name: string }>({ id: 0, name: '' })

const loadItems = async () => {
  itemList.value = (await getCategoryItems(currentCategory.id)).data ?? []
}

const openItems = async (row: any) => {
  currentCategory.id = row.id
  currentCategory.name = row.name
  itemsVisible.value = true
  await loadItems()
}

const removeItem = async (row: any) => {
  await deleteCategoryItem(row.id)
  toast.remove()
  await loadItems()
}

/** 选择商品 */
const goodsVisible = ref(false)
const goodsList = ref<any[]>([])
const goodsKeyword = ref('')
const selectedGoods = ref<any[]>([])

const loadGoods = async () => {
  const res = await getGoodsList(1, { tab: 'all', limit: 100, ...(goodsKeyword.value ? { title: goodsKeyword.value } : {}) })
  goodsList.value = res.data.list ?? []
}

const openGoodsPicker = async () => {
  goodsVisible.value = true
  goodsKeyword.value = ''
  selectedGoods.value = []
  await loadGoods()
}

const onGoodsSelectionChange = (rows: any[]) => {
  selectedGoods.value = rows
}

const relateGoods = async () => {
  await addCategoryItems(currentCategory.id, selectedGoods.value.map((row) => row.id))
  toast.success('关联成功')
  goodsVisible.value = false
  await loadItems()
}
</script>
