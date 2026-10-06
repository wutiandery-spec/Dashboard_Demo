import request from '@/api/request'

/** 订单列表（tab：all/nopay/noship/shiped/received/finish/closed/refunding） */
export const getOrderList = (page: number, params: Record<string, any> = {}) =>
  request.get(`/order/${page}`, { params })
/** 批量删除订单 */
export const deleteOrders = (ids: number[]) => request.post('/order/delete_all', { ids })
/** 订单发货 */
export const shipOrder = (id: number, data: { express_company: string; express_no: string }) =>
  request.post(`/order/${id}/ship`, data)
/** 同意 / 拒绝退款 */
export const handleRefund = (id: number, data: { agree: number; disagree_reason?: string }) =>
  request.post(`/order/${id}/handle_refund`, data)
/** 快递公司列表 */
export const getExpressCompanyList = () => request.get('/express_company/1')
