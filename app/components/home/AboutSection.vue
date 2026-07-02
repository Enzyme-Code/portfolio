<script setup lang="ts">
</script>

<template>
  <div class="relative w-full">
    <!-- Section 1: About Me (個人介紹與基本資料) -->
    <section
      id="about-me"
      class="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center px-[5%] py-8 md:py-20 relative"
    >
      <!-- Background glow decoration -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <!-- Top: Personal Profile Card (Avatar removed) -->
      <div class="mx-auto max-w-5xl w-full mb-6 md:mb-14 reveal-on-scroll">
        <div class="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          <!-- Profile Text -->
          <div class="text-left flex-grow w-full">
            <h3 class="text-2xl md:text-3xl font-bold text-slate-100 mb-2">Conan</h3>
            <p class="text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-3">Backend & Data Engineer</p>
            <p class="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed mb-5">
              以程式碼作為系統的催化劑，深耕後端系統架構與自動化資料工程。擅長從混亂的原始數據中，過濾、清洗、轉化並淬煉出具備高查詢效能與高度穩定性的資料產品。
            </p>
            <!-- Contact and Social Links -->
            <div class="flex flex-wrap justify-start gap-x-6 gap-y-3 text-xs md:text-sm text-slate-400 border-t border-slate-800/80 pt-4">
              <a href="mailto:conan.chang@enzycode.com" class="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>conan.chang@enzycode.com</span>
              </a>
              <a href="https://github.com/Enzyme-Code" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg class="h-4 w-4 fill-current text-blue-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/%E5%85%86%E4%B8%9E-%E5%BC%B5-a82423317/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <svg class="h-4 w-4 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom: Core grid (Hidden on mobile to fit in single viewport) -->
      <div class="mx-auto max-w-5xl w-full hidden md:grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-stretch">
        <!-- Left side: Core title -->
        <div class="relative group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 shadow-xl shadow-black/25 reveal-on-scroll flex flex-col justify-center h-full">
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-50"></div>
          <p class="relative z-10 mb-4 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
            Core Philosophy
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
    </section>

    <!-- Section 2: 專業技術棧 (Professional Toolkit) -->
    <section
      id="toolkit"
      class="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-center px-[5%] py-8 md:py-20 relative border-t border-slate-900/60"
    >
      <!-- Background glow decoration -->
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div class="max-w-5xl mx-auto w-full">
        <div class="mb-6 md:mb-14 text-center reveal-on-scroll">
          <p class="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Professional Toolkit
          </p>
          <h3 class="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            專業技術棧
          </h3>
          <p class="mt-2 text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
            精選合適且高效的技術組合，致力於建立高可用性、易維護的後端基礎設施。
          </p>
        </div>

        <div class="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-4 reveal-on-scroll reveal-delay-200">
          <!-- Backend Languages -->
          <div class="group relative rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-4 md:p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-5">
              <div class="p-2 rounded-lg md:rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-200">開發語言</h4>
            </div>
            <ul class="space-y-2 md:space-y-3.5 text-xs md:text-sm text-slate-400">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Python </li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> TypeScript </li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Nuxt.js </li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Vue.js </li>
            </ul>
          </div>

          <!-- Database Systems -->
          <div class="group relative rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-4 md:p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-5">
              <div class="p-2 rounded-lg md:rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-200">資料庫系統</h4>
            </div>
            <ul class="space-y-2 md:space-y-3.5 text-xs md:text-sm text-slate-400">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PostgreSQL</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> DB Design</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ticker 建置</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> SQL 優化</li>
            </ul>
          </div>

          <!-- Data Engineering -->
          <div class="group relative rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-4 md:p-6 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-5">
              <div class="p-2 rounded-lg md:rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-200">資料工程</h4>
            </div>
            <ul class="space-y-2 md:space-y-3.5 text-xs md:text-sm text-slate-400">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> ETL 排程設計</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> 穩定爬蟲排程</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> 資料清洗標準化</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> API 串接整合</li>
            </ul>
          </div>

          <!-- Infrastructure & DevOps -->
          <div class="group relative rounded-xl md:rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:bg-slate-900/60 p-4 md:p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
            <div class="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-5">
              <div class="p-2 rounded-lg md:rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </div>
              <h4 class="text-sm md:text-lg font-bold text-slate-200">開發基礎設施</h4>
            </div>
            <ul class="space-y-2 md:space-y-3.5 text-xs md:text-sm text-slate-400">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Docker 容器化</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Git 版本控制</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Linux / Bash 腳本</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-violet-400"></span> Git Actions CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: 資料催化工作流 (Data Catalyst Lifecycle) -->
    <section
      id="lifecycle"
      class="snap-start min-h-[calc(100vh-4rem)] flex flex-col justify-between px-[5%] py-8 md:py-20 relative border-t border-slate-900/60"
    >
      <!-- Background glow decoration -->
      <div class="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div class="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div class="mb-6 md:mb-14 text-center reveal-on-scroll">
          <p class="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-wider text-emerald-400 uppercase">
            Data Catalyst Lifecycle
          </p>
          <h3 class="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            資料催化工作流
          </h3>
          <p class="mt-2 text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
            將凌亂的原始資料，經過四步工程轉化，加工成高效、穩定且乾淨的數據產品。
          </p>
        </div>

        <div class="relative grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4 reveal-on-scroll reveal-delay-200">
          <!-- Connection line on desktop -->
          <div class="hidden md:block absolute top-[36px] left-[50px] right-[50px] h-0.5 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-emerald-500/40 z-0"></div>

          <!-- Step 1 -->
          <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
            <div class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-blue-400 text-base md:text-xl font-bold mb-3 md:mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-blue-500/50 group-hover:bg-blue-950/20 group-hover:shadow-blue-500/10 transition-all duration-300">
              01
            </div>
            <h4 class="text-sm md:text-lg font-bold text-slate-200 mb-1 md:mb-2 group-hover:text-blue-400 transition-colors duration-300">資料爬取與收集</h4>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
              開發高穩定性的排程爬蟲與 API 串接程式，定期自動從各種資料來源收集最新資訊。
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
            <div class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 text-base md:text-xl font-bold mb-3 md:mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/20 group-hover:shadow-indigo-500/10 transition-all duration-300">
              02
            </div>
            <h4 class="text-sm md:text-lg font-bold text-slate-200 mb-1 md:mb-2 group-hover:text-indigo-400 transition-colors duration-300">清洗與轉換 (ETL)</h4>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
              過濾雜訊、排除異常值，將不同來源的非結構化資料整合並轉換為標準格式。
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
            <div class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-base md:text-xl font-bold mb-3 md:mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/20 group-hover:shadow-emerald-500/10 transition-all duration-300">
              03
            </div>
            <h4 class="text-sm md:text-lg font-bold text-slate-200 mb-1 md:mb-2 group-hover:text-emerald-400 transition-colors duration-300">高效儲存與優化</h4>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
              設計關聯式資料庫結構，建立索引及分割區，優化查詢效能以支撐巨量資料。
            </p>
          </div>

          <!-- Step 4 -->
          <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
            <div class="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-base md:text-xl font-bold mb-3 md:mb-5 shadow-lg shadow-black/30 group-hover:scale-105 group-hover:border-slate-500/50 group-hover:bg-slate-800/30 group-hover:shadow-white/5 transition-all duration-300">
              04
            </div>
            <h4 class="text-sm md:text-lg font-bold text-slate-200 mb-1 md:mb-2 group-hover:text-slate-300 transition-colors duration-300">服務化與 API 輸出</h4>
            <p class="text-xs md:text-sm text-slate-400 leading-relaxed">
              建構穩定的 API 介面，供前端進行圖表繪製、視覺化呈現，讓資料真正產生產品價值。
            </p>
          </div>
        </div>
      </div>

      <!-- Localized Footer -->
      <footer class="w-full border-t border-slate-900/60 pt-4 text-xs text-slate-500 text-center mt-6">
        <p>&copy; {{ new Date().getFullYear() }} Enzyme Code. All rights reserved.</p>
      </footer>
    </section>
  </div>
</template>