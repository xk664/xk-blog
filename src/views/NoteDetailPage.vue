<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToc } from '@/composables/useToc'
import { renderMarkdown } from '@/utils/markdown'
import { convertObsidianImages } from '@/utils/image'
import NoteTOC from '@/components/note/NoteTOC.vue'
import BackToTop from '@/components/note/BackToTop.vue'

const route = useRoute()
const router = useRouter()

const content = ref('')
const loading = ref(true)

const noteId = computed(() => route.params.id as string)
const { headings } = useToc(content)

const renderedContent = computed(() => {
  const converted = convertObsidianImages(content.value)
  return renderMarkdown(converted)
})

onMounted(async () => {
  try {
    const response = await fetch(`/note/${noteId.value}.md`)
    if (!response.ok) throw new Error('Note not found')
    content.value = await response.text()
  } catch {
    router.push('/notes')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <!-- 返回按钮 -->
    <router-link
      to="/notes"
      class="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
      返回笔记列表
    </router-link>

    <div v-if="loading" class="text-center py-12 text-gray-500 dark:text-gray-400">
      加载中...
    </div>

    <div v-else class="flex gap-8">
      <!-- 主内容区 -->
      <article class="flex-1 min-w-0 prose dark:prose-invert max-w-3xl" v-html="renderedContent"></article>

      <!-- TOC 侧边栏 -->
      <aside v-if="headings.length > 0" class="hidden lg:block w-64 flex-shrink-0">
        <div class="sticky top-24">
          <NoteTOC :headings="headings" />
        </div>
      </aside>
    </div>

    <BackToTop />
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

.prose table {
  @apply w-full border-collapse my-4;
}

.prose th, .prose td {
  @apply border border-gray-300 dark:border-gray-600 px-4 py-2;
}

.prose th {
  @apply bg-gray-100 dark:bg-gray-800 font-semibold;
}

.prose img {
  @apply max-w-full rounded-lg my-4 cursor-zoom-in;
}

.prose hr {
  @apply border-gray-300 dark:border-gray-600 my-8;
}
</style>
