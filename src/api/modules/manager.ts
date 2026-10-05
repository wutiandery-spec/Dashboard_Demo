import { createCrudApi } from '@/api/factory'

const managerApi = createCrudApi('manager')

export function getManagerList(page: number, limit: number, keyword?: string) {
  return managerApi.list(page, keyword ? { limit, keyword } : { limit })
}

export const addManagerList = managerApi.add
export const setManager = managerApi.update
export const deleteManagerList = managerApi.remove
export const updateManagerState = managerApi.updateStatus
