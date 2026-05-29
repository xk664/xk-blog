<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
  language: string
}>()

const copied = ref(false)

const copy = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative group">
    <div class="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 rounded-t-lg">
      <span class="text-xs text-gray-400">{{ language || 'code' }}</span>
      <button
        @click="copy"
        class="text-xs text-gray-400 hover:text-white transition-colors"
      >
        {{ copied ? '已复制' : '复制' }}
      </button>
    </div>
    <pre class="!rounded-t-none"><code :class="`language-${language}`" v-html="code"></code></pre>
  </div>
</template>
