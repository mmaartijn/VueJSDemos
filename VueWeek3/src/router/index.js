import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('../components/homeComponent.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/aboutComponent.vue')
  }],
})

export default router
