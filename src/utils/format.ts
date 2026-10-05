/** 数字格式化：固定小数位 + 千分位分隔 */
export function formatNumber(value: number, precision = 0): string {
  return value.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
