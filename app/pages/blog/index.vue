<template>
  <div class="min-h-screen bg-white">
    <FloatingButton />
    <AppNav />

    <section class="py-24 bg-white min-h-screen">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="mb-16">
          <h1 class="text-5xl text-[#D4AF37] mb-4 font-extrabold text-center">
            Blog Goldens da Chácara
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed text-center">
            Dicas, histórias e cuidados com nossos amigos de quatro patas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <article
            v-for="post in posts"
            :key="post.stem"
            class="bg-white rounded-3xl shadow-lg transition-all duration-300 overflow-hidden border border-[#D4AF37]/20 hover:-translate-y-2 hover:shadow-2xl"
          >
            <NuxtLink :to="post.stem">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-[300px] object-cover object-center bg-gray-100"
              >
            </NuxtLink>

            <div class="p-8 md:p-10">
              <h2 class="text-3xl text-[#2C2416] mb-4 font-bold transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap hover:text-[#D4AF37]">
                <NuxtLink :to="post.stem">
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <p class="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                {{ post.description }}
              </p>

              <NuxtLink
                :to="post.stem"
                class="inline-block px-8 py-3.5 bg-[#D4AF37] text-white no-underline rounded-lg font-semibold transition-all duration-300 hover:bg-[#C9A02C] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ler artigo completo →
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const page = ref(Number.parseInt(route.query.page as string) || 1)
const postsPerPage = 24
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
