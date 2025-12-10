<template>
  <section class="pt-24 pb-16 max-w-6xl mx-auto px-4">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-amber-700 mb-3">
        🐕 Blog dos Goldens da Chácara
      </h1>
      <p class="text-gray-600 text-lg">
        Dicas, histórias e cuidados com nossos amigos de quatro patas
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100"
      >
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-52 object-cover"
        />
        
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition">
            {{ post.title }}
          </h2>
          
          <p class="text-gray-600 mb-4 leading-relaxed">
            {{ post.excerpt }}
          </p>

          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="inline-block px-6 py-2.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
          >
            Ler artigo completo →
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    title: "Como escolher um Golden saudável",
    slug: "como-escolher-um-golden-saudavel",
    excerpt: "Um guia completo para entender linhagem, saúde e comportamento ao escolher seu futuro companheiro...",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=400&fit=crop",
  },
  {
    title: "Primeiros cuidados com um filhote",
    slug: "primeiros-cuidados-filhote",
    excerpt: "Dicas práticas e essenciais para garantir que seu filhote cresça feliz, saudável e bem adaptado à nova casa...",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop",
  },
  {
    title: "Alimentação ideal para Golden Retriever",
    slug: "alimentacao-golden-retriever",
    excerpt: "Descubra qual a melhor alimentação para cada fase da vida do seu Golden e mantenha ele sempre saudável...",
    image: "https://images.unsplash.com/photo-1612536880854-5d5f2f2f8f1f?w=800&h=400&fit=crop",
  },
  {
    title: "Exercícios e brincadeiras para Goldens",
    slug: "exercicios-brincadeiras-goldens",
    excerpt: "Atividades divertidas e exercícios importantes para manter seu Golden ativo, feliz e com muita energia...",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=400&fit=crop",
  }
])
</script>
