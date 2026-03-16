<script setup lang="ts">
const navLinks = [
  { name: '關於我', path: '#about' },    
  { name: '聯絡方式', path: '#contact' }  
]
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md text-white border-b border-slate-700">
    <div class="w-full px-[5%] py-4 flex items-center justify-between">
      
      <NuxtLink to="#hero" class="flex items-center gap-3 text-xl font-bold hover:text-blue-400 transition">
        <img src="/EnzyCode.svg" alt="Logo" class="w-8 h-8 object-contain invert" />
        <span>Enzyme Code</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="text-base font-medium text-slate-300 hover:text-white transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>