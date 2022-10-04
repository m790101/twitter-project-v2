import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/main',
    name:'home',
    component:() => import('../views/Home')
  },
  {
  path: '/user/self',
  name:'user-slef',
  component:() => import('../views/UserInformation')
  }
]

const router = new VueRouter({
  routes
})

export default router
