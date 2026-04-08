<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <section class="error-page">
    <div class="error-content">
      <h1>{{ t('title') }}</h1>

      <p>
        {{ t('description') }}
      </p>

      <div class="error-actions">
        <NuxtLink
          :to="localePath('/')"
          class="btn primary"
        >
          {{ t('actions.home') }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/filhotes')"
          class="btn secondary"
        >
          {{ t('actions.puppies') }}
        </NuxtLink>

        <a
          href="https://wa.me/5547991611628"
          target="_blank"
          rel="noopener noreferrer"
          class="btn whatsapp"
        >
          {{ t('actions.whatsapp') }}
        </a>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "pt": {
    "title": "Oops… essa página saiu para passear 🐶",
    "description": "A página que você tentou acessar não existe ou foi movida. Mas nossos Goldens continuam aqui, cheios de carinho esperando por você.",
    "actions": {
      "home": "Voltar para o início",
      "puppies": "Ver filhotes disponíveis",
      "whatsapp": "Falar no WhatsApp"
    }
  },
  "en": {
    "title": "Oops... this page went for a walk 🐶",
    "description": "The page you tried to access doesn't exist or was moved. But our Goldens are still here, full of love, waiting for you.",
    "actions": {
      "home": "Back to home",
      "puppies": "See available puppies",
      "whatsapp": "Chat on WhatsApp"
    }
  }
}
</i18n>

<style scoped>
.error-page {
  --error-bg-top: #FFE9C5;
  --error-title: #5A3E1B;
  --error-body: #3F2A15;
  --error-btn-primary-start: #D4AF379F;
  --error-btn-primary-end: #C19A2EE7;
  --error-btn-secondary-start: #B37B2CC4;
  --error-btn-secondary-end: #8B5A2B;
  --error-btn-text: #1F1A0F;
  --error-btn-secondary-text: #FFF7E5;
  --error-whatsapp-start: #25D365A4;
  --error-whatsapp-end: #1EBE5EDC;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to bottom, var(--error-bg-top), var(--color-primary));
  overflow: hidden;
}

.error-page::before,
.error-page::after {
  content: '🐾';
  position: absolute;
  font-size: 100px;
  opacity: 0.40;
}

.error-page::before {
  top: 10%;
  left: 5%;
  transform: rotate(-20deg);
}

.error-page::after {
  bottom: 10%;
  right: 5%;
  transform: rotate(25deg);
}

.error-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 3rem 2.5rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.error-content h1 {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--error-title);
  margin-bottom: 1rem;
  line-height: 2.5rem;
}

.error-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--error-body);
  margin-bottom: 2rem;
}

.error-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.btn {
  min-width: 220px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
}

.btn.primary {
  background: linear-gradient(135deg, var(--error-btn-primary-start), var(--error-btn-primary-end));
  color: var(--error-btn-text);
}

.btn.secondary {
  background: linear-gradient(135deg, var(--error-btn-secondary-start), var(--error-btn-secondary-end));
  color: var(--error-btn-secondary-text);
}

.btn.whatsapp {
  background: linear-gradient(135deg, var(--error-whatsapp-start), var(--error-whatsapp-end));
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  filter: brightness(1.05);
}

@media (max-width: 640px) {
  .error-page {
    padding: 1.5rem;
  }

  .error-content {
    padding: 2rem 1.5rem;
    border-radius: 22px;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 320px;
  }

  .error-content h1 {
    font-size: 1.8rem;
  }

  .error-content p {
    font-size: 1rem;
  }
}
</style>
