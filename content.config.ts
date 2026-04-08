import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  tip: z.string(),
  date: z.date(),
  robots: defineRobotsSchema(),
  sitemap: defineSitemapSchema(),
  schemaOrg: defineSchemaOrgSchema()
})

export default defineContentConfig({
  collections: {
    blog_pt: defineCollection({
      source: {
        include: 'pt/blog/**/*.md',
        prefix: '/blog'
      },
      type: 'page',
      schema: blogSchema
    }),
    blog_en: defineCollection({
      source: {
        include: 'en/blog/**/*.md',
        prefix: '/blog'
      },
      type: 'page',
      schema: blogSchema
    })
  }
})
