<script setup lang="ts">
useHead({
  title: 'Enzyme Code',
  htmlAttrs: {
    lang: 'zh-Hant'
  },
  meta: [
    { name: 'description', content: 'Enzyme Code 從前端介面、後端服務到資料工程，把每個想法催化成穩定、好用的產品。' },
    { property: 'og:title', content: 'Enzyme Code | Frontend · Backend · Data Portfolio' },
    { property: 'og:description', content: '前端、後端與資料工程作品集：從構想、設計、開發到上線。' },
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
const { refresh } = useScrollReveal()

onMounted(() => {
  refresh()
})

watch(() => route.path, async () => {
  await nextTick()
  refresh()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
