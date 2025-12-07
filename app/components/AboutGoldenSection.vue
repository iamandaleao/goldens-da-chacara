<template>
    <!-- Sobre a Raça -->
    <section
      id="raca"
      class="py-12 sm:py-16 bg-gray-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Golden Retriever?
          </h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto" />
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Heart
                class="text-amber-600"
                :size="24"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Temperamento Dócil
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Conhecidos por sua natureza gentil e amigável, são perfeitos para famílias com crianças
              e se adaptam bem a diferentes estilos de vida.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users
                class="text-amber-600"
                :size="24"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Sociáveis
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Adoram estar perto de pessoas e outros animais. São extremamente leais e
              estabelecem vínculos profundos com suas famílias.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Award
                class="text-amber-600"
                :size="24"
              />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Inteligentes
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Altamente treináveis e inteligentes, aprendem comandos rapidamente e adoram
              agradar seus tutores.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Características da Raça
          </h3>
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-3 text-base sm:text-lg">
                Físico
              </h4>
              <ul class="space-y-2 text-sm sm:text-base text-gray-600">
                <li>• Porte: Médio a grande</li>
                <li>• Peso: 25-34 kg (fêmeas) / 29-36 kg (machos)</li>
                <li>• Pelagem: Dourada, densa e repelente à água</li>
                <li>• Expectativa de vida: 10-12 anos</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3 text-base sm:text-lg">
                Cuidados Necessários
              </h4>
              <ul class="space-y-2 text-sm sm:text-base text-gray-600">
                <li>• Exercícios diários regulares</li>
                <li>• Escovação 2-3 vezes por semana</li>
                <li>• Alimentação balanceada de qualidade</li>
                <li>• Acompanhamento veterinário regular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
    import { Award } from 'lucide-vue-next'
</script>
