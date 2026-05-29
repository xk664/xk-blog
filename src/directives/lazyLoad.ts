import type { Directive } from 'vue'

export const vLazyLoad: Directive = {
  mounted(el: HTMLImageElement) {
    const src = el.src
    el.removeAttribute('src')
    el.dataset.src = src

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = el.dataset.src!
          el.classList.add('loaded')
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  }
}
