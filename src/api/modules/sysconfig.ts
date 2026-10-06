import request from '@/api/request'

export interface SysConfig {
  id?: number
  open_reg?: number
  reg_method?: string
  password_min?: number
  password_encrypt?: string
  upload_method?: string
  upload_config: Record<string, string>
  api_safe?: number
  api_secret?: string
  close_order_minute?: number
  auto_received_day?: number
  after_sale_day?: number
  alipay: Record<string, string>
  wxpay: Record<string, string>
  ship: string
  [key: string]: any
}

/** 获取原有系统设置 */
export const getSysConfig = () => request.get('/sysconfig')
/** 修改系统设置（提交完整配置对象） */
export const setSysConfig = (data: SysConfig) => request.post('/sysconfig', data)
/** 上传证书等配置文件 */
export function uploadSysConfigFile(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return request.post('/sysconfig/upload', formData)
}
