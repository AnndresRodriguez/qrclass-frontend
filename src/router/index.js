import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import adminroutes from "./dashboard/routes-admin/admin.routes";
import docentesroutes from "./dashboard/routes-admin/docentes.routes";
import estudianteroutes from "./dashboard/routes-admin/estudiante.routes";
import dirprogramaroutes from "./dashboard/routes-admin/dirprograma.routes";
import programaacademicoroutes from "./dashboard/routes-admin/programaacademico.routes";
import materiaroutes from "./dashboard/routes-admin/materias.routes";

import horarioroutes from "./dashboard/routes-docente/horario.routes";
import docenteMateriasroutes from "./dashboard/routes-docente/materia.routes";

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
    children: []
      .concat(adminroutes)
      .concat(docentesroutes)
      .concat(estudianteroutes)
      .concat(dirprogramaroutes)
      .concat(programaacademicoroutes)
      .concat(materiaroutes)
      .concat(horarioroutes)
      .concat(docenteMateriasroutes)
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
