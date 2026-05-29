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
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12 animate-fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="decorative-line w-12" style="background: linear-gradient(90deg, #8b5cf6, transparent)"></div>
        <span class="text-sm font-medium tracking-widest uppercase" style="color: #8b5cf6">
          面试经历
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold" style="font-family: var(--font-display); color: var(--color-text-primary)">
        面经分享
      </h1>
      <p class="mt-4 text-lg" style="color: var(--color-text-secondary)">
        记录每一次面试的经历和收获
      </p>
    </div>

    <!-- Reviews grid -->
    <div v-if="reviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="review.id"
        :review="review"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-20">
      <div class="text-6xl mb-4">📝</div>
      <p class="text-lg" style="color: var(--color-text-secondary)">暂无面经</p>
    </div>
  </div>
</template>
