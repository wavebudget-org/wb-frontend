import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopComponents from "@/components/ShopComponents"
import InvestComponents from "@/components/InvestComponents"
import HomePage from "@/components/HomePage"

const routes = [
  {
    path: "/",
    name: "Coming soon page",
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
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
