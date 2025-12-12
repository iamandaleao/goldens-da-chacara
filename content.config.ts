import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        source: 'blog/**/*.md',
        type: 'page',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          tip: z.string()
        })
      })
    )
  }
})
