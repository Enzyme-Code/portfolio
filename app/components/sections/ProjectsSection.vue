<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  completed: boolean
  url?: string
}

const projects: Project[] = [
    {
    title: 'AeroPulse',
    description: '串接天氣以及空汙資料來源，經由資料清洗轉化為視覺化前端介面',
    tags: ['Nuxt', 'API', 'Weather',"air pollution"],
    completed: true,
    url: 'https://aeropulse.enzycode.com/'
  },
  {
    title: 'Stock Pulse',
    description: '整合台股、ETF、指數與財經資料的資料工程專案，包含 Provider、Pipeline、PostgreSQL 儲存與前端展示。',
    tags: ['Python', 'PostgreSQL', 'ETL', 'Financial Data'],
    completed: false
  },

]
</script>

<template>
  <section id="projects" class="relative px-[5%] py-12 md:py-24 scroll-mt-24">
    <div class="mx-auto max-w-6xl">
      <SharedSectionHeading
        level="h2"
        eyebrow="Selected Projects"
        title="專案作品"
        description="從資料擷取、清洗、儲存到前端呈現，將分散的資料轉化為可被理解與使用的產品資訊。"
      />

      <div class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          :class="[
            'relative rounded-2xl border p-6 shadow-xl shadow-black/20 transition-all duration-300 reveal-on-scroll overflow-hidden flex flex-col justify-between min-h-[220px]',
            project.completed
              ? 'border-slate-800 bg-slate-900/70 hover:-translate-y-1 hover:border-blue-500/40'
              : 'border-slate-800/40 bg-slate-900/30 cursor-not-allowed',
            index === 0 ? 'reveal-delay-100' : 'reveal-delay-200'
          ]"
        >
          <!-- Project Content -->
          <div :class="[!project.completed ? 'blur-[1px] opacity-40 select-none' : '']" class="h-full flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-slate-100 mb-3">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 leading-relaxed mb-5 text-sm">
                {{ project.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-300"
              >
                {{ tag }}
              </span>
            </div>

            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
            >
              前往網站
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Coming Soon Overlay -->
          <div
            v-if="!project.completed"
            class="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center z-10"
          >
            <div class="px-4 py-2 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-2xl flex items-center gap-2">
              <span class="relative flex h-2 w-2" aria-hidden="true">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span class="text-xs font-semibold tracking-wider text-amber-400 uppercase">開發中 / Coming Soon</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
