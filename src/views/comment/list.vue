<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <el-input v-model="title" placeholder="商品标题" clearable class="w-60!" @keyup.enter="handleSearch" />
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </div>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default">
      <el-table-column label="商品" min-width="220">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-image class="w-12 h-12 rounded" :src="row.goods_item?.cover" fit="cover" />
            <span class="ml-2">{{ row.goods_item?.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="用户" width="140">
        <template #default="{ row }">{{ row.user?.nickname || row.user?.username || '-' }}</template>
      </el-table-column>
      <el-table-column label="评分" width="150">
        <template #default="{ row }">
          <el-rate :model-value="row.rating" disabled />
        </template>
      </el-table-column>
      <el-table-column label="评价内容" min-width="240">
        <template #default="{ row }">
          <div>{{ row.review?.data }}</div>
          <el-image v-for="(img, index) in row.review?.image ?? []" :key="index" class="w-10 h-10 mr-1 mt-1"
            :src="img" fit="cover" />
        </template>
      </el-table-column>
      <el-table-column label="评价时间" width="170" prop="review_time" />
      <el-table-column label="状态" width="110">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            @change="handleStatusChange($event, row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="openReply(row)">回复</el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="flex justify-center">
        <el-pagination :current-page="page" layout="prev, pager, next" :total="total" @current-change="handleChange" />
      </div>
    </template>
  </el-card>

  <Dialog v-model:visible="replyVisible" title="回复商品评价" width="40%">
    <el-input v-model="replyText" type="textarea" :rows="5" placeholder="请输入回复内容" />
    <template #footer>
      <div class="flex justify-end">
        <el-button @click="replyVisible = false">取消</el-button>
        <el-button type="primary" @click="submitReply">确认</el-button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/common/Dialog.vue'
import { getCommentList, updateCommentStatus, replyComment } from '@/api/modules/comment'
import { useCrudTable } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

const title = ref('')

const {
  dataList,
  loading,
  total,
  page,
  getList,
  handleChange,
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getCommentList,
    updateStatus: updateCommentStatus,
  },
  params: () => (title.value ? { title: title.value } : {}),
  mapRow: (row) => ({ ...row, statusLoading: false }),
})

const handleSearch = () => {
  page.value = 1
  getList()
}

/** 回复评价 */
const replyVisible = ref(false)
const replyText = ref('')
const replyId = ref(0)

const openReply = (row: any) => {
  replyId.value = row.id
  replyText.value = ''
  replyVisible.value = true
}

const submitReply = async () => {
  await replyComment(replyId.value, replyText.value)
  toast.success('回复成功')
  replyVisible.value = false
  await getList()
}
</script>
