<template>
  <el-container class="h-screen">
    <el-header class="h-15! p-0! shrink-0">
      <AppHeader :is-mobile="isMobile" @toggle="handleToggleNav" />
    </el-header>
    <el-container class="flex-1 min-h-0">
      <el-drawer
        v-if="isMobile"
        v-model="drawerVisible"
        direction="ltr"
        size="200px"
        :with-header="false"
      >
        <AppSidebar @navigate="drawerVisible = false" />
      </el-drawer>
      <el-aside
        v-else
        class="h-full! overflow-hidden transition-[width] duration-300"
        :width="appStore.isCollapse ? '64px' : '200px'"
      >
        <AppSidebar />
      </el-aside>

      <el-container class="min-w-0 flex-1 flex-col">
        <el-header class="h-10! p-0! shrink-0">
          <AppTabs />
        </el-header>
        <el-main class="overflow-auto bg-gray-50">
          <router-view v-slot="{ Component }">
            <keep-alive :max="10" :include="appStore.cachedViews">
              <Component :is="Component"></Component>
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import AppTabs from './AppTabs.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const mqMobile = window.matchMedia('(max-width: 767px)')
const isMobile = ref(mqMobile.matches)
const drawerVisible = ref(false)
const onMqChange = (e: MediaQueryListEvent) => {
  isMobile.value = e.matches
  if (!e.matches) drawerVisible.value = false
}
mqMobile.addEventListener('change', onMqChange)
onBeforeUnmount(() => mqMobile.removeEventListener('change', onMqChange))

const handleToggleNav = () => {
  if (isMobile.value) drawerVisible.value = true
  else appStore.toggleCollapse()
}
</script>

<style scoped></style>
