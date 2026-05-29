/**
 * 格式化 Star 数量
 * - < 1000: 显示原值（如 "523"）
 * - >= 1000: 显示为 k（如 "1.2k"）
 */
export function formatStarCount(count: number): string {
  if (count < 1000) return count.toString()
  return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
}

/**
 * 格式化相对时间
 * - 今天: "今天"
 * - 昨天: "昨天"
 * - 7 天内: "X 天前"
 * - 30 天内: "X 周前"
 * - 365 天内: "X 个月前"
 * - 超过 365 天: "X 年前"
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return '今天'
  if (days === 1) return '昨天'
  if (days < 7) return `${days} 天前`
  if (days < 30) return `${Math.floor(days / 7)} 周前`
  if (days < 365) return `${Math.floor(days / 30)} 个月前`
  return `${Math.floor(days / 365)} 年前`
}
