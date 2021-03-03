import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



/* TODO LIST

1. Layouts
      MainLayout
          Header
              • create dropdown
      AuthLayout
          • create right panel + footer        

              
              
              
*/