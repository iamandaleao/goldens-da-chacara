<template>
  <footer class="bg-[#1a1a1a] text-white pt-16 pb-5">
    <div class="max-w-[1200px] mx-auto px-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <!-- Coluna 1 -->
        <div>
          <h3 class="text-xl mb-6 text-[#D4AF37] font-bold">
            Goldens da Chácara
          </h3>
          <p class="text-[#ccc] mb-6 leading-relaxed">
            Criação especializada de Golden Retriever com amor e responsabilidade.
          </p>

          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/goldensdachacara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              class="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-[#D4AF37] hover:-translate-y-1 hover:scale-110"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/goldensdachacara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              class="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-[#D4AF37] hover:-translate-y-1 hover:scale-110"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@goldensdachacara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              class="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-white no-underline transition-all duration-300 hover:bg-[#D4AF37] hover:-translate-y-1 hover:scale-110"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Coluna 2 -->
        <div>
          <h3 class="text-xl mb-6 text-[#D4AF37] font-bold">
            Links Rápidos
          </h3>
          <ul class="list-none">
            <li class="mb-3">
              <NuxtLink
                to="/"
                class="text-[#ccc] no-underline transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
              >
                Home
              </NuxtLink>
            </li>
            <li class="mb-3">
              <NuxtLink
                to="/filhotes"
                class="text-[#ccc] no-underline transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
              >
                Filhotes
              </NuxtLink>
            </li>
            <li class="mb-3">
              <NuxtLink
                to="/blog"
                class="text-[#ccc] no-underline transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
              >
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Coluna 3 -->
        <div>
          <h3 class="text-xl mb-6 text-[#D4AF37] font-bold">
            Contato
          </h3>
          <ul class="list-none">
            <li class="flex items-center gap-2.5 mb-3">
              <Mail
                :size="18"
                class="text-[#D4AF37] shrink-0 transition-all duration-300"
              />
              <a
                href="mailto:goldensdachacara@gmail.com"
                class="text-[#ccc] no-underline transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
              >
                goldensdachacara@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-2.5 mb-3 group">
              <Phone
                :size="18"
                class="text-[#D4AF37] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
              />
              <a
                href="https://wa.me/5547991611628"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#ccc] no-underline transition-all duration-300 hover:text-[#D4AF37] hover:pl-1"
              >
                (47) 99161-1628
              </a>
            </li>
            <li class="flex items-center gap-2.5 mb-3 group">
              <MapPin
                :size="18"
                class="text-[#D4AF37] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
              />
              <span class="text-[#ccc] transition-all duration-300 group-hover:text-[#D4AF37] group-hover:pl-1">
                Formiga, MG
              </span>
            </li>
          </ul>
        </div>

        <!-- Coluna 4 -->
        <div>
          <h3 class="text-xl mb-6 text-[#D4AF37] font-bold">
            Horário de Atendimento
          </h3>
          <ul class="list-none">
            <li class="text-[#ccc] mb-3 leading-relaxed">
              Segunda a sábado: 9h às 21h
            </li>
            <li class="text-[#ccc] mb-3 leading-relaxed">
              Domingos e feriados: 13h às 20h
            </li>
          </ul>
          <!-- Selos -->
          <div class="flex gap-4 flex-wrap items-center">
            <a
              href="https://cbkc.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-opacity duration-300 hover:opacity-100"
            >
              <img
                src="/selos/cbkc-logo.png"
                title="CBKC"
                alt="CBKC"
                class="h-12 opacity-80"
              >
            </a>

            <a
              href="https://www.alkc.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              class="transition-opacity duration-300 hover:opacity-100"
            >
              <img
                src="/selos/alkc-logo.avif"
                title="ALKC"
                alt="ALKC"
                class="h-12 opacity-80"
              >
            </a>
          </div>
        </div>
      </div>

      <div class="text-center pt-8 border-t border-[#333]">
        <p class="text-[#999] text-[0.95rem] mb-2">
          &copy; {{ currentYear }} Goldens da Chácara. Todos os direitos reservados.
        </p>
        <p class="text-[#999] text-[0.95rem] mb-2">
          Criação especializada de Golden Retriever | Filhotes Golden Retriever Formiga/MG
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail, Phone, MapPin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>
