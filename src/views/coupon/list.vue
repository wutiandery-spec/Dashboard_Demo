<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between">
        <el-button type="primary" @click="handleAdd">新增优惠券</el-button>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default">
      <el-table-column label="名称" prop="name" min-width="150" />
      <el-table-column label="类型" width="100">
        <template #default="{ row }">
          <el-tag :type="row.type === 0 ? 'danger' : 'success'">{{ row.type === 0 ? '满减' : '折扣' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="面值" prop="value" width="100" />
      <el-table-column label="最低使用价" prop="min_price" width="110" />
      <el-table-column label="发行/已用" width="110">
        <template #default="{ row }">{{ row.total }} / {{ row.used ?? 0 }}</template>
      </el-table-column>
      <el-table-column label="有效期" min-width="220">
        <template #default="{ row }">
          <div class="text-xs">{{ row.start_time }}</div>
          <div class="text-xs">~ {{ row.end_time }}</div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            active-text="有效" inactive-text="失效" inline-prompt @change="handleStatusChange($event, row)" />
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
    <el-form ref="formRef" :model="form" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入优惠券名称" />
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.type">
          <el-radio :value="0">满减</el-radio>
          <el-radio :value="1">折扣</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="面值">
        <el-input-number v-model="form.value" :min="0" :precision="2" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="发行量">
        <el-input-number v-model="form.total" :min="0" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="最低使用价">
        <el-input-number v-model="form.min_price" :min="0" :precision="2" class="w-full" controls-position="right" />
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker v-model="form.start_time" type="datetime" value-format="X" placeholder="选择开始时间"
          class="w-full" />
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker v-model="form.end_time" type="datetime" value-format="X" placeholder="选择结束时间"
          class="w-full" />
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="form.order" :min="0" class="w-full" controls-position="right" />
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
import {
  getCouponList,
  addCoupon,
  updateCoupon,
  deleteCoupon,
  updateCouponStatus,
} from '@/api/modules/coupon'
import { useCrudTable } from '@/hooks/useCrudTable'

/** "YYYY-MM-DD HH:mm:ss" → 秒级时间戳 */
const toTimestamp = (value: string | number) => {
  if (!value) return ''
  if (typeof value === 'number') return value
  return Math.floor(new Date(value.replace(/-/g, '/').replace(' ', ' ')).getTime() / 1000)
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
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getCouponList,
    add: addCoupon,
    update: updateCoupon,
    remove: deleteCoupon,
    updateStatus: updateCouponStatus,
  },
  defaults: () => ({
    name: '',
    type: 0,
    value: 0,
    total: 100,
    min_price: 0,
    start_time: '',
    end_time: '',
    order: 50,
  }),
  titles: ['修改优惠券', '新增优惠券'],
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({
    name: row.name,
    type: Number(row.type),
    value: Number(row.value),
    total: row.total,
    min_price: Number(row.min_price),
    start_time: toTimestamp(row.start_time),
    end_time: toTimestamp(row.end_time),
    order: row.order,
  }),
  toPayload: (form) => ({
    ...form,
    value: Number(form.value),
    min_price: Number(form.min_price),
    start_time: Number(form.start_time),
    end_time: Number(form.end_time),
  }),
})
</script>
