export default defineNuxtConfig({
  compatibilityDate: '2025-10-30',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: false,
  },
  app: {
    head: {
      title: 'PRISMO - Dashboard Publikasi LAN RI',
      htmlAttrs: { lang: 'id' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Platform Monitoring Publikasi dan Riset Kebijakan Lembaga Administrasi Negara (LAN RI)' },
        { property: 'og:title', content: 'PRISMO - Dashboard Publikasi LAN RI' },
        { property: 'og:site_name', content: 'PRISMO' },
        { property: 'og:description', content: 'Platform Monitoring Publikasi dan Riset Kebijakan Lembaga Administrasi Negara (LAN RI)' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://prismo-monitoring-publikasi-lan.vercel.app/favicon.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'PRISMO - Dashboard Publikasi LAN RI' },
        { name: 'twitter:description', content: 'Platform Monitoring Publikasi dan Riset Kebijakan Lembaga Administrasi Negara (LAN RI)' },
        { name: 'twitter:image', content: 'https://prismo-monitoring-publikasi-lan.vercel.app/favicon.png' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
})
