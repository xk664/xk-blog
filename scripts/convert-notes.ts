import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_NOTE_DIR = path.resolve(__dirname, '../public/note')
const OUTPUT_DIR = path.resolve(__dirname, '../src/data')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'notes-index.json')

interface NoteIndex {
  id: string
  title: string
  size: number
  lastModified: string
}

function convertObsidianImages(content: string): string {
  return content.replace(/!\[\[(.+?)\]\]/g, '![](/note/image/$1)')
}

function main() {
  if (!fs.existsSync(PUBLIC_NOTE_DIR)) {
    console.error('Public note directory not found:', PUBLIC_NOTE_DIR)
    process.exit(1)
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const files = fs.readdirSync(PUBLIC_NOTE_DIR).filter(f => f.endsWith('.md'))

  const notes: NoteIndex[] = files.map(file => {
    const filePath = path.join(PUBLIC_NOTE_DIR, file)
    const stat = fs.statSync(filePath)
    const content = fs.readFileSync(filePath, 'utf-8')
    const convertedContent = convertObsidianImages(content)

    const id = file.replace('.md', '')
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : id

    // 写回转换后的内容
    fs.writeFileSync(filePath, convertedContent, 'utf-8')

    return {
      id,
      title,
      size: stat.size,
      lastModified: stat.mtime.toISOString(),
    }
  })

  notes.sort((a, b) => a.id.localeCompare(b.id))

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ notes, totalCount: notes.length }, null, 2))
  console.log(`Generated ${OUTPUT_FILE} with ${notes.length} notes`)
}

main()
