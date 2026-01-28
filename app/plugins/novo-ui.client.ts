export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null
  let parallaxHandler: (() => void) | null = null

  function initReveal() {
    if (observer) observer.disconnect()

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    }, observerOptions)

    const selector = [
      '.about',
      '.certifications',
      '.upcoming-litter',
      '.why-golden',
      '.final-cta',
      '.page-content'
    ].join(', ')

    document.querySelectorAll(selector).forEach((node) => {
      const el = node as HTMLElement
      if (el.dataset.novoRevealInit === '1') {
        observer?.observe(el)
        return
      }

      el.dataset.novoRevealInit = '1'
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'all 0.8s ease-out'
      observer?.observe(el)
    })
  }

  function initParallax() {
    if (parallaxHandler) window.removeEventListener('scroll', parallaxHandler)

    const hero = document.querySelector('.hero') as HTMLElement | null
    if (!hero) {
      parallaxHandler = null
      return
    }

    parallaxHandler = () => {
      const scrolled = window.pageYOffset || 0
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }

    window.addEventListener('scroll', parallaxHandler, { passive: true })
    parallaxHandler()
  }

  function initNovoUi() {
    // aguarda o DOM da página atual “assentar”
    window.requestAnimationFrame(() => {
      initReveal()
      initParallax()
    })
  }

  nuxtApp.hook('page:finish', initNovoUi)
  initNovoUi()
})


