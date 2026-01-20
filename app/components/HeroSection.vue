<template>
  <section
    id="home"
    class="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-amber-50 to-orange-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <div class="inline-block mb-4 px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
          🐕 Filhotes disponíveis em breve!
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 px-4">
          Criação de <span class="text-amber-600">Golden Retrievers</span>
        </h1>

        <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Somos especializados na criação responsável de Golden Retrievers, com foco em bem-estar, saúde e atenção individual.
        </p>

        <!-- Botões -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            class="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            @click="openWhatsapp"
          >
            <MessageCircle :size="20" />
            Falar no WhatsApp
          </button>

          <a
            href="#sobre"
            class="bg-white text-amber-600 px-6 sm:px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition"
          >
            Conheça Nossa História
          </a>

          <!-- Novo botão Blog -->
          <a
            href="blog"
            class="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
          >
            Leia Nosso Blog
          </a>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 sm:mt-12">
      <ChevronDown
        class="mx-auto text-amber-600 animate-bounce"
        :size="28"
      />
    </div>
  </section>
</template>

<script setup>
import { ChevronDown, MessageCircle } from 'lucide-vue-next'
</script>
