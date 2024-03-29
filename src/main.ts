import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import service from "@/utils/http";

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
