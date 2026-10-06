<template>
  <el-card>
    <template #header>
      <div class="flex items-center justify-between">
        <el-button type="primary" @click="handleAdd">新增角色</el-button>
        <el-tooltip content="刷新数据" effect="light">
          <el-button link @click="getList"><el-icon size="20"><Refresh /></el-icon></el-button>
        </el-tooltip>
      </div>
    </template>

    <el-table v-loading="loading" :data="dataList" style="width: 100%" size="default">
      <el-table-column label="角色名称" prop="name" min-width="160" />
      <el-table-column label="描述" prop="desc" min-width="200" show-overflow-tooltip />
      <el-table-column label="权限数" width="100">
        <template #default="{ row }">{{ row.rules?.length ?? 0 }}</template>
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template #default="{ row }">
          <el-switch :loading="row.statusLoading" :model-value="row.status" :active-value="1" :inactive-value="0"
            @change="handleStatusChange($event, row)" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template #default="{ row }">
          <el-button size="small" link type="primary" @click="handleEdit(row)">修改</el-button>
          <el-button size="small" link type="primary" @click="openPermission(row)">配置权限</el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(row)">
            <template #reference>
              <el-button size="small" link type="primary">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="flex justify-center">
        <el-pagination :current-page="page" layout="prev, pager, next" :total="total" @current-change="handleChange" />
      </div>
    </template>
  </el-card>

  <AppDrawer v-model="visible" :title="title" size="30%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="90px">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="form.desc" type="textarea" :rows="3" placeholder="请输入角色描述" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status" :active-value="1" :inactive-value="0" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form>
  </AppDrawer>

  <Dialog v-model:visible="permVisible" title="配置权限" width="40%">
    <el-tree ref="permTreeRef" :data="ruleTree" :props="{ label: 'name', children: 'child' }" node-key="id"
      show-checkbox default-expand-all class="max-h-[60vh] overflow-auto" :check-strictly='true'/>
    <template #footer>
      <div class="flex justify-end">
        <el-button @click="permVisible = false">取消</el-button>
        <el-button type="primary" @click="savePermission">确认</el-button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue'
import Dialog from '@/components/common/Dialog.vue'
import { getRoleList, addRole, updateRole, deleteRole, updateRoleStatus, setRoleRules } from '@/api/modules/role'
import { getMenuRuleList } from '@/api/modules/menuRule'
import { useCrudTable } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

const {
  dataList,
  loading,
  total,
  page,
  visible,
  formRef,
  form,
  title,
  getList,
  handleChange,
  handleAdd,
  handleEdit,
  handleDelete,
  handleClose,
  handleConfirm,
  handleStatusChange,
} = useCrudTable({
  api: {
    list: getRoleList,
    add: addRole,
    update: updateRole,
    remove: deleteRole,
    updateStatus: updateRoleStatus,
  },
  defaults: () => ({ name: '', desc: '', status: 1 }),
  titles: ['修改角色', '新增角色'],
  mapRow: (row) => ({ ...row, statusLoading: false }),
  toForm: (row) => ({ name: row.name, desc: row.desc, status: row.status }),
})

/** 配置权限 */
const permVisible = ref(false)
const permTreeRef = ref()
const ruleTree = ref<any[]>([])
const permRoleId = ref(0)

const openPermission = async (row: any) => {
  permRoleId.value = row.id
  ruleTree.value = (await getMenuRuleList()).data.list
  permVisible.value = true
  await nextTick()
  permTreeRef.value?.setCheckedKeys((row.rules ?? []).map((item: { id: number }) => item.id))
}

const savePermission = async () => {
  const rule_ids = [
    ...(permTreeRef.value?.getCheckedKeys() ?? []),
    ...(permTreeRef.value?.getHalfCheckedKeys() ?? []),
  ]
  await setRoleRules(permRoleId.value, rule_ids)
  toast.success('权限配置成功')
  getList()
  permVisible.value = false
}
</script>
