import Vue from "vue";
import VueRouter from "vue-router";
//import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";
import LogIn from "../views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  { //根目錄轉址
    path: '/',
    name: 'root',
    redirect:'/logIn'
  
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
  }, 
  {
    path: '/main',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/user/:id',
    name: 'user-information',
    component: () => import('../views/UserInformation')
  },
  {
    path: '/user/:id/follower',
    name: 'user-follower',
    component: () => import('../views/UserFollower')
  },
  {
    path: '/user/:id/following',
    name: 'user-following',
    component: () => import('../views/UserFollowing')
  },
  {
    path: '/tweets/:id',
    name: 'replyList',
    component: () => import('../views/ReplyList')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUserList')

  },
  {
    path: '/admin/tweets',
    name: 'admin-tweet',
    component: () => import('../views/AdminTweetPage')

  },
  {
    path: "/admin/logIn",
    name: "adminLogin",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  }
  , {
    path: '*',
    name: 'NotFound',
    component: NotFound

  },
];

const router = new VueRouter({
  routes,
});

export default router;
