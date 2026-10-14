import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useSysConfig } from '@/hooks/useSysConfig'
import { toast } from '@/utils/feedback'

const { getSysConfig, setSysConfig } = vi.hoisted(() => ({
  getSysConfig: vi.fn(),
  setSysConfig: vi.fn(),
}))

vi.mock('@/api/modules/sysconfig', () => ({ getSysConfig, setSysConfig }))
vi.mock('@/utils/feedback', () => ({
  toast: { success: vi.fn(), warning: vi.fn(), error: vi.fn(), info: vi.fn() },
}))

describe('useSysConfig', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    getSysConfig.mockResolvedValue({ data: { ship: '顺丰' } })
    setSysConfig.mockResolvedValue({ code: 200 })
  })

  it('初始化后自动加载配置，并补全缺失的嵌套字段', async () => {
    const { config, loading } = useSysConfig()
    await vi.waitFor(() => expect(loading.value).toBe(false))

    expect(getSysConfig).toHaveBeenCalled()
    expect(config.value.ship).toBe('顺丰')
    // 接口未返回的嵌套结构补默认值，避免页面渲染时取到 undefined
    expect(config.value.upload_config.Bucket).toBe('')
    expect(config.value.alipay.app_id).toBe('')
    expect(config.value.wxpay.mch_id).toBe('')
  })

  it('接口返回的部分嵌套字段与默认值合并', async () => {
    getSysConfig.mockResolvedValue({
      data: { upload_config: { Bucket: 'demo-bucket' }, alipay: { app_id: '2021' } },
    })
    const { config } = useSysConfig()
    await vi.waitFor(() => expect(config.value.upload_config.Bucket).toBe('demo-bucket'))

    expect(config.value.upload_config.ACCESS_KEY).toBe('')
    expect(config.value.alipay.app_id).toBe('2021')
    expect(config.value.alipay.private_key).toBe('')
  })

  it('保存时合并改动字段、提交完整对象并重新加载', async () => {
    const { config, save } = useSysConfig()
    await vi.waitFor(() => expect(config.value.ship).toBe('顺丰'))
    setSysConfig.mockClear()
    getSysConfig.mockClear()

    await save({ ship: '圆通' })

    expect(setSysConfig).toHaveBeenCalledWith(expect.objectContaining({ ship: '圆通' }))
    expect(getSysConfig).toHaveBeenCalledTimes(1)
    expect(vi.mocked(toast.success)).toHaveBeenCalledWith('保存成功')
  })
})
