import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_REVIEW_DIR = path.resolve(__dirname, '../public/review')
const OUTPUT_DIR = path.resolve(__dirname, '../src/data')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'reviews-index.json')

interface ReviewIndex {
  id: string
  title: string
}

function main() {
  if (!fs.existsSync(PUBLIC_REVIEW_DIR)) {
    console.log('Review directory not found, skipping...')
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ reviews: [] }, null, 2))
    return
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const files = fs.readdirSync(PUBLIC_REVIEW_DIR).filter(f => f.endsWith('.md'))

  const reviews: ReviewIndex[] = files.map(file => {
    const id = file.replace('.md', '')
    return { id, title: id }
  })

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ reviews }, null, 2))
  console.log(`Generated ${OUTPUT_FILE} with ${reviews.length} reviews`)
}

main()
