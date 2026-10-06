import { createCrudApi } from '@/api/factory'

const memberApi = createCrudApi('user')

export const getMemberList = memberApi.list
export const addMember = memberApi.add
export const updateMember = memberApi.update
export const deleteMember = memberApi.remove
export const updateMemberStatus = memberApi.updateStatus
