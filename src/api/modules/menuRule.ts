import axios from '@/api/request'
export interface FormType {
    rule_id?: number,
    menu?: number
    name?: string
    condition?: string
    method?: string
    status?: number
    order?: number
    icon?: string
    frontpath?: string
}
export function getMenuRuleList() {
    return axios.get('/rule/1')
}
export function addMenuRuleList(form: FormType) {
    return axios.post('/rule', form)
}
export function setMenuRuleList(form: FormType) {
    return axios.post('/rule/193', form)
}
export function deleteMenuRuleList(id:number) {
    return axios.post(`/rule/${id}/delete`)
}
export function updateMenuRuleList(id:number) {
    return axios.post(`/rule/${id}/update_status`)
}
