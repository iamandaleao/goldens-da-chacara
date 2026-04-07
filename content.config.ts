import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        tip: z.string(),
        date: z.date(),
        robots: defineRobotsSchema(),
        sitemap: defineSitemapSchema(),
        schemaOrg: defineSchemaOrgSchema()
      })
    })
  }
})
