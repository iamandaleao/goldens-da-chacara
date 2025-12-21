<template>
    <section class="hotel-section">
      <div class="container">
        <div class="badge">
          🐕 Hotel de Pet
        </div>
        
        <h2 class="title">
          Hospedagem com <span class="highlight">Carinho e Segurança</span>
        </h2>
        
        <p class="description">
            Oferecemos hospedagem em uma chácara com 4.000m² de puro espaço para seu pet aproveitar! Cuidado 24h com muito carinho, atenção e diversão. Nosso Golden Retriever super brincalhão ajuda na socialização e faz amizade rapidinho com todos os hóspedes. Ambiente seguro, amplo e perfeito para seu pet se sentir em casa e livre!
        </p>
  
        <div class="services">
          <h3>Nossos Serviços</h3>
          <ul class="services-list">
            <li>🏠 Hospedagem com acompanhamento 24h</li>
            <li>🎾 Passeios e atividades diárias</li>
            <li>🛁 Cuidados e higienização</li>
            <li>📸 Fotos e vídeos a qualquer momento</li>
            <li>⚕️ Assistência veterinária de emergência</li>
            <li>🚗 Busca e entrega (valor adicional)</li>
            <li>🛁 Banho disponível (traga o shampoo do seu pet)</li>
          </ul>
        </div>
  
        <div class="pricing">
          <h3>Valor da Diária</h3>
          <div class="price-card">
            <p class="price">R$ 50<span>/dia</span></p>
            <p class="price-info"> Buscamos e entregamos seu pet ❤️ Acompanhamento e carinho 24h
            </p>
            
            <div class="discounts">
              <p class="discount-title">💰 Descontos para estadias longas:</p>
              <ul>
                <li>A partir de 7 dias: <strong>10% off</strong></li>
                <li>A partir de 15 dias: <strong>15% off</strong></li>
                <li>A partir de 30 dias: <strong>20% off</strong></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="cta-section">
          <button class="btn-primary" @click="handleReserva">
            Fazer Reserva
          </button>
          <p class="contact-text">
            Entre em contato para conhecer condições especiais e pacotes personalizados!
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HotelSection',
    methods: {
      handleReserva() {
        const phoneNumber = '47991611628';
        const message = 'Olá! Gostaria de fazer uma reserva no Hotel de Pet.';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  .hotel-section {
    padding: 80px 20px;
    background-color: #fef9f3;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .badge {
    display: inline-block;
    background-color: #fff;
    color: #f97316;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 42px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .highlight {
    color: #f97316;
  }
  
  .description {
    font-size: 18px;
    color: #666;
    max-width: 800px;
    margin: 0 auto 60px;
    line-height: 1.6;
  }
  
  .services {
    margin-bottom: 60px;
  }
  
  .services h3 {
    font-size: 28px;
    color: #1a1a1a;
    margin-bottom: 30px;
  }
  
  .services-list {
    list-style: none;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  
  .services-list li {
    font-size: 18px;
    color: #444;
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .services-list li:last-child {
    border-bottom: none;
  }
  
  .pricing {
    margin-bottom: 60px;
  }
  
  .pricing h3 {
    font-size: 28px;
    color: #1a1a1a;
    margin-bottom: 30px;
  }
  
  .price-card {
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    max-width: 600px;
    margin: 0 auto;
  }
  
  .price {
    font-size: 56px;
    font-weight: 800;
    color: #f97316;
    margin-bottom: 10px;
  }
  
  .price span {
    font-size: 20px;
    color: #666;
    font-weight: 400;
  }
  
  .price-info {
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .discounts {
    background: #fff7ed;
    padding: 25px;
    border-radius: 12px;
    border: 2px dashed #f97316;
  }
  
  .discount-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 15px;
  }
  
  .discounts ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  
  .discounts ul li {
    padding: 8px 0;
    color: #555;
    font-size: 16px;
    position: relative;
    padding-left: 25px;
  }
  
  .discounts ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #f97316;
    font-weight: bold;
  }
  
  .discounts ul li strong {
    color: #f97316;
  }
  
  .cta-section {
    margin-top: 60px;
  }
  
  .btn-primary {
    background: #f97316;
    color: white;
    border: none;
    padding: 16px 40px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  }
  
  .btn-primary:hover {
    background: #ea580c;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(249, 115, 22, 0.4);
  }
  
  .contact-text {
    margin-top: 20px;
    color: #666;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 32px;
    }
    
    .price {
      font-size: 42px;
    }
    
    .price-card {
      padding: 30px 20px;
    }
  }
  </style>