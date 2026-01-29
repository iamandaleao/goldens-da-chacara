<template>
  <section
    id="hotel-pet"
    class="py-20 px-5 bg-[#fef9f3]"
  >
    <div class="max-w-5xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 bg-white text-orange-500 py-2 px-5 rounded-full text-sm font-semibold mb-5 shadow-sm">
        <Heart :size="18" />
        Hotel e Creche
      </div>

      <h2 class="text-[32px] md:text-[42px] font-extrabold text-[#1a1a1a] mb-5 leading-tight">
        Hospedagem com <span class="text-orange-500">Carinho e Segurança</span>
      </h2>

      <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-[60px] leading-relaxed">
        Oferecemos hospedagem em uma chácara com 4.000m² de puro espaço para seu pet aproveitar! Cuidado 24h com muito carinho, atenção e diversão. Nosso Golden Retriever super brincalhão ajuda na socialização e faz amizade rapidinho com todos os hóspedes. Ambiente seguro, amplo e perfeito para seu pet se sentir em casa e livre!
      </p>

      <div class="mb-[60px]">
        <h3 class="text-[28px] text-[#1a1a1a] mb-8">
          Nossos Serviços
        </h3>
        <ul class="list-none p-0 max-w-2xl mx-auto text-left">
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Home :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Hospedagem com acompanhamento 24h</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Activity :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Passeios e atividades diárias</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Droplet :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Cuidados e higienização</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Camera :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Fotos e vídeos a qualquer momento</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Stethoscope :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Assistência veterinária de emergência</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Car :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Busca e entrega (valor adicional)</span>
          </li>
          <li class="flex items-center gap-3 text-lg text-gray-700 py-3 border-b border-gray-200 last:border-b-0">
            <Droplet :size="20" class="text-orange-500 flex-shrink-0" />
            <span>Banho disponível (traga o shampoo do seu pet)</span>
          </li>
        </ul>
      </div>

      <div class="mb-[60px]">
        <h3 class="text-[28px] text-[#1a1a1a] mb-8">
          Valor da Diária
        </h3>
        <div class="bg-white p-10 md:p-8 md:px-5 rounded-2xl shadow-md max-w-2xl mx-auto">
          <p class="text-[56px] md:text-[42px] font-extrabold text-orange-500 mb-3">
            R$ 40<span class="text-xl text-gray-600 font-normal">/dia</span>
          </p>
          <p class="flex items-center justify-center gap-2 text-gray-600 text-base mb-8">
            <span>Buscamos e entregamos seu pet</span>
            <Heart :size="16" class="text-orange-500" />
            <span>Acompanhamento e carinho 24h</span>
          </p>

          <div class="bg-orange-50 p-6 rounded-xl border-2 border-dashed border-orange-500">
            <p class="flex items-center gap-2 text-lg font-semibold text-[#1a1a1a] mb-4">
              <DollarSign :size="20" class="text-orange-500" />
              Descontos para estadias longas:
            </p>
            <ul class="list-none p-0 text-left">
              <li class="py-2 text-gray-600 text-base relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-500 before:font-bold">
                A partir de 7 dias: <strong class="text-orange-500">10% off</strong>
              </li>
              <li class="py-2 text-gray-600 text-base relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-500 before:font-bold">
                A partir de 15 dias: <strong class="text-orange-500">15% off</strong>
              </li>
              <li class="py-2 text-gray-600 text-base relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-orange-500 before:font-bold">
                A partir de 30 dias: <strong class="text-orange-500">20% off</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-[60px]">
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white border-none py-4 px-10 text-lg font-semibold rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          @click="handleReserva"
        >
          Fazer Reserva
        </button>
        <p class="mt-5 text-gray-600 text-base">
          Entre em contato para conhecer condições especiais e pacotes personalizados!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Heart, Home, Activity, Droplet, Camera, Stethoscope, Car, DollarSign } from 'lucide-vue-next'

function handleReserva() {
  const phoneNumber = '47991611628'
  const message = 'Olá! Gostaria de fazer uma reserva no Hotel de Pet.'
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}
</script>
