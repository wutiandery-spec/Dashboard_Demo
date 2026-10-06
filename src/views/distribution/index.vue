<template>
  <div class="space-y-4">
    <!-- 分销数据统计 -->
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in panels" :key="item.label">
        <el-card shadow="hover">
          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-500">{{ item.label }}</span>
            <span class="text-3xl font-bold text-gray-600">{{ item.value }}</span>
            <div class="h-1 rounded" :class="item.color"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card>
      <el-tabs v-model="activeTab" @tab-change="handleTabChange">
        <!-- 分销推广员 -->
        <el-tab-pane label="分销推广员" name="agent">
          <div class="flex items-center gap-3 mb-3 flex-wrap">
            <el-input v-model="agentForm.keyword" placeholder="手机号 / 邮箱 / 用户名" clearable class="w-55!" />
            <el-select v-model="agentForm.type" class="w-40!">
              <el-option label="全部时间" value="all" />
              <el-option label="今天" value="today" />
              <el-option label="昨天" value="yesterday" />
              <el-option label="最近7天" value="last7days" />
            </el-select>
            <el-select v-model="agentForm.level" class="w-40!" clearable placeholder="推广员类型">
              <el-option label="全部" :value="0" />
              <el-option label="一级推广" :value="1" />
              <el-option label="二级推广" :value="2" />
            </el-select>
            <el-button type="primary" @click="searchAgent">搜索</el-button>
          </div>
          <el-table v-loading="agentLoading" :data="agentList" size="default">
            <el-table-column label="推广员" min-width="200">
              <template #default="{ row }">
                <div class="flex items-center">
                  <el-avatar :size="36" :src="row.avatar">{{ row.username?.charAt(0) }}</el-avatar>
                  <div class="ml-2">
                    <p>{{ row.nickname || row.username }}</p>
                    <small class="text-gray-400">{{ row.phone || row.email || '-' }}</small>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="分享 / 订单" width="130">
              <template #default="{ row }">{{ row.share_num }} / {{ row.share_order_num }}</template>
            </el-table-column>
            <el-table-column label="订单金额" prop="order_price" width="120" />
            <el-table-column label="佣金" prop="commission" width="120" />
            <el-table-column label="可提现" prop="cash_out_price" width="120" />
            <el-table-column label="注册时间" prop="create_time" min-width="170" />
          </el-table>
          <div class="flex justify-center mt-3">
            <el-pagination :current-page="agentPage" layout="prev, pager, next" :total="agentTotal"
              @current-change="agentChange" />
          </div>
        </el-tab-pane>

        <!-- 推广订单 -->
        <el-tab-pane label="推广订单" name="bill">
          <div class="flex items-center gap-3 mb-3">
            <el-select v-model="billForm.type" class="w-40!">
              <el-option label="全部时间" value="all" />
              <el-option label="今天" value="today" />
              <el-option label="昨天" value="yesterday" />
              <el-option label="最近7天" value="last7days" />
            </el-select>
            <el-button type="primary" @click="searchBill">搜索</el-button>
          </div>
          <el-table v-loading="billLoading" :data="billList" size="default">
            <el-table-column label="订单号" min-width="220">
              <template #default="{ row }">{{ row.order?.no ?? row.order_id }}</template>
            </el-table-column>
            <el-table-column label="下单用户" width="140">
              <template #default="{ row }">{{ row.order?.user?.nickname || row.order?.user?.username || '-' }}</template>
            </el-table-column>
            <el-table-column label="推广员ID" prop="user_id" width="110" />
            <el-table-column label="分销层级" width="110">
              <template #default="{ row }">{{ row.level === 1 ? '一级' : '二级' }}</template>
            </el-table-column>
            <el-table-column label="佣金" prop="commission" width="110" />
            <el-table-column label="时间" prop="create_time" min-width="170" />
          </el-table>
          <div class="flex justify-center mt-3">
            <el-pagination :current-page="billPage" layout="prev, pager, next" :total="billTotal"
              @current-change="billChange" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {
  getAgentStatistics,
  getAgentList,
  getUserBillList,
} from '@/api/modules/distribution'
import { useCrudTable } from '@/hooks/useCrudTable'

const activeTab = ref('agent')
const panels = ref<{ label: string; value: number; color: string }[]>([])

const loadPanels = async () => {
  panels.value = (await getAgentStatistics()).data.panels ?? []
}
loadPanels()

const agentForm = reactive<{ keyword: string; type: string; level: number | '' }>({
  keyword: '',
  type: 'all',
  level: '',
})
const billForm = reactive<{ type: string }>({ type: 'all' })

const {
  dataList: agentList,
  loading: agentLoading,
  total: agentTotal,
  page: agentPage,
  getList: getAgentData,
  handleChange: agentChange,
} = useCrudTable({
  api: { list: getAgentList },
  params: () => ({
    type: agentForm.type,
    ...(agentForm.keyword ? { keyword: agentForm.keyword } : {}),
    ...(agentForm.level === '' ? {} : { level: agentForm.level }),
  }),
  immediate: false,
})

const {
  dataList: billList,
  loading: billLoading,
  total: billTotal,
  page: billPage,
  getList: getBillData,
  handleChange: billChange,
} = useCrudTable({
  api: { list: getUserBillList },
  params: () => ({ type: billForm.type }),
  immediate: false,
})

getAgentData()
getBillData()

const handleTabChange = () => {
  if (activeTab.value === 'agent') getAgentData()
  else getBillData()
}
const searchAgent = () => {
  agentPage.value = 1
  getAgentData()
}
const searchBill = () => {
  billPage.value = 1
  getBillData()
}
</script>
