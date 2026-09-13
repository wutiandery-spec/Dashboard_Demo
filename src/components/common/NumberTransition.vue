<template>
  <span>{{ displayText }}</span>
</template>

<script setup lang="ts">
// 数字滚动动画：基于 @vueuse/core 的 useTransition 实现
import { useTransition } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    value: number
    precision?: number
  }>(),
  { precision: 0 },
)

const source = ref(0)
const output = useTransition(source, { duration: 1000 })

// 千分位格式化
const displayText = computed(() =>
  output.value.toFixed(props.precision).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
)

// 数值变化时自动从当前值过渡到新值
watch(
  () => props.value,
  (val) => {
    source.value = val
  },
  { immediate: true },
)
</script>
