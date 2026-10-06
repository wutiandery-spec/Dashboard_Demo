<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <el-button type="primary" @click="handleAdd">新增规格</el-button>
          <el-button type="danger" plain :disabled="!selectedRows.length" @click="batchDelete">
            删除选中
          </el-button>
        </div>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default" @selection-change="onSelectionChange">
      <el-table-column type="selection" width="50" />
      <el-table-column label="规格名称" prop="name" min-width="150" />
      <el-table-column label="规格值" min-width="220">
        <template #default="{ row }">
          <el-tag v-for="(value, index) in splitValues(row.default)" :key="index" class="mr-1 mb-1">{{ value }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="排序" prop="order" width="100" />
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            @change="handleStatusChange($event, row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="handleEdit(row)">修改</el-button>
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

  <AppDrawer v-model="visible" :title="title" size="30%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="90px">
      <el-form-item label="规格名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入规格名称" />
      </el-form-item>
      <el-form-item label="规格值">
        <el-input v-model="form.default" type="textarea" :rows="3" placeholder="多个规格值用英文逗号分隔，如 64g,128g" />
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="form.order" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import { getSkusList, addSkus, updateSkus, updateSkusStatus, deleteSkus } from '@/api/modules/skus'
import { useCrudTable } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

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
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getSkusList,
    add: addSkus,
    update: updateSkus,
    remove: (id) => deleteSkus([id]),
    updateStatus: updateSkusStatus,
  },
  defaults: () => ({ name: '', default: '', order: 50, status: 1 }),
  titles: ['修改规格', '新增规格'],
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({ name: row.name, default: row.default, order: row.order, status: row.status }),
})

const splitValues = (value?: string) => (value ? value.split(',').filter(Boolean) : [])

/** 批量删除 */
const selectedRows = ref<any[]>([])
const onSelectionChange = (rows: any[]) => {
  selectedRows.value = rows
}
const batchDelete = async () => {
  await deleteSkus(selectedRows.value.map((row) => row.id))
  toast.remove()
  selectedRows.value = []
  await getList()
}
</script>
