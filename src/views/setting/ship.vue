<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-medium">物流设置</span>
        <el-button type="primary" :loading="saving" @click="submit">保存</el-button>
      </div>
    </template>

    <el-form :model="config" label-width="140px" class="max-w-3xl">
      <el-form-item label="物流配置">
        <el-input v-model="config.ship" type="textarea" :rows="8"
          placeholder="物流查询配置（如已配置，后端返回脱敏值，直接保存即可）" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { useSysConfig } from '@/hooks/useSysConfig'

const { config, loading, saving, save } = useSysConfig()

const submit = () => save({ ship: config.value.ship })
</script>
