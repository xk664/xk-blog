<script setup lang="ts">
import { contacts } from '@/data/profile'
import { ref } from 'vue'
import { useBusuanzi } from '@/composables/useBusuanzi'

useBusuanzi()

const toastMessage = ref('')
const showToast = ref(false)

const handleContactClick = (contact: typeof contacts[0]) => {
  if (contact.copyable) {
    navigator.clipboard.writeText(contact.url).then(() => {
      toastMessage.value = '已复制到剪贴板'
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 2000)
    })
  } else {
    window.open(contact.url, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <footer class="border-t border-gray-200 dark:border-gray-700 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- 联系方式 -->
      <div class="flex justify-center gap-4 mb-6">
        <button
          v-for="contact in contacts"
          :key="contact.type"
          @click="handleContactClick(contact)"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :title="contact.label"
        >
          <svg v-if="contact.type === 'github'" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <svg v-else-if="contact.type === 'qq'" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.395 15.035a39.548 39.548 0 0 0-1.51-3.322c.858-1.694 1.231-3.367 1.231-4.797 0-3.423-2.16-6.414-5.842-7.414C15.274-.498 13.726 0 12 0s-3.274-.498-3.274-1.5c-3.682 1-5.842 3.99-5.842 7.414 0 1.43.373 3.103 1.231 4.797a39.548 39.548 0 0 0-1.51 3.322c-.718 1.597-.62 3.147.294 4.115.914.968 2.528 1.343 4.564 1.343.624 0 1.282-.062 1.954-.183.672.121 1.33.183 1.954.183 2.036 0 3.65-.375 4.564-1.343.914-.968 1.012-2.518.294-4.115zm-9.395 5.965c-.672 0-1.33-.062-1.954-.183a26.36 26.36 0 0 1-1.954.183c-1.654 0-2.918-.27-3.564-.968-.646-.698-.838-1.918-.394-3.322a37.548 37.548 0 0 1 1.31-2.922c-.658-1.21-.996-2.44-.996-3.597 0-2.57 1.72-4.9 4.598-5.7.276-.076.558-.1.842-.1s.566.024.842.1c2.878.8 4.598 3.13 4.598 5.7 0 1.157-.338 2.387-.996 3.597a37.548 37.548 0 0 1 1.31 2.922c.444 1.404.252 2.624-.394 3.322-.646.698-1.91.968-3.564.968-.624 0-1.282-.062-1.954-.183-.672.121-1.33.183-1.954.183z"/>
          </svg>
          <svg v-else-if="contact.type === 'csdn'" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm0 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15zm0 1.5a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
          </svg>
          <svg v-else-if="contact.type === 'email'" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </button>
      </div>

      <!-- 分割线 -->
      <div class="border-t border-gray-200 dark:border-gray-700 mb-6"></div>

      <!-- 版权信息 -->
      <div class="text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy;XK's Blogs</p>
      </div>

      <!-- 访问统计 -->
      <div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        <span id="busuanzi_container_site_pv">
          本站总访问量 <span id="busuanzi_value_site_pv">--</span> 次
        </span>
        <span class="mx-1">·</span>
        <span id="busuanzi_container_site_uv">
          本站总访客数 <span id="busuanzi_value_site_uv">--</span> 人
        </span>
      </div>
    </div>

    <!-- Toast 提示 -->
    <Teleport to="body">
      <Transition name="toast">
        <div
          v-if="showToast"
          class="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg shadow-lg text-sm"
        >
          {{ toastMessage }}
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -1rem);
}
</style>
