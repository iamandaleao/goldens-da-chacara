<template>
  <!-- Nossos Valores -->
  <section
    id="valores"
    class="py-12 sm:py-16 bg-white scroll-mt-4"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10 sm:mb-12">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Nossos Compromissos
        </h2>
        <div class="w-20 h-1 bg-amber-600 mx-auto" />
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Card -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Shield
              class="text-amber-600"
              :size="28"
            />
          </div>

          <h3
            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
          >
            Saúde em Primeiro Lugar
          </h3>

          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Todos os exames necessários, vacinas em dia e acompanhamento
            veterinário rigoroso.
          </p>
        </div>

        <!-- Card -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Heart
              class="text-amber-600"
              :size="28"
            />
          </div>

          <h3
            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
          >
            Criação Responsável
          </h3>

          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Seguimos as melhores práticas de criação ética e bem-estar animal.
          </p>
        </div>

        <!-- Card -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Users
              class="text-amber-600"
              :size="28"
            />
          </div>

          <h3
            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
          >
            Socialização Adequada
          </h3>

          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Filhotes criados em ambiente familiar com estímulos desde cedo.
          </p>
        </div>

        <!-- Card -->
        <div class="text-center">
          <div
            class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Award
              class="text-amber-600"
              :size="28"
            />
          </div>

          <h3
            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"
          >
            Suporte Contínuo
          </h3>

          <p
            class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
          >
            Acompanhamento e orientação mesmo após a adoção do filhote.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Heart,
  Shield,
  Users,
  Award
} from 'lucide-vue-next'
</script>
