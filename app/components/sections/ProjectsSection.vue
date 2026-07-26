<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  completed: boolean
}

const projects: Project[] = [
    {
    title: 'Weather Data Platform',
    description: '串接天氣資料來源，處理 36 小時、3 日與一週預報資料，並提供前端查詢與視覺化。',
    tags: ['Nuxt', 'Vue', 'API', 'Weather Data'],
    completed: true
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
        description="從資料擷取、清洗、儲存到前端呈現，將分散的資料轉化為可被理解與使用的資訊產品。"
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

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-300"
              >
                {{ tag }}
              </span>
            </div>
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
