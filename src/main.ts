//main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/App.vue'
import '@/assets/styles/index.css'
import router from './router'
import { registerElementPlusIcons } from '@/icons/element-plus-icons'
import { permission } from '@/directive/permission'

const app = createApp(App)

registerElementPlusIcons(app)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.directive('permission', permission)
app.use(pinia)
app.use(router)
app.mount('#app')
