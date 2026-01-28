import { defineOrganization } from 'nuxt-schema-org/schema'
import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/content', 'nuxt-gtag', '@nuxtjs/seo'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/style.css'],

  site: {
    url: 'https://goldensdachacara.com.br',
    name: 'Goldens da Chácara',
    defaultLocale: 'pt-BR'
  },

  content: {
    experimental: {
      nativeSqlite: true
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/filhotes': { prerender: true },
    '/hotel-pet': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtag: {
    id: 'G-W4RRNKNZTS'
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Goldens da Chácara',
      alternateName: 'Goldens da Chácara',
      description: 'Canil especializado na criação responsável de Golden Retriever, com foco em genética, saúde e bem-estar.',
      url: 'https://goldensdachacara.com.br',
      logo: 'https://goldensdachacara.com.br/assets/images/golden-retriever-canil.png',

      address: {
        '@type': 'PostalAddress',
        'streetAddress': 'FHG7+R9W',
        'addressLocality': 'Formiga',
        'addressRegion': 'MG',
        'postalCode': '35578-899',
        'addressCountry': 'BR'
      },

      email: 'goldensdachacara@gmail.com',
      telephone: '+5547991611628',
      contactPoint: {
        '@type': 'ContactPoint',
        'telephone': '+5547991611628',
        'email': 'goldensdachacara@gmail.com'
      },

      foundingDate: '2025-12-01',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        'minValue': 1,
        'maxValue': 1
      },

      sameAs: [
        'https://www.instagram.com/goldensdachacara',
        'https://www.facebook.com/goldensdachacara',
        'https://www.youtube.com/@goldensdachacara',
        'https://www.tiktok.com/@goldensdachacara',
        'https://api.whatsapp.com/send?phone=5547991611628'
      ]
    })
  }
})
