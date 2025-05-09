<template>
    <div class="h-[100svh] bg-slate-300 flex items-center justify-center overflow-y-auto p-4">
        <div class="p-4 bg-white max-w-[300px] aspect-square rounded-3xl flex flex-col gap-3 m-auto">
            <div class="overflow-hidden rounded-2xl">
                <img :src="qrImage" alt="qrcode">
            </div>
            <p class="font-bold font-outfit text-xl text-center leading-normal">Improve your front-end skills by building projects
            </p>
            <p class="text-center font-outfit">Scan QR Code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useTitle } from '@vueuse/core'
import qrImage from '../assets/images/image-qr-code.png'

useTitle("QR Code")

</script>
