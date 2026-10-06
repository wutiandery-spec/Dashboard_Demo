import request from '@/api/request'
import { createCrudApi } from '@/api/factory'

const categoryApi = createCrudApi('category')

/** 分类列表（树形，无分页） */
export const getCategoryList = () => request.get('/category')
export const addCategory = categoryApi.add
export const updateCategory = categoryApi.update
export const updateCategoryStatus = categoryApi.updateStatus
export const deleteCategory = categoryApi.remove

/** 分类关联产品列表 */
export const getCategoryItems = (category_id: number) =>
  request.get('/app_category_item/list', { params: { category_id } })
/** 关联产品 */
export const addCategoryItems = (category_id: number, goods_ids: number[]) =>
  request.post('/app_category_item', { category_id, goods_ids })
/** 删除关联产品 */
export const deleteCategoryItem = (id: number) => request.post(`/app_category_item/${id}/delete`)
