// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt','nuxt-lodash'],
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'],
    ],
  },
  
})
