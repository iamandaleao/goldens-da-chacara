import { defineOrganization } from 'nuxt-schema-org/schema'
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/seo', '@nuxtjs/i18n', '@nuxt/content', '@nuxt/scripts'],

  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-W4RRNKNZTS' as never
        }
      }
    }
  },

  devtools: {
    enabled: false
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
    },
    renderer: {
      anchorLinks: false
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/filhotes': { prerender: true },
    '/en/puppies': { prerender: true },
    '/daycare': { prerender: true },
    '/en/daycare': { prerender: true },
    '/hotel': { prerender: true },
    '/en/boarding': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/en/blog': { prerender: true },
    '/en/blog/**': { prerender: true },
    '/hotel-pet': { redirect: { to: '/hotel', statusCode: 301 } },
    '/blog/alimentacao-golden-retriever': { redirect: { to: '/blog/alimentacao-ideal-para-golden-retriever', statusCode: 301 } }
  },

  sourcemap: {
    client: false,
    server: false
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    devStorage: {
      'cache:nuxt:payload': {
        driver: 'memory'
      }
    }
  },

  vite: {
    build: {
      sourcemap: false
    },
    plugins: [
      tailwindcss()
    ]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'pt', name: 'Português', language: 'pt-br' },
      { code: 'en', name: 'English', language: 'en-US' }
    ],
    baseUrl: 'https://goldensdachacara.com.br',
    customRoutes: 'meta',
    strategy: 'prefix_except_default',
    defaultLocale: 'pt'
  },

  ogImage: {
    enabled: false
  },

  schemaOrg: {
    identity: defineOrganization({
      name: 'Goldens da Chácara',
      alternateName: 'Goldens da Chácara',
      description: 'Canil especializado na criação responsável de Golden Retriever, com foco em genética, saúde e bem-estar.',
      url: 'https://goldensdachacara.com.br',
      logo: 'https://goldensdachacara.com.br/golden-retriever-canil.png',

      address: {
        '@type': 'PostalAddress',
        'streetAddress': 'FHG7+R9W',
        'addressLocality': 'Formiga',
        'addressRegion': 'MG',
        'postalCode': '35578-899',
        'addressCountry': 'BR'
      },

      email: 'goldensdachacara@gmail.com',
      telephone: '+5537999691236',

      contactPoint: {
        '@type': 'ContactPoint',
        'telephone': '+5537999691236',
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
        'https://api.whatsapp.com/send?phone=5537999691236'
      ]
    })
  },

  sitemap: {
    urls: [
      {
        loc: '/',
        lastmod: '2026-03-06'
      },
      {
        loc: '/blog',
        lastmod: '2026-03-06'
      },
      {
        loc: '/daycare',
        lastmod: '2026-03-06'
      },
      {
        loc: '/filhotes',
        lastmod: '2026-03-06'
      },
      {
        loc: '/hotel',
        lastmod: '2026-03-06'
      }
    ]
  }
})
