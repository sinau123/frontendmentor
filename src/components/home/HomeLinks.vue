<script setup lang="ts">
import { RouterLink } from 'vue-router';


const pages = [
    { label: 'QR Codes', path: '/qrcode' }
]

</script>

<template>
    <ol class="text-sky-800 list-decimal list-inside" v-for="page in pages" :key="page.label">
        <li>
            <RouterLink class="hover:underline" :to="page.path">
                {{ page.label }}
            </RouterLink>
        </li>
    </ol>

</template>

<style scoped></style>