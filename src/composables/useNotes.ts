import { ref, computed } from 'vue'
import type { NoteIndex } from '@/types/note'

const notes = ref<NoteIndex[]>([])
const loaded = ref(false)

export function useNotes() {
  const loadNotes = async () => {
    if (loaded.value) return
    try {
      const data = await import('@/data/notes-index.json')
      notes.value = data.default.notes
      loaded.value = true
    } catch {
      notes.value = []
    }
  }

  const sortedNotes = computed(() => {
    return [...notes.value].sort((a, b) => a.id.localeCompare(b.id))
  })

  const latestNotes = computed(() => {
    return sortedNotes.value.slice(0, 6)
  })

  const getNoteById = (id: string) => {
    return notes.value.find(note => note.id === id)
  }

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  return {
    notes: sortedNotes,
    latestNotes,
    loadNotes,
    getNoteById,
    formatSize,
  }
}
