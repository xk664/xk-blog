<script setup lang="ts">
import { onMounted } from 'vue'
import { useGitHub } from '@/composables/useGitHub'
import ProjectCard from '@/components/project/ProjectCard.vue'
import SkeletonCard from '@/components/home/SkeletonCard.vue'

const { repos, loading, error, fetchRepos, retry } = useGitHub()

onMounted(() => {
  fetchRepos()
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12 animate-fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="decorative-line w-12"></div>
        <span class="text-sm font-medium tracking-widest uppercase" style="color: var(--color-accent)">
          开源项目
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold" style="font-family: var(--font-display); color: var(--color-text-primary)">
        GitHub 项目
      </h1>
      <p class="mt-4 text-lg" style="color: var(--color-text-secondary)">
        我的开源项目和技术实践
      </p>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SkeletonCard v-for="i in 6" :key="i" />
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-20">
      <div class="text-6xl mb-4">⚠️</div>
      <p class="text-lg mb-6" style="color: var(--color-text-secondary)">{{ error }}</p>
      <button
        @click="retry"
        class="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
        style="background: var(--color-accent); color: white"
      >
        重试
      </button>
    </div>

    <!-- Projects grid -->
    <div v-else-if="repos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="(repo, index) in repos"
        :key="repo.id"
        :repo="repo"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="text-center py-20">
      <div class="text-6xl mb-4">📦</div>
      <p class="text-lg" style="color: var(--color-text-secondary)">暂无项目</p>
    </div>
  </div>
</template>
