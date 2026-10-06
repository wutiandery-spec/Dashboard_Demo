import { createCrudApi } from '@/api/factory'

const levelApi = createCrudApi('user_level')

export const getLevelList = levelApi.list
export const addLevel = levelApi.add
export const updateLevel = levelApi.update
export const deleteLevel = levelApi.remove
export const updateLevelStatus = levelApi.updateStatus
