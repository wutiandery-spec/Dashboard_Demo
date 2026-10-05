import { createCrudApi } from '@/api/factory'

const noticeApi = createCrudApi('notice')

export const getNoticeList = noticeApi.list
export const addNoticeList = noticeApi.add
export const setNoticeList = noticeApi.update
export const deleteNoticeList = noticeApi.remove
