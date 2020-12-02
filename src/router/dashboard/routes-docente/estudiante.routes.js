export default [
  {
    path: "/estudiante-principal",
    component: () =>
      import(
        "../../../components/modulo-docente/estudiantes/estudiante-principal.vue"
      ),
    // name: "estudiante-principal",
    children: [
      {
        path: "/consultar-estudiantes",
        component: () =>
          import(
            "../../../components/modulo-docente/estudiantes/consultar-estudiantes.vue"
          ),
        name: "consulta-estudiantes",
        meta: { requiredAuth: true }
      },
      {
        path: "/estudiante",
        component: () =>
          import(
            "../../../components/modulo-docente/estudiantes/estudiante.vue"
          ),
        name: "estudiante",
        meta: { requiredAuth: true }
      }
    ]
  }
];
