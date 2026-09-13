<template>
  <el-menu
    ref="menuRef"
    :default-active="activeMenu"
    :default-openeds="defaultOpeneds"
    class="el-menu-vertical-demo h-full! overflow-y-auto"
    :collapse="appStore.isCollapse"
    @select="handleSelect"
    :collapse-transition="false"
    :unique-opened="true"
  >
    <template v-for="item in menuList" :key="item.id ?? item.frontpath ?? item.name">
      <el-menu-item v-if="!item.child || item.child.length === 0" :index="getMenuIndex(item)">
        <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>

      <el-sub-menu v-else :index="getMenuIndex(item)">
        <template #title>
          <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="child in item.child"
          :key="child.id ?? child.frontpath ?? child.name"
          :index="getMenuIndex(child)"
        >
          <el-icon v-if="child.icon"><component :is="child.icon" /></el-icon>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { findMenuOpenKeys, getMenuIndex, getMenuTree } from '@/router/menu'

const emit = defineEmits<{ (e: 'navigate'): void }>()

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const menuRef = ref<any>(null)
const menuList = computed(() => getMenuTree(userStore.userInfo?.menus))
const activeMenu = computed(() => String(route.meta?.activeMenu || route.path))
const defaultOpeneds = computed(() => findMenuOpenKeys(menuList.value, activeMenu.value))

const syncMenuOpenState = async (nextKeys: string[], previousKeys: string[] = []) => {
  await nextTick()

  if (!menuRef.value || appStore.isCollapse) {
    return
  }

  try {
    previousKeys.filter((key) => !nextKeys.includes(key)).forEach((key) => menuRef.value.close(key))

    nextKeys.forEach((key) => menuRef.value.open(key))
  } catch (error) {
    // 菜单元素与状态偶发不一致时避免产生未处理 Promise rejection
    console.error('同步菜单展开状态失败:', error)
  }
}

watch(
  defaultOpeneds,
  async (nextKeys, previousKeys) => {
    await syncMenuOpenState(nextKeys, previousKeys || [])
  },
  { immediate: true },
)

watch(
  () => appStore.isCollapse,
  async (isCollapse) => {
    if (!isCollapse) {
      await syncMenuOpenState(defaultOpeneds.value)
    }
  },
)

const handleSelect = (index: string) => {
  if (index && index !== route.path) {
    router.push(index)
  }
  // 移动端抽屉模式下，点击菜单后关闭抽屉
  emit('navigate')
}
</script>
