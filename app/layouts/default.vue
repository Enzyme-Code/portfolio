<script setup lang="ts">


</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-900 text-white scroll-smooth">
    
    <HomeHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <HomeFooter />
    
  </div>
</template>