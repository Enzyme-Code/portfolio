<script setup lang="ts">
// 這裡就是 TypeScript 區域
const title: string = 'Hello Enzyme Code!'
</script>

<template>
  <div class="flex h-screen items-center justify-center bg-gray-900">
    <h1 class="text-4xl font-bold text-green-400 hover:text-green-300 transition">
      {{ title }}
    </h1>
  </div>
</template>
