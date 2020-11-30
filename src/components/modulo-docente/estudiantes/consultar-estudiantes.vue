<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Estudiantes</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo Materia: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="1151103" />
              <div class="input-group-btn">
                <button class="btn btn-info" type="submit">
                  <i class="iconob fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <div class="cssRegistro">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Lista de Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(materia, index) in filtrarMateria" :key="index">
              <th scope="row">{{ materia.codigo }}</th>
              <td>{{ materia.nombre }}</td>
              <td>
                <router-link class="btn btn-light" :to="{ name: 'estudiante' }">Ver</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      materiasDocente: [],
      materia: {},
      estudiantes: [],
      estudiante: {},
      codigo: "",
      id: 0,
      nombre: "",
      noestudiantes: "",
      consultac: "",
    };
  },

  created() {
    this.getAllDataDocente();

    // axios.post()
  },

  methods: {
    getAllDataDocente() {
      axios
        .post(
          `${process.env.VUE_APP_API}/materias/${this.$store.getters.getInfoRole.id}`
        )
        .then((res) => {
          this.materiasDocente = res.data.data;
          console.log("materias por docente", this.materiasDocente);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllDataEstudiantes(id) {
      axios
        .get(`${process.env.VUE_APP_API}/materias/estudiantes/${id}`)
        .then((res) => {
          this.estudiantes = res.data.data[0].estudiantes;
          console.log("lista de estudiantess", this.estudiantes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verEstudiantesMateria(materia) {
      this.id = materia.id;
      this.codigo = materia.codigo;
      this.nombre = materia.nombre;
      this.noestudiantes = materia.noestudiantes;

      this.getAllDataEstudiantes(this.id);
    },
  },
  computed: {
    filtrarMateria() {
      return this.materiasDocente.filter((materia) =>
        materia.codigo.toLowerCase().includes(this.consultac)
      );
    },
  },
};
</script>
<style scoped>
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th,
.icono:hover {
  background-color: rgb(188, 0, 22);
  color: #ffffff;
}
</style>
