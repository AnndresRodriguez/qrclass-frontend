export default [
  {
    path: "/datos-estudiante",
    component: () =>
      import(
        "../../../components/modulo-estudiante/datos/datos-estudiante.vue"
      ),
    name: "datos-estudiante",
    meta: { requiredAuth: true }
  }
];
