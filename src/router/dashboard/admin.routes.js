export default [
  {
    path: "/registrar-admin",
    component: () =>
      import("../../components/dashboard/admin/vista-registro.vue"),
    name: "registrar-admin"
  },
  {
    path: "/consultar-admin",
    component: () =>
      import("../../components/dashboard/admin/vista-consulta.vue"),
    name: "consultar-admin"
  }
];
