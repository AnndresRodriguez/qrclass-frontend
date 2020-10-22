import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Horario from "../components/docente/horario.vue";
import Configuracion from "../components/docente/configuracion.vue";
import Notificaciones from "../components/docente/notificaciones.vue";

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
    children: [
      {
        path: "/horario",
        name: "horario",
        component: Horario
      },
      {
        path: "/configuraciones",
        name: "configuraciones",
        component: Configuracion
      },
      {
        path: "/notificaciones",
        name: "notificaciones",
        component: Notificaciones
      }
    ]
  }
];

// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
const router = new VueRouter({
  routes
});

export default router;
