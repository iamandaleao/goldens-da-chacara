<template>
  <!-- WhatsApp Floating Button -->
  <button
    class="floating-whatsapp-button"
    aria-label="Contato via WhatsApp"
    @click="openWhatsapp"
  >
    <MessageCircle :size="28" />
  </button>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'
</script>

<style scoped>
.floating-whatsapp-button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;

  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #25d366, #1ebe5d);
  color: #ffffff;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  box-shadow:
    0 10px 20px rgba(37, 211, 102, 0.35),
    0 4px 8px rgba(0, 0, 0, 0.15);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  animation: whatsapp-pulse 2.5s ease-in-out infinite;
}

.floating-whatsapp-button:hover {
  transform: scale(1.12);
  box-shadow:
    0 14px 28px rgba(37, 211, 102, 0.45),
    0 6px 12px rgba(0, 0, 0, 0.2);
  filter: brightness(1.05);
}

.floating-whatsapp-button:active {
  transform: scale(1.05);
}

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
</style>
