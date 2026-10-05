/** 解包后端分页响应：{ data: { list, totalCount } } */
export function pickList<T = any>(res: any): { list: T[]; total: number } {
  const list = Array.isArray(res?.data?.list) ? (res.data.list as T[]) : []
  return { list, total: Number(res?.data?.totalCount ?? list.length) }
}
