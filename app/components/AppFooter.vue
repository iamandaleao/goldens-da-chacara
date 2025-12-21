<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div>
          <h3 class="text-xl sm:text-2xl font-bold text-amber-400 mb-3 sm:mb-4">
            Goldens da Chácara
          </h3>
          <p class="text-sm sm:text-base text-gray-400 mb-2">
            Criação profissional de Golden Retrievers e hospedagem para seu pet.
          </p>
          <a
            href="https://maps.app.goo.gl/qXpEg7uH2PgknXTz5"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition inline-flex items-start gap-2"
          >
            <MapPin
              :size="18"
              class="flex-shrink-0 mt-0.5"
            />
            <address class="not-italic">Ao lado do condomínio Ideal e laticínio Ideal, Formiga, Minas Gerais</address>
          </a>
        </div>
        <div>
          <h4 class="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
            Links Rápidos
          </h4>
          <ul class="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <a
                href="#home"
                class="hover:text-amber-400 transition"
              >Home</a>
            </li>
            <li>
              <a
                href="#sobre"
                class="hover:text-amber-400 transition"
              >Nossa História</a>
            </li>
            <li>
              <a
                href="#raca"
                class="hover:text-amber-400 transition"
              >A Raça</a>
            </li>
            <li>
              <a
                href="#contato"
                class="hover:text-amber-400 transition"
              >Contato</a>
            </li>
          </ul>
        </div>
        <div class="sm:col-span-2 lg:col-span-1">
          <h4 class="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
            Contato
          </h4>
          <ul class="space-y-3 text-sm sm:text-base text-gray-400">
            <li class="flex items-center gap-2">
              <Phone
                :size="18"
                class="flex-shrink-0"
              />
              <span>(47) 99161-1628</span>
            </li>
            <li class="flex items-center gap-2">
              <Mail
                :size="18"
                class="flex-shrink-0"
              />
              <span class="break-all">goldensdachacara@gmail.com</span>
            </li>
          </ul>
          <div class="flex gap-4 mt-4">
            <a
              href="https://instagram.com/goldensdachacara"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition"
              aria-label="Instagram"
            >
              <Instagram :size="20" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition"
              aria-label="Facebook"
            >
              <Facebook :size="20" />
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
        <p>&copy; 2025 Goldens da Chácara. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-vue-next'
</script>
