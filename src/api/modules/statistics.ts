import axios from '@/api/request'
export function getStatistics1() {
    return axios.get('/statistics1')
}
export function getStatistics2() {
    return axios.get('/statistics2')
}
export function getStatistics3(type:string) {
    return axios.get('/statistics3' + '#' + type)
}