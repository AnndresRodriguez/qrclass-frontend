export default [
  {
    path: "/consultar-programaaca",
    component: () =>
      import(
        "../../components/dashboard/programaacademico/programa-consultar.vue"
      ),
    name: "consultar-programaaca"
  },
  {
    path: "/registrar-programaaca",
    component: () =>
      import(
        "../../components/dashboard/programaacademico/programa-regristrar"
      ),
    name: "registrar-programaaca"
  }
];
