<script setup lang="ts">
import { onMounted } from 'vue'
import { useNotes } from '@/composables/useNotes'
import NoteCard from '@/components/note/NoteCard.vue'

const { notes, latestNotes, loadNotes } = useNotes()

onMounted(() => {
  loadNotes()
})
</script>

<template>
  <section class="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">最新笔记</h2>

      <div v-if="latestNotes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NoteCard v-for="note in latestNotes" :key="note.id" :note="note" />
      </div>

      <div v-else class="text-center py-8 text-gray-500 dark:text-gray-400">
        暂无笔记
      </div>

      <div v-if="notes.length > 6" class="text-center mt-8">
        <router-link
          to="/notes"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          查看全部笔记 →
        </router-link>
      </div>
    </div>
  </section>
</template>
