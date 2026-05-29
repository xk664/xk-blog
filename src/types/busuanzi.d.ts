interface Busuanzi {
  fetch: () => void
}

declare global {
  interface Window {
    busuanzi?: Busuanzi
  }
}

export {}
