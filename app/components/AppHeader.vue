<script setup lang="ts">
</script>

<template>
  <header class="fixed top-0 left-0 w-full h-header z-50 bg-slate-950/70 backdrop-blur-xl text-white border-b border-slate-800/80">
    <div class="w-full h-full px-[5%] flex items-center justify-between">
      <NuxtLink
        to="/"
        id="nav-logo-link"
        class="flex items-center gap-3 text-xl font-bold hover:text-blue-400 transition-colors"
      >
        <img
          src="/EnzyCode.svg"
          alt="Enzyme Code Logo"
          class="w-8 h-8 object-contain invert"
        />

        <span>Enzyme Code</span>
      </NuxtLink>
    </div>
  </header>
</template>
