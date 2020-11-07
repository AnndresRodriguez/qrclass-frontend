export default [
  {
    path: "/consultar-estudiante",
    component: () =>
      import(
        "../../components/modulo-admin/dirprograma/dirprograma-consulta.vue"
      ),
    name: "consultar-dirprograma"
  },
  {
    path: "/registrar-estudiante",
    component: () =>
      import(
        "../../components/modulo-admin/dirprograma/dirprograma-registro.vue"
      ),
    name: "registrar-dirprograma"
  }
];
