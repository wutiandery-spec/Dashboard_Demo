<template>
    <el-card shadow="never">
        <template #header>
            <div class="flex justify-between">
                <span>{{ title }}</span>
                <el-tag type="danger">{{ tag }}</el-tag>
            </div>
        </template>
       <el-row>
         <el-col :span="6" v-for="(item, index) in dat" :key="index">
            <el-card shadow="hover" class="border-0! bg-gray-50! mr-3">
                <div class="flex flex-col items-center">
                    <span class="text-xl">{{ item.value }}</span>
                    <span class="text-sm text-gray-500">{{ item.label }}</span>
                </div>
            </el-card>
        </el-col>
       </el-row>
    </el-card>
</template>

<script setup lang="ts">
defineProps(['title', 'tag', 'dat'])
</script>