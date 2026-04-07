<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://goldensdachacara.com.br' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'pt-BR',
    style: 'scroll-behavior: smooth'
  },
  bodyAttrs: {
    class: 'antialiased'
  }
})

const siteName = 'Goldens da Chácara'
const defaultDescription = 'Criação responsável de Golden Retriever e conteúdos sobre cuidados, saúde e rotina.'

useSeoMeta({
  titleTemplate: (title) => {
    return title ? `${title} | ${siteName}` : siteName
  },
  description: defaultDescription,
  ogSiteName: siteName,
  ogTitle: siteName,
  ogDescription: defaultDescription,
  ogImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png',
  twitterCard: 'summary_large_image',
  twitterTitle: siteName,
  twitterDescription: defaultDescription,
  twitterImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png'
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
