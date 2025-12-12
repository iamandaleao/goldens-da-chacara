<template>
  <section class="pt-10 pb-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-amber-700 mb-3">
        🐕 Blog dos Goldens da Chácara
      </h1>
      <p class="text-gray-600 text-lg">
        Dicas, histórias e cuidados com nossos amigos de quatro patas
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      <article
        v-for="post in posts"
        :key="post.stem"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100"
      >
        <NuxtLink
          :to="post.stem"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-64 md:h-72 lg:h-80 object-cover object-center bg-gray-100"
          >
        </NuxtLink>

        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition">
            {{ post.title }}
          </h2>

          <p class="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {{ post.description }}
          </p>

          <NuxtLink
            :to="post.stem"
            class="inline-block px-6 py-2.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
          >
            Ler artigo completo →
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 6
const { data: paginatedData } = await useAsyncData('blog', async () => {
  const [posts, count] = await Promise.all([
    queryCollection('blog')
      .skip((page.value - 1) * postsPerPage)
      .limit(postsPerPage)
      .all(),
    queryCollection('blog')
      .count()
  ])

  return { posts, count, totalPages: Math.ceil(count / postsPerPage) }
}, {
  watch: [page]
})

const posts = computed(() => paginatedData.value?.posts || [])

useSeoMeta({
  title: 'Blog',
  description: 'Eu cuido dos detalhes, você aproveita a jornada.'
})
</script>
