<template>
  <el-card>
    <template #header>
      <div class="space-y-3">
        <el-tabs v-model="activeTab" @tab-change="handleTabChange">
          <el-tab-pane v-for="tab in tabs" :key="tab.value" :label="tab.label" :name="tab.value" />
        </el-tabs>
        <div class="flex items-center justify-between flex-wrap gap-3">
          <div class="flex items-center gap-3 flex-wrap">
            <el-input v-model="searchForm.no" placeholder="订单号" clearable class="w-45!" />
            <el-input v-model="searchForm.name" placeholder="收货人" clearable class="w-35!" />
            <el-input v-model="searchForm.phone" placeholder="收货人手机号" clearable class="w-40!" />
            <el-date-picker v-model="timeRange" type="daterange" value-format="YYYY-MM-DD" start-placeholder="开始时间"
              end-placeholder="结束时间" class="w-65!" />
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
          <div class="flex items-center gap-2">
            <el-button type="danger" plain :disabled="!selectedRows.length" @click="batchDelete">批量删除</el-button>
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
      <el-table-column label="订单号" min-width="230">
        <template #default="{ row }">
          <div>{{ row.no }}</div>
          <small class="text-gray-400">{{ row.create_time }}</small>
        </template>
      </el-table-column>
      <el-table-column label="用户" width="140">
        <template #default="{ row }">{{ row.user?.nickname || row.user?.username || '-' }}</template>
      </el-table-column>
      <el-table-column label="商品" min-width="260">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-image class="w-12 h-12 rounded" :src="row.order_items?.[0]?.goods_item?.cover" fit="cover" />
            <div class="ml-2">
              <div>{{ row.order_items?.[0]?.goods_item?.title }}</div>
              <small class="text-gray-400">共 {{ row.order_items?.length ?? 0 }} 件商品</small>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="金额" width="110">
        <template #default="{ row }">￥{{ row.total_price }}</template>
      </el-table-column>
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-tag :type="statusMeta(row).type">{{ statusMeta(row).label }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button v-if="canShip(row)" size="small" link type="primary" @click="openShip(row)">发货</el-button>
          <el-button v-if="row.refund_status === 'pending'" size="small" link type="warning"
            @click="openRefund(row)">处理退款</el-button>
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

  <!-- 订单发货 -->
  <Dialog v-model:visible="shipVisible" title="订单发货" width="30%">
    <el-form :model="shipForm" label-width="90px">
      <el-form-item label="快递公司">
        <el-select v-model="shipForm.express_company" placeholder="请选择快递公司" class="w-full">
          <el-option v-for="item in expressList" :key="item.code" :label="item.name" :value="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="快递单号">
        <el-input v-model="shipForm.express_no" placeholder="请输入快递单号" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="flex justify-end">
        <el-button @click="shipVisible = false">取消</el-button>
        <el-button type="primary" @click="submitShip">确认发货</el-button>
      </div>
    </template>
  </Dialog>

  <!-- 处理退款 -->
  <Dialog v-model:visible="refundVisible" title="处理退款" width="30%">
    <el-form :model="refundForm" label-width="90px">
      <el-form-item label="处理结果">
        <el-radio-group v-model="refundForm.agree">
          <el-radio :value="1">同意退款</el-radio>
          <el-radio :value="0">拒绝退款</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="拒绝理由" v-if="refundForm.agree === 0">
        <el-input v-model="refundForm.disagree_reason" type="textarea" :rows="3" placeholder="请输入拒绝理由" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="flex justify-end">
        <el-button @click="refundVisible = false">取消</el-button>
        <el-button type="primary" @click="submitRefund">确认</el-button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/common/Dialog.vue'
import {
  getOrderList,
  deleteOrders,
  shipOrder,
  handleRefund,
  getExpressCompanyList,
} from '@/api/modules/order'
import { useCrudTable } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

const tabs = [
  { label: '全部', value: 'all' },
  { label: '待支付', value: 'nopay' },
  { label: '待发货', value: 'noship' },
  { label: '待收货', value: 'shiped' },
  { label: '已收货', value: 'received' },
  { label: '已完成', value: 'finish' },
  { label: '已关闭', value: 'closed' },
  { label: '退款中', value: 'refunding' },
]

const activeTab = ref('all')
const timeRange = ref<[string, string] | null>(null)
const searchForm = reactive({ no: '', name: '', phone: '' })

const {
  dataList,
  loading,
  total,
  page,
  getList,
  handleChange,
  handleDelete,
} = useCrudTable({
  api: {
    list: getOrderList,
    remove: (id) => deleteOrders([id]),
  },
  params: () => ({
    tab: activeTab.value,
    ...(searchForm.no ? { no: searchForm.no } : {}),
    ...(searchForm.name ? { name: searchForm.name } : {}),
    ...(searchForm.phone ? { phone: searchForm.phone } : {}),
    ...(timeRange.value ? { starttime: timeRange.value[0], endtime: timeRange.value[1] } : {}),
  }),
  mapRow: (row) => ({ ...row, statusLoading: false }),
  immediate: false,
})
getList()

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
  searchForm.no = ''
  searchForm.name = ''
  searchForm.phone = ''
  timeRange.value = null
  handleSearch()
}

/** 订单状态展示 */
type TagType = 'primary' | 'success' | 'info' | 'warning' | 'danger'
const statusMeta = (row: any): { label: string; type: TagType } => {
  if (row.refund_status === 'pending') return { label: '退款中', type: 'warning' }
  if (row.refund_status === 'agree') return { label: '已退款', type: 'info' }
  if (row.closed) return { label: '已关闭', type: 'info' }
  const map: Record<string, { label: string; type: TagType }> = {
    pending: { label: '待发货', type: 'warning' },
    shipped: { label: '待收货', type: 'primary' },
    received: { label: '已收货', type: 'success' },
  }
  return map[row.ship_status] ?? { label: '进行中', type: 'info' }
}
const canShip = (row: any) => row.ship_status === 'pending' && !row.closed && row.refund_status !== 'pending'

/** 批量删除 */
const selectedRows = ref<any[]>([])
const onSelectionChange = (rows: any[]) => {
  selectedRows.value = rows
}
const batchDelete = async () => {
  await deleteOrders(selectedRows.value.map((row) => row.id))
  toast.remove('删除成功')
  selectedRows.value = []
  await getList()
}

/** 发货 */
const shipVisible = ref(false)
const expressList = ref<{ name: string; code: string }[]>([])
const shipForm = reactive({ id: 0, express_company: '', express_no: '' })

const openShip = async (row: any) => {
  shipForm.id = row.id
  shipForm.express_company = ''
  shipForm.express_no = ''
  if (!expressList.value.length) {
    expressList.value = (await getExpressCompanyList()).data.list ?? []
  }
  shipVisible.value = true
}

const submitShip = async () => {
  await shipOrder(shipForm.id, {
    express_company: shipForm.express_company,
    express_no: shipForm.express_no,
  })
  toast.success('发货成功')
  shipVisible.value = false
  await getList()
}

/** 处理退款 */
const refundVisible = ref(false)
const refundForm = reactive({ id: 0, agree: 1, disagree_reason: '' })

const openRefund = (row: any) => {
  refundForm.id = row.id
  refundForm.agree = 1
  refundForm.disagree_reason = ''
  refundVisible.value = true
}

const submitRefund = async () => {
  await handleRefund(refundForm.id, {
    agree: refundForm.agree,
    disagree_reason: refundForm.disagree_reason,
  })
  toast.success('处理成功')
  refundVisible.value = false
  await getList()
}
</script>
