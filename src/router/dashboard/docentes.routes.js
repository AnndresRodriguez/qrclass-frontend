export default [
  {
    path: "/horario",
    component: () => import("../../components/dashboard/docente/horario.vue"),
    name: "horario"
  },
  {
    path: "/materias",
    component: () =>
      import("../../components/dashboard/docente/vista-registro.vue"),
    name: "materias"
  },
  {
    path: "/estudiantes",
    component: () =>
      import("../../components/dashboard/docente/vista-listar.vue"),
    name: "estudiantes"
  }
];
