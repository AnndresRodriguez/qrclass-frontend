export default [
  {
    path: "/periodo-academico",
    component: () =>
      import(
        "../../../components/modulo-docente/configuraciones/periodo-academico.vue"
      ),
    name: "periodo-academico",
    meta: { requiredAuth: true }
  },
  {
    path: "/notificaciones",
    component: () =>
      import(
        "../../../components/modulo-docente/configuraciones/notificaciones.vue"
      ),
    name: "notificaciones",
    meta: { requiredAuth: true }
  },
  {
    path: "/codigoqr",
    component: () =>
      import("../../../components/modulo-docente/configuraciones/codigoqr.vue"),
    name: "codigoqr",
    meta: { requiredAuth: true }
  }
];
