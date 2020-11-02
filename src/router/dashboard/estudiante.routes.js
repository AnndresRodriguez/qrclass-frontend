export default [
  {
    path: "/consultar-estudiante",
    component: () =>
      import("../../components/dashboard/estudiante/estudiante-consulta.vue"),
    name: "consultar-estudiante"
  },
  {
    path: "/registrar-estudiante",
    component: () =>
      import("../../components/dashboard/estudiante/estudiante-registro.vue"),
    name: "registrar-estudiante"
  }
];
