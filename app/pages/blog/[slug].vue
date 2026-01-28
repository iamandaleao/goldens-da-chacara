<template>
  <article
    v-if="post"
    class="pt-10 pb-16 max-w-4xl mx-auto px-4"
  >
    <!-- Botão voltar -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 font-medium"
    >
      ← Voltar para o blog
    </NuxtLink>

    <!-- Imagem destaque -->
    <div class="aspect-video w-full relative mb-8">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover object-top rounded-2xl mb-8 shadow-lg"
      >
    </div>

    <!-- Título -->
    <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
      {{ post.title }}
    </h1>

    <!-- Conteúdo do post -->
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-gray-700 leading-relaxed mb-6">
        {{ post.description }}
      </p>

      <!-- Conteúdo markdown renderizado -->
      <ContentRenderer :value="post" />

      <div class="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
        <p class="text-gray-800 font-medium">
          💡 <strong>Dica importante:</strong> {{ post.tip }}
        </p>
      </div>
    </div>

    <!-- Botão voltar no final -->
    <div class="mt-12 pt-8 border-t">
      <NuxtLink
        to="/blog"
        class="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
      >
        ← Ver mais artigos
      </NuxtLink>
    </div>
  </article>

  <!-- Se não encontrar o post -->
  <div
    v-else
    class="pt-24 pb-16 max-w-4xl mx-auto px-4 text-center"
  >
    <h1 class="text-4xl font-bold text-gray-900 mb-4">
      Post não encontrado
    </h1>
    <NuxtLink
      to="/blog"
      class="text-amber-600 hover:underline"
    >
      ← Voltar para o blog
    </NuxtLink>
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
