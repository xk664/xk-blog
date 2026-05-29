import type { Directive } from 'vue'

export function convertObsidianImages(content: string): string {
  return content.replace(
    /!\[\[(.+?)\]\]/g,
    '![](/note/image/$1)'
  )
}

export const vLazyLoad: Directive = {
  mounted(el: HTMLImageElement) {
    const src = el.src
    el.removeAttribute('src')
    el.dataset.src = src
    el.style.backgroundColor = '#f3f4f6'
    el.style.minHeight = '100px'

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.src = el.dataset.src!
          el.style.backgroundColor = ''
          el.style.minHeight = ''
          el.classList.add('loaded')
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  },
}
