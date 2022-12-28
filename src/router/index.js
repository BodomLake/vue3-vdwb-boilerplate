import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  // hash 模式
  // history: createWebHashHistory(),
  history: createWebHistory(),
  base: process.env.BASE_URL,
  // base: import.meta.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
