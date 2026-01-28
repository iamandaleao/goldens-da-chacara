<template>
  <div>
    <FloatingButton />
    <AppNav />

    <section
      class="page-hero"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000');"
    >
      <div class="page-hero-content">
        <h1>Nossos Filhotes</h1>
        <p>Conheça nossos adoráveis filhotes Golden Retriever</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-intro">
          <h2>Em Breve: Nova Ninhada</h2>
          <p>
            Estamos preparando uma nova ninhada de filhotes Golden Retriever com pedigree CBKC. Todos os nossos filhotes
            nascem em ambiente familiar, recebem os melhores cuidados veterinários e são entregues vacinados,
            vermifugados e com garantia de saúde.
          </p>
        </div>

        <div class="puppies-info">
          <h3>O que está incluso:</h3>
          <div class="info-grid">
            <div class="info-card">
              <span class="info-icon">📜</span>
              <h4>Pedigree CBKC</h4>
              <p>Registro oficial da raça</p>
            </div>
            <div class="info-card">
              <span class="info-icon">💉</span>
              <h4>Vacinas</h4>
              <p>Carteira de vacinação completa</p>
            </div>
            <div class="info-card">
              <span class="info-icon">🏥</span>
              <h4>Vermifugação</h4>
              <p>Protocolo veterinário completo</p>
            </div>
            <div class="info-card">
              <span class="info-icon">✅</span>
              <h4>Garantia de Saúde</h4>
              <p>Contrato com garantias</p>
            </div>
            <div class="info-card">
              <span class="info-icon">🎁</span>
              <h4>Kit Filhote</h4>
              <p>Ração, brinquedos e guia</p>
            </div>
            <div class="info-card">
              <span class="info-icon">📱</span>
              <h4>Suporte</h4>
              <p>Acompanhamento pós-venda</p>
            </div>
          </div>
        </div>

        <div class="reservation-box">
          <h3>Faça sua Reserva</h3>
          <p>
            Garanta seu filhote Golden Retriever agora! Entre em contato para mais informações sobre disponibilidade e
            valores.
          </p>
          <a
            href="https://wa.me/5547991611628"
            class="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve Agora
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  title: 'Filhotes Golden Retriever - Goldens da Chácara',
  meta: [
    { name: 'description', content: 'Filhotes Golden Retriever disponíveis - Goldens da Chácara. Filhotes com pedigree, vacinados e vermifugados.' },
    { name: 'keywords', content: 'filhotes golden retriever, golden retriever para venda, comprar golden retriever, filhotes disponíveis' },
    { property: 'og:title', content: 'Filhotes Golden Retriever - Goldens da Chácara' },
    { property: 'og:description', content: 'Filhotes Golden Retriever com pedigree, vacinados e vermifugados em Formiga (MG).' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://goldensdachacara.com.br/filhotes' }
  ],
  link: [
    { rel: 'canonical', href: 'https://goldensdachacara.com.br/filhotes' }
  ]
})
</script>


