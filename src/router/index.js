import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '../views/SigninView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'Signin',
      component: SigninView
    }
  ]
})

export default router
