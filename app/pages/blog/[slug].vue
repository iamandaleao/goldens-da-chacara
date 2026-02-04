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
        <h1 class="text-4xl md:text-5xl text-[#2C2416] mb-4 font-extrabold">
          {{ post.title }}
        </h1>

        <!-- Data de atualização -->
        <time
          :datatime="post.date"
          class="text-sm text-gray-500 block mb-6"
        >
          Atualizado em: {{ new Date(post.date).toLocaleDateString() }}
        </time>

        <!-- Conteúdo do post -->
        <div class="text-lg leading-relaxed text-gray-700">
          <p class="text-xl text-gray-600 leading-relaxed">
            {{ post.description }}
          </p>

          <!-- Conteúdo markdown renderizado -->
          <ContentRenderer :value="post" />

          <div class="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] py-6 px-8 my-8 rounded-r-lg">
            <p class="text-[#333] font-medium m-0">
              💡 <strong>Dica importante:</strong> {{ post.tip }}
            </p>
          </div>
        </div>

        <!-- Botão voltar no final -->
        <div class="mt-12 pt-8 border-t border-gray-300">
          <NuxtLink
            to="/blog"
            class="inline-block px-8 py-3.5 bg-[#D4AF37] text-white no-underline rounded-lg font-semibold transition-all duration-300 hover:bg-[#C9A02C] hover:-translate-y-0.5 hover:shadow-lg"
          >
            ← Ver mais artigos
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
        <h1 class="text-4xl text-[#2C2416] mb-4 font-extrabold">
          Post não encontrado
        </h1>
        <NuxtLink
          to="/blog"
          class="inline-flex items-center px-4 py-2 text-[#D4AF37] no-underline font-medium rounded-lg mb-6 transition-all duration-300 hover:bg-[#D4AF37]/10 hover:text-[#C9A02C]"
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
