export default [
  {
    path: "/consultar-docente",
    component: () =>
      import("../../../components/modulo-admin/docente/docente-consulta.vue"),
    name: "consultar-docente",
    meta: { requiredAuth: true }
  },
  {
    path: "/registrar-docente",
    component: () =>
      import("../../../components/modulo-admin/docente/docente-registro.vue"),
    name: "registrar-docente",
    meta: { requiredAuth: true }
  }
];
