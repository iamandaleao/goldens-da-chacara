<template>
  <div style="min-height: 100vh; background: var(--white);">
    <FloatingButton />
    <AppNav />
    <section class="blog-section">
      <div class="blog-container">
        <div class="blog-header">
          <h1>
            🦮 Blog Goldens da Chácara
          </h1>
          <p>
            Dicas, histórias e cuidados com nossos amigos de quatro patas
          </p>
        </div>

        <div class="blog-grid">
          <article
            v-for="post in posts"
            :key="post.stem"
            class="blog-card"
          >
            <NuxtLink
              :to="post.stem"
            >
              <img
                :src="post.image"
                :alt="post.title"
                class="blog-card-image"
              >
            </NuxtLink>

            <div class="blog-card-content">
              <h2>
                <NuxtLink :to="post.stem">
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <p>
                {{ post.description }}
              </p>

              <NuxtLink
                :to="post.stem"
                class="blog-button"
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
