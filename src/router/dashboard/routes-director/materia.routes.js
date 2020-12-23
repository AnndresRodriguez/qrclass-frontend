export default [
  {
    path: "/materia-registro",
    component: () =>
      import(
        "../../../components/modulo-director/materias/materia-registro.vue"
      ),
    name: "materia-registro",
    meta: { requiredAuth: true }
  },
  {
    path: "/materia-consulta",
    component: () =>
      import(
        "../../../components/modulo-director/materias/materia-consultar.vue"
      ),
    name: "materia-consulta",
    meta: { requiredAuth: true }
  },
  {
    path: "/registrar-materias",
    component: () =>
      import(
        "../../../components/modulo-director/materias/registrar-materias.vue"
      ),
    name: "registrar-materias",
    meta: { requiredAuth: true }
  }
];
