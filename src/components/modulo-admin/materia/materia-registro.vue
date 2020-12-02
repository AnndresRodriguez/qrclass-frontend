<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Materia</h2>
      <hr />
      <form @submit.prevent="registrarMateria">
        <div class="form-group">
          <label class="control-label">Nombre Completo</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-user"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el nombre de la materia a registrar"
              required
              maxlength="100"
              v-model="nombre"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Codigo:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-id-card"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el codigo de la materia"
              required
              maxlength="10"
              v-model="codigo"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Selecciona el Programa Academico:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select
              @change="listarProgramas(programa)"
              v-model="programa"
              name="dirprograma"
              class="form-control"
            >
              <template v-for="(programa, index) in programas">
                <option :key="index" :value="programa">
                  {{ programa.codigo }} -
                  {{ programa.nombre }}
                </option>
              </template>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label"
            >Seleccione el Docente a asignar la Materia:</label
          >
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select
              @change="listarDocentes(docente)"
              v-model="docente"
              name="dirprograma"
              class="form-control"
              required
            >
              <template v-for="(docente, index) in docentes">
                <option :key="index" :value="docente">
                  {{ docente.codigo }} -
                  {{ docente.nombre }}
                </option>
              </template>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Estudiantes</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-users"></i>
            </div>
            <input
              type="number"
              class="form-control col-2"
              value="0"
              min="1"
              required
              v-model="noestudiantes"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Créditos</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono icono fas fa-chalkboard-teacher"></i>
            </div>
            <input
              type="number"
              class="form-control col-2"
              value="0"
              min="1"
              required
              v-model="nocreditos"
            />
          </div>
        </div>
        <div class="boton form-group">
          <button type="submit" class="btn btn-info">Registrar Materia</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";
import "vue-daily-scheduler/dist/vue-schedule.min.css";
import VueSchedule from "vue-daily-scheduler";
import { configLangSchedule, daysOfWeek } from "../../../util/config-schedule";
import $ from "jquery";



export default {
  components: {
    VueSchedule,
  },
  data() {
    return {
      programa: {},
      programas: [],
      idPrograma: "",
      docente: {},
      docentes: [],
      idDocente: "",
      nombre: "",
      codigo: "",
      noestudiantes: "",
      nocreditos: "",
      schedule: { 0: [], 1: [], 2: [], 3: [], 4: [] },
      daysSchedule: daysOfWeek,
    };
  },
  created() {
    this.getAllProgramas();
    this.getAllDocentes();
  },

  methods: {
    
    getAllProgramas() {
      axios
        .get(`${process.env.VUE_APP_API}/programa-academicos`)
        .then((res) => {
          console.log(res.data.operation);
          this.programas = res.data.data;
          console.log("programas -->", this.programas);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarProgramas(programa) {
      this.idPrograma = programa.id;
      console.log(this.idPograma);
    },

    getAllDocentes() {
      
      axios
        .get(`${process.env.VUE_APP_API}/docentes`)
        .then((res) => {
          console.log(res.data.operation);
          this.docentes = res.data.data;
          console.log("docentes -->", this.docentes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listarDocentes(docente) {
      this.idDocente = docente.id;
      console.log(this.docente);
    },
    registrarMateria() {
      const materia = {
        nombre: this.nombre,
        codigo: this.codigo,
        noestudiantes: this.noestudiantes,
        nocreditos: this.nocreditos,
        idProgramaAcademico: this.idPrograma,
        idDocente: this.idDocente,
      };

      console.log(materia);
      axios
        .post(`${process.env.VUE_APP_API}/materias`, materia)
        .then((res) => {
          fireToast(
            "success",
            "Registro Exitoso",
            "La nueva materia ha sido creada"
          );
          console.log(res.data);
          this.limpiarinput();
        })
        .catch((error) => {
          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error al crear la nueva materia, intente nuevamente"
          );
          console.log("registrarMateria", error);
        });
    },
    limpiarinput(){
      this.idDocente= "",
      this.nombre="",
      this.codigo="",
      this.noestudiantes=""
      this.nocreditos=""
    }
  },
  updated() {
      configLangSchedule();
  },
};
</script>
<style scoped>
.esphora {
  margin-left: 1em;
}
.horama {
  margin-left: 4em;
}
</style>
