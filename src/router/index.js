import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/V_basic.vue')
    },
    {
      path: '/studylist',
      name: 'studylist',
      component: () => import('../views/V_for.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/CallbackView.vue')
    }
  ]
})

export default router
