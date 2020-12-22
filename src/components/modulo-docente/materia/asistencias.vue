<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <!-- <button type="" class="btn btn-info">Volver</button> -->
      <router-link class="btn btn-info" :to="{ name: 'materia-asistencia' }"
        >Volver</router-link
      >
      <h2>Lista de Asistencia</h2>
      <hr />
      <div>
        <label class="col-form-label">Materia: </label>
        <input class="bordeInput" disabled v-model="nombre" /><br />
        <label class="col-form-label">Codigo: </label>
        <input class="bordeInput" disabled v-model="codigo" /><br />
        <label class="col-form-label">No. de Estudiante: </label>
        <input class="bordeInput" disabled v-model="noestudiantes" />

        <button class="btn btn-info" @click="generateReporte">
          Crear Reporte
        </button>
      </div>
      <br />
      <div class="scroll-div">
        <table class="table table-hover" id="mytable">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre Estudiante</th>
              <template v-for="(estudiante, idx) in estudiantes[0].asistencias">
                <th scope="col" :key="idx">
                  {{ formatAssistance(estudiante.createdAt) }}
                </th>
              </template>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ estudiante.codigo }}</td>
              <td>{{ estudiante.nombre }}</td>
              <template v-for="(asistencia, indice) in estudiante.asistencias">
                <td :key="indice">
                  <template v-if="asistencia.asistio === 1">
                    <i class="fas fa-check fa-2x" style="color: #69e243"></i>
                  </template>
                  <template v-else>
                    <i class="fas fa-minus fa-2x" style="color: red"></i>
                  </template>
                </td>
              </template>
              <td>{{ calculateAsistencias(estudiante.asistencias) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tablaReporte">
        <table class="table table-hover tablaReporte" id="mytable2">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre Estudiante</th>
              <template v-for="(estudiante, idx) in estudiantes[0].asistencias">
                <th scope="col" :key="idx">
                  {{ formatAssistance(estudiante.createdAt) }}
                </th>
              </template>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ estudiante.codigo }}</td>
              <td>{{ estudiante.nombre }}</td>
              <template v-for="(asistencia, indice) in estudiante.asistencias">
                <td :key="indice">{{ asistencia.asistio }}</td>
              </template>
              <td>{{ calculateAsistencias(estudiante.asistencias) }}</td>
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
import XLSX from "xlsx";
import { saveAs } from "file-saver";

export default {
  data() {
    return {
      materiasDocente: [],
      materia: {},
      estudiantes: [],
      estudiante: {},
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
    calculateAsistencias(asistencias) {
      console.log("calculateAsistencias", asistencias);
      let asistenciasTotales = 0;

      asistenciasTotales = asistencias.reduce(function (acc, asistencia) {
        return acc + asistencia.asistio;
      }, 0);

      return `${asistenciasTotales}/${asistencias.length}`;
    },
    getAllDataDocente() {
      axios
        .get(
          `${process.env.VUE_APP_API}/materias/estudiantes/${this.$store.getters.getInfoRole.id}`
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

    formatAssistance(formatDate) {
      return formatAssistance(new Date(formatDate));
    },

    generateReporte() {
      var wb = XLSX.utils.table_to_book(document.getElementById("mytable2"), {
        sheet: `Asistencias`,
      });
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "binary",
      });
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }

      saveAs(
        new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
        "asistencias.xlsx"
      );
    },
  },
};
</script>
<style scoped>
.tablaReporte {
  display: none;
}
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
