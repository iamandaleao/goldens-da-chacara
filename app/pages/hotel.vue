<script setup lang="ts">
import {
  Home,
  Dog,
  Droplets,
  ShieldCheck,
  Heart,
  MessageCircle
} from '@lucide/vue'

const { t } = useI18n()
const route = useRoute()
const siteUrl = 'https://goldensdachacara.com.br'

definePageMeta({
  i18n: {
    paths: {
      pt: '/hotel',
      en: '/boarding'
    }
  }
})

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogImage: () => `${siteUrl}/images/goldens-da-chacara.jpg`,
  ogType: 'website',
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

    <!-- HERO -->
    <section
      class="site-hero relative flex items-end lg:items-center justify-center lg:justify-start text-white text-left"
      style="background-image: linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.3)), url('/images/capa-home.png'); background-position: center 68%;"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent" />

      <div class="relative z-10 w-full max-w-[1200px] mx-auto px-5 py-20 lg:py-24">
        <h1
          class="max-w-[850px] text-4xl md:text-6xl lg:text-7xl mb-5 font-extrabold leading-[1.05]"
          style="text-shadow: 3px 3px 8px rgba(0,0,0,.7)"
        >
          {{ t('hero.title') }}
        </h1>

        <p
          class="max-w-[700px] text-xl md:text-2xl lg:text-3xl font-light"
          style="text-shadow: 2px 2px 6px rgba(0,0,0,.7)"
        >
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-10 lg:py-16 bg-white">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="text-center max-w-[850px] mx-auto mb-20">
          <h2 class="text-4xl md:text-5xl text-ink mb-6 font-extrabold">
            {{ t('intro.title') }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ t('intro.description') }}
          </p>
        </div>

        <!-- DIFERENCIAIS -->
        <div class="my-20">
          <h3
            class="text-3xl text-ink mb-6 font-extrabold text-center relative inline-block w-full"
          >
            {{ t('benefits.title') }}
            <span
              class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-sm"
            />
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            <!-- CARD -->
            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Home
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.familyEnvironment.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.familyEnvironment.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Dog
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.socialization.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.socialization.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Droplets
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.poolActivities.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.poolActivities.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <ShieldCheck
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.safety.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.safety.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Heart
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.individualCare.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.individualCare.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <MessageCircle
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.directContact.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.directContact.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- CTA / VALOR -->
        <div
          class="bg-gradient-to-br from-ink to-ink-deep p-16 rounded-3xl text-center text-white shadow-2xl mt-20"
        >
          <h3 class="text-4xl mb-4 font-extrabold">
            {{ t('cta.price') }}
          </h3>

          <p class="text-sm mb-10 text-gray-300 opacity-80">
            {{ t('cta.note') }}
          </p>

          <a
            href="https://wa.me/5537999691236"
            class="inline-block px-6 py-5 bg-transparent text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-primary hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('cta.button') }}
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
      "title": "Hotel para cães em Formiga | Goldens da Chácara",
      "description": "Hospedagem para cães em ambiente rural em Formiga, MG, com rotina de cuidados, socialização supervisionada e espaço para brincar. Consulte condições e disponibilidade.",
      "keywords": "hotel para cães Formiga, hospedagem para cachorro Formiga MG, hotel canino Minas Gerais",
      "ogTitle": "Hotel para cães em Formiga | Goldens da Chácara",
      "ogDescription": "Conheça a hospedagem canina em ambiente rural do Goldens da Chácara, em Formiga, MG."
    },
    "hero": {
      "title": "Hotel para cães em Formiga",
      "subtitle": "Um espaço pensado para o bem-estar, lazer e segurança do seu cão"
    },
    "intro": {
      "title": "Mais espaço, cuidado e tranquilidade",
      "description": "Acreditamos que hospedagem canina vai muito além de um local para dormir. Aqui, seu cão não fica preso em baias nem isolado. Ele vive uma rotina equilibrada em ambiente rural, com espaço, estímulos, socialização supervisionada e acompanhamento constante. Cada detalhe da estrutura e da rotina foi pensado para reduzir o estresse, promover bem-estar e garantir segurança, respeitando o perfil individual de cada cão."
    },
    "benefits": {
      "title": "Por que escolher nosso hotel?"
    },
    "cards": {
      "familyEnvironment": {
        "title": "Ambiente Familiar",
        "description": "Seu cão convive em um espaço tranquilo, limpo e seguro, sem estresse e sem confinamento."
      },
      "socialization": {
        "title": "Socialização Monitorada",
        "description": "Brincadeiras supervisionadas respeitando porte, idade e temperamento."
      },
      "poolActivities": {
        "title": "Piscina e Atividades",
        "description": "Piscina para cães, brincadeiras diárias e estímulos físicos e mentais."
      },
      "safety": {
        "title": "Segurança Total",
        "description": "Espaço cercado, rotina organizada e supervisão constante."
      },
      "individualCare": {
        "title": "Cuidado Individual",
        "description": "Atenção diária, respeito às necessidades e acompanhamento próximo."
      },
      "directContact": {
        "title": "Contato Direto",
        "description": "Comunicação fácil e transparente durante toda a estadia."
      }
    },
    "cta": {
      "price": "Diárias a partir de R$ 50,00",
      "note": "O valor pode variar conforme necessidades específicas.",
      "button": "Solicitar orçamento"
    }
  },
  "en": {
    "seo": {
      "title": "Dog Boarding in Formiga, Brazil | Goldens da Chácara",
      "description": "Rural dog boarding in Formiga, Minas Gerais, with a caring routine, supervised socialization, and room to play. Ask about rates and availability.",
      "keywords": "dog boarding Formiga Brazil, dog hotel Minas Gerais, rural dog boarding Brazil",
      "ogTitle": "Dog Boarding in Formiga | Goldens da Chácara",
      "ogDescription": "Explore rural dog boarding at Goldens da Chácara in Formiga, Minas Gerais, Brazil."
    },
    "hero": {
      "title": "Dog Boarding in Formiga",
      "subtitle": "A space designed for your dog's well-being, fun, and safety"
    },
    "intro": {
      "title": "More space, care, and peace of mind",
      "description": "We believe dog boarding is much more than a place to sleep. Here, your dog is not confined to kennels or isolated. They enjoy a balanced routine in a rural environment, with space, stimulation, supervised socialization, and constant care. Every detail of our structure and routine is designed to reduce stress, promote well-being, and ensure safety while respecting each dog's individual profile."
    },
    "benefits": {
      "title": "Why choose our hotel?"
    },
    "cards": {
      "familyEnvironment": {
        "title": "Family Environment",
        "description": "Your dog stays in a calm, clean, and safe space, without stress or confinement."
      },
      "socialization": {
        "title": "Monitored Socialization",
        "description": "Supervised playtime that respects size, age, and temperament."
      },
      "poolActivities": {
        "title": "Pool and Activities",
        "description": "Dog pool, daily playtime, and physical and mental stimulation."
      },
      "safety": {
        "title": "Total Safety",
        "description": "Fenced space, organized routine, and constant supervision."
      },
      "individualCare": {
        "title": "Individual Care",
        "description": "Daily attention, respect for needs, and close follow-up."
      },
      "directContact": {
        "title": "Direct Contact",
        "description": "Easy and transparent communication throughout the stay."
      }
    },
    "cta": {
      "price": "Daily rates from R$ 50.00",
      "note": "Price may vary based on specific needs.",
      "button": "Request a quote"
    }
  }
}
</i18n>
