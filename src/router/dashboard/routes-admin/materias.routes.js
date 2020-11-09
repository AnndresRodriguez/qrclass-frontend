export default [
  {
    path: "/registrar-materia",
    component: () =>
      import("../../../components/modulo-admin/materia/materia-registro.vue"),
    name: "registrar-materia"
  },
  {
    path: "/consultar-materia",
    component: () =>
      import("../../../components/modulo-admin/materia/materia-consultar.vue"),
    name: "consultar-materia"
  }
];
