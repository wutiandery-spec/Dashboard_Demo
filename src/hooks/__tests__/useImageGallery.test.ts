import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getClassImage, getImageList } from '@/api/modules/imageClass'
import { useImageGallery } from '@/hooks/useImageGallery'

vi.mock('@/api/modules/imageClass', () => ({
  getImageList: vi.fn(),
  getClassImage: vi.fn(),
}))

const classes = [
  { id: 1, name: '默认图库', order: 1 },
  { id: 2, name: '商品图', order: 2 },
]

const imagesOf = (classId: number) =>
  Array.from({ length: 5 }, (_, index) => ({
    id: classId * 100 + index,
    url: `/uploads/${classId}-${index}.png`,
    name: `图片${index}`,
    path: `uploads/${classId}-${index}.png`,
    create_time: '',
    update_time: '',
    image_class_id: classId,
  }))

describe('useImageGallery 双列表分页', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(getImageList).mockResolvedValue({
      data: { list: classes, totalCount: 2 },
    } as never)
    vi.mocked(getClassImage).mockImplementation((async (id: number) => ({
      data: { list: imagesOf(id), totalCount: 5 },
    })) as never)
  })

  it('初始化时加载分类并自动加载第一个分类的图片', async () => {
    const gallery = useImageGallery()
    await gallery.loadClasses()

    expect(gallery.classList.value).toHaveLength(2)
    expect(gallery.activeId.value).toBe(1)
    expect(gallery.imageList.value).toHaveLength(5)
    expect(getClassImage).toHaveBeenCalledWith(1, 12, 1)
  })

  it('分类翻页不影响图片页码，图片翻页也不影响分类页码（串页回归）', async () => {
    const gallery = useImageGallery()
    await gallery.loadClasses()
    await gallery.handleImagePageChange(3)
    expect(gallery.imagePage.value).toBe(3)
    expect(gallery.classPage.value).toBe(1)

    await gallery.handleClassPageChange(2)
    expect(gallery.classPage.value).toBe(2)
    // 分类翻页只重新加载当前分类的图片列表，图片页码保持各自状态
    expect(gallery.imagePage.value).toBe(1)
  })

  it('切换分类时图片列表回到第一页', async () => {
    const gallery = useImageGallery()
    await gallery.loadClasses()
    await gallery.handleImagePageChange(3)

    await gallery.selectClass(2)
    expect(gallery.activeId.value).toBe(2)
    expect(gallery.imagePage.value).toBe(1)
    expect(gallery.imageList.value[0]?.id).toBe(200)
  })

  it('分类翻到空页时自动回退到上一页', async () => {
    const gallery = useImageGallery()
    vi.mocked(getImageList).mockImplementation((async (_limit: number, page: number) => ({
      data: { list: page === 2 ? [] : classes, totalCount: 2 },
    })) as never)

    await gallery.loadClasses(2)
    expect(gallery.classPage.value).toBe(1)
    expect(gallery.classList.value).toHaveLength(2)
  })

  it('支持自定义分页条数', async () => {
    const gallery = useImageGallery({ classPageSize: 20, imagePageSize: 8 })
    await gallery.loadClasses()
    expect(getImageList).toHaveBeenCalledWith(20, 1)
    expect(getClassImage).toHaveBeenCalledWith(1, 8, 1)
  })
})

describe('useImageGallery 选中逻辑', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(getImageList).mockResolvedValue({ data: { list: classes, totalCount: 2 } } as never)
    vi.mocked(getClassImage).mockImplementation((async (id: number) => ({
      data: { list: imagesOf(id), totalCount: 5 },
    })) as never)
  })

  it('单选模式：再次点击取消选中，点击其他图片则替换', async () => {
    const gallery = useImageGallery()
    await gallery.loadClasses()
    const [first, second] = gallery.imageList.value

    gallery.toggleAsset(first!)
    expect(gallery.selectedUrls.value).toEqual(['/uploads/1-0.png'])
    expect(gallery.isSelected(first!)).toBe(true)

    gallery.toggleAsset(second!)
    expect(gallery.selectedUrls.value).toEqual(['/uploads/1-1.png'])

    gallery.toggleAsset(second!)
    expect(gallery.selectedUrls.value).toEqual([])
  })

  it('多选模式：累加选中并支持按 url 回显', async () => {
    const gallery = useImageGallery({ multiple: true })
    await gallery.loadClasses()
    const [first, second] = gallery.imageList.value

    gallery.setSelection(['/uploads/1-0.png', '/uploads/1-1.png'])
    expect(gallery.selectedUrls.value).toHaveLength(2)
    expect(gallery.isSelected(first!)).toBe(true)

    gallery.toggleAsset(first!)
    expect(gallery.selectedUrls.value).toEqual(['/uploads/1-1.png'])
    gallery.toggleAsset(first!)
    expect(gallery.selectedUrls.value).toEqual(['/uploads/1-1.png', '/uploads/1-0.png'])
    expect(second && gallery.isSelected(second)).toBe(true)
  })

  it('单选模式下回显多个值时只保留第一个', async () => {
    const gallery = useImageGallery()
    await gallery.loadClasses()
    gallery.setSelection(['/uploads/1-0.png', '/uploads/1-1.png'])
    expect(gallery.selectedUrls.value).toEqual(['/uploads/1-0.png'])
  })

  it('清空选中与 onSelect 回调', async () => {
    const onSelect = vi.fn()
    const gallery = useImageGallery({ onSelect })
    await gallery.loadClasses()
    const first = gallery.imageList.value[0]!

    gallery.toggleAsset(first)
    expect(onSelect).toHaveBeenCalledWith(first)

    gallery.clearSelection()
    expect(gallery.selectedUrls.value).toEqual([])
  })
})
