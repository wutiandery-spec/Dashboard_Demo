import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  /* 应用状态管理 */
  state: () => ({
    isCollapse: false,
    cachedViews: [] as string[],
  }),
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    updateCachedViews(names: string[]) {
      this.cachedViews = names
    },
  },
})
