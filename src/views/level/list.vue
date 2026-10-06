<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between">
        <el-button type="primary" @click="handleAdd">新增会员等级</el-button>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default">
      <el-table-column label="等级名称" prop="name" min-width="150" />
      <el-table-column label="等级权重" prop="level" width="120" />
      <el-table-column label="折扣率(%)" prop="discount" width="120" />
      <el-table-column label="累计消费金额" prop="max_price" width="140" />
      <el-table-column label="累计消费次数" prop="max_times" width="140" />
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
    <el-form ref="formRef" :model="form" label-width="120px">
      <el-form-item label="等级名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入等级名称" />
      </el-form-item>
      <el-form-item label="等级权重">
        <el-input-number v-model="form.level" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="折扣率(%)">
        <el-input-number v-model="form.discount" :min="0" :max="100" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="累计消费金额">
        <el-input-number v-model="form.max_price" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="累计消费次数">
        <el-input-number v-model="form.max_times" :min="0" class="w-full" controls-position="right" />
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
import { getLevelList, addLevel, updateLevel, deleteLevel, updateLevelStatus } from '@/api/modules/level'
import { useCrudTable } from '@/hooks/useCrudTable'

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
    list: getLevelList,
    add: addLevel,
    update: updateLevel,
    remove: deleteLevel,
    updateStatus: updateLevelStatus,
  },
  defaults: () => ({ name: '', level: 0, discount: 100, max_price: 0, max_times: 0, status: 1 }),
  titles: ['修改会员等级', '新增会员等级'],
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({
    name: row.name,
    level: row.level,
    discount: row.discount,
    max_price: row.max_price,
    max_times: row.max_times,
    status: row.status,
  }),
})
</script>
