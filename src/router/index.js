import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import estudianteV from "../components/modulo-estudiante/registrar-asistencia.vue";
import scanEstudiante from "../components/modulo-estudiante/qrscanner.vue";

import adminroutes from "./dashboard/routes-admin/admin.routes";
import docentesroutes from "./dashboard/routes-admin/docentes.routes";
import estudianteroutes from "./dashboard/routes-admin/estudiante.routes";
import dirprogramaroutes from "./dashboard/routes-admin/dirprograma.routes";
import programaacademicoroutes from "./dashboard/routes-admin/programaacademico.routes";
import materiaroutes from "./dashboard/routes-admin/materias.routes";

import horarioroutes from "./dashboard/routes-docente/horario.routes";
import docenteMateriasroutes from "./dashboard/routes-docente/materia.routes";
import docenteEstudianteroutes from "./dashboard/routes-docente/estudiante.routes";
import docenteConfiguracionesroutes from "./dashboard/routes-docente/configuraciones.routes";
import docenteReportesroutes from "./dashboard/routes-docente/reportes.routes";

import estudiantedatosroutes from "./dashboard/routes-estudiante/datos.routes";
import estudianteasistenciaroutes from "./dashboard/routes-estudiante/asistencias.routes";

import dirprogramaEstudiantesroutes from "./dashboard/routes-director/estudiante.routes";
import dirprogramaDocentesroutes from "./dashboard/routes-director/docente.routes";
import dirprogramaMateriasroutes from "./dashboard/routes-director/materia.routes";
import dirprogramaReportesroutes from "./dashboard/routes-director/reportes.routes";
import dirprogramaConfigroutes from "./dashboard/routes-director/config.routes";

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
    meta: { requiredAuth: true },
    children: []
      .concat(adminroutes)
      .concat(docentesroutes)
      .concat(estudianteroutes)
      .concat(dirprogramaroutes)
      .concat(programaacademicoroutes)
      .concat(materiaroutes)
      .concat(horarioroutes)
      .concat(docenteMateriasroutes)
      .concat(docenteEstudianteroutes)
      .concat(docenteConfiguracionesroutes)
      .concat(docenteReportesroutes)
      .concat(estudiantedatosroutes)
      .concat(estudianteasistenciaroutes)
      .concat(dirprogramaEstudiantesroutes)
      .concat(dirprogramaReportesroutes)
      .concat(dirprogramaDocentesroutes)
      .concat(dirprogramaMateriasroutes)
      .concat(dirprogramaConfigroutes)
  },
  {
    path: "/asistencia-estudiante",
    name: "asistencia-estudiante",
    component: estudianteV
  },
  {
    path: "/scan-estudiante",
    name: "scan-estudiante",
    component: scanEstudiante
  },
  {
    path: "*",
    name: "catchAll",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
