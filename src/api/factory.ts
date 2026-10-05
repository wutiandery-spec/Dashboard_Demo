import request from '@/api/request'

/**
 * RESTful 资源接口工厂，统一以下约定：
 * GET  /{resource}/{page}          → list
 * POST /{resource}                 → add
 * POST /{resource}/{id}            → update
 * POST /{resource}/{id}/delete     → remove
 * POST /{resource}/{id}/update_status → updateStatus
 */
export function createCrudApi(resource: string) { 
  const base = `/${resource}`
  return {
    list: (page: number, params: Record<string, any> = {}) => request.get(`${base}/${page}`, { params }),
    add: (data: any) => request.post(base, data),
    update: (id: number, data: any) => request.post(`${base}/${id}`, data),
    remove: (id: number) => request.post(`${base}/${id}/delete`),
    updateStatus: (id: number, status: number) => request.post(`${base}/${id}/update_status`, { status }),
  }
}
