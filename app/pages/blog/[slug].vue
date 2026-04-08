<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { getLocalizedBlogSlug } from '~/utils/blogSlugs'

const route = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const setI18nParams = useSetI18nParams()

function getBlogCollection(localeCode: string): keyof Collections {
  return localeCode === 'en' ? 'blog_en' : 'blog_pt'
}

const routeSlug = computed(() => {
  const slug = route.params.slug
  return Array.isArray(slug) ? slug.join('/') : String(slug || '')
})

const ptSlug = computed(() => getLocalizedBlogSlug(routeSlug.value, 'pt'))
const enSlug = computed(() => getLocalizedBlogSlug(routeSlug.value, 'en'))
const contentPath = computed(() => `/blog/${locale.value === 'en' ? enSlug.value : ptSlug.value}`)

watch([ptSlug, enSlug], () => {
  setI18nParams({
    pt: { slug: ptSlug.value },
    en: { slug: enSlug.value }
  })
}, { immediate: true })

const { data: post } = await useAsyncData(() => `blog-post-${locale.value}-${contentPath.value}`, async () => {
  const collection = getBlogCollection(locale.value)
  const localizedPost = await queryCollection(collection).path(contentPath.value).first()

  if (localizedPost) {
    return localizedPost
  }

  if (locale.value === 'en') {
    return queryCollection('blog_pt').path(`/blog/${ptSlug.value}`).first()
  }

  return queryCollection('blog_en').path(`/blog/${enSlug.value}`).first()
}, {
  watch: [contentPath, locale, ptSlug, enSlug]
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: t('errors.pageNotFound'), fatal: true })
}

useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.description,

  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
  ogImage: () => post.value?.image,
  ogType: 'article',

  twitterTitle: () => post.value?.title,
  twitterDescription: () => post.value?.description,
  twitterImage: () => post.value?.image,
  twitterCard: 'summary_large_image'
})

const contentRef = ref<HTMLElement | null>(null)

function wrapTablesInScrollContainer() {
  nextTick(() => {
    const el = contentRef.value
    if (!el) return
    el.querySelectorAll('.prose table').forEach((table) => {
      if (table.parentElement?.classList.contains('table-scroll-wrap')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'table-scroll-wrap'
      table.parentNode?.insertBefore(wrapper, table)
      wrapper.appendChild(table)
    })
  })
}

function markDetailsAnswerBlocks() {
  nextTick(() => {
    const el = contentRef.value
    if (!el) return
    el.querySelectorAll('details').forEach((details) => {
      const summary = details.querySelector(':scope > summary')
      if (!summary) return
      if (details.querySelector(':scope > .details-answer')) return
      const wrapper = document.createElement('div')
      wrapper.className = 'details-answer'
      while (summary.nextSibling) {
        wrapper.appendChild(summary.nextSibling)
      }
      details.appendChild(wrapper)
    })
  })
}

onMounted(() => {
  wrapTablesInScrollContainer()
  markDetailsAnswerBlocks()
})
watch(() => post.value, () => {
  wrapTablesInScrollContainer()
  markDetailsAnswerBlocks()
})

function formatDate(date: string | Date) {
  const languageTag = locale.value === 'en' ? 'en-US' : 'pt-BR'
  return new Date(date).toLocaleDateString(languageTag)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppNav />
    <article
      v-if="post"
      class="py-20"
    >
      <div class="max-w-[900px] mx-auto mt-12 px-5">
        <!-- Imagem destaque -->
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-[400px] object-cover object-center rounded-3xl mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        >

        <!-- Título -->
        <h1 class="text-4xl md:text-5xl text-ink mb-4 font-extrabold">
          {{ post.title }}
        </h1>

        <!-- Data de atualização -->
        <time
          :datetime="post.date"
          class="text-sm text-gray-500 block mb-6"
        >
          {{ t('labels.updatedAt') }}: {{ formatDate(post.date) }}
        </time>

        <!-- Conteúdo do post -->
        <div class="text-lg leading-relaxed text-gray-700">
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ post.description }}
          </p>

          <!-- Conteúdo markdown renderizado -->
          <div
            ref="contentRef"
            class="blog-content"
          >
            <ContentRenderer
              class="prose prose-lg mt-6
         prose-headings:my-4
         prose-headings:font-bold
         prose-a:no-underline
         prose-headings:no-underline"
              :value="post"
            />
          </div>

          <div class="bg-primary/10 border-l-4 border-primary py-6 px-8 my-8 rounded-r-lg">
            <p class="text-text-strong font-medium m-0">
              💡 <strong>{{ t('labels.importantTip') }}:</strong> {{ post.tip }}
            </p>
          </div>
        </div>

        <!-- Botão voltar no final -->
        <div class="mt-12 pt-8 border-t border-gray-300">
          <NuxtLink
            :to="localePath('/blog')"
            class="inline-block px-8 py-3.5 bg-primary text-white no-underline rounded-lg font-semibold transition-all duration-300 hover:bg-primary-strong hover:-translate-y-0.5 hover:shadow-lg"
          >
            ← {{ t('actions.viewMorePosts') }}
          </NuxtLink>
        </div>
      </div>
    </article>

    <!-- Se não encontrar o post -->
    <div
      v-else
      class="py-20"
    >
      <div class="max-w-[900px] mx-auto mt-12 px-5 text-center">
        <h1 class="text-4xl text-ink mb-4 font-extrabold">
          {{ t('errors.postNotFound') }}
        </h1>
        <NuxtLink
          :to="localePath('/blog')"
          class="inline-flex items-center px-4 py-2 text-primary no-underline font-medium rounded-lg mb-6 transition-all duration-300 hover:bg-primary/10 hover:text-primary-strong"
        >
          ← {{ t('actions.backToBlog') }}
        </NuxtLink>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<i18n lang="json">
{
  "pt": {
    "labels": {
      "updatedAt": "Atualizado em",
      "importantTip": "Dica importante"
    },
    "actions": {
      "viewMorePosts": "Ver mais artigos",
      "backToBlog": "Voltar para o blog"
    },
    "errors": {
      "pageNotFound": "Página não encontrada",
      "postNotFound": "Post não encontrado"
    }
  },
  "en": {
    "labels": {
      "updatedAt": "Updated on",
      "importantTip": "Important tip"
    },
    "actions": {
      "viewMorePosts": "See more posts",
      "backToBlog": "Back to blog"
    },
    "errors": {
      "pageNotFound": "Page not found",
      "postNotFound": "Post not found"
    }
  }
}
</i18n>
