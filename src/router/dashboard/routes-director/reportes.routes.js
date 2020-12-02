export default [
  {
    path: "/reporte-principal",
    component: () =>
      import(
        "../../../components/modulo-director/reportes/reporte-principal.vue"
      ),

    children: [
      {
        path: "/reportes",
        component: () =>
          import("../../../components/modulo-director/reportes/reportes.vue"),
        name: "reportes",
        meta: { requiredAuth: true }
      },
      {
        path: "/reporte-estudiante",
        component: () =>
          import(
            "../../../components/modulo-director/reportes/reporte-estudiantes.vue"
          ),
        name: "reporte-estudiante",
        meta: { requiredAuth: true }
      }
    ]
  }
];
