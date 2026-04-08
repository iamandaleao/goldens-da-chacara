<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()

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
  description: () => t('seo.description')
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <FloatingButton />
    <AppNav />

    <section class="py-28 bg-white min-h-screen">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="mb-16">
          <h1 class="text-5xl text-primary mb-4 font-extrabold text-center">
            {{ t('hero.title') }}
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed text-center">
            {{ t('hero.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <article
            v-for="post in posts"
            :key="post.path"
            class="bg-white rounded-3xl shadow-lg transition-all duration-300 overflow-hidden border border-primary/20 hover:-translate-y-2 hover:shadow-2xl"
          >
            <NuxtLink :to="getPostPath(post.path)">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-[300px] object-cover object-center bg-gray-100"
              >
            </NuxtLink>

            <div class="p-8 md:p-10">
              <h2 class="text-3xl text-ink mb-3 font-bold transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap hover:text-primary">
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
                class="inline-block px-8 py-3.5 bg-primary text-white no-underline rounded-lg font-semibold transition-all duration-300 hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-lg"
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
      "title": "Blog",
      "description": "Criação responsável de Golden Retriever, com foco em saúde, genética e temperamento."
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
      "title": "Blog",
      "description": "Responsible Golden Retriever breeding with focus on health, genetics, and temperament."
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
