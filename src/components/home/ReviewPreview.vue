<script setup lang="ts">
import { onMounted } from 'vue'
import { useReviews } from '@/composables/useReviews'
import ReviewCard from '@/components/review/ReviewCard.vue'

const { reviews, loadReviews } = useReviews()

onMounted(() => {
  loadReviews()
})
</script>

<template>
  <section class="py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold" style="font-family: var(--font-display); color: var(--color-text-primary)">
          面经分享
        </h2>
        <router-link
          v-if="reviews.length > 3"
          to="/reviews"
          class="text-sm font-medium transition-colors hover:opacity-80"
          style="color: #8b5cf6"
        >
          查看全部 →
        </router-link>
      </div>

      <div v-if="reviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>

      <div v-else class="text-center py-8" style="color: var(--color-text-tertiary)">
        暂无面经
      </div>
    </div>
  </section>
</template>
