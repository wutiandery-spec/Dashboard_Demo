<template>
  <div class="flex items-center w-full bg-gray-50 h-10 px-2">
    <div class="flex-1 min-w-0">
      <el-tabs
        v-model="activePath"
        type="card"
        class="tags-compact"
        @tab-remove="removeTab"
        @tab-click="handleTabClick"
      >
        <el-tab-pane
          v-for="item in tagList"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.path !== '/admin/index'"
          class="bg-white"
        />
      </el-tabs>
    </div>
    <div v-if="tagList.length !== 0">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right mr-2" size="20"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="closeOther">关闭其它</el-dropdown-item>
            <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/app'
import type { TabPaneName, TabsPaneContext } from 'element-plus'

interface TagItem {
  path: string
  title: string
}

/** 标签栏最大存活数，超限时优先淘汰非当前激活的最旧项，避免无界增长 */
const MAX_TAGS = 15

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const activePath = ref('')
const tagList = ref<TagItem[]>([{ path: '/admin/index', title: '首页' }])

/** 从路由路径推导组件名（与 SFC 默认 name=文件名 的约定一致） */
const pathToComponentName = (path: string): string => path.split('/').filter(Boolean).pop() || 'index'

/** 将当前存活标签同步为 keep-alive 白名单，供 AdminLayout 联动缓存 */
const syncCachedViews = () => {
  appStore.updateCachedViews(tagList.value.map((t) => pathToComponentName(t.path)))
}

// 路由变化时追加标签（首页等已访问页自动收集）
const addTag = () => {
  const path = route.path as string
  const title = (route.meta.title as string) || '页面'
  if (!path.startsWith('/admin')) return
  if (!tagList.value.some((t) => t.path === path)) {
    tagList.value.push({ path, title })
    // 控制标签数量：超限时优先淘汰非当前激活的最旧项
    if (tagList.value.length > MAX_TAGS) {
      const removableIdx = tagList.value.findIndex((t) => t.path !== path)
      if (removableIdx > -1) tagList.value.splice(removableIdx, 1)
    }
  }
  activePath.value = path
  syncCachedViews()
}

watch(() => route.path, addTag, { immediate: true })

const handleTabClick = (pane: TabsPaneContext) => {
  const path = String(pane.paneName)
  if (path && path !== route.path) router.push(path)
}

const removeTab = (name: TabPaneName) => {
  const path = String(name)
  const idx = tagList.value.findIndex((t) => t.path === path)
  if (idx > -1) tagList.value.splice(idx, 1)
  // 关闭的是当前激活页时，跳转到相邻标签或首页
  if (route.path === path) {
    const next = tagList.value[idx] ?? tagList.value[idx - 1]
    router.push(next ? next.path : '/admin/index')
  }
  syncCachedViews()
}

const handleCommand = (command: string | number | object) => {
  if (command === 'closeAll') {
    tagList.value = [{ path: '/admin/index', title: '首页' }]
    router.push('/admin/index')
  } else if (command === 'closeOther') {
    const current = route.path as string
    tagList.value = tagList.value.filter((t) => t.path === '/admin/index' || t.path === current)
    activePath.value = current
  }
  syncCachedViews()
}
</script>

<style scoped>
*:focus-visible {
  outline: none;
}
:deep(.el-tabs__item) {
  height: 32px;
}
:deep(.el-tabs__header) {
  border: none !important;
  margin: 0;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.el-tabs__item) {
  background-color: white;
  border-radius: 8px;
  margin: 3px 5px;
  border: none !important;
  flex-shrink: 0;
}
:deep(.el-tabs__nav-prev) {
  font-size: 20px;
  line-height: 34px;
}
:deep(.el-tabs__nav-next) {
  font-size: 20px;
  line-height: 34px;
}
</style>
