import axios from '@/api/request'
import type { ApiResponse } from '@/type'

export interface ImageClassItem {
  id: number
  name: string
  order: number
  image_count: number
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

export function addImageClass(name: string,order: number) {
  return axios.post(`/image_class`, {name,order}) as Promise<ImageClassActionResponse>
}

export function setImageClass(name: string, order: number, id: number) {
  return axios.post(`/image_class/${id}`, {name,order}) as Promise<ImageClassActionResponse>
}
