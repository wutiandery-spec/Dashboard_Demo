<template>
    <el-card>
        <template #header>
            <div class="flex items-center justify-between">
                <el-button type="primary" @click="handleAdd">新增权限</el-button>
                <el-tooltip content="刷新数据" effect="light">
                    <el-button link @click="getList">
                        <el-icon size="20">
                            <Refresh />
                        </el-icon>
                    </el-button>
                </el-tooltip>
            </div>
        </template>
        <el-tree :data="dataList" :props="{ label: 'name', children: 'child' }" empty-text="空" v-loading="loading"
            node-key="id" :default-expanded-keys="expandedKeys">
            <template #default="{ data }">
                <div class="flex gap-2">
                    <el-tag size="small" :type="data.menu ? 'primary' : 'info'">{{ data.menu ? '菜单' : '权限' }}</el-tag>
                    <el-icon v-if="data.icon" size="18">
                        <component :is="data.icon"></component>
                    </el-icon>
                    <span>{{ data.name }}</span>
                </div>
                <div class="ml-auto">
                    <el-switch size="default" :model-value="data.status" :inactive-value="0" :active-value="1"
                        :loading="data.statusLoading" @change="handleStatusChange($event, data)" @click.stop
                        class="mr-3">
                    </el-switch>
                    <el-button size="default" link type="primary" @click.stop="handleEdit(data)">修改</el-button>
                    <el-button size="default" link type="primary" @click.stop="handleAdd">增加权限</el-button>
                    <el-popconfirm title="确认删除吗?" @confirm="handleDelete(data)">
                        <template #reference>
                            <el-button :loading="data.statusLoading" size="default" link type="primary" @click.stop>
                                删除
                            </el-button>
                        </template>
                    </el-popconfirm>
                </div>
            </template>
        </el-tree>

        <AppDrawer v-model="visible" @close="handleClose" :title="title">
            <el-form ref="formRef" :model="form" label-width="auto">
                <el-form-item required label="上级菜单" size="default">
                    <el-select v-model="form.rule_id" placeholder="请选择" style="width: 240px">
                        <el-option v-for="item in dataList" :key="item.id" :label="item.name" :value="item.id" />
                    </el-select>
                </el-form-item>
                <el-form-item required label="菜单/规则" size="default">
                    <el-radio-group v-model="form.menu">
                        <el-radio :value="1" size="large">菜单</el-radio>
                        <el-radio :value="0" size="large">规则</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item required label="名称" size="default">
                    <el-input v-model="form.name" placeholder="请输入" style="width: 240px" />
                </el-form-item>
                <el-form-item required label="图标" v-if="form.menu" size="default">
                    <el-icon size="20px" v-if='form.icon' class='mr-2'>
                        <component :is="form.icon" />
                    </el-icon>
                    <el-select v-model="form.icon" placeholder="请选择" style="width: 240px">
                        <el-option v-for="(item, index) in iconList" :key="index" :label="item" :value="item"
                            class='flex items-center gap-2'>
                            <el-icon size="20px">
                                <component :is="item" />
                            </el-icon>
                            <span>{{ item }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item required label="后端规则" v-else size="default">
                    <el-input v-model="form.condition" placeholder="请输入" style="width: 240px" />
                </el-form-item>
                <el-form-item required label="前端路由" v-if="form.menu" size="default">
                    <el-input v-model="form.frontpath" placeholder="请输入" style="width: 240px" />
                </el-form-item>
                <el-form-item required v-else label="请求方式" size="default">
                    <el-select v-model="form.method" placeholder="请选择" style="width: 240px">
                        <el-option label="GET" value="GET" />
                        <el-option label="POST" value="POST" />
                        <el-option label="PUT" value="PUT" />
                        <el-option label="DELETE" value="DELETE" />
                    </el-select>
                </el-form-item>
                <el-form-item required label="排序" size="default">
                    <el-input-number v-model="form.order" :min="1" :max="1000" />
                </el-form-item>
                <el-form-item required>
                    <el-button type="primary" @click="handleConfirm">确认</el-button>
                    <el-button @click="handleClose">取消</el-button>
                </el-form-item>
            </el-form>
        </AppDrawer>
    </el-card>
</template>

<script lang="ts" setup>
import AppDrawer from '@/components/layout/AppDrawer.vue'
import {
    addMenuRuleList,
    deleteMenuRuleList,
    getMenuRuleList,
    setMenuRuleList,
    updateMenuRuleStatus,
} from '@/api/modules/menuRule'
import { useCrudTable } from '@/hooks/useCrudTable'

const iconList = ['House', 'Odometer', 'Unlock', 'Setting']
const expandedKeys = ref<number[]>([])

const {
    dataList,
    loading,
    visible,
    formRef,
    form,
    title,
    getList,
    handleAdd,
    handleEdit,
    handleDelete,
    handleClose,
    handleConfirm,
    handleStatusChange,
} = useCrudTable({
    api: {
        list: getMenuRuleList,
        add: addMenuRuleList,
        update: setMenuRuleList,
        remove: deleteMenuRuleList,
        updateStatus: updateMenuRuleStatus,
    },
    defaults: () => ({
        rule_id: '',
        menu: 1,
        name: '',
        condition: '',
        method: '',
        status: 1,
        order: 50,
        icon: '',
        frontpath: '',
    }),
    titles: ['修改', '新增'],
    onData: (data) => {
        expandedKeys.value = data.list.map((item: { id: number }) => item.id)
    },
    mapRow: (row) => ({ ...row, statusLoading: false }),
    toForm: (row) => ({
        rule_id: row.rule_id,
        menu: row.menu,
        name: row.name,
        condition: row.condition,
        method: row.method,
        status: row.status,
        order: row.order,
        icon: row.icon,
        frontpath: row.frontpath,
    }),
})
</script>

<style scoped>
:deep(.el-tree-node__content) {
    padding: 20px 0;
}
</style>
