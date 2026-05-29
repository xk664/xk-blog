<script setup lang="ts">
import type { Skill } from '@/data/skills'

defineProps<{
  skills: Skill[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <span
      v-for="(skill, index) in skills"
      :key="skill.name"
      class="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      :style="{
        background: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-primary)',
        animationDelay: `${index * 50}ms`
      }"
    >
      {{ skill.name }}
    </span>
  </div>
</template>
