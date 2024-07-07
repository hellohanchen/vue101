import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import App from '@/components/App.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/app', name: 'About', component: App },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
