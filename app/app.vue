<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
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
