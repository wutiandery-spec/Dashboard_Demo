import request from '@/api/request'

/** 分销数据统计 */
export const getAgentStatistics = () => request.get('/agent/statistics')
/** 分销推广员列表 */
export const getAgentList = (page: number, params: Record<string, any> = {}) =>
  request.get(`/agent/${page}`, { params })
/** 推广订单列表 */
export const getUserBillList = (page: number, params: Record<string, any> = {}) =>
  request.get(`/user_bill/${page}`, { params })
/** 获取分销配置 */
export const getDistributionSetting = () => request.get('/distribution_setting/get')
/** 修改分销配置 */
export const setDistributionSetting = (data: Record<string, any>) =>
  request.post('/distribution_setting/set', data)
