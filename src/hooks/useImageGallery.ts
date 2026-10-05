import {
  getClassImage,
  getImageList,
  type ImageAssetItem,
  type ImageClassItem,
} from '@/api/modules/imageClass'
import { pickList } from '@/utils/response'

export interface ImageGalleryOptions {
  /** 分类每页条数，默认 10 */
  classPageSize?: number
  /** 图片每页条数，默认 12 */
  imagePageSize?: number
  /** 选中素材回调 */
  onSelect?: (item: ImageAssetItem) => void
}

/** 图库通用流程：分类 / 图片分页浏览 + 素材单选（图片选择器与图库管理页共用） */
export function useImageGallery(options: ImageGalleryOptions = {}) {
  const classPageSize = options.classPageSize ?? 10
  const imagePageSize = options.imagePageSize ?? 12
  const classList = ref<ImageClassItem[]>([])
  const classTotal = ref(0)
  const classPage = ref(1)
  const imageList = ref<ImageAssetItem[]>([])
  const imageTotal = ref(0)
  const imagePage = ref(1)
  const activeId = ref<number | null>(null)
  const selectedId = ref<number | null>(null)
  const srcList = computed(() => imageList.value.map((item) => item.url).filter(Boolean))

  /** 加载指定分类的图片 */
  const loadImages = async (id: number, page = 1) => {
    activeId.value = id
    imagePage.value = page
    const res = await getClassImage(id, imagePageSize, page)
    const { list, total } = pickList<ImageAssetItem>(res)
    imageList.value = list.map((item) => ({ ...item, selectStatus: item.id === selectedId.value }))
    imageTotal.value = total
  }

  /** 加载分类列表，并自动加载当前（或首个）分类的图片 */
  const loadClasses = async (page = classPage.value) => {
    classPage.value = page
    const res = await getImageList(classPageSize, page)
    const { list, total } = pickList<ImageClassItem>(res)
    if (!list.length && page > 1) return loadClasses(page - 1)
    classList.value = list
    classTotal.value = total
    const active = list.some((item) => item.id === activeId.value)
      ? activeId.value
      : (list[0]?.id ?? null)
    if (active) {
      await loadImages(active)
    } else {
      activeId.value = null
      imageList.value = []
      imageTotal.value = 0
    }
  }

  /** 切换分类（回到图片第一页） */
  const selectClass = (id: number) => loadImages(id)

  /** 单选素材并回调 */
  const selectAsset = (item: ImageAssetItem) => {
    selectedId.value = item.id
    imageList.value.forEach((row) => {
      row.selectStatus = row.id === item.id
    })
    options.onSelect?.(item)
  }

  /** 清空选中状态 */
  const clearSelection = () => {
    selectedId.value = null
    imageList.value.forEach((row) => {
      row.selectStatus = false
    })
  }

  return {
    classList,
    classTotal,
    classPage,
    classPageSize,
    imageList,
    imageTotal,
    imagePage,
    imagePageSize,
    activeId,
    selectedId,
    srcList,
    loadClasses,
    loadImages,
    selectClass,
    selectAsset,
    clearSelection,
    /** 刷新当前页分类与图片 */
    reload: () => loadClasses(classPage.value),
    handleClassPageChange: (page: number) => loadClasses(page),
    handleImagePageChange: (page: number) => {
      if (activeId.value) loadImages(activeId.value, page)
    },
  }
}
