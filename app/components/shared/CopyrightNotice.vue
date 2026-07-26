<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <p>&copy; {{ year }} Enzyme Code. All rights reserved.</p>
</template>
