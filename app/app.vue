<script setup>
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

const title = 'Canil Golden Retriever'
const description = 'Venda de Golden Retrievers em Formiga, MG'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png',
  twitterImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
