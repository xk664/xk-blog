import { ref, onMounted, onUnmounted } from 'vue'

export function useBusuanzi() {
  const isLoaded = ref(false)
  const TIMEOUT = 5000
  let timer: ReturnType<typeof setTimeout> | null = null
  let check: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    // 超时检测
    timer = setTimeout(() => {
      if (!window.busuanzi) {
        // 超时，隐藏统计容器
        const containers = document.querySelectorAll('[id^="busuanzi_container"]')
        containers.forEach(el => {
          (el as HTMLElement).style.display = 'none'
        })
      }
    }, TIMEOUT)

    // 轮询检测
    check = setInterval(() => {
      if (window.busuanzi) {
        isLoaded.value = true
        if (timer) clearTimeout(timer)
        if (check) clearInterval(check)
      }
    }, 200)
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
    if (check) clearInterval(check)
  })

  return { isLoaded }
}
