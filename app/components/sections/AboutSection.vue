<script setup lang="ts">
interface ToolkitItem {
  icon: string
  title: string
  items: string[]
  color: 'blue' | 'emerald' | 'indigo' | 'violet'
}

interface LifecycleItem {
  number: string
  title: string
  description: string
  color: 'blue' | 'indigo' | 'emerald' | 'slate'
}

const toolkitItems: ToolkitItem[] = [
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: '前端開發',
    color: 'blue',
    items: ['Vue.js / Nuxt', 'TypeScript', 'Tailwind CSS', 'RWD 響應式介面']
  },
  {
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    title: '後端開發',
    color: 'indigo',
    items: ['Python', 'REST API 設計', 'Firebase', 'PostgreSQL']
  },
  {
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    title: '資料工程',
    color: 'emerald',
    items: ['爬蟲與 API 串接', 'ETL 排程設計', '資料清洗標準化', 'DB 設計與 SQL 優化']
  },
  {
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    title: '開發工具',
    color: 'violet',
    items: ['Docker 容器化', 'Git 版本控制', 'Linux / Bash 腳本', 'GitHub Actions CI/CD']
  }
]

const lifecycleSteps: LifecycleItem[] = [
  {
    number: '01',
    title: '需求釐清',
    color: 'blue',
    description: '理解使用情境與目標，把模糊的想法整理成明確的功能與資料需求。'
  },
  {
    number: '02',
    title: '介面與架構設計',
    color: 'indigo',
    description: '規劃使用者流程與畫面，同時設計 API 與資料庫結構，讓前後端一開始就對齊。'
  },
  {
    number: '03',
    title: '開發與資料整合',
    color: 'emerald',
    description: '實作前端介面與後端服務，串接 API、建立爬蟲與 ETL，讓資料穩定流入系統。'
  },
  {
    number: '04',
    title: '部署與維運',
    color: 'slate',
    description: '容器化部署、CI/CD 自動化與排程監控，讓產品上線後也能持續穩定運作。'
  }
]

const focusAreas = [
  { title: '前端開發', detail: 'Nuxt / Vue / 互動介面', hover: 'hover:border-blue-500/30' },
  { title: '後端開發', detail: 'API / 資料庫設計 / 服務化', hover: 'hover:border-indigo-500/30' },
  { title: '資料工程', detail: '爬蟲 / ETL / 排程自動化', hover: 'hover:border-emerald-500/30' }
]
</script>

<template>
  <div class="relative w-full">
    <!-- Section 1: About Me (個人介紹與基本資料) -->
    <section
      id="about-me"
      class="snap-start min-h-[calc(100vh-theme(spacing.header))] flex flex-col justify-center px-[5%] py-8 md:py-20 relative"
    >
      <!-- Background glow decoration -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>
      <div class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <!-- Top: Personal Profile Card -->
      <div class="mx-auto max-w-5xl w-full mb-6 md:mb-10 reveal-on-scroll">
        <AboutProfileCard />
      </div>

      <!-- Bottom: Core grid -->
      <div class="mx-auto max-w-5xl w-full grid gap-6 md:gap-10 md:grid-cols-[0.9fr_1.1fr] items-stretch">
        <!-- Left side: Core title -->
        <div class="relative group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 shadow-xl shadow-black/5 dark:shadow-black/25 reveal-on-scroll flex flex-col justify-center h-full">
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-50" aria-hidden="true"></div>
          <p class="relative z-10 mb-3 md:mb-4 text-xs md:text-sm font-semibold tracking-wider text-emerald-400 uppercase">
            Core Philosophy
          </p>

          <h2 class="relative z-10 text-2xl md:text-5xl font-extrabold text-slate-100 leading-tight">
            把想法
            <br class="hidden md:block" />
            做成好用的產品
          </h2>

          <div class="absolute -right-3 -bottom-3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-full" aria-hidden="true"></div>
        </div>

        <!-- Right side: Paragraphs & focus areas -->
        <div class="text-slate-400 leading-relaxed space-y-4 md:space-y-6 reveal-on-scroll reveal-delay-200">
          <p class="text-base md:text-lg">
            我的專案橫跨純前端、全端到資料工程：從互動介面與響應式設計，到 API 架構、資料庫規劃與自動化資料流程，
            依照產品需要選擇合適的技術，而不是被單一領域限制。
          </p>

          <p class="hidden md:block text-base text-slate-400/90">
            <strong class="text-slate-200">Enzyme Code</strong> 的概念源於「酵素（Enzyme）」：
            酵素本身不是產物，卻能讓反應更快、更穩定地發生。我希望自己的程式碼也是如此，讓每個想法順利轉化成真正被使用的產品。
          </p>

          <div class="grid grid-cols-3 gap-2 md:gap-4 pt-2 md:pt-4">
            <div
              v-for="area in focusAreas"
              :key="area.title"
              class="rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3 md:p-5 transition-all duration-300"
              :class="area.hover"
            >
              <p class="text-sm md:text-lg font-bold text-slate-200">{{ area.title }}</p>
              <p class="mt-1 text-[11px] md:text-xs text-slate-500">{{ area.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: 專業技術棧 (Professional Toolkit) -->
    <section
      id="toolkit"
      class="snap-start min-h-[calc(100vh-theme(spacing.header))] flex flex-col justify-center px-[5%] py-8 md:py-20 relative border-t border-slate-900/60"
    >
      <!-- Background glow decoration -->
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-5xl mx-auto w-full">
        <SharedSectionHeading
          eyebrow="Professional Toolkit"
          eyebrow-class="text-blue-400"
          title="專業技術棧"
          description="依照專案需要選擇合適的技術組合，從介面到基礎設施都能穩定交付。"
        />

        <div class="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-4 reveal-on-scroll reveal-delay-200">
          <AboutToolkitCard
            v-for="item in toolkitItems"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :items="item.items"
            :color="item.color"
          />
        </div>
      </div>
    </section>

    <!-- Section 3: 從想法到上線 (Build Lifecycle) -->
    <section
      id="lifecycle"
      class="snap-start min-h-[calc(100vh-theme(spacing.header))] flex flex-col justify-between px-[5%] py-8 md:py-20 relative border-t border-slate-900/60"
    >
      <!-- Background glow decoration -->
      <div class="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center">
        <SharedSectionHeading
          eyebrow="Build Lifecycle"
          eyebrow-class="text-emerald-400"
          title="從想法到上線"
          description="不論是純前端、全端或資料專案，都用同一套流程把想法穩定地交付成產品。"
        />

        <div class="relative grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4 reveal-on-scroll reveal-delay-200">
          <!-- Connection line on desktop -->
          <div class="hidden md:block absolute top-[36px] left-[50px] right-[50px] h-0.5 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-emerald-500/40 z-0" aria-hidden="true"></div>

          <AboutLifecycleStep
            v-for="step in lifecycleSteps"
            :key="step.number"
            :number="step.number"
            :title="step.title"
            :description="step.description"
            :color="step.color"
          />
        </div>
      </div>

      <!-- Localized Footer -->
      <footer class="w-full border-t border-slate-900/60 pt-4 text-xs text-slate-500 text-center mt-6">
        <SharedCopyrightNotice />
      </footer>
    </section>
  </div>
</template>
