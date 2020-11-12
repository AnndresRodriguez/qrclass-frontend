export default [
  {
    path: "/materia-consulta",
    component: () =>
      import("../../../components/modulo-docente/materia/materia-consulta.vue"),
    name: "materia-consulta",
  },
  {
    path: "/materia-asistencia",
    component: () =>
      import(
        "../../../components/modulo-docente/materia/materia-asistencia.vue"
      ),
    name: "materia-asistencia",
    children: [
      {
        path: "/asistencia",
        component: () =>
          import(
            "../../../components/modulo-docente/materia/materia-consulta.vue"
          ),
        name: "materia-consulta"
      }
    ]
  }
];
