export default [
  {
    path: "/consultar-estudiante",
    component: () =>
      import(
        "../../components/modulo-admin/estudiante/estudiante-consulta.vue"
      ),
    name: "consultar-estudiante"
  },
  {
    path: "/registrar-estudiante",
    component: () =>
      import(
        "../../components/modulo-admin/estudiante/estudiante-registro.vue"
      ),
    name: "registrar-estudiante"
  }
];
