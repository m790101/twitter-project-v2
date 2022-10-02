import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/logIn',
    name: 'logIn',
    component: LogIn
  }
  ,{
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
