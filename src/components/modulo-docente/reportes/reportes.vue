<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Generar Reportes</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                v-model="ccodigo"
                type="email"
                class="form-control"
                placeholder="Escriba el codigo de la materia consultar"
              />
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
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Reporte</th>
            <th scope="col">Lista Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(materia, index) in filtrarMateria" :key="index">
            <th scope="row">{{ materia.codigo }}</th>
            <td>{{ materia.nombre }}</td>
            <td>Generar</td>
            <td>
              <button
                class="btn btn-light"
                @click="verEstudiantesMateria(materia)"
              >
                Ver
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      codigo: "",
      id: 0,
      nombre: "",
      ccodigo: "",
    };
  },

  created() {
    this.getAllDataDocente();
    // axios.post()
  },

  methods: {
    getAllDataDocente() {
      axios
        .get(
          `${process.env.VUE_APP_API}/materias/docente/${this.$store.getters.getInfoRole.id}`
        )
        .then((res) => {
          this.materiasDocente = res.data.data;
          console.log("materias por docente", this.materiasDocente);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verEstudiantesMateria(materia) {
      this.$store.dispatch("listarEstudianteMateria", materia);
      this.$router.replace({ name: "reporte-estudiante" });
      console.log("materia que envio de materia asistencia", materia);
    },
  },
  computed: {
    filtrarMateria() {
      return this.materiasDocente.filter((materia) =>
        materia.codigo.toLowerCase().includes(this.ccodigo)
      );
    },
  },
};
</script>

<style scoped>
.bordeInput {
  background: white;
  border: white;
  width: 60%;
}
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
