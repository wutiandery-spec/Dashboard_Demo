<template>
  <el-dialog 
  :model-value="visible" 
  :title="title" 
  :width="width"
  :modal-penetrable='modalPenetrable'
  :close-on-click-modal="closeOnModal"
  :close-on-press-escape="closeOnEsc"
  align-center
  @update:model-value="handleChange"
  @close="emit('close')"
  >
  <slot />
  <slot name="footer"/>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    visible:boolean
    title?:string,
    width?:string | number
    modalPenetrable?:boolean
    closeOnModal?:boolean
    closeOnEsc?:boolean
  }>(),{
    title:'',
    width:'30%',
    modalPenetrable:false,
    closeOnModal:false,
    closeOnEsc:false,
    visible:false
  }
)
const emit = defineEmits<{
  'update:visible': [visible: boolean],
  'close': []
}>()
const handleChange = (newValue:boolean) => {
  emit('update:visible',newValue)
}

</script>