import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwindcss.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: ['shadcn-nuxt', '@nuxtjs/color-mode'],
  shadcn: {
    prefix: '',
    componentDir: './components/shadcn'
  },
  colorMode: {
    classSuffix: ''
  }
})