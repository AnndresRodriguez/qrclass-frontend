export default [
  {
    path: "/consultar-director",
    component: () =>
      import(
        "../../../components/modulo-admin/dirprograma/dirprograma-consulta.vue"
      ),
    name: "consultar-dirprograma",
    meta: { requiredAuth: true }
  },
  {
    path: "/registrar-director",
    component: () =>
      import(
        "../../../components/modulo-admin/dirprograma/dirprograma-registro.vue"
      ),
    name: "registrar-dirprograma",
    meta: { requiredAuth: true }
  }
];
