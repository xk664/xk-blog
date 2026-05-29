export interface Note {
  id: string
  title: string
  content: string
  size: number
  lastModified: string
}

export interface NoteIndex {
  id: string
  title: string
  size: number
}

export interface TocItem {
  level: number
  text: string
  id: string
}
