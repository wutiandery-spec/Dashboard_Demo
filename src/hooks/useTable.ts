import type { FormInstance } from 'element-plus'
import { getManagerList, addManagerList, deleteManagerList, setManager, updateManagerState, } from '@/api/modules/manager'
import { getClassImage, getImageList, type ImageClassItem, type ImageAssetItem, } from '@/api/modules/imageClass'

export function useTable(opt:{[key:string]:any}) {
    const searchFormRef = ref<FormInstance>()
    const formRef = ref<FormInstance>()
    const page = ref(1)
    const total = ref(0)
    const onEditId = ref(0)
    const roleList = ref([])
    const visible = ref(false)
    const dialogVisible = ref(false)
    const loading = ref(false)
    const editState = ref(false)
    const title = computed(() => (editState.value ? '修改管理员' : '新增管理员'))
    const options = ref<[{ id: number, name: string }] | []>([])
    const form = ref({
        username: '',
        password: '',
        role_id: '',
        status: 1,
        avatar: ''
    })

    const searchForm = reactive({
        keyword: ''
    })

    const getList = async () => {
        loading.value = true
        try {
            const res = await getManagerList(page.value, 10, searchForm.keyword ? searchForm.keyword : '')
            roleList.value = res.data.list.map((item: { statusLoading: boolean }) => {
                item.statusLoading = false
                return item
            })
            total.value = res.data.totalCount
            options.value = res.data.roles
        } finally {
            loading.value = false
        }
    }
    getList()
    /* 重置方法 */
    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        searchForm.keyword = ''
        getList()
    }
    /* 新增和刷新 */
    const addManager = () => {
        visible.value = true
        editState.value = false
    }
    /* 切换页码触发 */
    const handleChange = (pag: any) => {
        page.value = pag
        getList()
        ElMessage({ message: "已更新", type: "success" })
    }
    const handleListChange = (pag: any) => {
        page.value = pag
        getdata()
    }
    const activeid = ref(0)
    const handleImageChange = (pag: any) => {
        page.value = pag
        showClassImage(activeid.value)
    }

    /* 修改状态开启或关闭 */
    const hanleStatusChange = async (status: any, row: any) => {
        row.statusLoading = true
        try {
            const res = await updateManagerState(row.id, status)
            row.status = status
            if (status) {
                ElMessage({ message: "已开启", type: "success" })
            } else {
                ElMessage({ message: "已关闭", type: "warning" })
            }
        } finally {
            row.statusLoading = false
        }
    }

    const handleEdit = async (index: number, row: any) => {
        editState.value = true
        visible.value = true
        onEditId.value = row.id as number
        form.value.username = row.username
        form.value.role_id = row.role_id
        form.value.avatar = row.avatar
    }
    /* 删除功能 */
    const handleDelete = async (index: number, row: any) => {
        loading.value = true
        try {
            await deleteManagerList(row.id as number)
            ElMessage({ message: "删除成功", type: 'success' })
            getList()
        }
        catch (err: any) {
            console.log(err);
        }
        finally {
            loading.value = false
        }
    }

    const handleClose = () => {
        form.value = {
            username: '',
            password: '',
            role_id: '',
            status: 1,
            avatar: ''
        }
    }
    /* 按下提交后处理 */
    const handleConfirm = async (formRef: FormInstance | undefined) => {
        loading.value = true
        try {
            if (editState.value) {
                await setManager(onEditId.value, form.value)
                ElMessage({ message: "修改成功", type: "success" })
                visible.value = false
                getList()
            } else {
                await addManagerList(form.value)
                ElMessage({ message: "增加成功", type: "success" })
                visible.value = false
                getList()
            }
        }
        catch (err: any) {
            const message = err.data.msg || '增加失败'
            ElMessage({ message, type: 'warning' })
        }
        finally {
            loading.value = false
        }

    }


    /* 打开图库选图 */
    const imageDataList = ref<ImageClassItem[] | []>([])
    const classListTotal = ref(0)
    const getdata = async () => {
        try {
            const res = await getImageList(10, page.value)
            imageDataList.value = res.data.list
            classListTotal.value = res.data.totalCount as number
            showClassImage(res.data.list[0]?.id as number)
        } finally {

        }
    }
    const openDialog = () => {
        dialogVisible.value = true
        getdata()
    }
    const srcList = ref<string[]>([])
    const classImageList = ref<ImageAssetItem[]>([])
    const imageListTotal = ref(0)
    const showClassImage = async (id: number) => {
        try {
            activeid.value = id
            srcList.value = []
            const res = await getClassImage(id, 12, page.value)
            classImageList.value = res.data.list.map((item) => {
                item.selectStatus = false
                srcList.value.push(item.url)
                return item
            })

            imageListTotal.value = res.data.totalCount as number
        } finally {

        }
    }

    const selectId = ref()
    const handleSelect = (item: any) => {
        selectId.value = item.id
        classImageList.value.map((item) => {
            item.selectStatus = false
        })
        item.selectStatus = true
        form.value.avatar = item.url
    }
    const hanleConfirmAvatar = () => {
        dialogVisible.value = false
    }
    const handleCancel = () => {
        dialogVisible.value = false
        selectId.value = ''
    }
    return {
        searchFormRef,
        formRef,
        page,
        total,
        onEditId,
        roleList,
        visible,
        dialogVisible,
        loading,
        editState,
        title,
        options,
        form,
        searchForm,
        activeid,
        imageDataList,
        classListTotal,
        srcList,
        classImageList,
        imageListTotal,
        selectId,
        getList,
        resetForm,
        addManager,
        hanleStatusChange,
        handleEdit,
        handleDelete,
        handleClose,
        handleConfirm,
        handleChange,
        handleListChange,
        handleImageChange,
        getdata,
        openDialog,
        showClassImage,
        handleSelect,
        hanleConfirmAvatar,
        handleCancel,
    }
}