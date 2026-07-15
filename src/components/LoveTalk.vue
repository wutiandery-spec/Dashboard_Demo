<template>
<div class="lovetalk">
<button @click="getLoveTalk">点击获取一条土味情话</button>
<ul><li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li></ul>


</div>
</template>
<script lang="ts" setup name="lovetalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
const talkList = reactive([
    {title:'你闻到空气中有烧焦的味道吗？那是我的心在为你燃烧',id:'gadsad'},
    {title:'和你在一起的时候，不想有皎洁的月光，路灯最好也不要亮，巴不得整个世界都暗一点，这样才敢吻上你的脸。',id:'hsdasd'},
    {title:'今天为什么是阴天？因为太阳见了你，害羞的躲进了云朵。',id:'gasdads'},
])

async function getLoveTalk(){
    const {data:{data:{content:title}}} = await axios.get('https://api.ruseo.cn/api/saylove')
    let obj = {title,id:nanoid()}
    talkList.unshift(obj)
    
}


</script>
<style scoped>
.lovetalk{
    background-color: orange;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
}

</style>


