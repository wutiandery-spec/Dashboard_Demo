import request from '@/api/request'
import { createCrudApi } from '@/api/factory'

const commentApi = createCrudApi('goods_comment')

export const getCommentList = commentApi.list
export const updateCommentStatus = commentApi.updateStatus

/** 回复商品评价 */
export function replyComment(id: number, data: string) {
  return request.post(`/goods_comment/review/${id}`, { data })
}
