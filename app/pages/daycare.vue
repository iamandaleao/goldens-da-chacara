<script setup lang="ts">
import {
  Users,
  Activity,
  Clock,
  Camera,
  Trees,
  Eye
} from '@lucide/vue'

const { t } = useI18n()
const route = useRoute()
const siteUrl = 'https://goldensdachacara.com.br'

definePageMeta({
  i18n: {
    paths: {
      pt: '/daycare',
      en: '/daycare'
    }
  }
})

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
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

    <!-- HERO -->
    <section
      class="relative h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-[position:50%_40%] bg-no-repeat"
      style="background-image: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=2070&q=80');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-6 font-extrabold tracking-wide leading-tight"
          style="text-shadow: 3px 3px 8px rgba(0,0,0,.7)"
        >
          {{ t('hero.title') }}
        </h1>

        <p
          class="text-xl md:text-2xl lg:text-3xl font-light"
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

              <Users
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

              <Activity
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.activities.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.activities.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Clock
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.structuredRoutine.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.structuredRoutine.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Camera
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.photoUpdates.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.photoUpdates.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Trees
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.spaciousEnvironment.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.spaciousEnvironment.description') }}
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Eye
                class="mx-auto mb-6 text-primary"
                :size="46"
              />

              <h4 class="text-2xl text-ink mb-3 font-bold">
                {{ t('cards.supervision.title') }}
              </h4>
              <p class="text-gray-600 leading-relaxed">
                {{ t('cards.supervision.description') }}
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

          <p class="text-xl mb-10 text-gray-200">
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
      "title": "Daycare Canino",
      "description": "Daycare Canino com rotina estruturada. Socialização, atividades recreativas e supervisão constante.",
      "ogTitle": "Daycare Canino",
      "ogDescription": "Daycare com rotina equilibrada, socialização supervisionada e acompanhamento contínuo."
    },
    "hero": {
      "title": "Daycare Canino",
      "subtitle": "Seu cão se diverte enquanto você trabalha ou resolve suas atividades"
    },
    "intro": {
      "title": "Um dia inteiro de diversão e socialização",
      "description": "Aqui seu cão passa o dia em um ambiente estimulante e seguro, longe do tédio e da solidão. Oferecemos uma rotina planejada com brincadeiras, socialização supervisionada, descanso programado e muita atenção. Ideal para cães que ficam sozinhos durante o dia ou que precisam gastar energia de forma saudável. Aqui, cada cão é tratado individualmente, respeitando seu ritmo, temperamento e necessidades especiais."
    },
    "benefits": {
      "title": "O que seu cão vai encontrar no Daycare?"
    },
    "cards": {
      "socialization": {
        "title": "Socialização Controlada",
        "description": "Grupos pequenos organizados por porte e temperamento, para interações seguras e positivas."
      },
      "activities": {
        "title": "Atividades Recreativas",
        "description": "Brincadeiras, jogos, corridas livres e desafios que estimulam corpo e mente."
      },
      "structuredRoutine": {
        "title": "Rotina Estruturada",
        "description": "Horários definidos para brincadeiras, alimentação, descanso e hidratação."
      },
      "photoUpdates": {
        "title": "Fotos e Atualizações",
        "description": "Receba fotos e vídeos do dia do seu cão, para acompanhar a diversão."
      },
      "spaciousEnvironment": {
        "title": "Ambiente Amplo",
        "description": "Espaço rural cercado, gramado, sombra natural e áreas cobertas para todos os climas."
      },
      "supervision": {
        "title": "Supervisão Constante",
        "description": "Profissionais atentos e presentes durante todo o período para garantir segurança."
      }
    },
    "cta": {
      "price": "Diárias a partir de R$ 40,00",
      "note": "Pacotes semanais e mensais com condições especiais disponíveis.",
      "button": "Agendar uma visita"
    }
  },
  "en": {
    "seo": {
      "title": "Dog Daycare",
      "description": "Dog daycare with a structured routine. Socialization, recreational activities, and constant supervision.",
      "ogTitle": "Dog Daycare",
      "ogDescription": "Daycare with balanced routine, supervised socialization, and continuous care."
    },
    "hero": {
      "title": "Dog Daycare",
      "subtitle": "Your dog has fun while you work or take care of your day"
    },
    "intro": {
      "title": "A full day of fun and socialization",
      "description": "Here your dog spends the day in a stimulating and safe environment, away from boredom and loneliness. We offer a planned routine with play, supervised socialization, scheduled rest, and lots of attention. Ideal for dogs that stay alone during the day or need to burn energy in a healthy way. Here, each dog is treated individually, respecting their pace, temperament, and special needs."
    },
    "benefits": {
      "title": "What your dog will enjoy at Daycare"
    },
    "cards": {
      "socialization": {
        "title": "Controlled Socialization",
        "description": "Small groups organized by size and temperament for safe and positive interactions."
      },
      "activities": {
        "title": "Recreational Activities",
        "description": "Playtime, games, free runs, and challenges that stimulate body and mind."
      },
      "structuredRoutine": {
        "title": "Structured Routine",
        "description": "Defined schedules for play, feeding, rest, and hydration."
      },
      "photoUpdates": {
        "title": "Photos and Updates",
        "description": "Receive photos and videos of your dog's day to follow the fun."
      },
      "spaciousEnvironment": {
        "title": "Spacious Environment",
        "description": "Fenced rural space with grass, natural shade, and covered areas for all weather."
      },
      "supervision": {
        "title": "Constant Supervision",
        "description": "Attentive professionals present throughout the day to ensure safety."
      }
    },
    "cta": {
      "price": "Daily rates from R$ 40.00",
      "note": "Weekly and monthly packages with special conditions are available.",
      "button": "Schedule a visit"
    }
  }
}
</i18n>
