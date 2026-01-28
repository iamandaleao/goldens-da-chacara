<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4 overflow-hidden relative">
    <!-- Paw prints background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute text-amber-900"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          fontSize: `${Math.random() * 40 + 30}px`
        }"
      >
        🐾
      </div>
    </div>

    <div class="max-w-2xl w-full text-center relative z-10">
      <!-- Minimalist illustration -->
      <div class="mb-8 relative">
        <svg
          class="w-32 h-32 mx-auto text-amber-600 opacity-80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Error message -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-amber-200">
        <h1 class="text-7xl md:text-8xl font-bold text-amber-800 mb-4">
          404
        </h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-amber-900 mb-4">
          Ops! Página não encontrada
        </h2>

        <p class="text-lg text-amber-700 mb-8 leading-relaxed">
          Parece que este filhote se perdeu no caminho...
          <br class="hidden md:block">
          A página que você procura não existe ou foi movida.
        </p>

        <!-- Decorative divider -->
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="h-0.5 w-16 bg-gradient-to-r from-transparent to-amber-400" />
          <span class="text-3xl">🦴</span>
          <div class="h-0.5 w-16 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        <!-- Home button -->
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg group"
        >
          <svg
            class="w-6 h-6 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Voltar para Home
          <span class="text-2xl group-hover:scale-110 transition-transform inline-block" />
        </NuxtLink>

        <!-- Additional help text -->
        <p class="text-sm text-amber-600 mt-6">
          Nossos Golden Retrievers estão te esperando na página inicial!
        </p>
      </div>

      <!-- Footer note -->
      <p class="text-amber-800 mt-8 text-sm opacity-75">
        Goldens da Chácara - Criando momentos de amor e alegria 🐾
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Configuração SEO para a página 404
useHead({
  title: 'Goldens da Chácara'
})
</script>

  <style scoped>
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
  </style>
