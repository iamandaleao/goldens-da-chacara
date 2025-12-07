<template>
    <section id="inicio" class="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="inline-block mb-4 px-3 sm:px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-semibold">
            🐕 Em breve
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Criação de Golden Retrievers<br/>
            <span class="text-amber-600">de Excelência</span>
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Estamos preparando um projeto especial de criação responsável em Formiga, Minas Gerais. 
            Fale conosco pelo WhatsApp para saber mais e manifestar seu interesse!
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              @click="handleWhatsAppClick"
              class="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
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
          </div>
        </div>
      </div>
      <div class="text-center mt-8 sm:mt-12">
        <ChevronDown class="mx-auto text-amber-600 animate-bounce" :size="28" />
      </div>
    </section>
</template>

<script setup>
    import { ChevronDown, MessageCircle } from 'lucide-vue-next'

    // Configuração do WhatsApp
   // IMPORTANTE: Substitua pelo seu número real no formato: 5537999999999
    const whatsappNumber = '5537999999999'
    const whatsappMessage = 'Olá! Tenho interesse nos filhotes de Golden Retriever 🐕'

    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      window.open(url, '_blank')
    }
</script>