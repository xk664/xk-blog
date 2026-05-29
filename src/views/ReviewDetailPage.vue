<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { renderMarkdown } from '@/utils/markdown'

const route = useRoute()
const router = useRouter()

const content = ref('')
const loading = ref(true)

const reviewId = computed(() => route.params.id as string)

const renderedContent = computed(() => {
  return renderMarkdown(content.value)
})

onMounted(async () => {
  try {
    const response = await fetch(`/review/${reviewId.value}.md`)
    if (!response.ok) throw new Error('Review not found')
    content.value = await response.text()
  } catch {
    router.push('/reviews')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- 返回按钮 -->
    <router-link
      to="/reviews"
      class="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-80"
      style="color: #8b5cf6"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回面经列表
    </router-link>

    <div v-if="loading" class="text-center py-12" style="color: var(--color-text-tertiary)">
      加载中...
    </div>

    <article v-else class="prose dark:prose-invert max-w-none" v-html="renderedContent"></article>
  </div>
</template>

<style>
@reference "tailwindcss";

.prose {
  @apply text-gray-900 dark:text-gray-100;
}

.prose h1, .prose h2, .prose h3, .prose h4 {
  @apply text-gray-900 dark:text-white font-bold;
  scroll-margin-top: 5rem;
}

.prose h1 { @apply text-3xl mb-4 mt-8; }
.prose h2 { @apply text-2xl mb-3 mt-6; }
.prose h3 { @apply text-xl mb-2 mt-4; }

.prose p { @apply mb-4 leading-7; }

.prose a { @apply text-blue-600 dark:text-blue-400 hover:underline; }

.prose code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 dark:bg-gray-950 rounded-lg overflow-x-auto my-4;
}

.prose pre code {
  @apply bg-transparent p-0 block p-4 text-gray-100;
}

.prose ul, .prose ol {
  @apply mb-4 pl-6;
}

.prose ul { @apply list-disc; }
.prose ol { @apply list-decimal; }

.prose li { @apply mb-1; }

.prose blockquote {
  @apply border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4;
}
</style>
