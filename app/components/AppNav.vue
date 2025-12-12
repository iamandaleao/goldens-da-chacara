<template>
  <nav class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <span class="text-xl sm:text-2xl font-bold text-amber-600">
            Goldens da Chácara
          </span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6 lg:space-x-8">
          <a
            href="#home"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >Home</a>
          <a
            href="#sobre"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >Nossa História</a>
          <a
            href="#raca"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >A Raça</a>
          <a
            href="#valores"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >Valores</a>
          <a
            href="#contato"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >Contato</a>

          <!-- Blog -->
          <a
            href="#blog"
            class="text-gray-700 hover:text-amber-600 transition text-sm lg:text-base"
          >Blog</a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2"
          aria-label="Menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X
            v-if="mobileMenuOpen"
            :size="24"
          />
          <Menu
            v-else
            :size="24"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t"
    >
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a
          href="#home"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >Home</a>
        <a
          href="#sobre"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >Nossa História</a>
        <a
          href="#raca"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >A Raça</a>
        <a
          href="#valores"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >Valores</a>
        <a
          href="#contato"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >Contato</a>

        <!-- Blog -->
        <a
          href="#blog"
          class="block px-3 py-2 text-gray-700 hover:bg-amber-50 rounded"
          @click="mobileMenuOpen = false"
        >Blog</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
</script>
