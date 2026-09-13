/**
 * 全局共享类型定义
 */

/** 菜单项（与后端 /getinfo 返回的 menus 结构对齐） */
export interface MenuItem {
  id?: number | string
  name?: string
  title?: string
  icon?: string
  frontpath?: string
  permission?: string
  auth?: string
  ruleName?: string
  rule_name?: string
  code?: string
  child?: MenuItem[]
  [key: string]: any
}

/** 用户信息 */
export interface UserInfo {
  username?: string
  nickname?: string
  avatar?: string
  menus?: MenuItem[]
  permissions?: string[]
  authList?: string[]
  ruleNames?: string[]
  [key: string]: any
}

/** 登录接口返回结果 */
export interface LoginResult {
  code?: number
  status?: number
  token?: string
  message?: string
  msg?: string
  data?: {
    token?: string
    [key: string]: any
  }
  [key: string]: any
}

/** 通用接口响应包装 */
export interface ApiResponse<T = unknown> {
  code?: number
  status?: number
  message?: string
  msg?: string
  data: T
}
