/// <reference types="vite/client" />

// 说明：.vue 模块由 vue-tsc / Volar 原生支持类型推导，无需声明 shim。
// 此处仅保留 Vite 客户端类型（import.meta.env 等）与 ~icons/* 图标模块类型。
declare module '~icons/*' {
  import type { Component } from 'vue'
  const component: Component
  export default component
}

/** 构建环境变量：VITE_DEMO=1 时启用演示模式（本地数据回放） */
interface ImportMetaEnv {
  readonly VITE_DEMO?: string
}
