基于 Vue 3 + TypeScript + Vite + Element Plus + Tailwind CSS v4 的中后台管理项目。
<img width="1301" height="1245" alt="image-20260915150145551" src="https://github.com/user-attachments/assets/a2b4c698-2bd6-4f66-89a4-774f9d6a1681" />
## 技术栈


| 类别 | 技术 | 版本 |
| --- | --- | --- |
| 框架 | Vue 3 | ^3.5.32 |
| 路由 | vue-router | ^5.1.0 |
| 状态管理 | Pinia + pinia-plugin-persistedstate | ^3.0.4 |
| UI 库 | Element Plus | ^2.14.3 |
| 样式 | Tailwind CSS v4 + @tailwindcss/vite | ^4.3.3 |
| 构建 | Vite（rolldown-vite） | ^8.1.5 |
| 语言 | TypeScript + vue-tsc | ~6.0.0 |
| 代码规范 | ESLint 9（flat config）+ Prettier | ^10.x / ^3.x |

## 项目结构

```
src/
├── api/                    // 接口请求层（统一管理后台接口）
│   ├── modules/            // 按模块拆分接口
│   │   ├── user.ts         // 用户模块接口（登录/信息）
│   │   └── goods.ts        // 商品模块接口
│   ├── request.ts          // axios 实例封装（拦截器、基础路径）
│   └── index.ts            // 统一导出所有 API
│
├── assets/                 // 静态资源（图片、字体、全局样式）
│   ├── styles/
│   │   └── index.css       // 全局样式入口（@import "tailwindcss"）
│   └── images/
│
├── components/             // 公共 UI 组件
│   ├── common/             // 完全通用的组件
│   ├── layout/             // 布局组件（AppHeader, AppSidebar, AppTabs, AdminLayout）
│   └── business/           // 业务公共组件
│
├── router/                 // 路由配置
│   └── index.ts
│
├── stores/                 // Pinia 状态管理
│   ├── user.ts
│   └── app.ts
│
├── utils/                  // 工具函数
├── views/                  // 页面级组件
├── App.vue                 // 根组件（el-config-provider 全局 size/z-index 配置）
└── main.ts                 // 应用入口
```
