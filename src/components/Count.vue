<template>
<div class="count">
    <h2>当前计数为:{{ CountStore.sum }}</h2>
<select v-model.number="n">
    <option value="1"> 1 </option>
    <option value="2"> 2 </option>
    <option value="3"> 3 </option>
</select>
<button @click="add">+</button>
<button @click="minus">-</button>

</div>
</template>
<script lang="ts" setup name="count">
import { ref } from 'vue';
import { useCountStore } from '@/store/count';
const CountStore = useCountStore()

let sum = ref(0)
let n  =ref(1)
function add(){
    sum.value += n.value
}
function minus(){
    sum.value -= n.value
}
</script>
<style scoped>
.count{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
button,select{
    width: 35px;
    height: 25px;
    margin: 10px;
}
</style>


