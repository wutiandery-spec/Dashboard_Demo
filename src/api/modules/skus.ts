import request from '@/api/request'
import { createCrudApi } from '@/api/factory'

const skusApi = createCrudApi('skus')

export const getSkusList = skusApi.list
export const addSkus = skusApi.add
export const updateSkus = skusApi.update
export const updateSkusStatus = skusApi.updateStatus

/** 批量删除商品规格 */
export function deleteSkus(ids: number[]) {
  return request.post('/skus/delete_all', { ids })
}
