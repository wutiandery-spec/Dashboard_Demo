<template>
  <el-card v-loading="loading">
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-medium">交易设置</span>
        <el-button type="primary" :loading="saving" @click="submit">保存</el-button>
      </div>
    </template>

    <el-form :model="config" label-width="160px" class="max-w-3xl">
      <el-form-item label="订单自动关闭(分钟)">
        <el-input-number v-model="config.close_order_minute" :min="0" controls-position="right" />
      </el-form-item>
      <el-form-item label="自动收货(天)">
        <el-input-number v-model="config.auto_received_day" :min="0" controls-position="right" />
      </el-form-item>
      <el-form-item label="售后期限(天)">
        <el-input-number v-model="config.after_sale_day" :min="0" controls-position="right" />
      </el-form-item>

      <el-divider content-position="left">支付宝</el-divider>
      <el-form-item label="APPID">
        <el-input v-model="config.alipay.app_id" />
      </el-form-item>
      <el-form-item label="支付宝公钥">
        <el-input v-model="config.alipay.ali_public_key" type="textarea" :rows="2" />
      </el-form-item>
      <el-form-item label="应用私钥">
        <el-input v-model="config.alipay.private_key" type="textarea" :rows="2" />
      </el-form-item>

      <el-divider content-position="left">微信支付</el-divider>
      <el-form-item label="公众号 APPID">
        <el-input v-model="config.wxpay.app_id" />
      </el-form-item>
      <el-form-item label="小程序 APPID">
        <el-input v-model="config.wxpay.miniapp_id" />
      </el-form-item>
      <el-form-item label="商户号">
        <el-input v-model="config.wxpay.mch_id" />
      </el-form-item>
      <el-form-item label="API 密钥">
        <el-input v-model="config.wxpay.key" />
      </el-form-item>
      <el-form-item label="证书 cert_client">
        <div class="flex items-center gap-3 w-full">
          <el-input v-model="config.wxpay.cert_client" />
          <el-upload action="#" :show-file-list="false" :http-request="(o) => uploadCert(o, 'cert_client')">
            <el-button>上传</el-button>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="证书 cert_key">
        <div class="flex items-center gap-3 w-full">
          <el-input v-model="config.wxpay.cert_key" />
          <el-upload action="#" :show-file-list="false" :http-request="(o) => uploadCert(o, 'cert_key')">
            <el-button>上传</el-button>
          </el-upload>
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import type { UploadRequestOptions } from 'element-plus'
import { useSysConfig } from '@/hooks/useSysConfig'
import { uploadSysConfigFile } from '@/api/modules/sysconfig'
import { toast } from '@/utils/feedback'

const { config, loading, saving, save } = useSysConfig()

const submit = () =>
  save({
    close_order_minute: config.value.close_order_minute,
    auto_received_day: config.value.auto_received_day,
    after_sale_day: config.value.after_sale_day,
    alipay: config.value.alipay,
    wxpay: config.value.wxpay,
  })

/** 上传微信支付证书并回填路径 */
const uploadCert = async (options: UploadRequestOptions, key: 'cert_client' | 'cert_key') => {
  const res = await uploadSysConfigFile(options.file)
  config.value.wxpay[key] = res.data
  toast.success('上传成功')
}
</script>
