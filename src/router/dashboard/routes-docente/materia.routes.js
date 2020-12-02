export default [
  {
    path: "/materia-principal",
    component: () =>
      import(
        "../../../components/modulo-docente/materia/materia-principal.vue"
      ),
    // name: "materia-principal",
    children: [
      {
        path: "/consulta",
        component: () =>
          import(
            "../../../components/modulo-docente/materia/materia-consulta.vue"
          ),
        name: "consulta",
        meta: { requiredAuth: true }
      },
      {
        path: "/materia-asistencia",
        component: () =>
          import(
            "../../../components/modulo-docente/materia/materia-asistencia.vue"
          ),
        name: "materia-asistencia",
        meta: { requiredAuth: true }
      },
      {
        path: "/asistencias",
        component: () =>
          import("../../../components/modulo-docente/materia/asistencias.vue"),
        name: "asistencia",
        meta: { requiredAuth: true }
      },
      {
        path: "/registrar-estudiantes",
        component: () =>
          import(
            "../../../components/modulo-docente/materia/registrar-estudiantes.vue"
          ),
        name: "registrar-estudiantes",
        meta: { requiredAuth: true }
      }
    ]
  }
];
