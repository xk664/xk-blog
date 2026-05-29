export interface ContactLink {
  type: 'github' | 'qq' | 'csdn' | 'email'
  label: string
  url: string
  icon: string
  copyable: boolean
}

export interface NavItem {
  path: string
  label: string
}

export interface Experience {
  id: number
  time: string
  title: string
  description?: string
  type: 'education' | 'learning' | 'career' | 'project'
}

export const profile = {
  name: 'XK',
  avatar: '/images/b_352071ac5380413125dd4162bbc45949.jpg',
  bio: '大二在读 · Java 开发者 · 热爱技术',
  slogan: '热爱技术的大二学生，专注Java后端开发',
  university: '西南石油大学',
  grade: '大二在读',
  startDate: '2025.8',
}

export const experiences: Experience[] = [
  {
    id: 1,
    time: '2024.09',
    title: '西南石油大学（在读）',
    type: 'education',
  },
  {
    id: 2,
    time: '2025.08',
    title: '开始学习 Java',
    type: 'learning',
  },
  {
    id: 3,
    time: '2026.05',
    title: '开始投递简历',
    type: 'career',
  },
]

export const contacts: ContactLink[] = [
  { type: 'github', label: 'GitHub', url: 'https://github.com/xk664', icon: 'github', copyable: false },
  { type: 'qq', label: 'QQ', url: '2496651494', icon: 'qq', copyable: true },
  { type: 'csdn', label: 'CSDN', url: 'https://blog.csdn.net/2403_88478303', icon: 'csdn', copyable: false },
  { type: 'email', label: '邮箱', url: '2496651494@qq.com', icon: 'mail', copyable: true },
]

export const navItems: NavItem[] = [
  { path: '/', label: '首页' },
  { path: '/notes', label: '笔记' },
  { path: '/reviews', label: '面经' },
  { path: '/projects', label: '项目' },
  { path: '/about', label: '关于我' },
]
