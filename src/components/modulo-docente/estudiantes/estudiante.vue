<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <router-link class="btn btn-info" :to="{ name: 'consulta-estudiantes' }"
        >Volver</router-link
      >
      <h2>Lista de Estudiantes</h2>
      <hr />
      <div>
        <label class="col-sm-2 col-form-label">Materia: </label>
        <input v-model="nombre" class="bordeInput" disabled />
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo Estudiante: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                v-model="ccodigo"
                class="form-control"
                placeholder="Escriba el codigo del estudiante a consultar"
              />
              <div class="input-group-btn">
                <button class="btn btn-info" type="submit">
                  <i class="iconob fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <br />
        </div>
        <br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in filtrarEstudiante" :key="index">
              <th scope="row">{{ estudiante.codigo }}</th>
              <td>{{ estudiante.nombre }}</td>
              <td>
                <a
                  data-toggle="modal"
                  data-target="#detalleAsistencia"
                  class="btn btn-light"
                  @click="detalleAsistencia(estudiante)"
                  >Ver
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cssRegistro">
          <div
            class="modal fade"
            id="detalleAsistencia"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-pq" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Asistencia por Estudiante</h4>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div>
                    <label class="control-label">Codigo:</label>
                    <input
                      class="bordeInput"
                      disabled
                      v-model="codigoE"
                    /><br />
                    <label class="control-label">Estudiante</label>
                    <input
                      class="bordeInput"
                      disabled
                      v-model="nombreE"
                    /><br />
                    <label class="control-label">Materia</label>
                    <input class="bordeInput" disabled v-model="nombre" /><br />
                    <label class="control-label">No. de Asistencias</label>
                    <input class="bordeInput" disabled />aqui van las
                    asistencias 5/100<br />
                  </div>
                </div>
                <div class="modal-footer">
                  <a
                    data-dismiss="modal"
                    aria-label="Close"
                    class="btn btn-info"
                    >Volver</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
      nombreE: "",
      codigoE: "",
      codigo: "",
      ccodigo: "",
      id: 0,
      nombre: "",
      noestudiantes: "",
    };
  },

  created() {
    this.getAllDataDocente();
    this.verEstudiantesMateria();
    this.getAllDataEstudiantes(this.id);

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
          console.log(this.materiasDocente);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verEstudiantesMateria() {
      let materia = this.$store.getters.getInfoMateria;
      this.id = materia.id;
      this.codigo = materia.codigo;
      this.nombre = materia.nombre;
      this.noestudiantes = materia.noestudiantes;
      console.log("materia del stor", materia);
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
    detalleAsistencia(estudiante){
      this.nombreE= estudiante.nombre;
      this.codigoE= estudiante.codigo;
    },
  },
  computed: {
    filtrarEstudiante() {
      return this.estudiantes.filter((estudiante) =>
        estudiante.codigo.toLowerCase().includes(this.ccodigo)
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
