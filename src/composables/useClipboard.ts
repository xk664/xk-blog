import { ref } from 'vue'

export function useClipboard() {
  const copied = ref(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
      return true
    } catch {
      return false
    }
  }

  return { copied, copy }
}
