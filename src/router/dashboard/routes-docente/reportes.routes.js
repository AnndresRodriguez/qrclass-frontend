export default [
  {
    path: "/reporte-principal",
    component: () =>
      import(
        "../../../components/modulo-docente/reportes/reporte-principal.vue"
      ),

    children: [
      {
        path: "/reportes",
        component: () =>
          import("../../../components/modulo-docente/reportes/reportes.vue"),
        name: "reportes"
      },
      {
        path: "/reporte-estudiante",
        component: () =>
          import(
            "../../../components/modulo-docente/reportes/reporte-estudiantes.vue"
          ),
        name: "reporte-estudiante"
      }
    ]
  }
];
