import axios from '@/api/request'
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
}

export interface PaginationList<T> {
  list: T[]
  totalCount?: number
}

export interface ImageClassSubmitPayload {
  data: {
    name: string
    order: number
  }
}

export type ImageClassListResponse = ApiResponse<PaginationList<ImageClassItem>>
export type ImageAssetListResponse = ApiResponse<PaginationList<ImageAssetItem>>
export type ImageClassActionResponse<T = unknown> = ApiResponse<T>

export function getImageList(limit: number, page: number) {
  return axios.get(`/image_class/${page}`, { params: { limit } }) as Promise<ImageClassListResponse>
}

export function getClassImage(id: number, limit: number, page: number) {
  return axios.get(`/image_class/${id}/image/${page}`, {
    params: { limit },
  }) as Promise<ImageAssetListResponse>
}

export function deleteImageClass(id: number) {
  return axios.post(`/image_class/${id}/delete`) as Promise<ImageClassActionResponse>
}

export function addImageClass(name: string, order: number) {
  return axios.post(`/image_class`, { name, order }) as Promise<ImageClassActionResponse>
}

export function setImageClass(name: string, order: number, id: number) {
  return axios.post(`/image_class/${id}`, { name, order }) as Promise<ImageClassActionResponse>
}
export function deleteImage(ids: number[]) {
  return axios.post('/image/delete_all', { ids })
}
export function setImageName(id: number, name: string) {
  return axios.post(`/image/${id}`, { name })
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
  return axios.post(
    '/image/upload',
    formData,
  )
}