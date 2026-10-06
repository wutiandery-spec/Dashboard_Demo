import request from '@/api/request'
import { createCrudApi } from '@/api/factory'

const roleApi = createCrudApi('role')

export const getRoleList = roleApi.list
export const addRole = roleApi.add
export const updateRole = roleApi.update
export const deleteRole = roleApi.remove
export const updateRoleStatus = roleApi.updateStatus

/** 配置角色权限 */
export function setRoleRules(id: number, rule_ids: number[]) {
  return request.post('/role/set_rules', { id, rule_ids })
}
