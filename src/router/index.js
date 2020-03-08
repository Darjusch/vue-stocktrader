import Vue from 'vue'
import Router from 'vue-router'
import Stocks from '@/components/stocks/Stocks.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Info from '@/components/info/SymbolInfo.vue'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'


Vue.use(Router)

export const routes = [
  { path: '/stocks', name: 'Stocks', component: Stocks  },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/info/:symbolInfo', name: 'Info', component: Info, props: true},
  { path: '/', name: 'Register', component: Register},
  { path: '/login', name: 'Login', component: Login}
]

const router = new Router({
  mode: "history",
  routes
})

export default router