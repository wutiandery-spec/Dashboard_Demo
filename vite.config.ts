//vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import vueDevTools from 'vite-plugin-vue-devtools'
import extend from 'vite-plugin-vue-setup-extend'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    extend(),
    tailwindcss(),
    AutoImport({
      imports: [
        'vue', // 自动导入 Vue 相关函数
        'vue-router', // 自动导入 Vue Router 相关函数
        // 如果需要，可以在这里添加更多库，如 'pinia', '@vueuse/core'
      ],
      // Element Plus 按需自动导入 ElMessage / ElMessageBox / ElLoading 等 API 及其样式
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),

    // 2. 自动导入组件
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          // 配置图标集合的前缀，例如 'i-', 使用时为 <i-ep-accessibility /> ep 即 Element Plus 图标集
          prefix: 'i',
          enabledCollections: ['carbon', 'mdi', 'ep']
        })
      ],
      dts: 'src/components.d.ts', 
    }),

    // 3. 图标插件
    Icons({
      autoInstall: true,
      compiler: 'vue3', 
    }),
  ],
  base: '/Dashboard_Demo/',
  server: {
    proxy: {
      '/api': {
        target: 'http://ceshi13.dishait.cn/admin', 
        changeOrigin: true,              
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  },
  resolve: {
    alias: {
      '@': import.meta.dirname + '/src',
      '@components': import.meta.dirname + '/src/components',
      '@utils': import.meta.dirname + '/src/utils',
    }
  },
})
