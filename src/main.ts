import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vLazyLoad } from '@/directives/lazyLoad'
import './assets/styles/main.css'

const app = createApp(App)

app.use(router)
app.directive('lazy-load', vLazyLoad)

app.mount('#app')
