<template>
  <div>
    <FloatingButton />
    <AppNav />

    <!-- Hero Section -->
    <section
      id="home"
      class="hero"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=2000');"
    >
      <div class="hero-overlay" />
      <div class="hero-content">
        <h1 class="fade-in">
          Criando Goldens com excelência e carinho
        </h1>
        <p class="fade-in-delay">
          Criação Especializada de Golden Retriever
        </p>
        <NuxtLink
          to="/filhotes"
          class="cta-button fade-in-delay-2"
        >
          Conheça Nossos Filhotes
        </NuxtLink>
      </div>
      <div class="scroll-indicator">
        <span />
      </div>
    </section>

    <!-- Sobre Section -->
    <section class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Bem-vindo ao Goldens da Chácara</h2>

            <p>
              Somos um canil especializado na criação responsável de
              <strong>Golden Retriever</strong>, com foco em saúde, genética e temperamento.
              Nossos filhotes são criados em ambiente familiar, com socialização desde os primeiros dias.
            </p>

            <p>
              Trabalhamos com <strong>linhagens selecionadas</strong>, priorizando cães equilibrados,
              saudáveis e dentro do padrão da raça. Aqui, você não escolhe apenas um pet —
              escolhe um novo membro da família.
            </p>
          </div>

          <div class="about-image">
            <div
              class="image-placeholder"
              style="background-image: url('https://placedog.net/800/600?id=3'); background-size: cover; background-position: center; border-radius: 12px;"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="final-cta">
      <div class="container">
        <h2>Pronto para ter seu Golden Retriever?</h2>
        <p>Entre em contato e conheça mais sobre nossos filhotes e reprodutores</p>
        <div class="cta-buttons">
          <NuxtLink
            to="/filhotes"
            class="cta-button primary"
          >
            Ver Filhotes
          </NuxtLink>
          <a
            href="https://wa.me/5547991611628"
            class="cta-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Goldens da Chácara - Criação Especializada de Golden Retriever',
  meta: [
    {
      name: 'description',
      content: 'Goldens da Chácara - Criação especializada de Golden Retriever com filhotes de alta linhagem. Conheça nossos reprodutores e reserve seu filhote.'
    },
    {
      name: 'keywords',
      content: 'golden retriever, filhotes golden retriever, canil golden retriever, golden retriever para venda, criação golden retriever, filhotes golden'
    },
    { property: 'og:title', content: 'Goldens da Chácara - Criação Especializada de Golden Retriever' },
    { property: 'og:description', content: 'Criação especializada de Golden Retriever com filhotes de alta linhagem em Formiga (MG).' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://goldensdachacara.com.br/golden-retriever-canil.png' },
    { property: 'og:url', content: 'https://goldensdachacara.com.br' }
  ],
  link: [
    { rel: 'canonical', href: 'https://goldensdachacara.com.br' }
  ]
})
</script>
