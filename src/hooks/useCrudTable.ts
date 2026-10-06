import type { FormInstance } from 'element-plus'
import { toast } from '@/utils/feedback'
import { pickList } from '@/utils/response'

export interface CrudApi {
  list: (page: number, params?: Record<string, any>) => Promise<any>
  add?: (data: any) => Promise<any>
  update?: (id: number, data: any) => Promise<any>
  remove?: (id: number) => Promise<any>
  updateStatus?: (id: number, status: number) => Promise<any>
}

export interface CrudTableOptions {
  api: CrudApi
  /** 每页条数，默认 10 */
  pageSize?: number
  /** 表单初始值（新增与关闭时复用） */
  defaults?: () => Record<string, any>
  /** 弹窗标题：[编辑, 新增] */
  titles?: [string, string]
  /** 提交成功文案：[编辑, 新增] */
  successText?: [string, string]
  /** 附加查询参数（搜索条件等） */
  params?: () => Record<string, any>
  /** 自定义响应解包（默认 pickList，用于裸数组/树形等非标准分页结构） */
  transform?: (res: any) => { list: any[]; total: number }
  /** 列表数据的附加处理（如保存接口返回的字典数据） */
  onData?: (data: any) => void
  /** 行数据预处理（如补充 statusLoading） */
  mapRow?: (row: any) => any
  /** 行数据回填表单 */
  toForm?: (row: any) => Record<string, any>
  /** 表单数据转提交载荷 */
  toPayload?: (form: Record<string, any>) => any
  /** 是否创建后立即加载列表，默认 true */
  immediate?: boolean
}

/** 列表页通用 CRUD 流程：加载 / 分页 / 弹窗 / 回填 / 删除 / 状态开关 / 提交 */
export function useCrudTable(options: CrudTableOptions) {
  const { api } = options
  const pageSize = options.pageSize ?? 10
  const dataList = ref<any[]>([])
  const loading = ref(false)
  const total = ref(0)
  const page = ref(1)
  const visible = ref(false)
  const editState = ref(false)
  const editId = ref(0)
  const formRef = ref<FormInstance>()
  const form = ref<Record<string, any>>(options.defaults?.() ?? {})
  const title = computed(() =>
    editState.value ? (options.titles?.[0] ?? '修改') : (options.titles?.[1] ?? '新增'),
  )

  /** 重置表单为初始值 */
  const resetForm = () => {
    form.value = options.defaults?.() ?? {}
  }

  /** 加载列表数据 */
  const getList = async () => {
    loading.value = true
    try {
      const res = await api.list(page.value, { limit: pageSize, ...options.params?.() })
      const { list, total: count } = options.transform ? options.transform(res) : pickList(res)
      dataList.value = options.mapRow ? list.map(options.mapRow) : list
      total.value = count
      options.onData?.(res.data)
    } finally {
      loading.value = false
    }
  }

  /** 切换页码并刷新 */
  const handleChange = (value: number) => {
    page.value = value
    return getList()
  }

  /** 打开新增弹窗 */
  const handleAdd = () => {
    editState.value = false
    resetForm()
    visible.value = true
  }

  /** 打开编辑弹窗并回填数据 */
  const handleEdit = (row: any) => {
    editState.value = true
    editId.value = row.id
    resetForm()
    Object.assign(form.value, options.toForm ? options.toForm(row) : row)
    visible.value = true
  }

  /** 关闭弹窗并重置表单 */
  const handleClose = () => {
    visible.value = false
    resetForm()
  }

  /** 删除并刷新列表 */
  const handleDelete = async (row: any) => {
    await api.remove?.(row.id)
    toast.remove()
    await getList()
  }

  /** 状态开关切换 */
  const handleStatusChange = async (value: string | number | boolean, row: any) => {
    const status = Number(value)
    row.statusLoading = true
    try {
      await api.updateStatus?.(row.id, status)
      row.status = status
      toast.status(Boolean(status))
    } finally {
      row.statusLoading = false
    }
  }

  /** 提交新增 / 编辑 */
  const submitForm = async () => {
    loading.value = true
    try {
      const payload = options.toPayload ? options.toPayload(form.value) : form.value
      if (editState.value) {
        await api.update?.(editId.value, payload)
      } else {
        await api.add?.(payload)
      }
      toast.success(
        editState.value ? (options.successText?.[0] ?? '修改成功') : (options.successText?.[1] ?? '增加成功'),
      )
      visible.value = false
      await getList()
    } finally {
      loading.value = false
    }
  }

  /** 表单校验通过后提交 */
  const handleConfirm = async () => {
    const formEl = formRef.value
    if (formEl && !(await formEl.validate().catch(() => false))) return
    await submitForm()
  }

  if (options.immediate !== false) getList()

  return {
    dataList,
    loading,
    total,
    page,
    pageSize,
    visible,
    editState,
    editId,
    formRef,
    form,
    title,
    getList,
    handleChange,
    handleAdd,
    handleEdit,
    handleClose,
    handleDelete,
    handleStatusChange,
    submitForm,
    handleConfirm,
  }
}
