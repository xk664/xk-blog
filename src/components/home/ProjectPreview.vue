<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useGitHub } from '@/composables/useGitHub'
import ProjectCard from '@/components/project/ProjectCard.vue'
import SkeletonCard from './SkeletonCard.vue'

const { repos, loading, error, fetchRepos, retry } = useGitHub()

const previewRepos = computed(() => repos.value.slice(0, 6))

onMounted(() => {
  fetchRepos()
})
</script>

<template>
  <section class="py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">开源项目</h2>

      <!-- 加载状态 -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonCard v-for="i in 6" :key="i" />
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500 mb-4">{{ error }}</p>
        <button
          @click="retry"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          重试
        </button>
      </div>

      <!-- 正常状态 -->
      <div v-else-if="previewRepos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="repo in previewRepos" :key="repo.id" :repo="repo" />
      </div>

      <!-- 空状态 -->
      <div v-else class="text-center py-8 text-gray-500 dark:text-gray-400">
        暂无项目
      </div>

      <div v-if="repos.length > 6" class="text-center mt-8">
        <router-link
          to="/projects"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          查看全部项目 →
        </router-link>
      </div>
    </div>
  </section>
</template>
