export default [
    {
      path: "/config-director",
      component: () =>
        import(
          "../../../components/modulo-director/configuraciones/limpiar.vue"
        ),
      name: "limpiar-datos",
    },  
  ];