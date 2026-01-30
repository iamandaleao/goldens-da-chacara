<template>
  <!-- WhatsApp Floating Button -->
  <button
    class="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#25d366] to-[#1ebe5d] text-white border-0 rounded-full cursor-pointer transition-all duration-[250ms] ease-in-out hover:scale-110 hover:brightness-105 active:scale-105 animate-whatsapp-pulse"
    style="box-shadow: 0 10px 20px rgba(37, 211, 102, 0.35), 0 4px 8px rgba(0, 0, 0, 0.15);"
    aria-label="Contato via WhatsApp"
    @click="openWhatsapp"
  >
    <MessageCircle :size="28" />
  </button>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'

const openWhatsapp = () => {
  window.open('https://wa.me/5547991611628', '_blank')
}
</script>

<style scoped>
@keyframes whatsapp-pulse {
  0% {
    box-shadow:
      0 0 0 0 rgba(37, 211, 102, 0.6),
      0 10px 20px rgba(37, 211, 102, 0.35);
  }
  70% {
    box-shadow:
      0 0 0 12px rgba(37, 211, 102, 0),
      0 10px 20px rgba(37, 211, 102, 0.35);
  }
  100% {
    box-shadow:
      0 0 0 0 rgba(37, 211, 102, 0),
      0 10px 20px rgba(37, 211, 102, 0.35);
  }
}

.animate-whatsapp-pulse {
  animation: whatsapp-pulse 2.5s ease-in-out infinite;
}

button:hover {
  box-shadow:
    0 14px 28px rgba(37, 211, 102, 0.45),
    0 6px 12px rgba(0, 0, 0, 0.2) !important;
}
</style>
