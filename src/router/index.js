import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ku',
    name: 'ku',
    component: () => import(/* webpackChunkName: "about" */ '../views/KuView.vue')
  },
  {
    path:'/earth',
    name: 'earth',
    component: () => import ('../views/EarthView.vue')
  },
  {
    path:'/big',
    name: 'big',
    component: () => import ('../views/BigView.vue')
  },
  {
    path: '/blue', // The URL path to match for this route
    name: 'blue', // A unique name for the route (optional but recommended for navigation)
    component: () => import('../views/BlueView.vue'), // The component to render for this route
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
