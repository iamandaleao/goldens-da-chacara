<template>
  <nav
    class="fixed top-0 left-0 right-0 z-[1000] bg-ink/70 backdrop-blur-[20px] border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300"
    :class="{ 'bg-ink/95': isScrolled }"
  >
    <div class="max-w-[1400px] mx-auto px-5 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-8">
      <!-- Logo Section -->
      <div class="flex items-center gap-4">
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-4"
          :aria-label="t('aria.goHome')"
          @click="closeMobileMenu"
        >
          <img
            src="/golden-retriever-canil.png"
            alt="Logo Goldens da Chácara"
            class="w-[60px] h-[60px] object-contain rounded-full border-3 border-primary p-0 bg-white/10 transition-all duration-300 hover:scale-110 hover:rotate-[5deg] hover:border-white"
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
            :to="localePath('/')"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-primary/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-primary/20 after:scale-x-100': isActive('/') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            {{ t('menu.home') }}
          </NuxtLink>
        </li>

        <li class="relative group">
          <NuxtLink
            to="#"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-primary/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-primary/20 after:scale-x-100': isActive('/hotel') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            {{ t('menu.services') }}
          </NuxtLink>
          <ul class="absolute left-1/2 top-full mt-5 -translate-x-1/2 bg-ink/98 backdrop-blur-[20px] rounded-xl list-none p-2 min-w-[200px] opacity-0 invisible transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.35)] border border-primary/20 group-hover:opacity-100 group-hover:visible">
            <li>
              <NuxtLink
                :to="localePath('/hotel')"
                class="text-white block px-6 py-3 no-underline after:hidden hover:bg-primary hover:text-white"
              >
                {{ t('menu.hotel') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/daycare')"
                class="text-white block px-6 py-3 no-underline after:hidden hover:bg-primary hover:text-white"
              >
                {{ t('menu.daycare') }}
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/filhotes')"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-primary/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-primary/20 after:scale-x-100': isActive('/filhotes') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            {{ t('menu.puppies') }}
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            :to="localePath('/blog')"
            class="text-white no-underline font-medium px-4 py-2.5 rounded-lg transition-all duration-300 relative text-[0.95rem] whitespace-nowrap hover:bg-primary/20 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 after:w-4/5 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
            :class="{ 'bg-primary/20 after:scale-x-100': isActive('/blog') }"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);"
          >
            {{ t('menu.blog') }}
          </NuxtLink>
        </li>

        <li class="flex items-center gap-2 pl-3 ml-2 border-l border-white/20">
          <NuxtLink
            :to="getSwitchPath('pt')"
            class="w-9 h-9 rounded-full grid place-items-center border transition-all duration-300 hover:scale-110 hover:border-primary"
            :class="locale === 'pt' ? 'border-primary bg-primary/20' : 'border-white/40 bg-white/5'"
            :aria-label="t('locale.ptAria')"
            :title="t('locale.ptTitle')"
          >
            <CircleFlagsBr
              class="text-lg"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink
            :to="getSwitchPath('en')"
            class="w-9 h-9 rounded-full grid place-items-center border transition-all duration-300 hover:scale-110 hover:border-primary"
            :class="locale === 'en' ? 'border-primary bg-primary/20' : 'border-white/40 bg-white/5'"
            :aria-label="t('locale.enAria')"
            :title="t('locale.enTitle')"
          >
            <CircleFlagsUs
              class="text-lg"
              aria-hidden="true"
            />
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        id="mobileMenu"
        class="lg:hidden flex-col gap-1.5 cursor-pointer z-[1001] ml-auto"
        :class="mobileMenuOpen ? 'flex' : 'lg:hidden flex'"
        type="button"
        :aria-label="t('aria.openMenu')"
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
      class="fixed top-0 w-[300px] h-screen bg-ink/98 backdrop-blur-[20px] pt-8 transition-[right] duration-300 z-[999] shadow-[-5px_0_20px_rgba(0,0,0,0.3)] overflow-y-auto"
      :class="mobileMenuOpen ? 'right-0' : '-right-full'"
    >
      <div class="flex flex-col items-center px-5 pb-5 border-b-2 border-primary/30 mb-5">
        <img
          src="/golden-retriever-canil.png"
          alt="Logo Goldens da Chácara"
          class="w-20 h-20 object-contain rounded-full border-3 border-primary p-2 bg-white/10 mb-4"
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
            :to="localePath('/')"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-primary hover:pl-10"
            :class="{ 'bg-primary pl-10': isActive('/') }"
            @click="closeMobileMenu"
          >
            {{ t('menu.home') }}
          </NuxtLink>
        </li>
        <li class="border-b border-white/10">
          <button
            type="button"
            class="w-full text-left text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-primary hover:pl-10 flex items-center justify-between"
            :class="{ 'bg-primary pl-10': isActive('/hotel') }"
            :aria-expanded="mobileServicesOpen"
            aria-controls="mobileServicesSubmenu"
            @click="toggleMobileServices"
          >
            <span>{{ t('menu.services') }}</span>
            <svg
              viewBox="0 0 20 20"
              class="w-4 h-4 text-white/90 transition-transform duration-300"
              :class="{ 'rotate-180': mobileServicesOpen }"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
              />
            </svg>
          </button>
          <ul
            v-show="mobileServicesOpen"
            id="mobileServicesSubmenu"
            class="pb-2"
          >
            <li>
              <NuxtLink
                :to="localePath('/hotel')"
                class="block text-white/90 no-underline px-8 py-3 pl-12 text-sm transition-all duration-300 hover:bg-primary hover:text-white"
                :class="{ 'bg-primary text-white': isActive('/hotel') }"
                @click="closeMobileMenu"
              >
                {{ t('menu.hotel') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/daycare')"
                class="block text-white/90 no-underline px-8 py-3 pl-12 text-sm transition-all duration-300 hover:bg-primary hover:text-white"
                @click="closeMobileMenu"
              >
                {{ t('menu.daycare') }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="border-b border-white/10">
          <NuxtLink
            :to="localePath('/filhotes')"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-primary hover:pl-10"
            :class="{ 'bg-primary pl-10': isActive('/filhotes') }"
            @click="closeMobileMenu"
          >
            {{ t('menu.puppies') }}
          </NuxtLink>
        </li>
        
        <li class="border-b border-white/10">
          <NuxtLink
            :to="localePath('/blog')"
            class="block text-white no-underline px-8 py-4 transition-all duration-300 font-medium hover:bg-primary hover:pl-10"
            :class="{ 'bg-primary pl-10': isActive('/blog') }"
            @click="closeMobileMenu"
          >
            {{ t('menu.blog') }}
          </NuxtLink>
        </li>
        <li class="border-b border-white/10 px-8 py-4">
          <div class="flex items-center gap-3">
            <NuxtLink
              :to="getSwitchPath('pt')"
              class="w-10 h-10 rounded-full grid place-items-center border transition-all duration-300"
              :class="locale === 'pt' ? 'border-primary bg-primary' : 'border-white/40 bg-white/10'"
              :aria-label="t('locale.ptAria')"
              :title="t('locale.ptTitle')"
              @click="closeMobileMenu"
            >
              <CircleFlagsBr
                class="text-xl"
                aria-hidden="true"
              />
            </NuxtLink>
            <NuxtLink
              :to="getSwitchPath('en')"
              class="w-10 h-10 rounded-full grid place-items-center border transition-all duration-300"
              :class="locale === 'en' ? 'border-primary bg-primary' : 'border-white/40 bg-white/10'"
              :aria-label="t('locale.enAria')"
              :title="t('locale.enTitle')"
              @click="closeMobileMenu"
            >
              <CircleFlagsUs
                class="text-xl"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, t } = useI18n()

function getSwitchPath(targetLocale: 'pt' | 'en') {
  return switchLocalePath(targetLocale) || localePath('/')
}

function updateBodyScrollLock(isLocked: boolean) {
  document.body.style.overflow = isLocked ? 'hidden' : ''
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileServicesOpen.value = false
  }
  updateBodyScrollLock(mobileMenuOpen.value)
}

function toggleMobileServices() {
  mobileServicesOpen.value = !mobileServicesOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
  updateBodyScrollLock(false)
}

function normalizePath(path: string) {
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path
}

function isActive(path: string) {
  const localizedPath = normalizePath(localePath(path))
  const currentPath = normalizePath(route.path)

  if (path === '/') {
    return currentPath === localizedPath
  }

  return currentPath === localizedPath || currentPath.startsWith(`${localizedPath}/`)
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

<i18n lang="json">
{
  "pt": {
    "aria": {
      "goHome": "Ir para a página inicial",
      "openMenu": "Abrir menu"
    },
    "menu": {
      "home": "Home",
      "services": "Serviços",
      "hotel": "Hotel",
      "daycare": "Daycare",
      "puppies": "Filhotes",
      "blog": "Blog"
    },
    "locale": {
      "ptAria": "Mudar para português",
      "ptTitle": "Português (Brasil)",
      "enAria": "Mudar para inglês",
      "enTitle": "English (United States)"
    }
  },
  "en": {
    "aria": {
      "goHome": "Go to home page",
      "openMenu": "Open menu"
    },
    "menu": {
      "home": "Home",
      "services": "Services",
      "hotel": "Boarding",
      "daycare": "Daycare",
      "puppies": "Puppies",
      "contact": "Contact",
      "blog": "Blog"
    },
    "locale": {
      "ptAria": "Switch to Portuguese",
      "ptTitle": "Português (Brasil)",
      "enAria": "Switch to English",
      "enTitle": "English (United States)"
    }
  }
}
</i18n>
