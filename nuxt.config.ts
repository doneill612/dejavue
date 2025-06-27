import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  modules: ['shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/shadcn'
  }
})