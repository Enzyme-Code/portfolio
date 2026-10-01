<script setup lang="ts">
interface Token {
  text: string
  class?: string
}

const pipelineSteps = ['構想', '設計', '開發', '上線']

const inputLines = [
  '- 想要一個看得懂的空汙儀表板',
  '- 手機上也要好用',
  '- 資料每小時自動更新'
]

const key = 'text-sky-300'
const str = 'text-emerald-300'
const punc = 'text-slate-500'

const outputLines: Token[][] = [
  [{ text: '{', class: punc }],
  [{ text: '  "frontend"', class: key }, { text: ': ', class: punc }, { text: '"Nuxt + Tailwind"', class: str }, { text: ',', class: punc }],
  [{ text: '  "backend"', class: key }, { text: ': ', class: punc }, { text: '"REST API"', class: str }, { text: ',', class: punc }],
  [{ text: '  "data"', class: key }, { text: ': ', class: punc }, { text: '"ETL hourly → PostgreSQL"', class: str }, { text: ',', class: punc }],
  [{ text: '  "status"', class: key }, { text: ': ', class: punc }, { text: '"activation ✓"', class: 'text-amber-300' }],
  [{ text: '}', class: punc }]
]
</script>

<template>
  <section
    id="hero"
    class="relative flex-grow flex items-center px-[5%] pt-24 pb-16 overflow-hidden"
  >
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--slate-800))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--slate-800))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_40%,transparent_100%)] opacity-30 dark:opacity-[0.15] pointer-events-none" aria-hidden="true"></div>

    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 lg:left-[65%] w-[320px] lg:w-[640px] h-[320px] lg:h-[640px] bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-emerald-500/15 blur-[140px] rounded-full pointer-events-none animate-pulse"
      style="animation-duration: 10s;"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 w-full max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
      <!-- Left: Slogan & CTA -->
      <div class="flex flex-col items-center text-center lg:items-start lg:text-left reveal-on-scroll">
        <div class="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/80 text-sm font-medium text-blue-400 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-black/20 animate-fade-in-up">
          <span class="relative flex h-2 w-2" aria-hidden="true">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>

          Frontend · Backend · Data
        </div>

        <h1 class="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.15] text-slate-100 mb-7">
          把每個想法
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-[length:300%_300%] animate-gradient-flow">
            催化成產品
          </span>
        </h1>

        <p class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
          Enzyme Code 從前端介面、後端服務到資料工程，
          <br class="hidden md:block" />
          像酵素一樣，讓每個想法更快、更穩地成為好用的產品。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto mb-12">
          <NuxtLink
            to="/projects"
            id="hero-cta-projects"
            class="group inline-flex items-center justify-center gap-2 w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5"
          >
            查看專案
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg> -->
          </NuxtLink>

          <NuxtLink
            to="/about"
            id="hero-cta-about"
            class="inline-flex items-center justify-center w-full max-w-xs sm:w-auto sm:max-w-none bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 border border-slate-700/80 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
          >
            關於我
          </NuxtLink>
        </div>

        <ol class="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm text-slate-500" aria-label="開發流程">
          <li v-for="(step, i) in pipelineSteps" :key="step" class="flex items-center gap-2 sm:gap-3">
            <span class="text-slate-600">0{{ i + 1 }}</span>
            <span class="text-slate-300">{{ step }}</span>
            <span v-if="i < pipelineSteps.length - 1" class="text-slate-700" aria-hidden="true">→</span>
          </li>
        </ol>
      </div>

      <!-- Right: Reaction panel -->
      <div class="hidden lg:block reveal-on-scroll reveal-delay-200" aria-hidden="true">
        <div class="relative rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden font-mono text-[13px] leading-6">
          <div class="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
            <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
            <span class="ml-3 text-xs text-slate-500">enzyme.catalyze(idea)</span>
          </div>

          <div class="px-5 pt-4 pb-5">
            <p class="mb-2 text-[11px] tracking-widest uppercase text-slate-600">Input · idea.md</p>
            <div class="text-slate-400 whitespace-pre">
              <div v-for="line in inputLines" :key="line" class="truncate">{{ line }}</div>
            </div>
          </div>

          <div class="relative h-px mx-5 bg-slate-800 overflow-hidden">
            <div class="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-catalyze"></div>
          </div>

          <div class="px-5 pt-4 pb-6">
            <p class="mb-2 text-[11px] tracking-widest uppercase text-emerald-500/80">Output · product.json</p>
            <div class="whitespace-pre">
              <div v-for="(line, i) in outputLines" :key="i">
                <span v-for="(token, j) in line" :key="j" :class="token.class">{{ token.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
