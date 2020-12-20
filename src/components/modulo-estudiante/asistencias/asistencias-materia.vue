<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Lista de Materias</h2>
      <hr />
      <br />
      <div class="scroll-div">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Materia</th>
              <th scope="col">Asistencias</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(materia, index) in materias" :key="index">
              <th scope="row">{{ materia.codigo }}</th>
              <td>{{ materia.nombre }}</td>
              <td>
                <a
                  data-toggle="modal"
                  data-target="#ver"
                  class="btn btn-light"
                  @click="verAsistencias(materia)"
                  >Ver
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cssRegistro">
        <div
          class="modal fade"
          id="ver"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Asistencias</h4>
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
                  <label class="col-form-label">Materia: </label>
                  <input class="bordeInput" disabled v-model="nombre" /><br />
                  <label class="col-form-label">Codigo: </label>
                  <input class="bordeInput" disabled v-model="codigo" /><br />
                </div>

                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Asistio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(asistencia, index) in materias[0].asistencias"
                      :key="index"
                    >
                      <th>{{ index + 1 }}</th>
                      <th scope="row">
                        {{ formatAssistanceEstudiante(asistencia.createdAt) }}
                      </th>
                      <td>
                        <template v-if="asistencia.asistio === 1">
                          <i
                            class="fas fa-check fa-2x"
                            style="color: #69e243"
                          ></i>
                        </template>
                        <template v-else>
                          <i class="fas fa-minus fa-2x" style="color: red"></i>
                        </template>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <a data-dismiss="modal" aria-label="Close" class="btn btn-info"
                  >Volver</a
                >
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
import { formatDate } from "../../../util/tools";
export default {
  data() {
    return {
      estudiantes: [],
      estudiante: {},
      materias: [],
      materia: {},
      asistencia: {},
      id: 0,
      nombre: "",
      codigo: "",
    };
  },

  created() {
    this.getAllDataEstudiante();
    // axios.post()
  },

  methods: {
    getAllDataEstudiante() {
      axios
        .get(
          `${process.env.VUE_APP_API}/estudiantes/asistencias/${this.$store.getters.getInfoRole.id}`
        )
        .then((res) => {
          this.estudiantes = res.data.data;
          console.log("estudiantes", this.estudiantes);

          res.data.data.map((estudiante) => {
            this.materias = estudiante.materias;
          });
          console.log("materiaaa", this.materias);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verAsistencias(materia) {
      this.id = materia.id;
      this.codigo = materia.codigo;
      this.nombre = materia.nombre;
    },

    calculateAsistencias(asistencias) {
      console.log("calculateAsistencias", asistencias);
      let asistenciasTotales = 0;

      asistenciasTotales = asistencias.reduce(function (acc, asistencia) {
        return acc + asistencia.asistio;
      }, 0);

      return `${asistenciasTotales}/${asistencias.length}`;
    },
    formatAssistanceEstudiante(formatDateE) {
      return formatDate(new Date(formatDateE));
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

.scroll-div {
  width: 100% !important;
  overflow-x: scroll;
}
</style>
