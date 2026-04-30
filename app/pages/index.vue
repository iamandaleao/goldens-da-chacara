<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()
const siteUrl = 'https://goldensdachacara.com.br'

definePageMeta({
  i18n: {
    paths: {
      pt: '/',
      en: '/'
    }
  }
})

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogType: 'website',
  ogImage: 'https://goldensdachacara.com.br/golden-retriever-canil.png',
  ogUrl: () => `${siteUrl}${route.path}`
})

useHead({
  link: [{
    rel: 'canonical',
    href: () => `${siteUrl}${route.path}`
  }]
})
</script>

<template>
  <div>
    <FloatingButton />
    <AppNav />

    <!-- Hero Section -->
    <section
      id="home"
      class="relative h-[70vh] lg:h-screen flex items-center justify-center text-white text-center bg-cover bg-[position:60%_60%] bg-no-repeat"
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/images/capa-home.png');"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      <div class="relative z-10 px-5 max-w-[1100px] mx-auto">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-wide leading-tight animate-fadeIn"
          style="text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.title') }}
        </h1>
        <p
          class="text-xl md:text-2xl lg:text-3xl mb-10 font-light animate-fadeInDelay"
          style="text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);"
        >
          {{ t('hero.subtitle') }}
        </p>
        <NuxtLink
          :to="localePath('/filhotes')"
          class="inline-block px-6 py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide animate-fadeInDelay2 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary-strong"
        >
          {{ t('hero.cta') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Sobre Section -->
    <section class="py-14 bg-surface-cream">
      <div class="max-w-[1200px] mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl text-ink mb-6 font-extrabold text-center lg:text-left">
              {{ t('about.title') }}
            </h2>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              {{ t('about.p1.before') }}
              <strong>{{ t('about.p1.highlight') }}</strong>, {{ t('about.p1.after') }}
            </p>

            <p class="text-lg mb-5 text-gray-700 leading-relaxed">
              {{ t('about.p2.before') }} <strong>{{ t('about.p2.highlight') }}</strong>, {{ t('about.p2.after') }}
            </p>
          </div>

          <div class="h-[500px]">
            <div
              class="w-full h-full bg-gradient-to-br from-secondary to-primary rounded-3xl flex items-center justify-center text-white text-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-cover bg-center"
              style="background-image: url('/images/golden-retriever-home-canil.jpg');"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa História -->
    <section class="py-20 bg-white">
      <div class="max-w-[900px] mx-auto px-5">
        <h2 class="text-4xl md:text-5xl text-ink mb-10 font-extrabold text-center">
          {{ t('story.title') }}
        </h2>

        <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>{{ t('story.p1') }}</p>
          <p>{{ t('story.p2') }}</p>
          <p>{{ t('story.p3') }}</p>
          <p>{{ t('story.p4') }}</p>
          <p>{{ t('story.p5') }}</p>
          <p>{{ t('story.p6') }}</p>
          <p>{{ t('story.p7') }}</p>
          <p>{{ t('story.p8') }}</p>
          <p>{{ t('story.p9') }}</p>
          <p>{{ t('story.p10') }}</p>
          <p>{{ t('story.p11') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-24 bg-ink text-white text-center">
      <div class="max-w-[1200px] mx-auto px-5">
        <h2 class="text-4xl md:text-5xl mb-4 font-extrabold">
          {{ t('finalCta.title') }}
        </h2>
        <p class="text-xl md:text-2xl mb-10">
          {{ t('finalCta.subtitle') }}
        </p>
        <div class="flex gap-6 justify-center flex-wrap">
          <NuxtLink
            :to="localePath('/filhotes')"
            class="flex items-center px-6 py-3 lg:py-5 bg-primary text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary-strong"
          >
            {{ t('finalCta.primary') }}
          </NuxtLink>
          <a
            href="https://wa.me/5537999691236"
            class="flex items-center px-6 py-3 lg:py-5 bg-transparent text-white no-underline rounded-full font-bold text-sm transition-all duration-400 shadow-[0_10px_30px_rgba(212,175,55,0.5)] uppercase tracking-wide border-3 border-primary hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)] hover:bg-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('finalCta.secondary') }}
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<i18n lang="json">
{
  "pt": {
    "story": {
      "title": "Nossa História",
      "p1": "Meu nome é Amanda Leão, minha história com o Golden Retriever começou de forma simples, mas transformadora.",
      "p2": "Quando conheci meu marido, ele já tinha um Golden chamado Lars, que hoje está com 5 anos. Foi convivendo com ele no dia a dia que comecei a entender de verdade essa raça. Antes disso, eu tive três Shih Tzus e também já convivi com outras raças. Na época, eu escolhia cães principalmente pelo tamanho — pensando na praticidade de carregar no colo e no dia a dia. Eu olhava mais para o que era conveniente para mim, e não para o que o cão poderia me proporcionar em termos de vínculo e convivência.",
      "p3": "Com o tempo, essa visão mudou completamente. O Golden Retriever me mostrou algo diferente de tudo o que eu já havia vivido. É um cão extremamente inteligente, aprende rápido, tem uma sensibilidade impressionante e, ao contrário do que muitas pessoas esperam, não late por qualquer coisa. Acima de tudo, tem uma forma única de se conectar com a família: é amoroso, companheiro, fiel e está presente em todos os momentos.",
      "p4": "Foi essa convivência que me fez entender que o mais importante não é o tamanho do cão, mas a qualidade da relação que ele constrói com a família.",
      "p5": "Essa experiência despertou em mim algo maior do que admiração — nasceu o propósito de levar esse tipo de amor, equilíbrio e conexão para outras famílias também.",
      "p6": "O Golden Retriever é muito mais do que um cachorro bonito. Ele é conhecido por ser um verdadeiro cão terapêutico, daqueles que acalmam só com a presença. Pela inteligência e facilidade de aprendizado, também se destaca como cão de assistência e cão guia, ajudando pessoas no dia a dia. Seu jeito carinhoso faz dele um excelente cão de apoio emocional, sempre pronto para oferecer conforto e companhia.",
      "p7": "Dentro de casa, é o típico cão de família: dócil, paciente e extremamente confiável, sendo até chamado de “babá natural” por se dar tão bem com crianças. Ao mesmo tempo, tem capacidade para atuar como cão de serviço e até em operações como cão de resgate, mostrando o quanto é versátil. No fim das contas, acima de tudo, é um verdadeiro cão companheiro — daqueles que estão ao seu lado em todos os momentos.",
      "p8": "Hoje, com o Goldens da Chácara em construção, tenho ainda mais certeza de que escolhi o caminho certo. Meu objetivo é simples e verdadeiro: levar esse companheirismo único para famílias que procuram não apenas um cachorro, mas um amigo leal para a vida toda.",
      "p9": "Muitas pessoas também se perguntam sobre espaço. A verdade é que o Golden Retriever não se importa com o tamanho da casa — ele se importa com a presença da família. Já moramos em apartamento com o Lars, e foi uma experiência totalmente tranquila, com rotina de passeios e cuidados normais. Hoje, vivemos em uma chácara de 4 mil metros, onde ele tem liberdade para correr, mas, mesmo assim, prefere estar sempre perto de nós. Ele não gosta de ficar sozinho — é obediente, tranquilo e extremamente apegado à família.",
      "p10": "Aqui no Goldens da Chácara, criamos nossos cães com esse propósito: preparar cada filhote para ser parte de uma família de verdade, com equilíbrio, socialização e muito carinho desde os primeiros dias de vida.",
      "p11": "Se você busca um companheiro leal, inteligente e cheio de amor para dar, seja bem-vindo. Aqui começa uma nova história — a sua com um Golden Retriever."
    },
    "seo": {
      "title": "Criação Especializada de Golden Retriever",
      "description": "Goldens da Chácara - Criação especializada de Golden Retriever com filhotes de alta linhagem. Conheça nossos reprodutores e reserve seu filhote.",
      "keywords": "golden retriever, filhotes golden retriever, canil golden retriever, golden retriever para venda, criação golden retriever, filhotes golden",
      "ogTitle": "Goldens da Chácara - Criação Especializada de Golden Retriever",
      "ogDescription": "Criação especializada de Golden Retriever com filhotes de alta linhagem em Formiga (MG)."
    },
    "hero": {
      "title": "Criando Goldens com excelência e carinho",
      "subtitle": "Criação Especializada de Golden Retriever",
      "cta": "Conheça Nossos Filhotes"
    },
    "about": {
      "title": "Bem-vindo ao Goldens da Chácara",
      "p1": {
        "before": "Somos um canil especializado na criação responsável de",
        "highlight": "Golden Retriever",
        "after": "com foco em saúde, genética e temperamento. Nossos filhotes são criados em ambiente familiar, com socialização desde os primeiros dias."
      },
      "p2": {
        "before": "Trabalhamos com",
        "highlight": "linhagens selecionadas",
        "after": "priorizando cães equilibrados, saudáveis e dentro do padrão da raça. Aqui, você não escolhe apenas um pet - escolhe um novo membro da família."
      }
    },
    "finalCta": {
      "title": "Pronto para ter seu Golden Retriever?",
      "subtitle": "Entre em contato e conheça mais sobre nossos filhotes e reprodutores",
      "primary": "Ver Filhotes",
      "secondary": "Fale Conosco"
    }
  },
  "en":
  {
  "story": {
    "title": "Our Story",
    "p1": "My name is Amanda Leão, my journey with the Golden Retriever began in a simple yet transformative way.",
    "p2": "When I met my husband, he already had a Golden named Lars, who is now 5 years old. Living with him daily is what truly helped me understand this breed. Before that, I had three Shih Tzus and had also been around other breeds. At the time, I chose dogs mainly based on size — thinking about convenience, like carrying them and daily practicality. I focused more on what was easier for me rather than what the dog could offer in terms of connection and companionship.",
    "p3": "Over time, this perspective completely changed. The Golden Retriever showed me something different from anything I had experienced before. It is an extremely intelligent dog, learns quickly, has an impressive sensitivity, and unlike what many people expect, it does not bark at everything. Above all, it has a unique way of connecting with its family: loving, loyal, and always present.",
    "p4": "This experience made me realize that what truly matters is not the size of the dog, but the quality of the relationship it builds with its family.",
    "p5": "This journey awakened something greater than admiration in me — it became a purpose: to bring this kind of love, balance, and connection to other families as well.",
    "p6": "The Golden Retriever is much more than just a beautiful dog. It is widely known as a therapy dog, often bringing calm just by its presence. Thanks to its intelligence and trainability, it also stands out as an assistance dog and guide dog, helping people in their daily lives. Its affectionate nature makes it an excellent emotional support dog, always ready to provide comfort and companionship.",
    "p7": "At home, it is the perfect family dog: gentle, patient, and extremely trustworthy, often called a “natural babysitter” because of how well it interacts with children. At the same time, it has the ability to work as a service dog and even in rescue operations, showing how versatile it truly is. In the end, above all, it is a true companion dog — always by your side in every moment.",
    "p8": "Today, with Goldens da Chácara still growing, I am even more certain that I chose the right path. My goal is simple and genuine: to bring this unique companionship to families who are looking not just for a dog, but for a loyal friend for life.",
    "p9": "Many people also wonder about space. The truth is, the Golden Retriever does not care about the size of the home — it cares about being close to its family. We have lived in an apartment with Lars, and it was completely normal, with regular walks and routine care. Today, we live on a 4,000-square-meter farm where he has plenty of space to run, but even so, he prefers to stay close to us. He does not like being alone — he is obedient, calm, and deeply attached to the family.",
    "p10": "Here at Goldens da Chácara, we raise our dogs with this purpose: to prepare each puppy to become part of a real family, with balance, socialization, and lots of care from the very first days of life.",
    "p11": "If you are looking for a loyal, intelligent companion full of love to give, welcome. This is where a new story begins — yours with a Golden Retriever."
  },
    "seo": {
      "title": "Specialized Golden Retriever Breeding",
      "description": "Goldens da Chácara - Specialized Golden Retriever breeding with top bloodline puppies. Meet our dogs and reserve your puppy.",
      "keywords": "golden retriever, golden retriever puppies, golden retriever kennel, buy golden retriever, golden breeding, puppies",
      "ogTitle": "Goldens da Chácara - Specialized Golden Retriever Breeding",
      "ogDescription": "Specialized Golden Retriever breeding with top bloodline puppies in Formiga (MG), Brazil."
    },
    "hero": {
      "title": "Breeding Goldens with excellence and care",
      "subtitle": "Specialized Golden Retriever Breeding",
      "cta": "Meet Our Puppies"
    },
    "about": {
      "title": "Welcome to Goldens da Chácara",
      "p1": {
        "before": "We are a kennel specialized in responsible",
        "highlight": "Golden Retriever",
        "after": "breeding, focused on health, genetics, and temperament. Our puppies are raised in a family environment with socialization from day one."
      },
      "p2": {
        "before": "We work with",
        "highlight": "carefully selected bloodlines",
        "after": "prioritizing balanced, healthy dogs within breed standards. Here, you do not just choose a pet - you choose a new family member."
      }
    },
    "finalCta": {
      "title": "Ready to welcome your Golden Retriever?",
      "subtitle": "Contact us and learn more about our puppies and breeding dogs",
      "primary": "See Puppies",
      "secondary": "Contact Us"
    }
  }
}
</i18n>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll {
  0%, 100% {
    top: 10px;
    opacity: 1;
  }
  50% {
    top: 25px;
    opacity: 0.5;
  }
}

.animate-fadeIn {
  animation: fadeIn 1.2s ease-in;
}

.animate-fadeInDelay {
  animation: fadeIn 1.2s ease-in 0.3s backwards;
}

.animate-fadeInDelay2 {
  animation: fadeIn 1.2s ease-in 0.6s backwards;
}

.animate-scroll {
  animation: scroll 2s infinite;
}
</style>
