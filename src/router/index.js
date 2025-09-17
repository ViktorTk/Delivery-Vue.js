import { createRouter, createWebHistory } from 'vue-router'
import HomeViev from '@/views/HomeViev.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeViev,
    },
    {
      path: '/rest',
      component: ProductView,
    },
  ],
})

export default router
