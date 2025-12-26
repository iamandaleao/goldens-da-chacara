<template>
  <!-- WhatsApp Floating Button -->
  <button
    class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
    aria-label="Contato via WhatsApp"
    @click="openWhatsapp"
  >
    <MessageCircle :size="28" />
  </button>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'
</script>
