// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      script: [
        {
          // Apply saved / system theme before first paint to avoid a flash
          innerHTML: "(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');if(t==='dark')d.classList.add('dark')}catch(e){d.classList.add('dark')}})()",
          tagPosition: 'head'
        }
      ]
    }
  },
  
  // 新增此區塊以對應環境變數 
  runtimeConfig: {
    public: {
      cwaApiKey: process.env.NUXT_PUBLIC_CWA_API_KEY
    }
  }
})