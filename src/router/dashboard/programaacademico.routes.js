export default [
  {
    path: "/consultar-programaaca",
    component: () =>
      import(
        "../../components/modulo-admin/programaacademico/programa-consultar.vue"
      ),
    name: "consultar-programaaca"
  },
  {
    path: "/registrar-programaaca",
    component: () =>
      import(
        "../../components/modulo-admin/programaacademico/programa-regristrar"
      ),
    name: "registrar-programaaca"
  }
];
