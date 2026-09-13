import axios from '@/api/request'
export function login(username: string, password: string | number) {
  return axios.post('/login', { username, password })
}

export function getInfo() {
  return axios.post('/getinfo')
}
export function updatePassword(oldpassword: string, password: string, repassword: string) {
  return axios.post('/updatepassword', { oldpassword, password, repassword })
}
