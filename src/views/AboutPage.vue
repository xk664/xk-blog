<script setup lang="ts">
import { profile, experiences } from '@/data/profile'
import { skills } from '@/data/skills'
import SkillTags from '@/components/about/SkillTags.vue'
import Timeline from '@/components/about/Timeline.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-16 animate-fade-in-up">
      <div class="flex items-center gap-3 mb-4">
        <div class="decorative-line w-12"></div>
        <span class="text-sm font-medium tracking-widest uppercase" style="color: var(--color-accent)">
          关于我
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold" style="font-family: var(--font-display); color: var(--color-text-primary)">
        个人简介
      </h1>
    </div>

    <!-- Profile section -->
    <div class="grid md:grid-cols-3 gap-12 mb-20">
      <!-- Avatar -->
      <div class="md:col-span-1 animate-fade-in-up delay-100">
        <div class="relative">
          <div
            class="absolute -inset-3 rounded-2xl opacity-20"
            style="background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light))"
          ></div>
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="relative w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <!-- Info -->
      <div class="md:col-span-2 animate-fade-in-up delay-200">
        <h2 class="text-2xl font-bold mb-4" style="font-family: var(--font-display); color: var(--color-text-primary)">
          {{ profile.name }}
        </h2>
        <p class="text-lg mb-6" style="color: var(--color-text-secondary)">
          {{ profile.slogan }}
        </p>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5" style="color: var(--color-accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
            <span style="color: var(--color-text-secondary)">{{ profile.university }} · {{ profile.grade }}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5" style="color: var(--color-accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span style="color: var(--color-text-secondary)">{{ profile.startDate }} 开始学习 Java</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills section -->
    <section class="mb-20 animate-fade-in-up delay-300">
      <h2 class="text-2xl font-bold mb-8" style="font-family: var(--font-display); color: var(--color-text-primary)">
        技能栈
      </h2>
      <SkillTags :skills="skills" />
    </section>

    <!-- Timeline section -->
    <section class="animate-fade-in-up delay-400">
      <h2 class="text-2xl font-bold mb-8" style="font-family: var(--font-display); color: var(--color-text-primary)">
        个人经历
      </h2>
      <Timeline :experiences="experiences" />
    </section>
  </div>
</template>
