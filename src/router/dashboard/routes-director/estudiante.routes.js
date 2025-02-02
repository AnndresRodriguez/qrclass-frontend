export default [
  {
    path: "/estudiante-registro",
    component: () =>
      import(
        "../../../components/modulo-director/estudiantes/estudiante-registro.vue"
      ),
    name: "estudiante-registro",
    meta: { requiredAuth: true }
  },
  {
    path: "/estudiante-consulta",
    component: () =>
      import(
        "../../../components/modulo-director/estudiantes/estudiante-consulta.vue"
      ),
    name: "estudiante-consulta",
    meta: { requiredAuth: true }
  },
  {
    path: "/dregistrar-estudiantes",
    component: () =>
      import(
        "../../../components/modulo-director/estudiantes/registrar-estudiantes.vue"
      ),
    name: "dregistrar-estudiantes",
    meta: { requiredAuth: true }
  }
];
