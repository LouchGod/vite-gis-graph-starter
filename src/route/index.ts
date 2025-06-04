import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/map/index.vue'),
    },
    {
      path: '/graph',
      name: 'graph',
      component: () => import('../views/graph/index.vue'),
    },
  ],
})

export default router
