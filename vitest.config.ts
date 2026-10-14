import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

/**
 * 单测配置：复用 vite.config.ts 的插件与路径别名，
 * 保证测试环境与运行时一致（尤其是按需自动导入的 ref / computed 等 API）。
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      include: ['src/**/__tests__/**/*.test.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json-summary'],
        include: [
          'src/utils/**/*.ts',
          'src/hooks/**/*.ts',
          'src/router/menu.ts',
          'src/api/demo/index.ts',
        ],
        // 覆盖率门槛：低于该水平直接判定失败，避免测试随迭代失效
        thresholds: {
          statements: 85,
          lines: 85,
          functions: 85,
          branches: 70,
        },
      },
    },
  }),
)
