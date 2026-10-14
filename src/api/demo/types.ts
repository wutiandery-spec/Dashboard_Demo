/**
 * 演示模式（离线回放）数据结构
 *
 * 演示数据由 scripts/record-demo.mjs 从真实后端录制生成，
 * 运行时由 demoAdapter 按「方法 + 路径 + 参数」匹配并返回，
 * 使静态托管（GitHub Pages）在没有可用后端时仍能完整演示。
 */

export type DemoEndpointKind = 'static' | 'paged' | 'stub'

export interface DemoEndpoint {
  /** 便于人工检索的说明，如「商品列表 · 全部」 */
  note: string
  method: string
  /** 归一化路径：数字段统一记为 :id，分页段记为 {page} */
  pattern: string
  /** 录制时的非分页参数（搜索类参数不录入，运行时按子集匹配回退） */
  params?: Record<string, string>
  /** 参数可变（如 category_id），匹配不到时忽略参数直接返回该条数据 */
  ignoreParams?: boolean
  kind: DemoEndpointKind
  /** static / stub：完整响应体 */
  data?: unknown
  /** paged：除 data.list、data.totalCount 之外的响应字段 */
  envelope?: Record<string, unknown>
  /** paged：录制到的全量数据，运行时按 page/limit 切片 */
  list?: unknown[]
  /** paged：后端返回的总条数 */
  totalCount?: number
  /** paged：录制时后端真实的记录总数（演示数据只保留子集，仅作参考） */
  sourceTotalCount?: number
}

export interface DemoFixtures {
  /** 录制时间 */
  generatedAt: string
  /** 录制时使用的后端地址 */
  baseURL: string
  endpoints: DemoEndpoint[]
}
