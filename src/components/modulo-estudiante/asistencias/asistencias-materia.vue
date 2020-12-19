<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Lista de Asistencia</h2>
      <hr />
      <div class="scroll-div">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Materia</th>
              <th scope="col">Fecha</th>
              <th scope="col">Asistio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <th scope="row">{{ estudiante.codigo }}</th>
              <td>{{ materia.nombre }}</td>
              <template v-for="(asistencia, indice) in estudiante.asistencias">
                <th scope="row" :key="indice">
                  <template v-if="asistencia.asistio === 1">
                    <i class="fas fa-check fa-2x" style="color:#69E243"></i>
                  </template>
                  <template v-else>
                    <i class="fas fa-minus fa-2x" style="color:red"></i>
                  </template>
                </th>
              </template>
              <th>{{ calculateAsistencias(estudiante.asistencias) }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { formatAssistance } from "../../../util/tools";
export default {
  data() {
    return {
     estudiantes: [],
     estudiante: {},
     materias: [],
     materia:{},
     asistencias:[],
     asistencia: {},
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

          res.data.data.map(estudiante => {
                this.materias = this.estudiante.materias;
            });
          console.log(this.estudiantes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllDataMaterias(){

    },
     calculateAsistencias(asistencias){

      console.log('calculateAsistencias', asistencias);
      let asistenciasTotales = 0;

      asistenciasTotales = asistencias.reduce(function (acc, asistencia) {
          return acc + asistencia.asistio;
      },0);

      return `${asistenciasTotales}/${asistencias.length}`

    },

    formatAssistance(formatDate) {
      return formatAssistance(new Date(formatDate));
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
