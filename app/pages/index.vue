<template>
  <div class="min-h-screen bg-white">
    <!-- WhatsApp Floating Button -->
    <button
      @click="handleWhatsAppClick"
      class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle :size="28" />
    </button>

    <!-- Navigation -->
    <nav class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-xl sm:text-2xl font-bold text-amber-600">Golden Farm</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#inicio" class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base">Início</a>
            <a href="#sobre" class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base">Nossa História</a>
            <a href="#raca" class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base">A Raça</a>
            <a href="#valores" class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base">Valores</a>
            <a href="#contato" class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base">Contato</a>
          </div>

          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden p-2"
            aria-label="Menu"
          >
            <X v-if="mobileMenuOpen" :size="24" />
            <Menu v-else :size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-4 pt-2 pb-3 space-y-1">
          <a 
            href="#inicio" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          >
            Início
          </a>
          <a 
            href="#sobre" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          >
            Nossa História
          </a>
          <a 
            href="#raca" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          >
            A Raça
          </a>
          <a 
            href="#valores" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          >
            Valores
          </a>
          <a 
            href="#contato" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
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

    <!-- Nossa História - Com o Lars -->
    <section id="sobre" class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <!-- História do Lars -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
          <div class="max-w-3xl mx-auto text-center">
            <div class="text-4xl sm:text-5xl lg:text-6xl mb-4">🐕</div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Tudo Começou com o Lars
            </h3>
            <p class="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Há 5 anos, o Lars entrou em nossas vidas e transformou completamente nossa família. 
              Sua lealdade, inteligência e amor incondicional nos mostraram o quanto os Golden Retrievers 
              são especiais.
            </p>
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Vendo o impacto positivo que ele trouxe para nossa vida, decidimos compartilhar essa 
              alegria com outras famílias. Por isso estamos iniciando nosso criadouro - para que mais 
              pessoas possam experimentar o amor de um Golden como o Lars.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Uma Jornada com Propósito</h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              Inspirados pelo Lars, estamos criando um criadouro com um compromisso inabalável: criar Golden Retrievers 
              saudáveis, equilibrados e felizes, que se tornem membros amados de suas famílias.
            </p>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              Atualmente estamos na fase de seleção criteriosa de nossos matrizes, priorizando linhagens com 
              excelente temperamento (como o do Lars!), saúde comprovada e conformação ao padrão da raça.
            </p>
            <p class="text-sm sm:text-base text-gray-600">
              Nossa fazenda em Formiga, MG, oferece o ambiente perfeito para que os filhotes cresçam em 
              contato com a natureza, recebendo socialização adequada e todos os cuidados necessários.
            </p>
          </div>
          <div class="bg-amber-100 rounded-2xl p-6 sm:p-8">
            <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Nossa Timeline</h4>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-3 h-3 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm sm:text-base">Fase Atual</p>
                  <p class="text-gray-600 text-xs sm:text-sm">Seleção e aquisição de matrizes de qualidade</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-3 h-3 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm sm:text-base">Próximos Meses</p>
                  <p class="text-gray-600 text-xs sm:text-sm">Preparação completa do ambiente e estrutura</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-3 h-3 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm sm:text-base">Em Breve</p>
                  <p class="text-gray-600 text-xs sm:text-sm">Primeira ninhada esperada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre a Raça -->
    <section id="raca" class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por Que Golden Retriever?</h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Heart class="text-amber-600" :size="24" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Temperamento Dócil</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Conhecidos por sua natureza gentil e amigável, são perfeitos para famílias com crianças 
              e se adaptam bem a diferentes estilos de vida.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Users class="text-amber-600" :size="24" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Sociáveis</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Adoram estar perto de pessoas e outros animais. São extremamente leais e 
              estabelecem vínculos profundos com suas famílias.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Award class="text-amber-600" :size="24" />
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Inteligentes</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Altamente treináveis e inteligentes, aprendem comandos rapidamente e adoram 
              agradar seus tutores.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Características da Raça</h3>
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Físico</h4>
              <ul class="space-y-2 text-sm sm:text-base text-gray-600">
                <li>• Porte: Médio a grande</li>
                <li>• Peso: 25-34 kg (fêmeas) / 29-36 kg (machos)</li>
                <li>• Pelagem: Dourada, densa e repelente à água</li>
                <li>• Expectativa de vida: 10-12 anos</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Cuidados Necessários</h4>
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

    <!-- Nossos Valores -->
    <section id="valores" class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Compromissos</h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield class="text-amber-600" :size="28" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Saúde em Primeiro Lugar</h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Todos os exames necessários, vacinas em dia e acompanhamento veterinário rigoroso.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart class="text-amber-600" :size="28" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Criação Responsável</h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Seguimos as melhores práticas de criação ética e bem-estar animal.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="text-amber-600" :size="28" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Socialização Adequada</h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Filhotes criados em ambiente familiar com estímulos desde cedo.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award class="text-amber-600" :size="28" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Suporte Contínuo</h3>
            <p class="text-xs sm:text-sm text-gray-600">
              Acompanhamento e orientação mesmo após a adoção do filhote.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div class="space-y-4 sm:space-y-6">
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Quando terão filhotes disponíveis?</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Estamos atualmente na fase de aquisição dos matrizes. Prevemos nossa primeira ninhada 
              para os próximos meses. Entre em contato pelo WhatsApp para receber atualizações!
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Qual o valor estimado dos filhotes?</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Os valores serão divulgados assim que tivermos os matrizes definidos e toda a estrutura pronta. 
              Trabalhamos com preços justos que refletem a qualidade e cuidados oferecidos.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Fazem reservas antecipadas?</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Sim! Você pode manifestar interesse agora pelo WhatsApp e quando a ninhada for confirmada, 
              entraremos em contato para formalizar a reserva.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Que documentação será fornecida?</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Todos os filhotes sairão com carteira de vacinação, vermifugação em dia, microchip, 
              contrato de compra e venda, e orientações completas de cuidados.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">Oferecem suporte pós-adoção?</h3>
            <p class="text-sm sm:text-base text-gray-600">
              Sim! Estaremos sempre disponíveis para orientar sobre alimentação, saúde, comportamento 
              e quaisquer dúvidas que surgirem ao longo da vida do seu Golden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section id="contato" class="py-12 sm:py-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Quer Saber Mais?
        </h2>
        <p class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
          Entre em contato conosco pelo WhatsApp e manifeste seu interesse. 
          Teremos prazer em conversar com você!
        </p>
        <button
          @click="handleWhatsAppClick"
          class="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2 text-base sm:text-lg"
        >
          <MessageCircle :size="20" />
          Falar no WhatsApp
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 sm:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-amber-400 mb-3 sm:mb-4">Golden Farm</h3>
            <p class="text-sm sm:text-base text-gray-400">
              Criação responsável de Golden Retrievers em Formiga, Minas Gerais.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Links Rápidos</h4>
            <ul class="space-y-2 text-sm sm:text-base text-gray-400">
              <li><a href="#inicio" class="hover:text-amber-400 transition">Início</a></li>
              <li><a href="#sobre" class="hover:text-amber-400 transition">Nossa História</a></li>
              <li><a href="#raca" class="hover:text-amber-400 transition">A Raça</a></li>
              <li><a href="#contato" class="hover:text-amber-400 transition">Contato</a></li>
            </ul>
          </div>
          <div class="sm:col-span-2 lg:col-span-1">
            <h4 class="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contato</h4>
            <ul class="space-y-3 text-sm sm:text-base text-gray-400">
              <li class="flex items-center gap-2">
                <MapPin :size="18" class="flex-shrink-0" />
                <span>Formiga, Minas Gerais</span>
              </li>
              <li class="flex items-center gap-2">
                <Phone :size="18" class="flex-shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li class="flex items-center gap-2">
                <Mail :size="18" class="flex-shrink-0" />
                <span class="break-all">contato@goldenfarm.com.br</span>
              </li>
            </ul>
            <div class="flex gap-4 mt-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition" aria-label="Instagram">
                <Instagram :size="20" />
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition" aria-label="Facebook">
                <Facebook :size="20" />
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 Golden Farm. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Heart, 
  Shield, 
  Award, 
  Users, 
  ChevronDown, 
  MessageCircle 
} from 'lucide-vue-next'

// Estado do menu mobile
const mobileMenuOpen = ref(false)

// Configuração do WhatsApp
// IMPORTANTE: Substitua pelo seu número real no formato: 5537999999999
const whatsappNumber = '5537999999999'
const whatsappMessage = 'Olá! Tenho interesse nos filhotes de Golden Retriever 🐕'

const handleWhatsAppClick = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, '_blank')
}

// SEO
useHead({
  title: 'Golden Farm - Criação de Golden Retrievers em Formiga, MG',
  meta: [
    { 
      name: 'description', 
      content: 'Criação responsável de Golden Retrievers em Formiga, Minas Gerais. Filhotes saudáveis, socializados e criados com amor.' 
    },
    { 
      name: 'keywords', 
      content: 'golden retriever, criação golden retriever, filhotes golden, golden retriever formiga, golden retriever minas gerais, canil golden retriever' 
    },
    { property: 'og:title', content: 'Golden Farm - Criação de Golden Retrievers' },
    { property: 'og:description', content: 'Criação responsável de Golden Retrievers em Formiga, MG' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>