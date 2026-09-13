import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isCollapse: false,
    // keep-alive 白名单：当前存活标签页对应的组件名集合
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
