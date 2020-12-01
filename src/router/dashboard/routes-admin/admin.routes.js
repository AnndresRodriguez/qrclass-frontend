export default [
  {
    path: "/registrar-admin",
    component: () =>
      import("../../../components/modulo-admin/admin/vista-registro.vue"),
    name: "registrar-admin"
  },
  {
    path: "/consultar-admin",
    component: () =>
      import("../../../components/modulo-admin/admin/vista-consulta.vue"),
    name: "consultar-admin"
  }
];
