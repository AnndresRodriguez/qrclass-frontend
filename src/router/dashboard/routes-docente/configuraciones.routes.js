export default [
  {
    path: "/periodo-academico",
    component: () =>
      import(
        "../../../components/modulo-docente/configuraciones/periodo-academico.vue"
      ),
    name: "periodo-academico"
  },
  {
    path: "/notificaciones",
    component: () =>
      import(
        "../../../components/modulo-docente/configuraciones/notificaciones.vue"
      ),
    name: "notificaciones"
  },
  {
    path: "/codigoqr",
    component: () =>
      import("../../../components/modulo-docente/configuraciones/codigoqr.vue"),
    name: "codigoqr"
  }
];
