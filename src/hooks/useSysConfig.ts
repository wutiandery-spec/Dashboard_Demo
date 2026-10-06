import { getSysConfig, setSysConfig, type SysConfig } from '@/api/modules/sysconfig'
import { toast } from '@/utils/feedback'

/** 系统配置共享流程：一次加载完整配置，保存时合并后提交完整对象 */
export function useSysConfig() {
  /** 保证首页渲染时嵌套字段存在 */
  const defaults: SysConfig = {
    upload_config: { Bucket: '', http: '', ACCESS_KEY: '', SECRET_KEY: '' },
    alipay: { app_id: '', ali_public_key: '', private_key: '' },
    wxpay: { app_id: '', miniapp_id: '', mch_id: '', key: '', cert_client: '', cert_key: '' },
    ship: '',
  }
  const config = ref<SysConfig>(structuredClone(defaults))
  const loading = ref(false)
  const saving = ref(false)

  const load = async () => {
    loading.value = true
    try {
      const data = ((await getSysConfig()).data ?? {}) as SysConfig
      config.value = {
        ...defaults,
        ...data,
        upload_config: { ...defaults.upload_config, ...(data.upload_config ?? {}) },
        alipay: { ...defaults.alipay, ...(data.alipay ?? {}) },
        wxpay: { ...defaults.wxpay, ...(data.wxpay ?? {}) },
      }
    } finally {
      loading.value = false
    }
  }

  /** 保存：传入本页修改的字段，其余字段沿用当前完整配置 */
  const save = async (partial?: Partial<SysConfig>) => {
    saving.value = true
    try {
      config.value = { ...config.value, ...(partial ?? {}) }
      await setSysConfig(config.value)
      toast.success('保存成功')
      await load()
    } finally {
      saving.value = false
    }
  }

  load()

  return { config, loading, saving, load, save }
}
