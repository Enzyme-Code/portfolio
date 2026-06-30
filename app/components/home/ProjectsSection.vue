<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Market Explorer',
    description: '整合台股、ETF、指數與財經資料的資料工程專案，包含 Provider、Pipeline、PostgreSQL 儲存與前端展示。',
    tags: ['Python', 'PostgreSQL', 'ETL', 'Financial Data']
  },
  {
    title: 'Weather Data Platform',
    description: '串接天氣資料來源，處理 36 小時、3 日與一週預報資料，並提供前端查詢與視覺化。',
    tags: ['Nuxt', 'Vue', 'API', 'Weather Data']
  },
  {
    title: 'Personal Portfolio',
    description: '以 Enzyme Code 為品牌概念，展示後端開發、資料工程與專案整合能力。',
    tags: ['Nuxt', 'Tailwind CSS', 'Portfolio']
  }
]
</script>

<template>
  <section id="projects" class="relative px-[5%] py-12 md:py-24 scroll-mt-24">
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 text-center reveal-on-scroll">
        <p class="mb-3 text-sm font-medium text-blue-400">
          Selected Projects
        </p>

        <h2 class="text-3xl md:text-5xl font-bold text-slate-100">
          專案作品
        </h2>

        <p class="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed">
          從資料擷取、清洗、儲存到前端呈現，將分散的資料轉化為可被理解與使用的資訊產品。
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          :class="[
            'rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300 reveal-on-scroll',
            index === 0 ? 'reveal-delay-100' : index === 1 ? 'reveal-delay-200' : 'reveal-delay-300'
          ]"
        >
          <h3 class="text-xl font-bold text-slate-100 mb-3">
            {{ project.title }}
          </h3>

          <p class="text-slate-400 leading-relaxed mb-5">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>