import Vue from "vue";
import VueRouter from "vue-router";
//import Home from '../views/Home.vue'
import NotFound from "../views/NotFound.vue";
import LogIn from "../views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "home",
    component: () => import("../views/Home"),
  },
  {
    path: "/user/self",
    name: "user-self",
    component: () => import("../views/UserInformation"),
  },
  {
    path: "/user/other/:id",
    name: "user-other",
    component: () => import("../views/UserOther"),
  },
  {
    path: "/tweets/:id",
    name: "replyList",
    component: () => import("../views/ReplyList"),
  },
  {
    path: "/admin/users",
    name: "admin-users",
    component: () => import("../views/AdminUserList"),
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"),
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin/main",
    name: "adminTweetPage",
    component: () => import("../views/AdminTweetPage.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
