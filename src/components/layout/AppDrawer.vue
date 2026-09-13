<template>
  <el-drawer
    :model-value="modelValue"
    :title="title"
    :direction="direction"
    :size="size"
    :close-on-click-modal="closeOnClickModal"
    :append-to-body="appendToBody"
    :class="customClass"
    :before-close="beforeClose"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    @update:model-value="handleVisibleChange"
    @open="emit('open')"
    @opened="emit('opened')"
    @close="emit('close')"
    @closed="emit('closed')"
  >
    <!-- 内容：默认插槽完全由父组件控制 -->
    <slot />
  </el-drawer>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    // 控制显示/隐藏
    modelValue: boolean
    // 标题文本（当未传入 title 插槽时显示）
    title?: string
    // 抽屉打开方向
    direction?: 'rtl' | 'ltr' | 'ttb' | 'btt'
    // 抽屉宽度（左右方向时）或高度（上下方向时）
    size?: string | number
    // 是否点击遮罩层关闭
    closeOnClickModal?: boolean
    // 是否插入到 body 元素下
    appendToBody?: boolean
    // 自定义类名
    customClass?: string
    // 关闭前的回调（返回 false / reject 可阻止关闭）
    beforeClose?: (done: () => void) => void
    // 是否按 Esc 键关闭
    closeOnPressEscape?: boolean
    // 是否显示右上角关闭按钮
    showClose?: boolean
  }>(),
  {
    modelValue: false,
    title: '',
    direction: 'rtl',
    size: '50%',
    closeOnClickModal: false,
    appendToBody: false,
    customClass: '',
    beforeClose: undefined,
    closeOnPressEscape: true,
    showClose: true,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'open',
  'opened',
  'close',
  'closed',
])

function handleVisibleChange(val: boolean) {
  emit('update:modelValue', val)
}
</script>
