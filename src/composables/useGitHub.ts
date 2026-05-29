import { ref } from 'vue'
import type { Repo } from '@/types/github'

const repos = ref<Repo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// 静态项目数据
const staticRepos: Repo[] = [
  {
    id: 1,
    name: 'group-buy-market-xk',
    full_name: 'xk664/group-buy-market-xk',
    description: '基于DDD架构落地，打造的一个拼团微服务，可实现退单，锁单，结算等多个流程，可对接外卖，电商等平台',
    html_url: 'https://github.com/xk664/group-buy-market-xk',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-01T00:00:00Z',
    created_at: '2025-12-01T00:00:00Z',
    topics: ['java', 'ddd', 'rabbitmq', 'docker'],
    fork: false,
    archived: false,
  },
  {
    id: 2,
    name: 'hmComment',
    full_name: 'xk664/hmComment',
    description: '类似于大众点评的点评项目',
    html_url: 'https://github.com/xk664/hmComment',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-01T00:00:00Z',
    created_at: '2025-11-01T00:00:00Z',
    topics: ['java', 'redis', 'mysql'],
    fork: false,
    archived: false,
  },
  {
    id: 3,
    name: 'sky-take-out',
    full_name: 'xk664/sky-take-out',
    description: '外卖点单平台，支持商家端、客户端。同时支持手机小程序',
    html_url: 'https://github.com/xk664/sky-take-out',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-01T00:00:00Z',
    created_at: '2025-10-01T00:00:00Z',
    topics: ['java', 'mysql', 'springboot'],
    fork: false,
    archived: false,
  },
  {
    id: 4,
    name: 'agent-draw-io-xk-backend',
    full_name: 'xk664/agent-draw-io-xk-backend',
    description: '用于agent开发的基础，包括api节点的自动装配、MCP、Skill等的自动装配',
    html_url: 'https://github.com/xk664/agent-draw-io-xk-backend',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-01-01T00:00:00Z',
    created_at: '2025-09-01T00:00:00Z',
    topics: ['spring-ai', 'google-adk', 'springboot'],
    fork: false,
    archived: false,
  },
]

export function useGitHub() {
  const fetchRepos = async () => {
    loading.value = true
    error.value = null

    // 模拟加载延迟
    await new Promise(resolve => setTimeout(resolve, 300))

    repos.value = staticRepos
    loading.value = false
  }

  const retry = () => {
    repos.value = []
    fetchRepos()
  }

  return {
    repos,
    loading,
    error,
    fetchRepos,
    retry,
  }
}
