<script setup lang="ts">
import { RouterLink } from 'vue-router'

const pages = [
  { label: 'QR Codes', path: '/qrcode' },
  { label: 'Blog Preview', path: '/blog-preview' },
  { label: 'Social Links', path: '/social-links' },
]
</script>

<template>
  <ol class="text-sky-800 list-inside list-decimal">
    <li v-for="page in pages" :key="page.label" class="">
      <RouterLink class="hover:underline" :to="page.path">
        {{ page.label }}
      </RouterLink>
    </li>
  </ol>
</template>

<style scoped></style>
