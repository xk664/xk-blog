<script setup lang="ts">
import type { Repo } from '@/types/github'

defineProps<{
  repo: Repo
}>()
</script>

<template>
  <a
    :href="repo.html_url"
    target="_blank"
    rel="noopener noreferrer"
    class="group block p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    style="background: var(--color-bg-secondary); border-color: var(--color-border)"
  >
    <!-- Header -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" style="color: var(--color-text-tertiary)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
        </svg>
        <h3
          class="text-lg font-semibold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
          style="font-family: var(--font-display); color: var(--color-text-primary)"
        >
          {{ repo.name }}
        </h3>
      </div>

      <svg
        class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        style="color: var(--color-accent)"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </div>

    <!-- Description -->
    <p class="text-sm" style="color: var(--color-text-secondary)">
      {{ repo.description || '暂无描述' }}
    </p>
  </a>
</template>
