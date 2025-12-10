<template>
  <article v-if="post" class="pt-24 pb-16 max-w-4xl mx-auto px-4">
    <!-- Botão voltar -->
    <router-link 
      to="/blog"
      class="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 font-medium"
    >
      ← Voltar para o blog
    </router-link>

    <!-- Imagem destaque -->
    <img 
      :src="post.image" 
      :alt="post.title"
      class="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg"
    />

    <!-- Título -->
    <h1 class="text-5xl font-bold text-gray-900 mb-4">
      {{ post.title }}
    </h1>

    <!-- Info: visualizações e likes -->
    <div class="flex items-center gap-6 mb-8 text-gray-600">
      <span class="flex items-center gap-2">
        👁️ {{ post.views }} visualizações
      </span>
      <button 
        @click="toggleLike"
        class="flex items-center gap-2 hover:text-red-500 transition font-medium"
      >
        <span :class="post.liked ? 'text-red-500' : ''">
          {{ post.liked ? '❤️' : '🤍' }}
        </span>
        {{ post.likes }} curtidas
      </button>
    </div>

    <!-- Conteúdo do post -->
    <div class="prose prose-lg max-w-none">
      <p class="text-xl text-gray-700 leading-relaxed mb-6">
        {{ post.excerpt }}
      </p>

      <!-- Conteúdo completo renderizado -->
      <div v-html="post.content"></div>

      <div class="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
        <p class="text-gray-800 font-medium">
          💡 <strong>Dica importante:</strong> {{ post.tip }}
        </p>
      </div>
    </div>

    <!-- Botão voltar no final -->
    <div class="mt-12 pt-8 border-t">
      <router-link 
        to="/blog"
        class="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
      >
        ← Ver mais artigos
      </router-link>
    </div>
  </article>

  <!-- Se não encontrar o post -->
  <div v-else class="pt-24 pb-16 max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
    <router-link to="/blog" class="text-amber-600 hover:underline">
      ← Voltar para o blog
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

// Dados de todos os posts
const allPosts = {
  'como-escolher-um-golden-saudavel': {
    title: "Como escolher um Golden saudável",
    excerpt: "Um guia completo para entender linhagem, saúde e comportamento ao escolher seu futuro companheiro de quatro patas.",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=1200&h=600&fit=crop",
    views: 1234,
    likes: 89,
    liked: false,
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">O que observar na linhagem</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        A linhagem do Golden Retriever é fundamental para garantir um cão saudável e com bom temperamento. 
        Procure criadores que possam comprovar a saúde dos pais através de exames específicos como displasia 
        coxofemoral e problemas cardíacos.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Comportamento dos filhotes</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Um filhote saudável é curioso, brincalhão e sociável. Observe se ele interage bem com os irmãos 
        e se aproxima de você com confiança. Evite filhotes muito tímidos ou agressivos, pois isso pode 
        indicar problemas futuros de comportamento.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Sinais de saúde</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Olhos brilhantes, pelagem macia, orelhas limpas e energia são sinais de um filhote saudável. 
        Peça sempre o histórico de vacinação e vermifugação. Um bom criador terá toda essa documentação 
        organizada e disponível.
      </p>
    `,
    tip: "Nunca compre um filhote sem conhecer o ambiente onde ele nasceu e sem ver pelo menos a mãe. Isso garante que você está lidando com um criador responsável."
  },
  'primeiros-cuidados-filhote': {
    title: "Primeiros cuidados com um filhote",
    excerpt: "Dicas práticas e essenciais para garantir que seu filhote cresça feliz, saudável e bem adaptado à nova casa.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
    views: 987,
    likes: 156,
    liked: false,
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Preparando a casa</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Antes de trazer o filhote para casa, prepare um espaço seguro com caminha, comedouro, bebedouro e brinquedos. 
        Remova objetos perigosos e fios elétricos que possam ser mordidos.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Alimentação nos primeiros meses</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Filhotes precisam de ração específica para crescimento. Divida a alimentação em 3-4 refeições diárias 
        até os 6 meses. Sempre deixe água fresca disponível.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Primeiras vacinas e vermífugos</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Siga rigorosamente o calendário de vacinação indicado pelo veterinário. Isso protege seu filhote 
        de doenças graves e garante sua saúde a longo prazo.
      </p>
    `,
    tip: "Evite passeios em locais públicos antes de completar todas as vacinas. Isso protege seu filhote de doenças contagiosas."
  },
  'alimentacao-golden-retriever': {
    title: "Alimentação ideal para Golden Retriever",
    excerpt: "Descubra qual a melhor alimentação para cada fase da vida do seu Golden e mantenha ele sempre saudável.",
    image: "https://images.unsplash.com/photo-1612536880854-5d5f2f2f8f1f?w=1200&h=600&fit=crop",
    views: 756,
    likes: 92,
    liked: false,
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Ração de qualidade é essencial</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Golden Retrievers precisam de ração premium ou super premium, rica em proteínas de qualidade e 
        com ingredientes balanceados. Opte por marcas que tenham carne como primeiro ingrediente da lista 
        e evite rações com muitos conservantes artificiais ou subprodutos.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Quantidade adequada por fase</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Filhotes de 2 a 6 meses precisam de 3 a 4 refeições diárias. Dos 6 meses a 1 ano, reduza para 
        2 a 3 refeições. Adultos devem receber 2 refeições por dia. A quantidade varia conforme o peso e 
        nível de atividade - sempre siga as recomendações da embalagem e ajuste conforme necessário.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Alimentos proibidos e permitidos</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Nunca ofereça chocolate, uvas, cebola, alho, abacate ou alimentos com xilitol - são tóxicos para cães. 
        Como petiscos saudáveis, você pode oferecer cenoura, maçã (sem sementes), batata doce cozida e 
        frango desfiado sem temperos. Lembre-se: petiscos devem representar no máximo 10% da alimentação diária.
      </p>
    `,
    tip: "Mantenha sempre água fresca disponível e evite alimentar seu Golden antes ou logo após exercícios intensos para prevenir a torção gástrica, um problema grave em cães de grande porte."
  },
  'exercicios-brincadeiras-goldens': {
    title: "Exercícios e brincadeiras para Goldens",
    excerpt: "Atividades divertidas e exercícios importantes para manter seu Golden ativo, feliz e com muita energia.",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&h=600&fit=crop",
    views: 623,
    likes: 73,
    liked: false,
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Necessidades de exercício diário</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Golden Retrievers são cães ativos que precisam de pelo menos 1 hora de exercício por dia, dividido 
        em duas ou três sessões. Isso inclui caminhadas, corridas leves e brincadeiras. Exercícios regulares 
        previnem obesidade, ansiedade e comportamentos destrutivos.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Brincadeiras favoritas</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Goldens adoram buscar objetos - uma herança de sua origem como cães retrievers. Bolinhas, frisbees 
        e brinquedos flutuantes são perfeitos. Eles também amam água, então natação é um exercício excelente 
        e de baixo impacto nas articulações. Esconde-esconde com petiscos estimula o faro e a inteligência.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mt-8 mb-4">Exercícios mentais são importantes</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        Além de exercícios físicos, Goldens precisam de estímulos mentais. Brinquedos interativos, jogos de 
        inteligência e treinamento de comandos novos mantêm a mente ativa. Ensinar truques como "pega", 
        "fica" e "rola" além de ser divertido, fortalece o vínculo entre vocês.
      </p>
    `,
    tip: "Evite exercícios muito intensos em filhotes até 1 ano de idade, pois suas articulações ainda estão em formação. Prefira caminhadas moderadas e brincadeiras leves para não prejudicar o desenvolvimento ósseo."
  }
}

// Busca o post baseado no slug da URL
onMounted(() => {
  const slug = route.params.slug
  post.value = allPosts[slug] || null
})

const toggleLike = () => {
  if (post.value.liked) {
    post.value.likes--
    post.value.liked = false
  } else {
    post.value.likes++
    post.value.liked = true
  }
}
</script>