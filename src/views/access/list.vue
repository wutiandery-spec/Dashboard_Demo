<template>
    <el-card>
        <template #header>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="addRules">新增</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="handleChange">
                        <el-icon size="20">
                            <Refresh />
                        </el-icon>
                    </el-button>
                </el-tooltip>
            </div>
        </template>
        <el-tree :data="dataList" :props="{ label: 'name', children: 'child' }" empty-text="空" v-loading="loading"
            node-key="id" :default-expanded-keys="expandedKeys"
            >
            <template #default="{ node, data }">
                <div class="flex gap-2">
                    <el-tag size="small" :type="data.menu ? 'primary' : 'info'">{{ data.menu ? '菜单' : '权限' }}</el-tag>
                    <el-icon v-if="data.icon" size="18" >
                        <component :is="data.icon"></component>
                    </el-icon>
                    <span>{{ data.name }}</span>
                </div>
                <div class="ml-auto">
                    <el-switch size="default" :model-value="data.status" :active-value="1" :inactive-value="0" class="mr-3"></el-switch>
                    <el-button size="default" link type="primary">修改</el-button>
                    <el-button size="default" link type="primary">新增</el-button>
                    <el-button size="default" link type="primary">删除</el-button>
                </div>
            </template>
        </el-tree>

    </el-card>
</template>

<script lang="ts" setup>
import { getMenuRuleList, setMenuRuleList, addMenuRuleList, deleteMenuRuleList, updateMenuRuleList, type FormType } from '@/api/modules/menuRule'

const loading = ref(false)
const expandedKeys = ref([])
const dataList = ref<[{ name: string, child: object }] | []>([])
const getData = async () => {
    loading.value = true
    try {
        const res = await getMenuRuleList()
        dataList.value = res.data.list
        expandedKeys.value = res.data.list.map((item: any) => item.id)
    } finally {
        loading.value = false
    }
}
getData()
const addRules = () => { }
const handleChange = () => { }

</script>

<style scoped>
:deep(.el-tree-node__content){
    padding: 20px 0;
}
</style>