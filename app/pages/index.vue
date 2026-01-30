<template>
  <div>
    <FloatingButton />
    <AppNav />

    <!-- Hero Section -->
    <section
      id="home"
      class="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-fixed"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=2000');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-5xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-wide leading-tight animate-fadeIn"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          Criando Goldens com excelência e carinho
        </h1>
        <p
          class="text-xl md:text-2xl lg:text-3xl mb-10 font-light animate-fadeInDelay"
          style="text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);"
        >
          Criação Especializada de Golden Retriever
        </p>
        <NuxtLink
          to="/filhotes"
          class="inline-block px-12 py-5 bg-[#D4AF37] text-white no-underline rounded-full font-bold text-lg transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide animate-fadeInDelay2 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-[#C9A02C]"
        >
          Conheça Nossos Filhotes
        </NuxtLink>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <span class="block w-[30px] h-[50px] border-2 border-white rounded-[25px] relative before:content-[''] before:absolute before:top-2.5 before:left-1/2 before:-translate-x-1/2 before:w-1.5 before:h-2.5 before:bg-white before:rounded-sm before:animate-scroll" />
      </div>
    </section>

    <!-- Sobre Section -->
    <section class="py-24 bg-[#F5F5DC]">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl text-[#2C2416] mb-6 font-extrabold">
              Bem-vindo ao Goldens da Chácara
            </h2>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              Somos um canil especializado na criação responsável de
              <strong>Golden Retriever</strong>, com foco em saúde, genética e temperamento.
              Nossos filhotes são criados em ambiente familiar, com socialização desde os primeiros dias.
            </p>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              Trabalhamos com <strong>linhagens selecionadas</strong>, priorizando cães equilibrados,
              saudáveis e dentro do padrão da raça. Aqui, você não escolhe apenas um pet —
              escolhe um novo membro da família.
            </p>
          </div>

          <div class="h-[500px]">
            <div
              class="w-full h-full bg-gradient-to-br from-[#8B7355] to-[#D4AF37] rounded-3xl flex items-center justify-center text-white text-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-cover bg-center"
              style="background-image: url('https://placedog.net/800/600?id=3');"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-24 bg-[#2C2416] text-white text-center">
      <div class="max-w-[1200px] mx-auto px-5">
        <h2 class="text-4xl md:text-5xl mb-4 font-extrabold">
          Pronto para ter seu Golden Retriever?
        </h2>
        <p class="text-xl md:text-2xl mb-10">
          Entre em contato e conheça mais sobre nossos filhotes e reprodutores
        </p>
        <div class="flex gap-6 justify-center flex-wrap">
          <NuxtLink
            to="/filhotes"
            class="inline-block px-12 py-5 bg-[#D4AF37] text-white no-underline rounded-full font-bold text-lg transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-[#C9A02C]"
          >
            Ver Filhotes
          </NuxtLink>
          <a
            href="https://wa.me/5547991611628"
            class="inline-block px-12 py-5 bg-transparent text-white no-underline rounded-full font-bold text-lg transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-[#D4AF37]"
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

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0%, 100% {
    top: 10px;
    opacity: 1;
  }
  50% {
    top: 25px;
    opacity: 0.5;
  }
}

.animate-fadeIn {
  animation: fadeIn 1.2s ease-in;
}

.animate-fadeInDelay {
  animation: fadeIn 1.2s ease-in 0.3s backwards;
}

.animate-fadeInDelay2 {
  animation: fadeIn 1.2s ease-in 0.6s backwards;
}

.animate-scroll {
  animation: scroll 2s infinite;
}
</style>
