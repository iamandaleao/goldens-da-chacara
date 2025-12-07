// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  app: {
    head: {
      title: 'Golden Farm - Criação de Golden Retrievers em Formiga, MG',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Criação responsável de Golden Retrievers em Formiga, Minas Gerais. Filhotes saudáveis e socializados.' 
        },
        { property: 'og:title', content: 'Golden Farm - Criação de Golden Retrievers' },
        { property: 'og:description', content: 'Criação responsável de Golden Retrievers em Formiga, MG' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
