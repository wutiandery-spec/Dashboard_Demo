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

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.directive('permission', permission)
app.use(pinia)
app.use(router)
app.mount('#app')