<template>
  <div class="min-h-screen bg-white">
    <FloatingButton />

    <AppNav />

    <HeroSection />

    <HistorySection />

    <AboutGoldenSection />

    <OurValuesSection />

    <FaqSection />

    <ContactSection />

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'description',
      content: 'Criação responsável de Golden Retrievers em Formiga (MG). Filhotes saudáveis, socializados e acompanhados com cuidado desde o nascimento.'
    },
    {
      name: 'keywords',
      content: 'golden retriever, filhotes golden retriever, criador de golden, canil golden retriever, golden retriever formiga mg'
    },
    { property: 'og:title', content: 'Goldens da Chácara | Criação de Golden Retrievers' },
    { property: 'og:description', content: 'Filhotes Golden Retriever saudáveis e criados com responsabilidade em Formiga (MG).' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://placedog.net/1200/630?random' },
    { property: 'og:url', content: 'https://goldensdachacara.com.br' }
  ],
  link: [
    { rel: 'canonical', href: 'https://goldensdachacara.com.br' }
  ]
})
</script>
