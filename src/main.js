import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './rotes'

Vue.config.productionTip = true

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
  