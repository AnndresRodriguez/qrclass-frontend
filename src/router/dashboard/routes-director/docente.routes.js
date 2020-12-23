export default [
  {
    path: "/docente-registro",
    component: () =>
      import(
        "../../../components/modulo-director/docentes/docente-registro.vue"
      ),
    name: "docente-registro",
    meta: { requiredAuth: true }
  },
  {
    path: "/docente-consulta",
    component: () =>
      import(
        "../../../components/modulo-director/docentes/docente-consulta.vue"
      ),
    name: "docente-consulta",
    meta: { requiredAuth: true }
  },
  {
    path: "/registrar-docentes",
    component: () =>
      import(
        "../../../components/modulo-director/docentes/registrar-docentes.vue"
      ),
    name: "registrar-docentes",
    meta: { requiredAuth: true }
  }
];
