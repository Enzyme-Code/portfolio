<script setup lang="ts">
definePageMeta({
  hideFooter: true
})

useHead({
  title: '關於我 | Enzyme Code',
  meta: [
    { name: 'description', content: '關於 Enzyme Code：從前端介面、後端服務到資料工程，把想法從零做到上線。' }
  ]
})
</script>

<template>
  <div class="h-screen overflow-y-auto snap-y snap-proximity scroll-smooth pt-header scroll-pt-header">
    <SectionsAboutSection />
  </div>
</template>
