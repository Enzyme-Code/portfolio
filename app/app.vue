<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

useHead({
  title: 'Enzyme Code',
  htmlAttrs: {
    lang: 'zh-Hant'
  },
  meta: [
    { name: 'description', content: 'Enzyme Code 專注於後端開發與資料工程，將分散的資料庫、API、爬蟲流程催化為高品質、高可用性的軟體產品。' },
    { property: 'og:title', content: 'Enzyme Code | Backend & Data Engineering Portfolio' },
    { property: 'og:description', content: '專注後端與資料工程，提供 ETL、API 開發及金融資料整合方案。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/EnzyCode.svg' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/EnzyCode.svg'
    }
  ]
})

const route = useRoute()

const setupObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  const elements = document.querySelectorAll('.reveal-on-scroll')
  elements.forEach((el) => observer.observe(el))
}

onMounted(() => {
  setupObserver()
})

watch(() => route.path, async () => {
  await nextTick()
  setupObserver()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


