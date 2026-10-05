import request from '@/api/request'
import { createCrudApi } from '@/api/factory'

export interface FormType {
  rule_id?: number | ''
  menu?: number | ''
  name?: string
  condition?: string
  method?: string
  status?: number
  order?: number
  icon?: string
  frontpath?: string
}

const ruleApi = createCrudApi('rule')

export const getMenuRuleList = () => request.get('/rule/1')
export const addMenuRuleList = ruleApi.add
export const setMenuRuleList = ruleApi.update
export const deleteMenuRuleList = ruleApi.remove
export const updateMenuRuleStatus = ruleApi.updateStatus
