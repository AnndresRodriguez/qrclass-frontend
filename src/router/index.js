import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import adminroutes from "./dashboard/admin.routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [].concat(adminroutes)
  }
];

// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
const router = new VueRouter({
  routes
});

export default router;
