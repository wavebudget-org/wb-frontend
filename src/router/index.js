import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/shopComponents',
    name: 'shopComponents',
    component: ShopComponents
  },
  {
    path: '/investComponents',
    name: 'investComponents',
    component: InvestComponents
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
