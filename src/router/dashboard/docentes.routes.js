export default [
  {
    path: "/consultar-docente",
    component: () =>
      import("../../components/dashboard/docente/docente-consulta.vue"),
    name: "consultar-docente"
  },
  {
    path: "/registrar-docente",
    component: () =>
      import("../../components/dashboard/docente/docente-registro.vue"),
    name: "registrar-docente"
  }
];
