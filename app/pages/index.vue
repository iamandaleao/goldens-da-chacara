<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()
const siteUrl = 'https://goldensdachacara.com.br'

definePageMeta({
  i18n: {
    paths: {
      pt: '/',
      en: '/'
    }
  }
})

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogType: 'website',
  ogImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png',
  ogUrl: () => `${siteUrl}${route.path}`
})

useHead({
  link: [{
    rel: 'canonical',
    href: () => `${siteUrl}${route.path}`
  }]
})
</script>

<template>
  <div>
    <FloatingButton />
    <AppNav />

    <!-- Hero Section -->
    <section
      id="home"
      class="relative h-[70vh] lg:h-screen flex items-center justify-center text-white text-center bg-cover bg-[position:60%_60%] bg-no-repeat"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/capa-home.png');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-wide leading-tight animate-fadeIn"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-xl md:text-2xl lg:text-3xl mb-10 font-light animate-fadeInDelay"
          style="text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.subtitle') }}
        </p>
        <NuxtLink
          :to="localePath('/filhotes')"
          class="inline-block px-6 py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide animate-fadeInDelay2 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary-strong"
        >
          {{ t('hero.cta') }}
        </NuxtLink>
      </div>
      
    </section>

    <!-- Sobre Section -->
    <section class="py-14 bg-surface-cream">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl text-ink mb-6 font-extrabold text-center lg:text-left">
              {{ t('about.title') }}
            </h2>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              {{ t('about.p1.before') }}
              <strong>{{ t('about.p1.highlight') }}</strong>, {{ t('about.p1.after') }}
            </p>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              {{ t('about.p2.before') }} <strong>{{ t('about.p2.highlight') }}</strong>, {{ t('about.p2.after') }}
            </p>
          </div>

          <div class="h-[500px]">
            <div
              class="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center text-white text-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-cover bg-center"
              style="background-image: url('/images/golden-retriever-home-canil.jpg');"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-24 bg-ink text-white text-center">
      <div class="max-w-[1200px] mx-auto px-5">
        <h2 class="text-4xl md:text-5xl mb-4 font-extrabold">
          {{ t('finalCta.title') }}
        </h2>
        <p class="text-xl md:text-2xl mb-10">
          {{ t('finalCta.subtitle') }}
        </p>
        <div class="flex gap-6 justify-center flex-wrap">
          <NuxtLink
            :to="localePath('/filhotes')"
            class="inline-block px-6 py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary-strong"
          >
            {{ t('finalCta.primary') }}
          </NuxtLink>
          <a
            href="https://wa.me/5537999691236"
            class="inline-block px-6 py-5 bg-transparent text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-primary hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('finalCta.secondary') }}
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<i18n lang="json">
{
  "pt": {
    "seo": {
      "title": "Criação Especializada de Golden Retriever",
      "description": "Goldens da Chácara - Criação especializada de Golden Retriever com filhotes de alta linhagem. Conheça nossos reprodutores e reserve seu filhote.",
      "keywords": "golden retriever, filhotes golden retriever, canil golden retriever, golden retriever para venda, criação golden retriever, filhotes golden",
      "ogTitle": "Goldens da Chácara - Criação Especializada de Golden Retriever",
      "ogDescription": "Criação especializada de Golden Retriever com filhotes de alta linhagem em Formiga (MG)."
    },
    "hero": {
      "title": "Criando Goldens com excelência e carinho",
      "subtitle": "Criação Especializada de Golden Retriever",
      "cta": "Conheça Nossos Filhotes"
    },
    "about": {
      "title": "Bem-vindo ao Goldens da Chácara",
      "p1": {
        "before": "Somos um canil especializado na criação responsável de",
        "highlight": "Golden Retriever",
        "after": "com foco em saúde, genética e temperamento. Nossos filhotes são criados em ambiente familiar, com socialização desde os primeiros dias."
      },
      "p2": {
        "before": "Trabalhamos com",
        "highlight": "linhagens selecionadas",
        "after": "priorizando cães equilibrados, saudáveis e dentro do padrão da raça. Aqui, você não escolhe apenas um pet - escolhe um novo membro da família."
      }
    },
    "finalCta": {
      "title": "Pronto para ter seu Golden Retriever?",
      "subtitle": "Entre em contato e conheça mais sobre nossos filhotes e reprodutores",
      "primary": "Ver Filhotes",
      "secondary": "Fale Conosco"
    }
  },
  "en": {
    "seo": {
      "title": "Specialized Golden Retriever Breeding",
      "description": "Goldens da Chácara - Specialized Golden Retriever breeding with top bloodline puppies. Meet our dogs and reserve your puppy.",
      "keywords": "golden retriever, golden retriever puppies, golden retriever kennel, buy golden retriever, golden breeding, puppies",
      "ogTitle": "Goldens da Chácara - Specialized Golden Retriever Breeding",
      "ogDescription": "Specialized Golden Retriever breeding with top bloodline puppies in Formiga (MG), Brazil."
    },
    "hero": {
      "title": "Breeding Goldens with excellence and care",
      "subtitle": "Specialized Golden Retriever Breeding",
      "cta": "Meet Our Puppies"
    },
    "about": {
      "title": "Welcome to Goldens da Chácara",
      "p1": {
        "before": "We are a kennel specialized in responsible",
        "highlight": "Golden Retriever",
        "after": "breeding, focused on health, genetics, and temperament. Our puppies are raised in a family environment with socialization from day one."
      },
      "p2": {
        "before": "We work with",
        "highlight": "carefully selected bloodlines",
        "after": "prioritizing balanced, healthy dogs within breed standards. Here, you do not just choose a pet - you choose a new family member."
      }
    },
    "finalCta": {
      "title": "Ready to welcome your Golden Retriever?",
      "subtitle": "Contact us and learn more about our puppies and breeding dogs",
      "primary": "See Puppies",
      "secondary": "Contact Us"
    }
  }
}
</i18n>

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
