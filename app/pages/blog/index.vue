<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const siteUrl = 'https://goldensdachacara.com.br'

const page = computed(() => Number.parseInt(String(route.query.page || '1'), 10) || 1)
const postsPerPage = 24

function getBlogCollection(localeCode: string): keyof Collections {
  return localeCode === 'en' ? 'blog_en' : 'blog_pt'
}

const { data: paginatedData } = await useAsyncData(() => `blog-${locale.value}-${page.value}`, async () => {
  const collection = getBlogCollection(locale.value)
  const [posts, count] = await Promise.all([
    queryCollection(collection)
      .where('date', '<', useToday())
      .order('date', 'DESC')
      .skip((page.value - 1) * postsPerPage)
      .limit(postsPerPage)
      .all(),
    queryCollection(collection)
      .where('date', '<', useToday())
      .count()
  ])

  return { posts, count, totalPages: Math.ceil(count / postsPerPage) }
}, {
  watch: [page, locale]
})

const posts = computed(() => paginatedData.value?.posts || [])

function getPostPath(path: string) {
  return localePath(path)
}

function formatDate(date: string | Date) {
  const languageTag = locale.value === 'en' ? 'en-US' : 'pt-BR'
  return new Date(date).toLocaleDateString(languageTag)
}

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
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
  <div class="blog-page min-h-screen bg-white">
    <FloatingButton />
    <AppNav />

    <section class="pt-32 pb-20 bg-surface-cream min-h-screen">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="mb-12 max-w-[780px] mx-auto text-center">
          <h1 class="text-4xl md:text-5xl text-ink mb-4 font-extrabold">
            {{ t('hero.title') }}
          </h1>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
            {{ t('hero.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <article
            v-for="(post, index) in posts"
            :key="post.path"
            class="blog-card bg-white rounded-3xl transition-all duration-300 overflow-hidden border hover:-translate-y-1 hover:shadow-2xl"
          >
            <NuxtLink
              :to="getPostPath(post.path)"
              :aria-label="post.title"
              :title="post.title"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full aspect-[4/3] object-cover object-center bg-gray-100"
                :loading="index === 0 ? 'eager' : 'lazy'"
                :fetchpriority="index === 0 ? 'high' : 'auto'"
                decoding="async"
              >
            </NuxtLink>

            <div class="p-6 md:p-7">
              <h2 class="text-2xl md:text-3xl text-ink mb-3 font-bold transition-colors duration-300 line-clamp-2 hover:text-primary">
                <NuxtLink :to="getPostPath(post.path)">
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <time
                :datetime="post.date"
                class="text-sm text-gray-500 block mb-4"
              >
                {{ formatDate(post.date) }}
              </time>

              <p class="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                {{ post.description }}
              </p>

              <NuxtLink
                :to="getPostPath(post.path)"
                class="inline-flex items-center px-6 py-3 bg-primary text-white no-underline rounded-full font-semibold transition-all duration-300 hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-lg"
              >
                {{ t('actions.readFullPost') }} →
              </NuxtLink>
            </div>
          </article>
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
      "title": "Dicas sobre Golden Retriever | Blog Goldens da Chácara",
      "description": "Leia dicas de saúde, alimentação, comportamento e cuidados para Golden Retriever, com conteúdo do Goldens da Chácara em Formiga, MG."
    },
    "hero": {
      "title": "Blog Goldens da Chácara",
      "description": "Dicas, histórias e cuidados com nossos amigos de quatro patas"
    },
    "actions": {
      "readFullPost": "Ler artigo completo"
    }
  },
  "en": {
    "seo": {
      "title": "Golden Retriever Care Tips | Goldens da Chácara Blog",
      "description": "Read practical articles on Golden Retriever health, nutrition, behavior, and care from Goldens da Chácara in Formiga, Brazil."
    },
    "hero": {
      "title": "Goldens da Chácara Blog",
      "description": "Tips, stories, and care guides for our four-legged friends"
    },
    "actions": {
      "readFullPost": "Read full post"
    }
  }
}
</i18n>
