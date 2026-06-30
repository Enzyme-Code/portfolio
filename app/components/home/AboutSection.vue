<script setup lang="ts">
</script>

<template>
  <section id="about" class="relative px-[5%] py-12 md:py-24 scroll-mt-24">
    <div class="mx-auto max-w-5xl grid gap-10 md:grid-cols-[0.9fr_1.1fr] items-center">
      <div class="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-black/20 reveal-on-scroll">
        <p class="mb-3 text-sm font-medium text-emerald-400">
          About Me
        </p>

        <h2 class="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
          用工程思維，讓資料變成產品
        </h2>
      </div>

      <div class="text-slate-400 leading-relaxed space-y-5 reveal-on-scroll reveal-delay-200">
        <p>
          我專注於後端開發與資料工程，擅長將外部資料來源整合成穩定的資料流程，
          並透過資料庫、API 與前端介面，讓資料能夠被查詢、分析與展示。
        </p>

        <p>
          Enzyme Code 的概念來自「催化劑」：不是單純搬運資料，而是讓資料經過處理後，
          產生更高的可用性、可讀性與產品價值。
        </p>

        <div class="grid grid-cols-2 gap-4 pt-4">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p class="text-2xl font-bold text-slate-100">Backend</p>
            <p class="mt-2 text-sm text-slate-500">API / Service / Database</p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p class="text-2xl font-bold text-slate-100">Data</p>
            <p class="mt-2 text-sm text-slate-500">Crawler / ETL / Pipeline</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>