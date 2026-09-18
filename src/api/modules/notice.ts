import axios from '@/api/request'
export function getNoticeList (page:number){
    return axios.get(`/notice/${page}`)
}
export function addNoticeList (form:{}){
    return axios.post(`/notice`,form)
}
export function setNoticeList (id:number,form:{}){
    return axios.post(`/notice/${id}`,form)
}
export function deleteNoticeList (id:number){
    return axios.post(`/notice/${id}/delete`)
}