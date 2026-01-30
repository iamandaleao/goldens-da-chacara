<template>
  <div>
    <FloatingButton />
    <AppNav />

    <section
      class="relative h-[50vh] flex items-center justify-center text-white text-center bg-[size:213%] bg-top bg-fixed"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/golden-retriever-dourado-filhotes-cachorro.jpg');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-wide leading-tight"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          Nossos Filhotes
        </h1>
        <p
          class="text-xl md:text-2xl lg:text-3xl mb-10 font-light"
          style="text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);"
        >
          Conheça nossos adoráveis filhotes Golden Retriever
        </p>
      </div>
    </section>

    <section class="py-7 lg:py-12 bg-white">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="text-center max-w-[800px] mx-auto mb-16">
          <h2 class="text-3xl md:text-5xl text-[#2C2416] mb-6 font-extrabold">
            Em Breve: Nova Ninhada
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Estamos preparando uma nova ninhada de filhotes Golden Retriever com pedigree CBKC.
            Todos os nossos filhotes nascem em ambiente familiar, recebem os melhores cuidados
            veterinários e são entregues vacinados, vermifugados e com garantia de saúde.
          </p>
        </div>

        <div class="my-20">
          <h3 class="text-4xl text-[#2C2416] mb-4 font-extrabold text-center relative inline-block w-full">
            O que está incluso:
            <span class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] rounded-sm" />
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <FileText
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Pedigree
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Registro oficial da raça
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Syringe
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Vacinas
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Carteira de vacinação conforme a idade
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <HeartPulse
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Vermifugação
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Protocolo veterinário
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <CheckCircle
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Garantia de Saúde
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Contrato com garantias
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Gift
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Kit Filhote
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Ração, brinquedos
              </p>
            </div>

            <div class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-[400ms] border-2 border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group">
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37]/10 to-[#8B7355]/10 rounded-3xl flex items-center justify-center transition-all duration-400 relative group-hover:scale-110 group-hover:rotate-[5deg]">
                <div
                  class="absolute inset-[-2px] rounded-3xl p-0.5 bg-gradient-to-br from-[#D4AF37] to-[#8B7355] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
                />
                <Phone
                  :size="32"
                  class="text-[#D4AF37] transition-all duration-400 group-hover:text-[#8B7355] group-hover:scale-110"
                />
              </div>

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold transition-colors duration-300 group-hover:text-[#D4AF37]">
                Suporte
              </h4>
              <p class="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Acompanhamento pós-venda
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-[#D4AF37] to-[#8B7355] p-16 rounded-3xl text-center text-white shadow-2xl mt-16">
          <h3 class="text-4xl mb-4 font-extrabold">
            Faça sua Reserva
          </h3>
          <p class="text-xl mb-8">
            Garanta seu filhote Golden Retriever agora!
            Entre em contato para mais informações sobre disponibilidade e valores.
          </p>

          <a
            href="https://wa.me/5547991611628"
            class="inline-block px-12 py-5 bg-[#D4AF37] text-white no-underline rounded-full font-bold text-lg transition-all duration-400 shadow-xl uppercase tracking-wide hover:-translate-y-2 hover:shadow-2xl hover:bg-[#C9A02C]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve Agora
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { FileText, Syringe, HeartPulse, CheckCircle, Gift, Phone } from 'lucide-vue-next'

useHead({
  title: 'Filhotes Golden Retriever - Goldens da Chácara',
  meta: [
    {
      name: 'description',
      content:
        'Filhotes Golden Retriever disponíveis - Goldens da Chácara. Filhotes com pedigree, vacinados e vermifugados.'
    },
    {
      name: 'keywords',
      content:
        'filhotes golden retriever, golden retriever para venda, comprar golden retriever, filhotes disponíveis'
    },
    { property: 'og:title', content: 'Filhotes Golden Retriever - Goldens da Chácara' },
    {
      property: 'og:description',
      content:
        'Filhotes Golden Retriever com pedigree, vacinados e vermifugados.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://goldensdachacara.com.br/filhotes' }
  ],
  link: [{ rel: 'canonical', href: 'https://goldensdachacara.com.br/filhotes' }]
})
</script>
