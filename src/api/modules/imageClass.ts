import request from '@/api/request'
import { createCrudApi } from '@/api/factory'
import type { ApiResponse } from '@/type'

export interface ImageClassItem {
  id: number 
  name: string
  order?: number
  image_count?: number
  url?: string;
  path?: string;
  create_time?: string;
  update_time?: string;
  image_class_id?: number;
}

export interface ImageAssetItem {
  id: number
  url: string
  name: string
  path: string
  create_time: string
  update_time: string
  image_class_id: number
  selectStatus?:boolean
}

export interface PaginationList<T> {
  list: T[]
  totalCount?: number
}

export type ImageClassListResponse = ApiResponse<PaginationList<ImageClassItem>>
export type ImageAssetListResponse = ApiResponse<PaginationList<ImageAssetItem>>
export type ImageClassActionResponse<T = unknown> = ApiResponse<T>

const imageClassApi = createCrudApi('image_class')

export function getImageList(limit: number, page: number) {
  return imageClassApi.list(page, { limit }) as Promise<ImageClassListResponse>
}

export function getClassImage(id: number, limit: number, page: number) {
  return request.get(`/image_class/${id}/image/${page}`, {
    params: { limit },
  }) as Promise<ImageAssetListResponse>
}

export function deleteImageClass(id: number) {
  return imageClassApi.remove(id) as Promise<ImageClassActionResponse>
}

export function addImageClass(name: string, order: number) {
  return imageClassApi.add({ name, order }) as Promise<ImageClassActionResponse>
}

export function setImageClass(name: string, order: number, id: number) {
  return imageClassApi.update(id, { name, order }) as Promise<ImageClassActionResponse>
}
export function deleteImage(ids: number[]) {
  return request.post('/image/delete_all', { ids })
}
export function setImageName(id: number, name: string) {
  return request.post(`/image/${id}`, { name })
}
import type { AxiosResponse } from 'axios'
export interface UploadImageParams {
  /** 图库分类ID */
  imageClassId: number
  /** 图片文件数组 */
  fileList: File[]
  /** 上传进度回调（可选），返回 0-100 的整数 */
  onProgress?: (percent: number) => void
}

/** 上传成功后端返回的数据结构（根据实际接口字段修改） */
export interface UploadResultData {
  /** 图片访问地址 */
  url: string
  /** 图片ID */
  id?: number
  /** 图片名称 */
  name?: string
  /** 预留扩展字段 */
  [key: string]: any
}
export interface UploadResult {
  code: number
  message: string
  data: UploadResultData
}
export function uploadImage(params: UploadImageParams): Promise<AxiosResponse<UploadResult>> {
  const { imageClassId, fileList } = params
  const formData = new FormData()
  formData.append('image_class_id', imageClassId.toString())
  fileList.forEach(file => {
    formData.append('img[]', file)
  })
  return request.post(
    '/image/upload',
    formData,
  )
}
