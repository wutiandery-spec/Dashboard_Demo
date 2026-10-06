<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-medium">基础设置</span>
        <el-button type="primary" :loading="saving" @click="submit">保存</el-button>
      </div>
    </template>

    <el-form :model="config" label-width="140px" class="max-w-3xl">
      <el-form-item label="开启注册">
        <el-switch v-model="config.open_reg" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item label="注册方式">
        <el-input v-model="config.reg_method" placeholder="如 username / phone / email" />
      </el-form-item>
      <el-form-item label="密码最小长度">
        <el-input-number v-model="config.password_min" :min="0" controls-position="right" />
      </el-form-item>
      <el-form-item label="密码加密方式">
        <el-input v-model="config.password_encrypt" placeholder="如 ,0,1,2" />
      </el-form-item>
      <el-form-item label="上传方式">
        <el-input v-model="config.upload_method" placeholder="如 oss / local" />
      </el-form-item>
      <el-form-item label="上传 Bucket">
        <el-input v-model="config.upload_config.Bucket" />
      </el-form-item>
      <el-form-item label="上传域名">
        <el-input v-model="config.upload_config.http" />
      </el-form-item>
      <el-form-item label="ACCESS_KEY">
        <el-input v-model="config.upload_config.ACCESS_KEY" />
      </el-form-item>
      <el-form-item label="SECRET_KEY">
        <el-input v-model="config.upload_config.SECRET_KEY" />
      </el-form-item>
      <el-form-item label="接口安全">
        <el-switch v-model="config.api_safe" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item label="接口密钥">
        <el-input v-model="config.api_secret" placeholder="接口签名密钥" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { useSysConfig } from '@/hooks/useSysConfig'

const { config, loading, saving, save } = useSysConfig()

const submit = () =>
  save({
    open_reg: config.value.open_reg,
    reg_method: config.value.reg_method,
    password_min: config.value.password_min,
    password_encrypt: config.value.password_encrypt,
    upload_method: config.value.upload_method,
    upload_config: config.value.upload_config,
    api_safe: config.value.api_safe,
    api_secret: config.value.api_secret,
  })
</script>
