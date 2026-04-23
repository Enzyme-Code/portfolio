// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  
  // 新增此區塊以對應環境變數 
  runtimeConfig: {
    public: {
      cwaApiKey: process.env.NUXT_PUBLIC_CWA_API_KEY
    }
  }
})