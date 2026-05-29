import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/notes',
    name: 'NoteList',
    component: () => import('@/views/NoteListPage.vue'),
    meta: { title: '笔记' }
  },
  {
    path: '/notes/:id',
    name: 'NoteDetail',
    component: () => import('@/views/NoteDetailPage.vue'),
    meta: { title: '笔记详情' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectPage.vue'),
    meta: { title: '项目' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: { title: '关于我' }
  },
  {
    path: '/reviews',
    name: 'ReviewList',
    component: () => import('@/views/ReviewListPage.vue'),
    meta: { title: '面经' }
  },
  {
    path: '/reviews/:id',
    name: 'ReviewDetail',
    component: () => import('@/views/ReviewDetailPage.vue'),
    meta: { title: '面经详情' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | XK's Blogs`
  if (window.busuanzi) {
    window.busuanzi.fetch()
  }
})

export default router
