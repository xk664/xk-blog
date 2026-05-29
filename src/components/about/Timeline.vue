<script setup lang="ts">
import type { Experience } from '@/data/profile'

defineProps<{
  experiences: Experience[]
}>()

const getDotColor = (type: Experience['type']) => {
  const colors = {
    education: 'var(--color-accent)',
    learning: '#10b981',
    career: '#8b5cf6',
    project: '#3b82f6',
  }
  return colors[type] || 'var(--color-text-tertiary)'
}
</script>

<template>
  <div class="relative">
    <!-- Timeline line -->
    <div
      class="absolute left-6 top-0 bottom-0 w-px"
      style="background: linear-gradient(to bottom, var(--color-accent), var(--color-border))"
    ></div>

    <!-- Timeline items -->
    <div
      v-for="exp in experiences"
      :key="exp.id"
      class="relative pl-16 pb-10 last:pb-0"
    >
      <!-- Dot -->
      <div
        class="absolute left-4 top-2 w-4 h-4 rounded-full border-4 transition-transform duration-300 hover:scale-125"
        :style="{
          borderColor: getDotColor(exp.type),
          backgroundColor: 'var(--color-bg-primary)'
        }"
      ></div>

      <!-- Content -->
      <div
        class="p-5 rounded-xl border transition-all duration-300 hover:shadow-md"
        style="background: var(--color-bg-secondary); border-color: var(--color-border)"
      >
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
          style="background: var(--color-accent-subtle); color: var(--color-accent)"
        >
          {{ exp.time }}
        </span>
        <h3
          class="text-lg font-semibold"
          style="font-family: var(--font-display); color: var(--color-text-primary)"
        >
          {{ exp.title }}
        </h3>
        <p v-if="exp.description" class="mt-2 text-sm" style="color: var(--color-text-secondary)">
          {{ exp.description }}
        </p>
      </div>
    </div>
  </div>
</template>
