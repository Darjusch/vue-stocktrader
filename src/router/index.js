import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Stocks from '@/components/stocks/Stocks.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'

Vue.use(Router)

export const routes = [
  { path: '/', name: 'Home', component: Home  },
  { path: '/stocks', name: 'Stocks', component: Stocks  },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio }
]

const router = new Router({
  mode: "history",
  routes
})

export default router