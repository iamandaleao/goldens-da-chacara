<template>
  <div>
    <FloatingButton />
    <AppNav />

    <!-- HERO -->
    <section
      class="relative h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-[position:50%_40%] bg-no-repeat"
      style="background-image: linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=2070&q=80');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-6 font-extrabold tracking-wide leading-tight"
          style="text-shadow: 3px 3px 8px rgba(0,0,0,.7)"
        >
          Daycare Canino
        </h1>

        <p
          class="text-xl md:text-2xl lg:text-3xl font-light"
          style="text-shadow: 2px 2px 6px rgba(0,0,0,.7)"
        >
          Seu cão se diverte enquanto você trabalha ou resolve suas atividades
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-10 lg:py-16 bg-white">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="text-center max-w-[850px] mx-auto mb-20">
          <h2 class="text-4xl md:text-5xl text-[#2C2416] mb-6 font-extrabold">
            Um dia inteiro de diversão e socialização
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Aqui seu cão passa o dia em um ambiente
            estimulante e seguro, longe do tédio e da solidão. Oferecemos uma rotina planejada
            com brincadeiras, socialização supervisionada, descanso programado e muita atenção.
            <br><br>
            Ideal para cães que ficam sozinhos durante o dia ou que precisam gastar energia de
            forma saudável. Aqui, cada cão é tratado individualmente, respeitando seu ritmo,
            temperamento e necessidades especiais.
          </p>
        </div>

        <!-- DIFERENCIAIS -->
        <div class="my-20">
          <h3
            class="text-3xl text-[#2C2416] mb-6 font-extrabold text-center relative inline-block w-full"
          >
            O que seu cão vai encontrar no Daycare?
            <span
              class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] rounded-sm"
            />
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            <!-- CARD -->
            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Users
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Socialização Controlada
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Grupos pequenos organizados por porte e temperamento,
                para interações seguras e positivas.
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Activity
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Atividades Recreativas
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Brincadeiras, jogos, corridas livres e desafios
                que estimulam corpo e mente.
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Clock
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Rotina Estruturada
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Horários definidos para brincadeiras, alimentação,
                descanso e hidratação.
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Camera
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Fotos e Atualizações
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Receba fotos e vídeos do dia do seu cão,
                para acompanhar a diversão.
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Trees
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Ambiente Amplo
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Espaço rural cercado, gramado, sombra natural
                e áreas cobertas para todos os climas.
              </p>
            </div>

            <div
              class="bg-white p-10 rounded-3xl text-center shadow-lg transition-all duration-400 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]/30 relative overflow-hidden group"
            >
              <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

              <Eye
                class="mx-auto mb-6 text-[#D4AF37]"
                :size="46"
              />

              <h4 class="text-2xl text-[#2C2416] mb-3 font-bold">
                Supervisão Constante
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Profissionais atentos e presentes durante todo
                o período para garantir segurança.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA / VALOR -->
        <div
          class="bg-gradient-to-br from-[#2C2416] to-[#1f1a12] p-16 rounded-3xl text-center text-white shadow-2xl mt-20"
        >
          <h3 class="text-4xl mb-4 font-extrabold">
            Diárias a partir de R$ 40,00
          </h3>

          <p class="text-xl mb-10 text-gray-200">
            Pacotes semanais e mensais com condições especiais disponíveis.
          </p>

          <a
            href="https://wa.me/5547991611628"
            class="inline-block px-6 py-5 bg-transparent text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-[#D4AF37]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar uma visita
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import {
  Users,
  Activity,
  Clock,
  Camera,
  Trees,
  Eye
} from 'lucide-vue-next'

useHead({
  title: 'Daycare Canino',
  meta: [
    {
      name: 'description',
      content:
          'Daycare Canino com rotina estruturada. Socialização, atividades recreativas e supervisão constante.'
    }
  ]
})
</script>
