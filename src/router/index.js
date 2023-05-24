import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopComponents from "@/components/ShopComponents"
import InvestComponents from "@/components/InvestComponents"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'shopComponents',
    component: ShopComponents
  },
  {
    path: '/',
    name: 'investComponents',
    component: InvestComponents
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
