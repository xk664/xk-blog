<script setup lang="ts">
import { onMounted } from 'vue'
import { useNotes } from '@/composables/useNotes'
import NoteCard from '@/components/note/NoteCard.vue'

const { notes, loadNotes } = useNotes()

onMounted(() => {
  loadNotes()
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12 animate-fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="decorative-line w-12"></div>
        <span class="text-sm font-medium tracking-widest uppercase" style="color: var(--color-accent)">
          技术笔记
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold" style="font-family: var(--font-display); color: var(--color-text-primary)">
        笔记列表
      </h1>
      <p class="mt-4 text-lg" style="color: var(--color-text-secondary)">
        记录学习过程中的技术要点和思考
      </p>
    </div>

    <!-- Notes grid -->
    <div v-if="notes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NoteCard
        v-for="(note, index) in notes"
        :key="note.id"
        :note="note"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-20">
      <div class="text-6xl mb-4">📝</div>
      <p class="text-lg" style="color: var(--color-text-secondary)">暂无笔记</p>
    </div>
  </div>
</template>
