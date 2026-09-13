//main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/App.vue'
import '@/assets/styles/index.css'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {permission} from '@/directive/permission'

const app = createApp(App)

// Element Plus 组件/API 已通过 unplugin-vue-components + ElementPlusResolver 按需自动引入，
// 无需 app.use(ElementPlus) 与全量 CSS。
// 图标因侧边栏/仪表盘通过 <component :is="icon名"> 动态引用，需全局注册。
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.directive('permission', permission)
app.use(pinia)
app.use(router)
app.mount('#app')