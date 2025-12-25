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

const hotelCaninoItems: AccordionItem[] = [
  {
    label: 'Aceita cachorros de todas as raças e tamanhos?',
    content: 'Sim! Recebemos cães de todas as raças e portes com muito carinho. Nosso espaço é amplo e adequado para garantir o conforto de todos os hóspedes.'
  },
  {
    label: 'Quais vacinas são obrigatórias para hospedar?',
    content: 'Não exigimos carteira de vacinação, porém recomendamos fortemente que seu pet esteja com as vacinas em dia (V10/V8 e antirrábica) para a própria segurança e saúde dele.'
  },
  {
    label: 'Aceita cadelas no cio?',
    content: 'Sim. Elas ficam em área separada dos machos para evitar qualquer desconforto e garantir a tranquilidade de todos os hóspedes.'
  },
  {
    label: 'Como é a rotina diária dos cães hospedados?',
    content: 'Nossos hóspedes têm uma rotina equilibrada com alimentação em horários regulares, momentos de brincadeiras e socialização em áreas seguras, períodos de descanso e muito carinho. Cães com necessidades especiais recebem atenção individualizada.'
  },
  {
    label: 'Qual o valor da diária?',
    slot: 'diaria',
    content: 'A diária é de R$ 50,00 por cachorro, incluindo alimentação, cuidados e acomodação confortável. Entre em contato para conhecer nossos pacotes especiais!'
  },
  {
    label: 'Tem desconto para hospedagens longas?',
    slot: 'desconto',
    content: 'Sim! Oferecemos descontos progressivos para estadias prolongadas.'
  },
  {
    label: 'O que está incluso na diária?',
    content: 'A diária inclui: acomodação confortável e segura, água fresca sempre disponível, socialização com outros cães, brincadeiras monitoradas, limpeza diária do espaço e cuidados básicos. Traga a ração de costume do seu pet. Banhos e tosas podem ser agendados à parte.'
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
      <div class="mb-8 sm:mb-10">
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

      <!-- Seção: Hotel Canino -->
      <div>
        <h3 class="text-xl sm:text-2xl font-bold text-amber-700 mb-4 sm:mb-6 flex items-center gap-2">
          🏨 Sobre o Hotel Canino
        </h3>
        <UAccordion
          :items="hotelCaninoItems"
          :ui="{
            root: 'space-y-4 sm:space-y-6',
            item: 'bg-white rounded-xl shadow-sm border-0',
            trigger: 'text-base sm:text-lg font-bold text-gray-900 px-5 sm:px-6 py-3.5',
            body: 'text-sm sm:text-base text-gray-600 px-5 sm:px-6 pb-5 sm:pb-6'
          }"
        >
          <template #diaria-body>
            <p class="text-sm sm:text-base text-gray-600">
              A diária é de <span class="font-bold text-amber-600">R$ 50,00</span> por cachorro,
              incluindo alimentação, cuidados e acomodação confortável. Entre em contato para
              conhecer nossos pacotes especiais!
            </p>
          </template>
          <template #desconto-body>
            <p class="text-sm sm:text-base text-gray-600 mb-2">
              Sim! Oferecemos descontos progressivos para estadias prolongadas:
            </p>
            <ul class="list-disc list-inside text-sm sm:text-base text-gray-600">
              <li class="font-semibold">
                7 dias ou mais = 10% de desconto
              </li>
              <li class="font-semibold">
                15 dias ou mais = 15% de desconto
              </li>
              <li class="font-semibold">
                30 dias ou mais = 20% de desconto
              </li>
            </ul>
            <p class="text-sm sm:text-base text-gray-600 mt-2">
              Entre em contato para condições especiais!
            </p>
          </template>
        </UAccordion>
      </div>
    </div>
  </section>
</template>
