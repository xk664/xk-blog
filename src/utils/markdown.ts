import { marked } from 'marked'
import hljs from 'highlight.js'

const renderer = new marked.Renderer()

// 代码块渲染
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext'
  const highlighted = hljs.highlight(text, { language }).value
  return `<pre><code class="language-${language}">${highlighted}</code></pre>`
}

// 标题渲染 - 添加 id 属性
renderer.heading = function({ text, depth }: { text: string; depth: number }) {
  const cleanText = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1')
  const id = cleanText.replace(/\s+/g, '-').toLowerCase().replace(/[^\w一-龥-]/g, '')
  return `<h${depth} id="${id}">${text}</h${depth}>`
}

marked.setOptions({
  breaks: true,
  gfm: true,
  renderer,
})

export function renderMarkdown(content: string): string {
  return marked(content) as string
}

export function stripMarkdown(content: string): string {
  return content
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/!\[\[.+?\]\]/g, '')
    .replace(/!\[.+?\]\(.+?\)/g, '')
    .replace(/\n+/g, ' ')
    .trim()
}
