<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Materia</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                v-model="consultac"
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
            <th scope="col">Horario</th>
            <!-- <th scope="col">No.Est.</th> -->
            <!-- <th scope="col">Horario</th> -->
            <th scope="col">Lista Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(materia, index) in filtrarMateria" :key="index">
            <th scope="row">{{ materia.codigo }}</th>
            <td>{{ materia.nombre }}</td>
            <!-- <td>{{ noestudiantes }}</td> -->
            <!-- <td>{{ getNameHoras(materia.horarios) }}</td> -->

            <template v-if="materia.horarios[0].dia == null">
              <td>
                <a
                  href=""
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#registrarHorario"
                  :key="materia.id"
                  @click="asignarHorarioMateria(materia.id, materia.docente.id)"
                  >Asignar Horario</a
                >
              </td>
            </template>
            <template v-else>
              <td>
                <!--  //  {"idDia": 1, "dia": "Martes" } - { "idDia": 1, "dia": "Martes" }  -->
                <!-- <template v-for="horario in materia.horarios"> -->
                {{ getNameHoras(materia.horarios) }}
                <!-- </template> -->
              </td>
            </template>

            <td>
              <a
                data-toggle="modal"
                data-target="#ver"
                class="btn btn-light"
                @click="verEstudiantesMateria(materia)"
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
        id="registrarHorario"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Asignar Horario</h4>
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
              <VueSchedule
                v-model="schedule"
                :dayTable="daysSchedule"
                :steps="240"
                disableWeekSelect
                disableDaySelect
                bg="#bc0016"
                bgHover="#818386"
                bgActive="#ffc8ce"
                textColor="transparent"
              />
            </div>

            <!-- {{ schedule }} -->

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="asignarNuevoHorario"
              >
                Asignar Horario
              </button>
            </div>
          </div>
        </div>
      </div>
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
              <h4 class="modal-title">Lista de Estudiantes</h4>
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
                <router-link
                  data-dismiss="modal"
                  :to="{ name: 'registrar-estudiantes' }"
                  >Registrar Estudiantes</router-link
                >
              </div>
              <div>
                <label class="col-form-label">Materia: </label>
                <input class="bordeInput" disabled v-model="nombre" /><br />
                <label class="col-form-label">Codigo: </label>
                <input class="bordeInput" disabled v-model="codigo" /><br />
                <label class="col-form-label">No. de Estudiante: </label>
                <input class="bordeInput" disabled v-model="noestudiantes" />
              </div>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre Estudiante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(estudiante, index) in estudiantes" :key="index">
                    <th scope="row">{{ estudiante.codigo }}</th>
                    <td>{{ estudiante.nombre }}</td>
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
</template>

<script>
/* eslint-disable */
import { formatNameDay, formatNameHour } from "../../../util/formatHorario";
import "vue-daily-scheduler/dist/vue-schedule.min.css";
import VueSchedule from "vue-daily-scheduler";
import { configLangSchedule, daysOfWeek } from "../../../util/config-schedule";
import $ from "jquery";

import { fireToast } from "../../../util/toast";

export default {
  components: {
    VueSchedule,
  },
  data() {
    return {
      materiasDocente: [],
      materia: {},
      materias: [],
      estudiantes: [],
      estudiante: {},
      codigo: "",
      id: 0,
      nombre: "",
      noestudiantes: "",
      consultac: "",
      schedule: { 0: [], 1: [], 2: [], 3: [], 4: [] },
      daysSchedule: daysOfWeek,
      idMateriaHorario: 0,
      idDocente: 0
    };
  },

  created() {
    this.getAllDataDocente();

    // axios.post()
  },

  methods: {

    asignarHorarioMateria(idMateriaHorario, idDocente) {
      
      this.idMateriaHorario = idMateriaHorario;
      this.idDocente = idDocente
    },

    asignarNuevoHorario() {
      const dataToEndpoint = {
        idMateria: this.idMateriaHorario,
        horario: this.schedule,
      };

      const dataHorario = [];

      // { idMateria: this.idMateriaHorario, idDocente: this.idDocente, idDia: this.dia, idHora: }

      const daysToStore = [];

      const horarioValues = Object.keys(this.schedule)


      const daysFiltered = horarioValues.map(dia => {
         if(this.schedule[parseInt(dia)].length !== 0){
          //  daysToStore.push({ dia: dia, horas: this.schedule[parseInt(dia)] }) 
            this.schedule[parseInt(dia)].map( hora => {
               daysToStore.push({ idMateria: this.idMateriaHorario, idDocente: this.idDocente, idDia: parseInt(dia), idHora: hora})  
            })
          
         }
         return {}
      })

      // console.log('-------------------------------------')
      // console.log(daysToStore)

      // console.log('dataAxios', { idMateria: this.idMateriaHorario, idDocente: this.idDocente, dataHorario: daysToStore });

      axios
        .post(`${process.env.VUE_APP_API}/clases`, { idMateria: this.idMateriaHorario, idDocente: this.idDocente, dataHorario: daysToStore })
        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            $("#registrarHorario").modal("hide");

            fireToast(
              "success",
              "Registro Exitoso",
              "El horario se asignó Correctamente"
            );

            this.getAllDataDocente();
            this.resetData();
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al asignar el horario, intente nuevamente"
            );
          }
        });
    },

     getAllMaterias() {

      axios
        .get(`${process.env.VUE_APP_API}/materias`)
        .then((res) => {
          console.log(res.data.operation);
          this.materias = res.data.data;
          console.log("materias -->", this.materias);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    resetData(){

      this.schedule = { 0: [], 1: [], 2: [], 3: [], 4: [] };
    },


    getNameHoras(horas) {

      console.log('horasTotales', horas);

      const nameDay = horas[0].dia.dia;
      const initHour = horas[0].hora.horainicio;
      const finalDay = horas.length - 1;
      const finalHour = horas[finalDay].hora.horafinal;

      return `${ formatNameDay(nameDay)}: ${formatNameHour(initHour)} - ${formatNameHour(finalHour)}`;
    },

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
    getAllDataEstudiantes(id) {
      axios
        .get(`${process.env.VUE_APP_API}/materias/estudiantes/${id}`)
        .then((res) => {
            this.estudiantes = res.data.data[0].estudiantes;
            this.noestudiantes = this.estudiantes.length;
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
      this.$store.dispatch("listarEstudianteMateria", materia);
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

  updated(){
    configLangSchedule();
  }

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
