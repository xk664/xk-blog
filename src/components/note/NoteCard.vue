<script setup lang="ts">
import type { NoteIndex } from '@/types/note'

defineProps<{
  note: NoteIndex
}>()
</script>

<template>
  <router-link
    :to="`/notes/${note.id}`"
    class="group block p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    style="background: var(--color-bg-secondary); border-color: var(--color-border)"
  >
    <!-- Category badge -->
    <div class="flex items-center gap-2 mb-4">
      <div class="decorative-dot"></div>
      <span class="text-xs font-medium tracking-wider uppercase" style="color: var(--color-accent)">
        技术笔记
      </span>
    </div>

    <!-- Title -->
    <h3
      class="text-lg font-semibold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
      style="font-family: var(--font-display); color: var(--color-text-primary)"
    >
      {{ note.title }}
    </h3>

    <!-- Arrow -->
    <div class="mt-4">
      <svg
        class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        style="color: var(--color-accent)"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </div>
  </router-link>
</template>
