<script setup lang="ts">
import type { TocItem } from '@/types/note'

defineProps<{
  headings: TocItem[]
}>()

const scrollToHeading = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <nav class="toc">
    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4">目录</h4>
    <ul class="space-y-2">
      <li
        v-for="heading in headings"
        :key="heading.id"
        :style="{ paddingLeft: `${(heading.level - 1) * 12}px` }"
      >
        <button
          @click="scrollToHeading(heading.id)"
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
        >
          {{ heading.text }}
        </button>
      </li>
    </ul>
  </nav>
</template>
