import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useCrudTable, type CrudApi } from '@/hooks/useCrudTable'
import { toast } from '@/utils/feedback'

vi.mock('@/utils/feedback', () => ({
  toast: {
    success: vi.fn(),
    warning: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    save: vi.fn(),
    remove: vi.fn(),
    status: vi.fn(),
  },
}))

interface Row {
  id: number
  title: string
  status: number
  statusLoading?: boolean
}

function createApi(overrides: Partial<CrudApi> = {}): CrudApi {
  return {
    list: vi.fn(async () => ({
      code: 200,
      msg: 'ok',
      data: { list: [{ id: 1, title: 'a', status: 1 }], totalCount: 25 },
    })),
    add: vi.fn(async () => ({ code: 200 })),
    update: vi.fn(async () => ({ code: 200 })),
    remove: vi.fn(async () => ({ code: 200 })),
    updateStatus: vi.fn(async () => ({ code: 200 })),
    ...overrides,
  }
}

const defaults = () => ({ title: '', status: 1 })

describe('useCrudTable 列表加载', () => {
  beforeEach(() => vi.clearAllMocks())

  it('初始化时按默认分页参数加载列表', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults })
    await vi.waitFor(() => expect(table.dataList.value.length).toBe(1))

    expect(api.list).toHaveBeenCalledWith(1, { limit: 10 })
    expect(table.total.value).toBe(25)
    expect(table.loading.value).toBe(false)
  })

  it('immediate 为 false 时不在初始化阶段请求', async () => {
    const api = createApi()
    useCrudTable({ api, defaults, immediate: false })
    await Promise.resolve()
    expect(api.list).not.toHaveBeenCalled()
  })

  it('切换页码时带上新的 page 重新请求', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults })
    await table.handleChange(3)
    expect(api.list).toHaveBeenLastCalledWith(3, { limit: 10 })
    expect(table.page.value).toBe(3)
  })

  it('支持自定义分页条数与附加查询参数', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults, pageSize: 20, params: () => ({ tab: 'all' }) })
    await vi.waitFor(() => expect(api.list).toHaveBeenCalled())
    expect(api.list).toHaveBeenCalledWith(1, { limit: 20, tab: 'all' })
    expect(table.pageSize).toBe(20)
  })

  it('transform 可适配非标准响应（如裸数组）', async () => {
    const api = createApi({
      list: vi.fn(async () => ({ data: [{ id: 9, title: '裸数组', status: 1 }] })),
    })
    const table = useCrudTable({
      api,
      defaults,
      transform: (res) => ({ list: res.data ?? [], total: (res.data ?? []).length }),
    })
    await vi.waitFor(() => expect(table.dataList.value.length).toBe(1))
    expect(table.total.value).toBe(1)
  })

  it('mapRow 与 onData 扩展点都会被调用', async () => {
    const api = createApi()
    const onData = vi.fn()
    const table = useCrudTable({
      api,
      defaults,
      mapRow: (row: Row) => ({ ...row, statusLoading: false }),
      onData,
    })
    await vi.waitFor(() => expect(table.dataList.value.length).toBe(1))
    expect(table.dataList.value[0]?.statusLoading).toBe(false)
    expect(onData).toHaveBeenCalledWith({ list: [{ id: 1, title: 'a', status: 1 }], totalCount: 25 })
  })

  it('请求失败时 loading 复位且异常继续抛出', async () => {
    const api = createApi({
      list: vi.fn(async () => {
        throw new Error('网络异常')
      }),
    })
    const table = useCrudTable({ api, defaults, immediate: false })
    await expect(table.getList()).rejects.toThrow('网络异常')
    expect(table.loading.value).toBe(false)
  })
})

describe('useCrudTable 表单弹窗', () => {
  beforeEach(() => vi.clearAllMocks())

  it('新增：重置为默认值并切换到新增标题', () => {
    const table = useCrudTable({ api: createApi(), defaults, immediate: false })
    table.handleEdit({ id: 3, title: '已存在', status: 0 })
    expect(table.form.value.title).toBe('已存在')

    table.handleAdd()
    expect(table.visible.value).toBe(true)
    expect(table.editState.value).toBe(false)
    expect(table.form.value).toEqual({ title: '', status: 1 })
    expect(table.title.value).toBe('新增')
  })

  it('编辑：通过 toForm 回填指定字段并记录 id', () => {
    const table = useCrudTable({
      api: createApi(),
      defaults,
      immediate: false,
      toForm: (row: Row) => ({ title: row.title }),
      titles: ['修改商品', '新增商品'],
    })
    table.handleEdit({ id: 7, title: '测试商品', status: 1 })

    expect(table.editId.value).toBe(7)
    expect(table.editState.value).toBe(true)
    // 回填只覆盖 toForm 返回的字段，其余保留表单默认值
    expect(table.form.value).toEqual({ title: '测试商品', status: 1 })
    expect(table.title.value).toBe('修改商品')
    expect(table.visible.value).toBe(true)
  })

  it('关闭弹窗时恢复默认值', () => {
    const table = useCrudTable({ api: createApi(), defaults, immediate: false })
    table.handleEdit({ id: 1, title: '内容', status: 1 })
    table.handleClose()
    expect(table.visible.value).toBe(false)
    expect(table.form.value).toEqual({ title: '', status: 1 })
  })
})

describe('useCrudTable 提交与删除', () => {
  beforeEach(() => vi.clearAllMocks())

  it('新增提交：调用 add、提示成功、关闭弹窗并刷新列表', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults, immediate: false })
    table.handleAdd()
    await table.handleConfirm()

    expect(api.add).toHaveBeenCalledWith({ title: '', status: 1 })
    expect(api.list).toHaveBeenCalledTimes(1)
    expect(table.visible.value).toBe(false)
    expect(vi.mocked(toast.success)).toHaveBeenCalled()
  })

  it('编辑提交：调用 update 并携带 toPayload 处理后的载荷', async () => {
    const api = createApi()
    const table = useCrudTable({
      api,
      defaults,
      immediate: false,
      toForm: (row: Row) => ({ title: row.title, status: row.status }),
      toPayload: (form) => ({ ...form, status: Number(form.status) }),
    })
    table.handleEdit({ id: 5, title: '旧标题', status: 0 })
    table.form.value.status = 1
    await table.handleConfirm()

    expect(api.update).toHaveBeenCalledWith(5, { title: '旧标题', status: 1 })
    expect(api.add).not.toHaveBeenCalled()
  })

  it('表单校验不通过时终止提交', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults, immediate: false })
    table.formRef.value = {
      validate: vi.fn(async () => {
        throw new Error('校验失败')
      }),
    } as never
    table.handleAdd()
    await table.handleConfirm()

    expect(api.add).not.toHaveBeenCalled()
    expect(table.visible.value).toBe(true)
  })

  it('删除：调用 remove 并在完成后刷新列表', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults, immediate: false })
    await table.handleDelete({ id: 12, title: '待删除', status: 1 })

    expect(api.remove).toHaveBeenCalledWith(12)
    expect(api.list).toHaveBeenCalledTimes(1)
  })

  it('状态开关：更新行状态并在结束后复位行内 loading', async () => {
    const api = createApi()
    const table = useCrudTable({ api, defaults, immediate: false })
    const row: Row = { id: 3, title: '开关行', status: 1, statusLoading: false }

    const pending = table.handleStatusChange(0, row)
    expect(row.statusLoading).toBe(true)
    await pending

    expect(api.updateStatus).toHaveBeenCalledWith(3, 0)
    expect(row.status).toBe(0)
    expect(row.statusLoading).toBe(false)
    expect(vi.mocked(toast.status)).toHaveBeenCalledWith(false)
  })
})
