import axios from '@/api/request'
export function getManagerList(page: number, limit: number, keyword?: string) {
    let parms = {}
    if (keyword) {
        parms = {limit,keyword}
    }else{
        parms = {limit}
    }
    return axios.get(`/manager/${page}`, { params: parms })
}
export function addManagerList(data: any) {
    return axios.post(`/manager`, data)
}
export function setManager(id: number, data:any) {
    return axios.post(`/manager/${id}`, data)
}
export function deleteManagerList(id:number) {
    return axios.post(`/manager/${id}/delete`,)
}
export function updateManagerState(id:number,status:0 | 1) {
    return axios.post(`/manager/${id}/update_status`,{status})
}