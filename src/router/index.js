import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import RegistrarAdmin from "../components/dashboard/Admin/RAdmin.vue";
import ConsultarAdmin from "../components/dashboard/Admin/CAdmin.vue";
import ListarAdmin from "../components/dashboard/Admin/LAdmin.vue";

import RegistrarDocente from "../components/dashboard/docente/RDocente.vue";
import ConsultarDocente from "../components/dashboard/docente/CDocente.vue";
import ListarDocente from "../components/dashboard/docente/LDocente.vue";

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
        path: "/registrar-admi",
        name: "registrar-admin",
        component: RegistrarAdmin
      },
      {
        path: "/consultar-admi",
        name: "consultar-admin",
        component: ConsultarAdmin
      },
      {
        path: "/listar-admi",
        name: "listar-admin",
        component: ListarAdmin
      },
      {
        path: "/registrar-docete",
        name: "registrar-docete",
        component: RegistrarDocente
      },
      {
        path: "/consultar-docete",
        name: "consultar-docete",
        component: ConsultarDocente
      },
      {
        path: "/listar-docete",
        name: "Listar-docete",
        component: ListarDocente
      }
    ]
  }
];

// component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
const router = new VueRouter({
  routes
});

export default router;
