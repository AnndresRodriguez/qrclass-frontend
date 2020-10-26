export default [
  {
    path: "/consultar-docente",
    component: () =>
      import("../../components/dashboard/docente/docente-consulta.vue"),
    name: "consultar-docente"
  },
  {
    path: "/listar-docentes",
    component: () =>
      import("../../components/dashboard/docente/docente-listar.vue"),
    name: "listar-docentes"
  },
  {
    path: "/registrar-docente",
    component: () =>
      import("../../components/dashboard/docente/docente-registro.vue"),
    name: "registrar-docente"
  }
];
