<template>
  <el-card>
    <template #header>
      <div class="space-y-3">
        <el-tabs v-model="activeTab" @tab-change="handleTabChange">
          <el-tab-pane v-for="tab in tabs" :key="tab.value" :label="tab.label" :name="tab.value" />
        </el-tabs>
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div class="flex items-center gap-3">
            <el-input v-model="searchForm.title" placeholder="商品标题" clearable class="w-55!"
              @keyup.enter="handleSearch" />
            <el-tree-select v-model="searchForm.category_id" :data="categoryTree"
              :props="{ label: 'name', children: 'child' }" node-key="id" check-strictly clearable
              placeholder="商品分类" class="w-45!" />
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
          <div class="flex items-center gap-2">
            <template v-if="activeTab === 'delete'">
              <el-button type="success" plain :disabled="!selectedRows.length" @click="batchRestore">批量恢复</el-button>
              <el-button type="danger" plain :disabled="!selectedRows.length" @click="batchDestroy">彻底删除</el-button>
            </template>
            <template v-else>
              <el-button type="success" plain :disabled="!selectedRows.length" @click="batchStatus(1)">批量上架</el-button>
              <el-button type="warning" plain :disabled="!selectedRows.length" @click="batchStatus(0)">批量下架</el-button>
              <el-button type="danger" plain :disabled="!selectedRows.length" @click="batchDelete">批量删除</el-button>
            </template>
            <el-button type="primary" @click="handleAdd">新增商品</el-button>
            <el-tooltip content="刷新数据" effect="light">
              <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
            </el-tooltip>
          </div>
        </div>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default"
      @selection-change="onSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column label="商品" min-width="280">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-image class="w-14 h-14 rounded" :src="row.cover" fit="cover" />
            <div class="ml-3">
              <p>{{ row.title }}</p>
              <small class="text-gray-400">id : {{ row.id }}</small>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="分类" width="130">
        <template #default="{ row }">{{ categoryName(row.category_id) }}</template>
      </el-table-column>
      <el-table-column label="价格" width="150">
        <template #default="{ row }">
          <div>￥{{ row.min_price }}</div>
          <div class="text-xs text-gray-400 line-through">￥{{ row.min_oprice }}</div>
        </template>
      </el-table-column>
      <el-table-column label="库存" width="110">
        <template #default="{ row }">
          <span :class="row.stock <= row.min_stock ? 'text-red-500' : ''">{{ row.stock }}</span>
        </template>
      </el-table-column>
      <el-table-column label="销量" prop="sale_count" width="90" />
      <el-table-column label="状态" width="150">
        <template #default="{ row }">
          <el-tag v-if="row.ischeck === 0" type="warning">待审核</el-tag>
          <el-tag v-else-if="row.ischeck === 2" type="danger">审核拒绝</el-tag>
          <el-tag v-else :type="row.status ? 'success' : 'info'">{{ row.status ? '出售中' : '仓库中' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="openEdit(row)">编辑</el-button>
          <template v-if="row.ischeck === 0">
            <el-button size="small" link type="success" @click="audit(row, 1)">通过</el-button>
            <el-button size="small" link type="danger" @click="audit(row, 2)">拒绝</el-button>
          </template>
          <el-button size="small" link type="primary" @click="openBanners(row)">轮播图</el-button>
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

  <AppDrawer v-model="visible" :title="title" size="50%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="100px">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入商品名称" />
      </el-form-item>
      <el-form-item label="商品分类">
        <el-tree-select v-model="form.category_id" :data="categoryTree"
          :props="{ label: 'name', children: 'child' }" node-key="id" check-strictly class="w-full"
          placeholder="请选择商品分类" />
      </el-form-item>
      <el-form-item label="商品封面">
        <div class="flex items-center gap-3">
          <el-image v-if="form.cover" class="w-16 h-16 rounded" :src="form.cover" fit="cover" />
          <el-button @click="coverVisible = true">选择封面</el-button>
        </div>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="form.desc" type="textarea" :rows="3" placeholder="请输入商品描述" />
      </el-form-item>
      <el-form-item label="商品单位">
        <el-input v-model="form.unit" placeholder="如 件 / kg" />
      </el-form-item>
      <el-form-item label="总库存">
        <el-input-number v-model="form.stock" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="库存预警">
        <el-input-number v-model="form.min_stock" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="最低销售价">
        <el-input-number v-model="form.min_price" :min="0" :precision="2" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="最低原价">
        <el-input-number v-model="form.min_oprice" :min="0" :precision="2" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="是否上架">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0" active-text="上架"
          inactive-text="仓库" inline-prompt />
      </el-form-item>
      <el-form-item label="库存显示">
        <el-switch v-model="form.stock_display" :active-value="1" :inactive-value="0" active-text="显示"
          inactive-text="隐藏" inline-prompt />
      </el-form-item>

      <!-- 轮播图（编辑时可用） -->
      <el-form-item label="商品轮播图" v-if="editState">
        <div class="w-full">
          <div class="flex flex-wrap gap-2 mb-2">
            <el-image v-for="(url, index) in banners" :key="index" class="w-16 h-16 rounded" :src="url" fit="cover" />
            <el-button @click="bannerVisible = true">设置轮播图</el-button>
          </div>
          <div class="text-xs text-gray-400">保存商品后点击「设置轮播图」提交</div>
        </div>
      </el-form-item>

      <!-- 商品规格（只读） -->
      <el-form-item label="商品规格" v-if="editState">
        <div class="w-full">
          <el-tag class="mb-2">{{ Number(form.sku_type) === 1 ? '多规格' : '单规格' }}</el-tag>
          <el-table v-if="specList.length" :data="specList" size="small" border>
            <el-table-column label="规格名称" prop="name" width="140" />
            <el-table-column label="规格值">
              <template #default="{ row }">
                <el-tag v-for="(value, index) in row.goods_type_values ?? []" :key="index" class="mr-1">
                  {{ value.name }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
          <el-empty v-else description="暂无规格数据" :image-size="60" />
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSave">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>

  <ImagePicker v-model:visible="coverVisible" v-model="form.cover" title="选择商品封面" />
  <ImagePicker v-model:visible="bannerVisible" v-model="banners" title="设置商品轮播图" multiple :limit="5"
    @confirm="saveBanners" />
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import ImagePicker from '@/components/common/ImagePicker.vue'
import {
  getGoodsList,
  addGoods,
  updateGoods,
  readGoods,
  changeGoodsStatus,
  deleteGoods,
  restoreGoods,
  destroyGoods,
  checkGoods,
  setGoodsBanners,
} from '@/api/modules/goods'
import { getCategoryList } from '@/api/modules/category'
import { useCrudTable } from '@/hooks/useCrudTable'
import { confirmAction } from '@/utils/confirm'
import { toast } from '@/utils/feedback'

const tabs = [
  { label: '全部', value: 'all' },
  { label: '审核中', value: 'checking' },
  { label: '出售中', value: 'saling' },
  { label: '已下架', value: 'off' },
  { label: '库存预警', value: 'min_stock' },
  { label: '回收站', value: 'delete' },
]

const activeTab = ref('all')
const searchForm = reactive<{ title: string; category_id: number | '' }>({ title: '', category_id: '' })
const categoryTree = ref<any[]>([])
const coverVisible = ref(false)
const bannerVisible = ref(false)
const banners = ref<string[]>([])
const specList = ref<any[]>([])

const loadCategories = async () => {
  categoryTree.value = (await getCategoryList()).data ?? []
}
loadCategories()

/** 分类 id → 名称（树形扁平查找） */
const categoryMap = computed(() => {
  const map = new Map<number, string>()
  const walk = (nodes: any[]) => {
    nodes.forEach((node) => {
      map.set(node.id, node.name)
      if (node.child?.length) walk(node.child)
    })
  }
  walk(categoryTree.value)
  return map
})
const categoryName = (id: number) => categoryMap.value.get(id) ?? '-'

const {
  dataList,
  loading,
  total,
  page,
  visible,
  editState,
  editId,
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
    list: getGoodsList,
    add: addGoods,
    update: updateGoods,
    remove: (id) => deleteGoods([id]),
  },
  defaults: () => ({
    title: '',
    category_id: 0,
    cover: '',
    desc: '',
    unit: '件',
    stock: 0,
    min_stock: 0,
    min_price: 0,
    min_oprice: 0,
    status: 1,
    stock_display: 1,
    sku_type: 0,
  }),
  titles: ['修改商品', '新增商品'],
  params: () => ({
    tab: activeTab.value,
    ...(searchForm.title ? { title: searchForm.title } : {}),
    ...(searchForm.category_id ? { category_id: searchForm.category_id } : {}),
  }),
  mapRow: (row) => ({ ...row, statusLoading: false }),
})

const handleTabChange = () => {
  page.value = 1
  selectedRows.value = []
  getList()
}
const handleSearch = () => {
  page.value = 1
  getList()
}
const handleReset = () => {
  searchForm.title = ''
  searchForm.category_id = ''
  handleSearch()
}

/** 编辑前加载商品详情（规格只读 + 轮播图） */
const openEdit = async (row: any) => {
  handleEdit(row)
  const data = (await readGoods(row.id)).data
  Object.assign(form.value, {
    title: data.title,
    category_id: data.category_id,
    cover: data.cover ?? '',
    desc: data.desc ?? '',
    unit: data.unit,
    stock: data.stock,
    min_stock: data.min_stock,
    min_price: Number(data.min_price),
    min_oprice: Number(data.min_oprice),
    status: data.status,
    stock_display: data.stock_display,
    sku_type: data.sku_type,
  })
  specList.value = data.types ?? []
  banners.value = data.goodsBanner?.map((item: any) => item.url ?? item) ?? []
}

/** 保存商品；编辑态保存后同步轮播图 */
const handleSave = async () => {
  const editing = editState.value
  await handleConfirm()
  if (editing) {
    await setGoodsBanners(editId.value, banners.value)
    await getList()
  }
}

const saveBanners = async (urls: string | string[]) => {
  await setGoodsBanners(editId.value, urls as string[])
  banners.value = urls as string[]
  toast.success('轮播图设置成功')
}

const openBanners = async (row: any) => {
  const data = (await readGoods(row.id)).data
  banners.value = data.goodsBanner?.map((item: any) => item.url ?? item) ?? []
  editId.value = row.id
  bannerVisible.value = true
}

/** 批量操作 */
const selectedRows = ref<any[]>([])
const onSelectionChange = (rows: any[]) => {
  selectedRows.value = rows
}
const selectedIds = () => selectedRows.value.map((row) => row.id)

const batchStatus = async (status: number) => {
  await changeGoodsStatus(selectedIds(), status)
  toast.success(status ? '上架成功' : '下架成功')
  selectedRows.value = []
  await getList()
}
const batchDelete = async () => {
  await deleteGoods(selectedIds())
  toast.remove('删除成功')
  selectedRows.value = []
  await getList()
}
const batchRestore = async () => {
  await restoreGoods(selectedIds())
  toast.success('恢复成功')
  selectedRows.value = []
  await getList()
}
const batchDestroy = async () => {
  if (!(await confirmAction('彻底删除后不可恢复，确认继续？'))) return
  await destroyGoods(selectedIds())
  toast.remove('彻底删除成功')
  selectedRows.value = []
  await getList()
}

/** 审核 */
const audit = async (row: any, ischeck: number) => {
  await checkGoods(row.id, ischeck)
  toast.success(ischeck === 1 ? '已通过审核' : '已拒绝')
  await getList()
}
</script>
