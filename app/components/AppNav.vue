<template>
  <nav
    class="fixed top-0 left-0 right-0 z-[1000] bg-[#2C2416]/70 backdrop-blur-[20px] border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
    :class="{ 'bg-[#2C2416]/95': isScrolled }"
  >
    <div class="max-w-[1400px] mx-auto px-5 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-8">
      <!-- Logo Section -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/"
          class="flex items-center gap-4"
          aria-label="Ir para a página inicial"
          @click="closeMobileMenu"
        >
          <img
            src="/golden-retriever-canil.png"
            alt="Logo Goldens da Chácara"
            class="w-[60px] h-[60px] object-contain rounded-full border-3 border-[#D4AF37] p-0 bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-[5deg] hover:border-white"
          >
          <div class="flex flex-col">
            <span
              class="text-lg font-bold text-white leading-tight tracking-wide"
              style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"
            >
              Goldens da Chácara
            </span>
          </div>
        </NuxtLink>
      </div>
      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex list-none gap-2 items-center justify-end">
        <li>
          <NuxtLink
            to="/"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-[#D4AF37]/20 after:scale-x-100': isActive('/') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            Home
          </NuxtLink>
        </li>

        <li class="relative group">
          <NuxtLink
            to="#"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-[#D4AF37]/20 after:scale-x-100': isActive('/hotel') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            Serviços
          </NuxtLink>
          <ul class="absolute top-full left-0 bg-[#2C2416]/98 backdrop-blur-[20px] rounded-lg list-none p-2 min-w-[180px] opacity-0 invisible -translate-y-2.5 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#D4AF37]/20 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <li>
              <NuxtLink
                to="/hotel"
                class="text-white block px-6 py-3 no-underline after:hidden hover:bg-[#D4AF37] hover:text-white"
              >
                Hotel
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-white block px-6 py-3 no-underline after:hidden hover:bg-[#D4AF37] hover:text-white"
              >
                Daycare
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink
            to="/filhotes"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-[#D4AF37]/20 after:scale-x-100': isActive('/filhotes') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            Filhotes
          </NuxtLink>
        </li>

        <li>
          <a
            href="https://wa.me/5547991611628"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            Contato
          </a>
        </li>

        <li>
          <NuxtLink
            to="/blog"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-[#D4AF37]/20 after:scale-x-100': isActive('/blog') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            Blog
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        id="mobileMenu"
        class="lg:hidden flex-col gap-1.5 cursor-pointer z-[1001] ml-auto"
        :class="mobileMenuOpen ? 'flex' : 'lg:hidden flex'"
        type="button"
        aria-label="Abrir menu"
        :aria-expanded="mobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span
          class="w-7 h-[3px] bg-white rounded transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': mobileMenuOpen }"
        />
        <span
          class="w-7 h-[3px] bg-white rounded transition-all duration-300"
          :class="{ 'opacity-0': mobileMenuOpen }"
        />
        <span
          class="w-7 h-[3px] bg-white rounded transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      id="mobileNav"
      class="fixed top-0 w-[300px] h-screen bg-[#2C2416]/98 backdrop-blur-[20px] pt-8 transition-[right] duration-300 z-[999] shadow-[-5px_0_20px_rgba(0,0,0,0.3)] overflow-y-auto"
      :class="mobileMenuOpen ? 'right-0' : '-right-full'"
    >
      <div class="flex flex-col items-center px-5 pb-5 border-b-2 border-[#D4AF37]/30 mb-5">
        <img
          src="/golden-retriever-canil.png"
          alt="Logo Goldens da Chácara"
          class="w-20 h-20 object-contain rounded-full border-3 border-[#D4AF37] p-2 bg-white/10 mb-4"
        >
        <span
          class="text-2xl font-bold text-white text-center"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);"
        >
          Goldens da Chácara
        </span>
      </div>

      <ul class="list-none">
        <li class="border-b border-white/10">
          <NuxtLink
            to="/"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:pl-10"
            :class="{ 'bg-[#D4AF37] pl-10': isActive('/') }"
            @click="closeMobileMenu"
          >
            Home
          </NuxtLink>
        </li>
        <li class="border-b border-white/10">
          <NuxtLink
            to="#"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:pl-10"
            :class="{ 'bg-[#D4AF37] pl-10': isActive('/hotel') }"
            @click="closeMobileMenu"
          >
            Serviços
          </NuxtLink>
        </li>
        <li class="border-b border-white/10">
          <NuxtLink
            to="/filhotes"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:pl-10"
            :class="{ 'bg-[#D4AF37] pl-10': isActive('/filhotes') }"
            @click="closeMobileMenu"
          >
            Filhotes
          </NuxtLink>
        </li>
        <li class="border-b border-white/10">
          <a
            href="https://wa.me/5547991611628"
            target="_blank"
            rel="noopener noreferrer"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:pl-10"
            @click="closeMobileMenu"
          >
            Contato
          </a>
        </li>
        <li class="border-b border-white/10">
          <NuxtLink
            to="/blog"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:pl-10"
            :class="{ 'bg-[#D4AF37] pl-10': isActive('/blog') }"
            @click="closeMobileMenu"
          >
            Blog
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

function updateBodyScrollLock(isLocked: boolean) {
  document.body.style.overflow = isLocked ? 'hidden' : ''
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  updateBodyScrollLock(mobileMenuOpen.value)
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  updateBodyScrollLock(false)
}

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function onScroll() {
  isScrolled.value = window.scrollY > 100
}

function onDocumentClick(e: MouseEvent) {
  if (!mobileMenuOpen.value) return

  const mobileNav = document.getElementById('mobileNav')
  const mobileMenu = document.getElementById('mobileMenu')
  const target = e.target as Node | null

  if (!mobileNav || !mobileMenu || !target) return
  if (!mobileNav.contains(target) && !mobileMenu.contains(target)) closeMobileMenu()
}

watch(
  () => route.fullPath,
  () => closeMobileMenu()
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocumentClick)
})
</script>
