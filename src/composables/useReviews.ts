import { ref, computed } from 'vue'

export interface Review {
  id: string
  title: string
}

const reviews = ref<Review[]>([])
const loaded = ref(false)

export function useReviews() {
  const loadReviews = async () => {
    if (loaded.value) return

    try {
      // 从 notes-index.json 类似的方式获取
      const data = await import('@/data/reviews-index.json')
      reviews.value = data.default.reviews
      loaded.value = true
    } catch {
      // 如果没有索引文件，使用静态数据
      reviews.value = [
        { id: '字节全栈研发一面面经', title: '字节全栈研发一面面经' }
      ]
      loaded.value = true
    }
  }

  const latestReviews = computed(() => {
    return reviews.value.slice(0, 3)
  })

  const getReviewById = (id: string) => {
    return reviews.value.find(r => r.id === id)
  }

  return {
    reviews,
    latestReviews,
    loadReviews,
    getReviewById,
  }
}
