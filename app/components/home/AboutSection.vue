<script setup lang="ts">
</script>

<template>
  <section id="about" class="relative px-[5%] py-16 md:py-28 scroll-mt-24">
    <!-- Background glow decoration -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="mx-auto max-w-5xl grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-stretch">
      <!-- Left side: Core title -->
      <div class="relative group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 shadow-xl shadow-black/25 reveal-on-scroll flex flex-col justify-center h-full">
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-50"></div>
        <p class="relative z-10 mb-4 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
          About Me
        </p>

        <h2 class="relative z-10 text-3xl md:text-5xl font-extrabold text-slate-100 leading-tight">
          用工程思維
          <br class="hidden md:block" />
          讓資料視覺化
        </h2>

        <div class="absolute -right-3 -bottom-3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
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

    <!-- 專業技術棧 -->
    <div class="mt-28 md:mt-40 max-w-5xl mx-auto">
      <div class="mb-14 text-center reveal-on-scroll">
        <p class="mb-3 text-sm font-semibold tracking-wider text-blue-400 uppercase">
          Professional Toolkit
        </p>
        <h3 class="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
          專業技術棧
        </h3>
        <p class="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
          精選合適且高效的技術組合，致力於建立高可用性、易維護的後端基礎設施。
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 reveal-on-scroll reveal-delay-200">
        <!-- Backend Languages -->
        <div class="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="flex items-center gap-3 mb-5">
            <div class="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">開發語言</h4>
          </div>
          <ul class="space-y-3.5 text-sm text-slate-400">
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Python </li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> TypeScript </li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Nuxt.js </li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Vue.js </li>
          </ul>
        </div>

        <!-- Database Systems -->
        <div class="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="flex items-center gap-3 mb-5">
            <div class="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">資料庫系統</h4>
          </div>
          <ul class="space-y-3.5 text-sm text-slate-400">
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PostgreSQL</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> database design</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ticker 建置</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> SQL 查詢優化</li>
          </ul>
        </div>

        <!-- Data Engineering -->
        <div class="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="flex items-center gap-3 mb-5">
            <div class="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">資料工程</h4>
          </div>
          <ul class="space-y-3.5 text-sm text-slate-400">
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> ETL 排程設計</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> 穩定爬蟲排程</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> 資料清洗與標準化</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> API 資料串接整合</li>
          </ul>
        </div>

        <!-- Infrastructure & DevOps -->
        <div class="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="flex items-center gap-3 mb-5">
            <div class="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <h4 class="text-lg font-bold text-slate-200">開發基礎設施</h4>
          </div>
          <ul class="space-y-3.5 text-sm text-slate-400">
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Docker 容器化</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Git 版本控制</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Linux / Bash 腳本</li>
            <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Git Actions 基礎 CI/CD</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 核心工作流程 / Pipeline -->
    <div class="mt-28 md:mt-40 max-w-5xl mx-auto">
      <div class="mb-14 text-center reveal-on-scroll">
        <p class="mb-3 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
          Data Catalyst Lifecycle
        </p>
        <h3 class="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
          資料催化工作流
        </h3>
        <p class="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
          將凌亂的原始資料，經過四步工程轉化，加工成高效、穩定且乾淨的數據產品。
        </p>
      </div>

      <div class="relative grid gap-8 md:grid-cols-4 reveal-on-scroll reveal-delay-200">
        <!-- Connection line on desktop -->
        <div class="hidden md:block absolute top-[36px] left-[50px] right-[50px] h-0.5 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-emerald-500/40 z-0"></div>

        <!-- Step 1 -->
        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-blue-400 text-xl font-bold mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-blue-500/50 group-hover:bg-blue-950/20 group-hover:shadow-blue-500/10 transition-all duration-300">
            01
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors duration-300">資料爬取與收集</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            開發高穩定性的排程爬蟲與 API 串接程式，定期自動從各種資料來源收集最新資訊。
          </p>
        </div>

        <!-- Step 2 -->
        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 text-xl font-bold mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/20 group-hover:shadow-indigo-500/10 transition-all duration-300">
            02
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors duration-300">清洗與轉換 (ETL)</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            過濾雜訊、排除異常值，將不同來源的非結構化資料整合並轉換為標準格式。
          </p>
        </div>

        <!-- Step 3 -->
        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xl font-bold mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/20 group-hover:shadow-emerald-500/10 transition-all duration-300">
            03
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors duration-300">高效儲存與優化</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            設計關聯式資料庫結構，建立索引及分割區，優化查詢效能以支撐巨量資料。
          </p>
        </div>

        <!-- Step 4 -->
        <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
          <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xl font-bold mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-slate-500/50 group-hover:bg-slate-800/30 group-hover:shadow-white/5 transition-all duration-300">
            04
          </div>
          <h4 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-slate-100 transition-colors duration-300">服務化與 API 輸出</h4>
          <p class="text-sm text-slate-400 leading-relaxed">
            建構穩定的 API 介面，供前端進行圖表繪製、視覺化呈現，讓資料真正產生產品價值。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>