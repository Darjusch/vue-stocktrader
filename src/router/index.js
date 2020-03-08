import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Stocks from '@/components/stocks/Stocks.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Info from '@/components/info/SymbolInfo.vue'

Vue.use(Router)

export const routes = [
  { path: '/', name: 'Home', component: Home  },
  { path: '/stocks', name: 'Stocks', component: Stocks  },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/info/:symbolInfo', name: 'Info', component: Info, props: true}
]

const router = new Router({
  mode: "history",
  routes
})

export default router