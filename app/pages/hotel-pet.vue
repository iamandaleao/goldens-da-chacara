<template>
  <div class="min-h-screen bg-white">
    <FloatingButton />

    <AppNav />

    <!-- Hero Section para Hotel Pet -->
    <section
      id="home"
      class="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-orange-50 to-amber-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 mb-4 px-3 sm:px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
            <Heart :size="16" />
            Hotel e Creche para Cães
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4 px-4">
            Hotel para <span class="text-orange-500">Cães</span><br>
            e <span class="text-orange-600">Creche Pet</span> em Formiga/MG
          </h1>

          <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Hospedagem em uma chácara com 4.000m² de puro espaço para seu pet aproveitar! Cuidado 24h com muito carinho, atenção e diversão.
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
              href="#hotel-pet"
              class="bg-white text-orange-600 px-6 sm:px-8 py-3 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 sm:mt-12">
        <ChevronDown
          class="mx-auto text-orange-600 animate-bounce"
          :size="28"
        />
      </div>
    </section>

    <HotelSection />

    <!-- FAQ Section específica para Hotel -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <div class="w-20 h-1 bg-orange-500 mx-auto" />
        </div>

        <!-- Seção: Hotel Canino -->
        <div>
          <h3 class="text-xl sm:text-2xl font-bold text-orange-700 mb-4 sm:mb-6 flex items-center gap-2">
            <Home :size="24" />
            Sobre o Hotel Canino
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
                A diária é de <span class="font-bold text-orange-600">R$ 50,00</span> por cachorro,
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

    <ContactSection />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ChevronDown, MessageCircle, Heart, Home } from 'lucide-vue-next'
import type { AccordionItem } from '@nuxt/ui'

useHead({
  title: 'Hotel Pet',
  meta: [
    {
      name: 'description',
      content: 'Hotel e creche para cães em Formiga (MG). Hospedagem 24h em chácara com 4.000m², cuidado, carinho e diversão para seu pet.'
    },
    {
      name: 'keywords',
      content: 'hotel para cães, creche canina, hospedagem pet, hotel canino formiga mg, hotel pet formiga'
    },
    { property: 'og:title', content: 'Hotel Pet | Goldens da Chácara - Hospedagem para Cães' },
    { property: 'og:description', content: 'Hospedagem 24h para cães em Formiga (MG). Chácara com 4.000m², cuidado e carinho para seu pet.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://goldensdachacara.com.br/hotel-pet' }
  ],
  link: [
    { rel: 'canonical', href: 'https://goldensdachacara.com.br/hotel-pet' }
  ]
})

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
    content: 'A diária é de R$ 40,00 por cachorro, incluindo alimentação, cuidados e acomodação confortável. Entre em contato para conhecer nossos pacotes especiais!'
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

function openWhatsapp() {
  const phoneNumber = '47991611628'
  const message = 'Olá! Gostaria de saber mais sobre o Hotel Pet.'
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}
</script>
