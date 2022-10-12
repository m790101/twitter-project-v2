import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import store from './store'
import moment from 'moment'
import 'moment/locale/zh-cn'

Vue.config.productionTip = false
moment.locale('zh-tw')
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
