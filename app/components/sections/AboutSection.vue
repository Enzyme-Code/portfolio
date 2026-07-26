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
    title: '開發語言',
    color: 'blue',
    items: ['Python', 'TypeScript', 'Nuxt.js', 'Vue.js']
  },
  {
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    title: '資料庫系統',
    color: 'emerald',
    items: ['PostgreSQL', 'DB Design', 'Ticker 建置', 'SQL 優化']
  },
  {
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    title: '資料工程',
    color: 'indigo',
    items: ['ETL 排程設計', '穩定爬蟲排程', '資料清洗標準化', 'API 串接整合']
  },
  {
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z',
    title: '開發基礎設施',
    color: 'violet',
    items: ['Docker 容器化', 'Git 版本控制', 'Linux / Bash 腳本', 'Git Actions CI/CD']
  }
]

const lifecycleSteps: LifecycleItem[] = [
  {
    number: '01',
    title: '資料爬取與收集',
    color: 'blue',
    description: '開發高穩定性的排程爬蟲與 API 串接程式，定期自動從各種資料來源收集最新資訊。'
  },
  {
    number: '02',
    title: '清洗與轉換 (ETL)',
    color: 'indigo',
    description: '過濾雜訊、排除異常值，將不同來源的非結構化資料整合並轉換為標準格式。'
  },
  {
    number: '03',
    title: '高效儲存與優化',
    color: 'emerald',
    description: '設計關聯式資料庫結構，建立索引及分割區，優化查詢效能以支撐巨量資料。'
  },
  {
    number: '04',
    title: '服務化與 API 輸出',
    color: 'slate',
    description: '建構穩定的 API 介面，供前端進行圖表繪製、視覺化呈現，讓資料真正產生產品價值。'
  }
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
      <div class="mx-auto max-w-5xl w-full mb-6 md:mb-14 reveal-on-scroll">
        <AboutProfileCard />
      </div>

      <!-- Bottom: Core grid (Hidden on mobile to fit in single viewport) -->
      <div class="mx-auto max-w-5xl w-full hidden md:grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-stretch">
        <!-- Left side: Core title -->
        <div class="relative group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 shadow-xl shadow-black/25 reveal-on-scroll flex flex-col justify-center h-full">
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-50" aria-hidden="true"></div>
          <p class="relative z-10 mb-4 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
            Core Philosophy
          </p>

          <h2 class="relative z-10 text-3xl md:text-5xl font-extrabold text-slate-100 leading-tight">
            用工程思維
            <br class="hidden md:block" />
            讓資料視覺化
          </h2>

          <div class="absolute -right-3 -bottom-3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-full" aria-hidden="true"></div>
        </div>

        <!-- Right side: Paragraphs & key metrics -->
        <div class="text-slate-400 leading-relaxed space-y-6 reveal-on-scroll reveal-delay-200">
          <p class="text-lg">
            我專注於後端開發與資料工程，擅長將分散、凌亂的資料來源整合成穩定的自動化資料流程，
            並藉由關聯式資料庫規劃、API 核心架構設計，讓數據能夠被高效查詢與整合應用。
          </p>

          <p class="text-base text-slate-400/90">
            <strong class="text-slate-200">Enzyme Code</strong> 的概念源於「酵素（Enzyme）」：
            不只是機械性地搬移資料，而是深入理解業務邏輯，將原始數據進行過濾與提煉，催化出具有價值與高可用性的軟體產品。
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 hover:border-blue-500/30 transition-all duration-300">
              <p class="text-xl font-bold text-slate-200">後端開發</p>
              <p class="mt-1 text-xs text-slate-500">API 系統 / 資料庫結構設計 / 服務化</p>
            </div>

            <div class="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 hover:border-emerald-500/30 transition-all duration-300">
              <p class="text-xl font-bold text-slate-200">資料工程</p>
              <p class="mt-1 text-xs text-slate-500">自動化爬蟲 / ETL 管道 / 排程自動化</p>
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
          description="精選合適且高效的技術組合，致力於建立高可用性、易維護的後端基礎設施。"
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

    <!-- Section 3: 資料催化工作流 (Data Catalyst Lifecycle) -->
    <section
      id="lifecycle"
      class="snap-start min-h-[calc(100vh-theme(spacing.header))] flex flex-col justify-between px-[5%] py-8 md:py-20 relative border-t border-slate-900/60"
    >
      <!-- Background glow decoration -->
      <div class="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center">
        <SharedSectionHeading
          eyebrow="Data Catalyst Lifecycle"
          eyebrow-class="text-emerald-400"
          title="資料催化工作流"
          description="將凌亂的原始資料，經過四步工程轉化，加工成高效、穩定且乾淨的數據產品。"
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
