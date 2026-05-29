export const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Shell: '#89e051',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Lua: '#000080',
  default: '#8b8b8b',
}

export function getLanguageColor(language: string | null): string {
  if (!language) return languageColors.default
  return languageColors[language] || languageColors[language.toLowerCase()] || languageColors.default
}
