<template>
  <span>{{ displayText }}</span>
</template>

<script setup lang="ts">
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

const displayText = computed(() =>
  output.value.toFixed(props.precision).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
)

watch(
  () => props.value,
  (val) => {
    source.value = val
  },
  { immediate: true },
)
</script>
