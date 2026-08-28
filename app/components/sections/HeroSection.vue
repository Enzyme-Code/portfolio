<script setup lang="ts">
</script>

<template>
  <section
    id="hero"
    class="relative flex-grow flex items-center justify-center px-[5%] pt-20 pb-12 text-center overflow-hidden"
  >
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" aria-hidden="true"></div>

    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"
      style="animation-duration: 8s;"
      aria-hidden="true"
    ></div>

    <div
      class="absolute bottom-1/3 right-1/2 translate-x-1/2 md:right-1/4 md:translate-x-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"
      style="animation-duration: 12s;"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center -translate-y-4 md:translate-y-0 reveal-on-scroll">
      <div class="mb-8 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/80 text-sm font-medium text-blue-400 backdrop-blur-sm shadow-xl shadow-black/20 animate-fade-in-up">
        <span class="relative flex h-2 w-2" aria-hidden="true">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>

        Backend & Data Engineering
      </div>

      <h1 class="w-full text-center text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mb-8 leading-[1.15] text-slate-100">
        打破格式壁壘
        <br class="hidden md:block" />

        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-[length:300%_300%] animate-gradient-flow">
          催化數據潛能
        </span>
      </h1>

      <p class="w-full text-center text-lg md:text-xl xl:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
        Enzyme Code 就像軟體系統中的催化劑
        <br class="hidden sm:block" />
        萃取資料最精華的部分，化作最美的資訊
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
        <NuxtLink
          to="/projects"
          id="hero-cta-projects"
          class="group relative w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 text-center"
        >
          查看專案
        </NuxtLink>

        <NuxtLink
          to="/about"
          id="hero-cta-about"
          class="w-full max-w-xs sm:w-auto sm:max-w-none bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 border border-slate-700/80 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 text-center"
        >
          關於我
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
