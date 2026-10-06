<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-medium">分销配置</span>
        <el-button type="primary" :loading="saving" @click="submit">保存</el-button>
      </div>
    </template>

    <el-form :model="form" label-width="150px" class="max-w-3xl">
      <el-form-item label="开启分销">
        <el-switch v-model="form.distribution_open" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item label="一级返佣比例(%)">
        <el-input-number v-model="form.store_first_rebate" :min="0" :max="100" controls-position="right" />
      </el-form-item>
      <el-form-item label="二级返佣比例(%)">
        <el-input-number v-model="form.store_second_rebate" :min="0" :max="100" controls-position="right" />
      </el-form-item>
      <el-form-item label="自购返佣">
        <el-switch v-model="form.is_self_brokerage" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item label="结算天数">
        <el-input-number v-model="form.settlement_days" :min="0" controls-position="right" />
      </el-form-item>
      <el-form-item label="佣金结算方式">
        <el-input v-model="form.brokerage_method" placeholder="如 hand / auto" />
      </el-form-item>
      <el-form-item label="分销海报图">
        <div class="flex flex-wrap items-center gap-2">
          <el-image v-for="(url, index) in form.spread_banners" :key="index" class="w-16 h-16 rounded" :src="url"
            fit="cover" />
          <el-button @click="bannerVisible = true">设置海报图</el-button>
        </div>
      </el-form-item>
    </el-form>

    <ImagePicker v-model:visible="bannerVisible" v-model="form.spread_banners" title="设置分销海报图" multiple
      :limit="5" />
  </el-card>
</template>

<script setup lang="ts">
import ImagePicker from '@/components/common/ImagePicker.vue'
import { getDistributionSetting, setDistributionSetting } from '@/api/modules/distribution'
import { toast } from '@/utils/feedback'

const loading = ref(false)
const saving = ref(false)
const bannerVisible = ref(false)
const form = reactive({
  distribution_open: 0,
  store_first_rebate: 0,
  store_second_rebate: 0,
  spread_banners: [] as string[],
  is_self_brokerage: 0,
  settlement_days: 0,
  brokerage_method: '',
})

const load = async () => {
  loading.value = true
  try {
    Object.assign(form, (await getDistributionSetting()).data)
    if (!Array.isArray(form.spread_banners)) form.spread_banners = []
  } finally {
    loading.value = false
  }
}
load()

const submit = async () => {
  saving.value = true
  try {
    await setDistributionSetting({ ...form })
    toast.success('保存成功')
    await load()
  } finally {
    saving.value = false
  }
}
</script>
