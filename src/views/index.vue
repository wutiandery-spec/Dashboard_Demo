<template>
  <div class="p-6 space-y-6">
    <!-- 欢迎语 -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-bold text-slate-800">欢迎回来，{{ username || '管理员' }}</h2>
        <p class="mt-1 text-sm text-slate-500">这里是后台概览，快速了解平台运行情况。</p>
      </div>
    </div>

    <!-- 统计卡片-骨架屏 -->
    <el-row :gutter="20" v-if="panels.length === 0">
      <el-col :span="6" v-for="i in 4" :key="i">
        <el-skeleton style="width: 100%" animated loading>
          <template #template>
            <el-card style="max-width: 480px" shadow="hover">
              <template #header>
                <div class="card-header flex justify-between">
                  <el-skeleton-item variant="text" style="width: 50%" />
                  <el-skeleton-item variant="text" style="width: 10%" />
                </div>
              </template>
              <el-skeleton-item variant="h1" style="width: 70%" />

              <template #footer>
                <div class="flex justify-between text-gray-500 text-sm">
                  <el-skeleton-item variant="text" style="width: 60%" />
                  <el-skeleton-item variant="text" style="width: 10%" />
                </div>
              </template>
            </el-card>
          </template>
        </el-skeleton>
      </el-col>
    </el-row>

    <!-- 统计卡片 -->
    <el-row :gutter="20" v-permission="['getStatistics1,GET']">
      <el-col :span="6" v-for="item in panels" :key="item.title">
        <el-card style="max-width: 100%" shadow="hover">
          <template #header>
            <div class="card-header flex justify-between">
              <span>{{ item.title }}</span>
              <el-tag :type="item.unitColor">
                {{ item.unit }}
              </el-tag>
            </div>
          </template>
          <span class=" text-4xl text-gray-500 font-bold">
            <NumberTransition :value="item.value" />
          </span>

          <template #footer>
            <div class="flex justify-between text-gray-500 text-sm">
              <span>{{ item.subTitle }}</span>
              <span>{{ item.subValue }}</span>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>

    <!-- 快捷入口 -->
    <el-row :gutter="20">
      <el-col :span="3" v-for="entry in entries" :key="entry.to" @click="router.push(entry.to)">
        <el-card shadow="hover">
          <div class="flex flex-col gap-3 justify-center items-center">
            <el-icon :class="entry.color" :size="25">
              <component :is="entry.icon" />
            </el-icon>
            {{ entry.label }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 数据卡片 -->
    <el-row :gutter="20">
      <ECharts v-permission="['getStatistics3,GET']"/>
      <el-col :span="12" class="" v-permission="['getStatistics2,GET']">
        <TipsCard class="mb-6" title="店铺及商品提示" tag="店铺及商品提示" :dat="goods"/>
        <TipsCard title="交易提示" tag="需要立即处理的交易订单" :dat="order"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { getStatistics1, getStatistics2 } from '@/api/modules/statistics'
import NumberTransition from '@/components/common/NumberTransition.vue'
import ECharts from '@/components/common/ECharts.vue'
import TipsCard from '@/components/common/TipsCard.vue'

const router = useRouter()
const userStore = useUserStore()
const username = computed(() => userStore.userInfo?.username || '')
const goods = ref([])
const order = ref([])
const result = async () => {
  const res = await getStatistics2()
  goods.value = res.data.goods
  order.value = res.data.order
}
result()
type TagType = 'primary' | 'success' | 'info' | 'warning' | 'danger'
const VALID_TAG_TYPES: TagType[] = ['primary', 'success', 'info', 'warning', 'danger']
interface panelsList {
  subTitle: string
  subValue: number
  title: string
  unit: string
  unitColor: TagType
  value: number
}
const panels = ref<panelsList[]>([])
const loadPanels = async (): Promise<void> => {
  try {
    const data = await getStatistics1()
    panels.value = ((data?.data?.panels ?? []) as (panelsList & { unitColor?: string })[]).map(
      (p) => ({
        ...p,
        unitColor: VALID_TAG_TYPES.includes(p.unitColor as TagType) ? (p.unitColor as TagType) : 'primary',
      }),
    )
  } catch (error) {
    let errMsg = '加载面板数据失败'
    if (error instanceof Error) {
      errMsg += `：${error.message}`
    }
    ElMessage.error(errMsg)
    console.error('面板数据加载异常：', error)
  }
}
onMounted(() => {
  loadPanels()
})

const entries = [
  { label: '商品管理', to: '/admin/goods/list', icon: 'Goods', color: 'text-sky-800!' },
  { label: '分类管理', to: '/admin/category/list', icon: 'shopping-bag', color: 'text-sky-700!' },
  { label: '用户管理', to: '/admin/user/list', icon: 'User', color: 'text-sky-600!' },
  { label: '订单管理', to: '/admin/order/list', icon: 'message-box', color: 'text-sky-500!' },
  { label: '角色权限', to: '/admin/role/list', icon: 'management', color: 'text-sky-700!' },
  { label: '系统设置', to: '/admin/setting/base', icon: 'setting', color: 'text-sky-600!' },
  { label: '分销管理', to: '/admin/distribution/index', icon: 'shopping-cart', color: 'text-sky-700!' },
  { label: '其它模块', to: '/admin/notice/list', icon: 'mostly-cloudy', color: 'text-sky-800!' },
]

</script>
<style></style>