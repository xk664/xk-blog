<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { profile, navItems } from '@/data/profile'
import ThemeToggle from '@/components/common/ThemeToggle.vue'

const route = useRoute()
const isMenuOpen = ref(false)

watch(() => route.path, () => {
  isMenuOpen.value = false
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <!-- 站点标识 -->
      <router-link to="/" class="flex items-center gap-2">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"
        />
        <span class="text-xl font-bold text-gray-900 dark:text-white">{{ profile.name }}</span>
      </router-link>

      <!-- 桌面端导航 -->
      <nav class="hidden md:flex items-center gap-6">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          :class="{ 'text-blue-600 dark:text-blue-400': route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
        <ThemeToggle />
      </nav>

      <!-- 移动端汉堡菜单 -->
      <button @click="toggleMenu" class="md:hidden p-2" aria-label="菜单">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 移动端抽屉菜单 -->
    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="isMenuOpen" class="md:hidden fixed inset-0 z-50">
          <!-- 遮罩层 -->
          <div class="absolute inset-0 bg-black/50" @click="closeMenu"></div>

          <!-- 抽屉面板 -->
          <div class="absolute right-0 top-0 bottom-0 w-[70%] bg-white dark:bg-gray-900 shadow-xl">
            <div class="p-6">
              <div class="flex justify-between items-center mb-8">
                <span class="text-lg font-semibold text-gray-900 dark:text-white">菜单</span>
                <button @click="closeMenu" class="p-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav class="space-y-4">
                <router-link
                  v-for="item in navItems"
                  :key="item.path"
                  :to="item.path"
                  class="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  :class="{ 'text-blue-600 dark:text-blue-400': route.path === item.path }"
                >
                  {{ item.label }}
                </router-link>
              </nav>

              <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-active > div:last-child,
.drawer-leave-active > div:last-child {
  transition: transform 0.3s ease;
}

.drawer-enter-from > div:first-child,
.drawer-leave-to > div:first-child {
  opacity: 0;
}

.drawer-enter-from > div:last-child,
.drawer-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>
