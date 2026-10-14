/**
 * 演示模式开关
 *
 * 由构建环境变量控制：`VITE_DEMO=1` 时启用本地数据回放，
 * 用于 GitHub Pages 等无法访问后端的静态托管环境。
 */
export const isDemoMode = import.meta.env.VITE_DEMO === '1'

export default isDemoMode
