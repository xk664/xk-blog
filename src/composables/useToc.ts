import { computed, type Ref } from 'vue'
import type { TocItem } from '@/types/note'

export function useToc(content: Ref<string>) {
  const headings = computed(() => {
    const regex = /^(#{1,3})\s+(.+)$/gm
    const result: TocItem[] = []
    let match
    while ((match = regex.exec(content.value))) {
      const text = match[2].replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1')
      result.push({
        level: match[1].length,
        text,
        id: text.replace(/\s+/g, '-').toLowerCase().replace(/[^\w一-龥-]/g, ''),
      })
    }
    return result
  })

  return { headings }
}
