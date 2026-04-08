export const PT_TO_EN_BLOG_SLUG: Record<string, string> = {
  'adestramento-golden-retriever': 'golden-retriever-training-guide',
  'alimentacao-ideal-para-golden-retriever': 'ideal-diet-for-golden-retrievers',
  'banho-tosa-golden-retriever': 'golden-retriever-bathing-and-grooming',
  'como-escolher-um-golden-saudavel': 'how-to-choose-a-healthy-golden-retriever',
  'creche-para-cachorros-beneficios': 'dog-daycare-benefits',
  'diferenca-hotel-canino-creche': 'dog-boarding-vs-daycare',
  'displasia-coxofemoral-cachorro': 'hip-dysplasia-in-dogs',
  'exercicios-brincadeiras-goldens': 'exercises-and-games-for-goldens',
  'golden-comer-devagar': 'golden-puppy-eating-too-fast',
  'hotel-para-cachorros-como-escolher': 'how-to-choose-a-dog-boarding-hotel',
  'limpar-boca-cachorro': 'how-to-clean-your-dogs-mouth',
  'microchip-golden-retriever': 'why-golden-puppies-are-microchipped',
  'primeiros-cuidados-filhote': 'first-puppy-care-steps',
  'quando-seu-cao-precisa-hotel-canino': 'signs-your-dog-needs-boarding',
  'saude-prevencao-golden-retriever': 'golden-retriever-health-and-prevention',
  'temperamento-golden-retriever': 'golden-retriever-temperament-personality',
  'saude-golden-retriever-doencas': 'golden-retriever-health-diseases'
}

export const EN_TO_PT_BLOG_SLUG = Object.fromEntries(
  Object.entries(PT_TO_EN_BLOG_SLUG).map(([ptSlug, enSlug]) => [enSlug, ptSlug])
) as Record<string, string>

export function getLocalizedBlogSlug(slug: string, locale: 'pt' | 'en') {
  if (!slug) return slug

  if (locale === 'en') {
    return PT_TO_EN_BLOG_SLUG[slug] ?? slug
  }

  return EN_TO_PT_BLOG_SLUG[slug] ?? slug
}
