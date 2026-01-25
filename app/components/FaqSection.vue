<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const goldenRetrieverItems: AccordionItem[] = [
  {
    label: 'Quando terão filhotes disponíveis?',
    content: 'Estamos atualmente na fase de aquisição dos matrizes. Prevemos nossa primeira ninhada para os próximos meses. Entre em contato pelo WhatsApp para receber atualizações!'
  },
  {
    label: 'Qual o valor estimado dos filhotes?',
    content: 'Os valores serão divulgados assim que tivermos os matrizes definidos e toda a estrutura pronta. Trabalhamos com preços justos que refletem a qualidade e cuidados oferecidos.'
  },
  {
    label: 'Fazem reservas antecipadas?',
    content: 'Sim! Você pode manifestar interesse agora pelo WhatsApp e quando a ninhada for confirmada, entraremos em contato para formalizar a reserva.'
  },
  {
    label: 'Que documentação será fornecida?',
    content: 'Todos os filhotes sairão com pedigree, carteira de vacinação, vermifugação em dia, e orientações completas de cuidados. Nota fiscal disponível mediante solicitação.'
  },
  {
    label: 'Oferecem suporte pós-adoção?',
    content: 'Sim! Estaremos sempre disponíveis para orientar sobre alimentação, saúde, comportamento e quaisquer dúvidas que surgirem ao longo da vida do seu Golden.'
  }
]
</script>

<template>
  <!-- FAQ -->
  <section class="py-12 sm:py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <div class="w-20 h-1 bg-amber-600 mx-auto" />
      </div>

      <!-- Seção: Golden Retriever -->
      <div>
        <h3 class="text-xl sm:text-2xl font-bold text-amber-700 mb-4 sm:mb-6 flex items-center gap-2">
          🦮 Sobre os Golden Retrievers
        </h3>
        <UAccordion
          :items="goldenRetrieverItems"
          :ui="{
            root: 'space-y-4 sm:space-y-6',
            item: 'bg-white rounded-xl shadow-sm border-0',
            trigger: 'text-base sm:text-lg font-bold text-gray-900 px-5 sm:px-6 py-3.5',
            body: 'text-sm sm:text-base text-gray-600 px-5 sm:px-6 pb-5 sm:pb-6'
          }"
        />
      </div>
    </div>
  </section>
</template>
