<template>
  <div style="min-height: 100vh; background: var(--white);">
    <AppNav />
    <article
      v-if="post"
      class="blog-post"
    >
      <div class="blog-post-container">
        <!-- Imagem destaque -->
        <img
          :src="post.image"
          :alt="post.title"
          class="blog-post-image"
        >

        <!-- Título -->
        <h1>
          {{ post.title }}
        </h1>

        <!-- Conteúdo do post -->
        <div class="blog-post-content">
          <p style="font-size: 1.25rem; color: #555; line-height: 1.8; margin-bottom: 24px;">
            {{ post.description }}
          </p>

          <!-- Conteúdo markdown renderizado -->
          <ContentRenderer :value="post" />

          <div class="blog-tip-box">
            <p>
              💡 <strong>Dica importante:</strong> {{ post.tip }}
            </p>
          </div>
        </div>

        <!-- Botão voltar no final -->
        <div class="blog-post-footer">
          <NuxtLink
            to="/blog"
            class="blog-button"
          >
            ← Ver mais artigos
          </NuxtLink>
        </div>
      </div>
    </article>

    <!-- Se não encontrar o post -->
    <div
      v-else
      style="padding: 120px 0 80px;"
    >
      <div
        class="blog-post-container"
        style="text-align: center;"
      >
        <h1 style="font-size: 2.5rem; color: var(--dark-color); margin-bottom: 16px; font-weight: 800;">
          Post não encontrado
        </h1>
        <NuxtLink
          to="/blog"
          class="blog-back-button"
        >
          ← Voltar para o blog
        </NuxtLink>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
}, {
  watch: [route]
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Página não encontrada', fatal: true })
}

useSeoMeta({
  ...post.value.seo,
  ogType: 'article'
})
</script>
