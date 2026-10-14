import { afterEach, describe, expect, it, vi } from 'vitest'
import { throttle } from '@/utils/interaction'

describe('throttle 节流', () => {
  afterEach(() => vi.useRealTimers())

  it('首次调用立即执行，节流窗口内的重复调用被合并', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const throttled = throttle(fn, 300)

    throttled('首次')
    throttled('第二次')
    throttled('第三次')
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('首次')

    vi.advanceTimersByTime(300)
    // 尾缘补一次，且使用窗口内最后一次的参数
    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn).toHaveBeenLastCalledWith('第三次')
  })

  it('窗口结束后的调用重新立即执行', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const throttled = throttle(fn, 100)

    throttled('a')
    vi.advanceTimersByTime(100)
    throttled('b')
    expect(fn).toHaveBeenNthCalledWith(2, 'b')
  })

  it('保留调用时的 this 上下文', () => {
    vi.useFakeTimers()
    const context = { value: 42, record: vi.fn() }
    const throttled = throttle(function (this: typeof context) {
      this.record(this.value)
    }, 100)

    throttled.call(context)
    expect(context.record).toHaveBeenCalledWith(42)
  })
})
