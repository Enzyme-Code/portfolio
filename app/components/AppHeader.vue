<script setup lang="ts">
const route = useRoute()
const { toggle } = useTheme()

const navLinks = [
  { to: '/projects', label: '專案作品' },
  { to: '/about', label: '關於我' }
]

const isActive = (path: string) => route.path === path
// Home hero already has CTA buttons, so nav links are only shown on sub pages
const showNavLinks = computed(() => route.path !== '/')
</script>

<template>
  <header class="fixed top-0 left-0 w-full h-header z-50 bg-slate-950/70 backdrop-blur-xl text-slate-100 border-b border-slate-800/80">
    <div class="w-full h-full px-[5%] flex items-center justify-between">
      <NuxtLink
        to="/"
        id="nav-logo-link"
        class="flex items-center gap-3 text-xl font-bold whitespace-nowrap hover:text-blue-400 transition-colors"
      >
        <img
          src="/EnzyCode.svg"
          alt="Enzyme Code Logo"
          class="w-8 h-8 object-contain dark:invert transition-[filter] duration-300"
        />

        <!-- Hide brand text on narrow screens when nav links need the space -->
        <span :class="{ 'hidden sm:inline': showNavLinks }">Enzyme Code</span>
      </NuxtLink>

      <div class="flex items-center gap-1 md:gap-2">
        <nav v-if="showNavLinks" class="flex items-center gap-1 md:gap-2" aria-label="主要導覽">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'px-3 py-2 md:px-4 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
              isActive(link.to)
                ? 'text-blue-400 bg-slate-800/60'
                : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/40'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <button
          type="button"
          id="theme-toggle"
          class="ml-1 flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-800/40 transition-colors"
          aria-label="切換亮暗模式"
          title="切換亮暗模式"
          @click="toggle"
        >
          <!-- Sun: shown in dark mode -->
          <svg xmlns="http://www.w3.org/2000/svg" class="hidden dark:block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon: shown in light mode -->
          <svg xmlns="http://www.w3.org/2000/svg" class="block dark:hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
