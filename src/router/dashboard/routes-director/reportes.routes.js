export default [
  {
    path: "/reporte-principal",
    component: () =>
      import(
        "../../../components/modulo-director/reportes/reporte-principal.vue"
      ),

    children: [
      {
        path: "/dreportes",
        component: () =>
          import("../../../components/modulo-director/reportes/reportes.vue"),
        name: "dreportes",
        meta: { requiredAuth: true }
      },
      {
        path: "/dreporte-estudiante",
        component: () =>
          import(
            "../../../components/modulo-director/reportes/reporte-estudiantes.vue"
          ),
        name: "dreporte-estudiante",
        meta: { requiredAuth: true }
      }
    ]
  }
];
