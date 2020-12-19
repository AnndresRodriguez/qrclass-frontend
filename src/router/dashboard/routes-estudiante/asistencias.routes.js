export default [
  {
    path: "/asistencias-materia",
    component: () =>
      import(
        "../../../components/modulo-estudiante/asistencias/asistencias-materia.vue"
      ),
    name: "asistencias-materia",
    meta: { requiredAuth: true }
  }
];
