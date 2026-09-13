// eslint.config.js — ESLint 9 flat config（ESM）
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/src/auto-imports.d.ts', //
      '**/src/components.d.ts', //
      '**/.vscode/**',
      '备份/**',
      '**/备份/**',
    ],
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    name: 'app/custom-rules',
    rules: {
      // 路由级视图文件（login.vue / list.vue / 404.vue 等）允许单词命名
      'vue/multi-word-component-names': 'off',
      // 后端接口数据字段动态、类型结构不固定，允许使用 any（见 src/type/index.ts）
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  skipFormatting,
)
