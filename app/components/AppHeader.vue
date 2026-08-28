<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { to: '/projects', label: '專案作品' },
  { to: '/about', label: '關於我' }

]

const isActive = (path: string) => route.path === path
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

      <nav class="flex items-center gap-1 md:gap-2" aria-label="主要導覽">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'px-3 py-2 md:px-4 rounded-lg text-sm font-medium transition-colors',
            isActive(link.to)
              ? 'text-blue-400 bg-slate-800/60'
              : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/40'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
