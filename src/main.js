import './jquery'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource'
Vue.use(VueResource);

//Vue.http.options.root = 'https://vue-stocktrader-darjusch.firebaseio.com/'

Vue.config.productionTip = false
Vue.filter('currency', (value) =>{
  return '$' + value.toLocaleString();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
