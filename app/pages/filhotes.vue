<script setup lang="ts">
import { FileText, Syringe, HeartPulse, CheckCircle, Gift, Phone } from '@lucide/vue'

const { t } = useI18n()
const route = useRoute()
const siteUrl = 'https://goldensdachacara.com.br'

definePageMeta({
  i18n: {
    paths: {
      pt: '/filhotes',
      en: '/puppies'
    }
  }
})

const puppiesWhatsappMessage = computed(() => encodeURIComponent(t('cta.whatsappMessage')))

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogType: 'website',
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

    <section
      class="relative h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-[position:50%_20%] bg-no-repeat"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/capa-golden-retriever-filhotes.jpg');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-wide leading-tight"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-xl md:text-2xl lg:text-3xl mb-10 font-light"
          style="text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-9 lg:py-12 bg-white">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="text-center max-w-[800px] mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl text-[#2C2416] mb-5 font-extrabold leading-tight">
            {{ t('intro.title') }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ t('intro.description') }}
          </p>
        </div>

        <div class="my-10">
          <h3 class="text-3xl md:text-4xl text-[#2C2416] mb-4 font-extrabold text-center relative inline-block w-full">
            {{ t('delivery.title') }}
            <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-[#8B7355] rounded-sm" />
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <FileText
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.pedigree.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.pedigree.description') }}
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Syringe
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.vaccines.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.vaccines.description') }}
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <HeartPulse
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.deworming.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.deworming.description') }}
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <CheckCircle
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.healthGuarantee.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.healthGuarantee.description') }}
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Gift
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.puppyManual.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.puppyManual.description') }}
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-primary to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Phone
                  :size="32"
                  class="text-primary transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-primary">
                {{ t('cards.support.title') }}
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {{ t('cards.support.description') }}
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-primary to-[#8B7355] p-16 rounded-3xl text-center text-white shadow-2xl mt-16">
          <h3 class="text-4xl mb-4 font-extrabold">
            {{ t('cta.title') }}
          </h3>
          <p class="text-xl mb-8">
            {{ t('cta.description') }}
          </p>
          <a
            :href="`https://wa.me/5547991611628?text=${puppiesWhatsappMessage}`"
            class="inline-block px-6 py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-xl uppercase tracking-wide hover:-translate-y-2 hover:shadow-2xl hover:bg-[#C9A02C]"
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
      "title": "Filhotes Golden Retriever",
      "description": "Filhotes Golden Retriever disponíveis - Goldens da Chácara. Filhotes com pedigree, vacinados e vermifugados.",
      "keywords": "filhotes golden retriever, golden retriever para venda, comprar golden retriever, filhotes disponíveis",
      "ogTitle": "Filhotes Golden Retriever - Goldens da Chácara",
      "ogDescription": "Filhotes Golden Retriever com pedigree, vacinados e vermifugados."
    },
    "hero": {
      "title": "Nossos Filhotes",
      "subtitle": "Conheça nossos adoráveis filhotes Golden Retriever"
    },
    "intro": {
      "title": "O Amor que nos Move",
      "description": "Aqui cada filhote nasce em ambiente familiar e recebe todos os cuidados necessários para iniciar sua nova vida com saúde, equilíbrio e carinho. Nossa paixão por Golden Retrievers vai além da criação - cada filhote é tratado como parte da família, recebendo amor, atenção e preparação para levar alegria ao seu novo lar."
    },
    "delivery": {
      "title": "Nossa entrega:"
    },
    "cards": {
      "pedigree": {
        "title": "Pedigree",
        "description": "Registro oficial da raça"
      },
      "vaccines": {
        "title": "Vacinas",
        "description": "Carteira de vacinação conforme a idade"
      },
      "deworming": {
        "title": "Vermifugação",
        "description": "Protocolo veterinário"
      },
      "healthGuarantee": {
        "title": "Garantia de Saúde",
        "description": "Contrato com garantias"
      },
      "puppyManual": {
        "title": "Manual do Filhote",
        "description": "Cuidados, adaptação e rotina"
      },
      "support": {
        "title": "Suporte",
        "description": "Acompanhamento pós-venda"
      }
    },
    "cta": {
      "title": "Garanta Seu Filhote Agora",
      "description": "Entre em contato e receba informações completas sobre disponibilidade, valores e reservas.",
      "button": "Reserve Agora",
      "whatsappMessage": "Olá! Gostaria de saber mais sobre os filhotes Golden Retriever."
    }
  },
  "en": {
    "seo": {
      "title": "Golden Retriever Puppies",
      "description": "Golden Retriever puppies available at Goldens da Chácara. Puppies with pedigree, vaccinated and dewormed.",
      "keywords": "golden retriever puppies, golden retriever for sale, buy golden retriever, puppies available",
      "ogTitle": "Golden Retriever Puppies - Goldens da Chácara",
      "ogDescription": "Golden Retriever puppies with pedigree, vaccinated and dewormed."
    },
    "hero": {
      "title": "Our Puppies",
      "subtitle": "Meet our adorable Golden Retriever puppies"
    },
    "intro": {
      "title": "The Love That Moves Us",
      "description": "Each puppy is born in a family environment and receives all the care needed to start a new life with health, balance, and affection. Our passion for Golden Retrievers goes beyond breeding - every puppy is treated like family, receiving love, attention, and preparation to bring joy to a new home."
    },
    "delivery": {
      "title": "What we deliver:"
    },
    "cards": {
      "pedigree": {
        "title": "Pedigree",
        "description": "Official breed registration"
      },
      "vaccines": {
        "title": "Vaccinations",
        "description": "Vaccination card according to age"
      },
      "deworming": {
        "title": "Deworming",
        "description": "Veterinary protocol"
      },
      "healthGuarantee": {
        "title": "Health Guarantee",
        "description": "Contract with guarantees"
      },
      "puppyManual": {
        "title": "Puppy Guide",
        "description": "Care, adaptation, and routine"
      },
      "support": {
        "title": "Support",
        "description": "Post-sale follow-up"
      }
    },
    "cta": {
      "title": "Reserve Your Puppy Now",
      "description": "Contact us and receive complete information about availability, pricing, and reservations.",
      "button": "Reserve Now",
      "whatsappMessage": "Hi! I would like to know more about the Golden Retriever puppies."
    }
  }
}
</i18n>
