<script setup lang="ts">
import IconWithoutOptimizer from '../assets/images/illustration-article.svg'
</script>

<template>
  <div class="flex items-center justify-center bg-[#f4d04e] h-[100svh] overflow-y-auto p-6">
    <div
      class="group/card cursor-pointer flex gap-3 flex-col card-container border border-black rounded-3xl overflow-hidden bg-white p-6 m-auto max-w-[320px]"
      tabindex="1"
    >
      <figure class="flex justify-center rounded-xl overflow-hidden">
        <IconWithoutOptimizer class="w-full" />
      </figure>
      <div class="mt-4 py-2 px-4 rounded-md bg-[#f4d04e] self-start">
        <p class="font-figtree font-bold text-xs">Learning</p>
      </div>
      <div>
        <p class="font-figtree text-xs">Published 21 Dec 2023</p>
      </div>
      <div>
        <p
          class="group-hover/card:text-[#f4d04e] group-focus/card:text-[#f4d04e] font-figtree text-xl font-bold"
        >
          HTML & CSS foundations
        </p>
      </div>
      <div>
        <p class="font-figtree text-sm text-neutral-500">
          These languages are the backbone of every website, defining structure, content, and
          presentation.
        </p>
      </div>
      <div class="flex gap-2 items-center mt-4">
        <img class="size-8" src="../assets//images//blog-preview//image-avatar.webp" />
        <p class="font-figtree font-bold text-sm">Greg Hooper</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  box-shadow: 7px 7px 0px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 7px 0px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 7px 0px 2px rgba(0, 0, 0, 0.75);
}
</style>
