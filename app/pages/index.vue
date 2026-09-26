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
  ogImage: `${siteUrl}/images/capa-home.png`,
  ogUrl: () => `${siteUrl}${route.path}`,
  twitterCard: 'summary_large_image'
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
      class="site-hero relative flex items-end lg:items-center justify-center lg:justify-start text-white text-left"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/goldens-da-chacara.jpg');"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      <div class="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-20 lg:py-24">
        <h1
          class="max-w-[850px] text-4xl md:text-6xl lg:text-7xl mb-5 font-extrabold leading-[1.05] animate-fadeIn"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="max-w-[700px] text-xl md:text-2xl lg:text-3xl mb-9 font-light animate-fadeInDelay"
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

          <img
            src="/images/golden-retriever-home-canil.jpg"
            :alt="t('about.imageAlt')"
            class="w-full h-[360px] md:h-[500px] object-cover rounded-3xl shadow-lg"
          >
        </div>
      </div>
    </section>

    <!-- Apresentação e Nossa História -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <img
            src="/images/amanda-leao-canil-goldens-da-chacara.jpg"
            :alt="t('introduction.imageAlt')"
            class="w-full aspect-[3/4] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >

          <div class="space-y-5 text-lg text-gray-700 leading-relaxed">
            <h2 class="text-3xl md:text-4xl text-ink font-extrabold leading-tight">
              {{ t('introduction.title') }}
            </h2>
            <p>{{ t('introduction.p1') }}</p>
            <p>{{ t('introduction.p2') }}</p>
            <p>{{ t('introduction.p3') }}</p>
            <p>{{ t('introduction.p4') }}</p>
            <p>{{ t('introduction.p5') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-surface-cream">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <img
            src="/images/goldens-da-chacara.jpg"
            :alt="t('story.imageAlt')"
            class="w-full aspect-[3/4] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >

          <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
            <h2 class="text-4xl md:text-5xl text-ink font-extrabold">
              {{ t('story.title') }}
            </h2>
            <p>{{ t('story.p1') }}</p>
            <p>{{ t('story.p2') }}</p>
            <p>{{ t('story.p3') }}</p>
            <p>{{ t('story.p4') }}</p>
            <p>{{ t('story.p5') }}</p>
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
            class="flex items-center px-6 py-3 lg:py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary-strong"
          >
            {{ t('finalCta.primary') }}
          </NuxtLink>
          <a
            href="https://wa.me/5537999691236"
            class="flex items-center px-6 py-3 lg:py-5 bg-transparent text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-primary hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary"
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
    "introduction": {
      "title": "Olá! Muito prazer, meu nome é Amanda Leão.",
      "imageAlt": "Amanda Leão, do canil Goldens da Chácara",
      "p1": "Sou a pessoa por trás do Goldens da Chácara, um canil familiar localizado em Formiga, Minas Gerais.",
      "p2": "Dedico meu tempo ao cuidado e à convivência com os nossos Goldens, acompanhando de perto cada fase da vida deles. Para mim, ter cães não é apenas uma atividade, mas uma experiência que faz parte da minha rotina, da minha casa e da minha família.",
      "p3": "Tenho a oportunidade de estar com eles diariamente, observar seus comportamentos, acompanhar seu desenvolvimento e proporcionar uma vida com carinho, atenção e espaço para serem cães felizes.",
      "p4": "E é justamente por viver essa conexão todos os dias que nasceu o desejo de compartilhar esse amor com outras famílias, ajudando-as a encontrar não apenas um cachorro, mas um verdadeiro companheiro para a vida.",
      "p5": "Seja bem-vindo ao Goldens da Chácara. Aqui, cada história começa com cuidado, dedicação e muito amor pelos Goldens."
    },
    "story": {
      "title": "Nossa História",
      "imageAlt": "Goldens da Chácara",
      "p1": "Minha história com o Golden Retriever começou quando conheci meu marido e passei a conviver com o Lars, seu Golden, que hoje tem 5 anos.",
      "p2": "Antes dele, tive três Shih Tzus e já havia convivido com outras raças, mas foi com o Lars que descobri uma conexão diferente com os cães. Seu jeito amoroso, inteligente e companheiro me fez enxergar o Golden Retriever de uma nova maneira.",
      "p3": "Com o tempo, essa convivência despertou em mim o desejo de dedicar minha vida a esses cães e proporcionar a outras famílias a mesma conexão que encontrei.",
      "p4": "Assim nasceu o Goldens da Chácara, um canil familiar em Formiga-MG, onde dedico meu tempo integralmente aos nossos Goldens. Em nossa chácara de 4 mil metros, eles crescem com espaço, cuidado e convivência diária.",
      "p5": "Mais do que criar filhotes, meu propósito é preparar companheiros para fazer parte de famílias e construir histórias que durem a vida toda."
    },
    "seo": {
      "title": "Canil de Golden Retriever em Formiga, MG | Goldens da Chácara",
      "description": "Conheça o Goldens da Chácara, canil familiar de Golden Retriever em Formiga, Minas Gerais. Saiba como criamos nossos cães e consulte informações sobre filhotes.",
      "keywords": "canil golden retriever Formiga, filhotes golden retriever MG, criação familiar de Golden Retriever",
      "ogTitle": "Goldens da Chácara | Golden Retriever em Formiga, MG",
      "ogDescription": "Criação familiar de Golden Retriever em Formiga, com cuidado diário, convivência e responsabilidade."
    },
    "hero": {
      "title": "Golden Retrievers criados com cuidado e convivência familiar",
      "subtitle": "Canil familiar em Formiga, Minas Gerais",
      "cta": "Conheça os filhotes"
    },
    "about": {
      "title": "Bem-vindo ao Goldens da Chácara",
      "imageAlt": "Golden Retriever em ambiente familiar no Goldens da Chácara",
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
  "en":
  {
  "introduction": {
    "title": "Hello! It's a pleasure to meet you, my name is Amanda Leão.",
    "imageAlt": "Amanda Leão of Goldens da Chácara kennel",
    "p1": "I'm the person behind Goldens da Chácara, a family kennel located in Formiga, Minas Gerais, Brazil.",
    "p2": "I dedicate my time to caring for and spending time with our Goldens, closely following every stage of their lives. To me, having dogs is more than an activity; it's an experience that is part of my routine, my home, and my family.",
    "p3": "I get to be with them every day, observe their behavior, follow their development, and give them a life with affection, attention, and room to be happy dogs.",
    "p4": "Living this connection every day inspired me to share this love with other families, helping them find not just a dog, but a true companion for life.",
    "p5": "Welcome to Goldens da Chácara. Here, every story begins with care, dedication, and lots of love for Goldens."
  },
  "story": {
    "title": "Our Story",
    "imageAlt": "Goldens da Chácara",
    "p1": "My story with Golden Retrievers began when I met my husband and started spending time with Lars, his Golden, who is now 5 years old.",
    "p2": "Before him, I had three Shih Tzus and had lived with other breeds, but Lars helped me discover a different connection with dogs. His loving, intelligent, companionable nature changed the way I saw Golden Retrievers.",
    "p3": "Over time, living with him inspired me to dedicate my life to these dogs and give other families the same connection I found.",
    "p4": "That is how Goldens da Chácara began, a family kennel in Formiga, Minas Gerais, where I dedicate my time to our Goldens. On our 4,000-square-meter farm, they grow up with space, care, and daily companionship.",
    "p5": "More than raising puppies, my purpose is to prepare companions to become part of families and build stories that last a lifetime."
  },
    "seo": {
      "title": "Golden Retriever Breeder in Formiga, Brazil | Goldens da Chácara",
      "description": "Meet Goldens da Chácara, a family Golden Retriever kennel in Formiga, Minas Gerais, Brazil. Learn about our dogs and ask about puppy availability.",
      "keywords": "Golden Retriever breeder Brazil, Golden Retriever puppies Minas Gerais, family Golden Retriever kennel",
      "ogTitle": "Goldens da Chácara | Golden Retrievers in Formiga, Brazil",
      "ogDescription": "Family-raised Golden Retrievers in Formiga, with daily care, companionship, and responsible breeding."
    },
    "hero": {
      "title": "Golden Retrievers raised with care and family companionship",
      "subtitle": "A family kennel in Formiga, Minas Gerais, Brazil",
      "cta": "Meet the puppies"
    },
    "about": {
      "title": "Welcome to Goldens da Chácara",
      "imageAlt": "Golden Retriever in a family environment at Goldens da Chácara",
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
