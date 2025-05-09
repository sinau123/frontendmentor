<script setup lang="ts">
import HomeLinks from '../components/home/HomeLinks.vue'
import { useTitle } from '@vueuse/core'

const title = useTitle('Frontend Mentor Task')
</script>

<template>
  <main class="min-h-[100svh] bg-sky-100 py-6 px-4">
    <h1 class="text-2xl md:text-4xl font-extrabold leading-normal">{{ title }}</h1>
    <div>
      <HomeLinks />
    </div>
  </main>
</template>
