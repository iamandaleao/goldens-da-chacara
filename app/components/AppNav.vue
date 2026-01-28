<template>
  <nav
    class="glass-nav"
    :class="{ scrolled: isScrolled }"
  >
    <div class="nav-container">
      <div class="logo-section">
        <NuxtLink
          to="/"
          class="logo-section"
          aria-label="Ir para a página inicial"
          @click="closeMobileMenu"
        >
          <img
            src="/golden-retriever-canil.png"
            alt="Logo Goldens da Chácara"
            class="logo-image"
          >
          <div class="logo-text">
            <span class="logo-name">Goldens da Chácara</span>
          </div>
        </NuxtLink>
      </div>

      <ul class="nav-links">
        <li>
          <NuxtLink
            to="/"
            :class="{ active: isActive('/') }"
          >Home</NuxtLink>
        </li>

        <li class="dropdown">
          <NuxtLink
            to="/hotel-pet"
            :class="{ active: isActive('/hotel-pet') }"
          >
            Serviços
          </NuxtLink>
          <ul class="dropdown-menu">
            <li>
              <NuxtLink to="/hotel-pet#hotel-pet">
                Hotel Pet
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink
            to="/filhotes"
            :class="{ active: isActive('/filhotes') }"
          >Filhotes</NuxtLink>
        </li>
        <li>
          <a
            href="https://wa.me/5547991611628"
            target="_blank"
            rel="noopener noreferrer"
          >Contato</a>
        </li>
        <li>
          <NuxtLink
            to="/blog"
            :class="{ active: isActive('/blog') }"
          >Blog</NuxtLink>
        </li>
      </ul>

      <button
        id="mobileMenu"
        class="mobile-menu"
        :class="{ active: mobileMenuOpen }"
        type="button"
        aria-label="Abrir menu"
        :aria-expanded="mobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <div
      id="mobileNav"
      class="mobile-nav"
      :class="{ active: mobileMenuOpen }"
    >
      <div class="mobile-logo-section">
        <img
          src="/golden-retriever-canil.png"
          alt="Logo Goldens da Chácara"
          class="mobile-logo-image"
        >
        <span class="mobile-logo-name">Goldens da Chácara</span>
      </div>

      <ul>
        <li>
          <NuxtLink
            to="/"
            :class="{ active: isActive('/') }"
            @click="closeMobileMenu"
          >Home</NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/hotel-pet"
            :class="{ active: isActive('/hotel-pet') }"
            @click="closeMobileMenu"
          >Serviços</NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/filhotes"
            :class="{ active: isActive('/filhotes') }"
            @click="closeMobileMenu"
          >Filhotes</NuxtLink>
        </li>
        <li>
          <a
            href="https://wa.me/5547991611628"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
          >Contato</a>
        </li>
        <li>
          <NuxtLink
            to="/blog"
            :class="{ active: isActive('/blog') }"
            @click="closeMobileMenu"
          >Blog</NuxtLink>
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
