<script setup lang="ts">
useHead({
  title: 'PRISMO - Dashboard Publikasi LAN RI',
  meta: [
    { property: 'og:title', content: 'PRISMO - Dashboard Publikasi LAN RI' },
    { property: 'og:site_name', content: 'PRISMO' },
    { name: 'twitter:title', content: 'PRISMO - Dashboard Publikasi LAN RI' },
    { name: 'description', content: 'PRISMO - Dashboard Publikasi LAN RI' },
    { property: 'og:description', content: 'Platform Monitoring Publikasi dan Riset Kebijakan Lembaga Administrasi Negara (LAN RI)' },
    { property: 'og:image', content: 'https://prismo-monitoring-publikasi-lan.vercel.app/favicon.png' },
    { name: 'twitter:image', content: 'https://prismo-monitoring-publikasi-lan.vercel.app/favicon.png' },
  ],
})
</script>

<template>
  <main class="w-full h-[100dvh] overflow-hidden bg-slate-50">
    <iframe
      class="block w-full h-[100dvh] border-0"
      src="/legacy/"
      title="PRISMO - Dashboard Publikasi LAN RI"
    />
  </main>
</template>
