import request from '@/api/request'

/** 商品列表（tab：all/checking/saling/off/min_stock/delete） */
export const getGoodsList = (page: number, params: Record<string, any> = {}) =>
  request.get(`/goods/${page}`, { params })
export const addGoods = (data: any) => request.post('/goods', data)
export const updateGoods = (id: number, data: any) => request.post(`/goods/${id}`, data)
/** 查看商品资料（含规格只读数据） */
export const readGoods = (id: number) => request.get(`/goods/read/${id}`)
/** 批量上架/下架 */
export const changeGoodsStatus = (ids: number[], status: number) =>
  request.post('/goods/changestatus', { ids, status })
export const deleteGoods = (ids: number[]) => request.post('/goods/delete_all', { ids })
export const restoreGoods = (ids: number[]) => request.post('/goods/restore', { ids })
export const destroyGoods = (ids: number[]) => request.post('/goods/destroy', { ids })
/** 审核商品：ischeck 1 同意 2 拒绝 */
export const checkGoods = (id: number, ischeck: number) => request.post(`/goods/${id}/check`, { ischeck })
export const setGoodsBanners = (id: number, banners: string[]) => request.post(`/goods/banners/${id}`, { banners })
