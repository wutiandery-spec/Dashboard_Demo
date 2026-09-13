/**
 * 交互性能工具：节流
 */

/** 节流：高频触发时按固定间隔执行（前缘触发 + 尾缘兜底） */
export function throttle<T extends (...args: any[]) => any>(fn: T, wait = 300): T {
  let lastTime = 0
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastArgs: any[] | null = null

  const invoke = (thisArg: unknown, args: any[]) => {
    lastTime = Date.now()
    timer = null
    fn.apply(thisArg, args)
  }

  return function (this: unknown, ...args: any[]) {
    const remaining = wait - (Date.now() - lastTime)
    lastArgs = args

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      invoke(this, args)
    } else if (!timer) {
      timer = setTimeout(() => invoke(this, lastArgs ?? []), remaining)
    }
  } as T
}
