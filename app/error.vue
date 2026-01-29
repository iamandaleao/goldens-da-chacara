<template>
  <section class="error-page">
    <div class="error-content">
      <h1>Oops… essa página saiu para passear 🐶</h1>

      <p>
        A página que você tentou acessar não existe ou foi movida.
        Mas nossos Goldens continuam aqui, cheios de carinho esperando por você.
      </p>

      <div class="error-actions">
        <NuxtLink to="/" class="btn primary">
          Voltar para o início
        </NuxtLink>

        <NuxtLink to="/filhotes" class="btn secondary">
          Ver filhotes disponíveis
        </NuxtLink>

        <a
          href="https://wa.me/5547991611628"
          target="_blank"
          rel="noopener noreferrer"
          class="btn whatsapp"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.error-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to bottom, #ffe9c5, #d4af37);
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
  color: #5a3e1b;
  margin-bottom: 1rem;
  line-height: 2.5rem;
}

.error-content p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #3f2a15;
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
  background: linear-gradient(135deg, #d4af379f, #c19a2ee7);
  color: #1f1a0f;
}

.btn.secondary {
  background: linear-gradient(135deg, #b37b2cc4, #8b5a2b);
  color: #fff7e5;
}

.btn.whatsapp {
  background: linear-gradient(135deg, #25d365a4, #1ebe5edc);
  color: #ffffff;
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
