<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-11 cssRegistro">
      <h2>Consultar Materia</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                placeholder="Ingrese el código de la materia"
                v-model="codigoBusqueda"
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
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Docente</th>
            <th scope="col">Programa Aca.</th>
            <!-- <th scope="col">No.Est.</th> -->
            <th scope="col">Horario</th>
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(materia, index) in filtrarMateria" :key="index">
            <th scope="row">{{ materia.codigo }}</th>
            <td>{{ materia.nombre }}</td>
            <td>{{ materia.docente.nombre }}</td>
            <td>{{ materia.programaAcademico.nombre }}</td>
            <!-- <td>{{ materia.noestudiantes }}</td> -->

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
                data-target="#EditarMateria"
                @click="editarMateria(materia)"
              >
                <i class="icono fas fa-user-edit"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="EditarMateria"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Actualizar Datos de la Materia</h4>
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
              <form @submit.prevent="actualizarMateria">
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
                      disabled
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
                      disabled
                      v-model="codigo"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label">Programa Academico:</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="icono fas fa-id-card"></i>
                    </div>
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      placeholder="Programa Academico"
                      required
                      disabled
                      v-model="idPrograma"
                    />
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
                      disabled
                      v-model="nocreditos"
                    />
                  </div>
                </div>

                <!-- <div class="form-group">
                  <label class="control-label"
                    >Seleccione el horaro de la materia:<br
                  /></label>
                </div> -->

                <!-- <VueSchedule
                  v-model="schedule"
                  :dayTable="daysSchedule"
                  :steps="240"
                  disableWeekSelect
                  disableDaySelect
                  bg="#bc0016"
                  bgHover="#818386"
                  bgActive="#ffc8ce"
                  textColor="transparent"
                /> -->

                <!-- <pre>{{ schedule }}</pre> -->

                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";
import $ from "jquery";
import "vue-daily-scheduler/dist/vue-schedule.min.css";
import VueSchedule from "vue-daily-scheduler";
import { configLangSchedule, daysOfWeek } from "../../../util/config-schedule";
import { formatNameDay, formatNameHour } from "../../../util/formatHorario";

export default {
  components: {
    VueSchedule,
  },
  data() {
    return {
      codigoBusqueda: "",
      programa: {},
      materia: {},
      docente: {},
      hora: {},
      programas: [],
      materias: [],
      docentes: [],
      horas: [],
      idPrograma: "",
      idmateria: "",
      idHora: "",
      idDia: "",
      idDocente: "",
      nombre: "",
      codigo: "",
      noestudiantes: "",
      nocreditos: "",
      schedule: { 0: [], 1: [], 2: [], 3: [], 4: [] },
      daysSchedule: daysOfWeek,
      idMateriaHorario: 0,
      idDocente: 0,
    };
  },
  created() {
    this.getAllDocentes();
    this.getAllHoras();
    this.getAllProgramas();
    this.getAllMaterias();
  },

  methods: {
    asignarHorarioMateria(idMateriaHorario, idDocente) {
      configLangSchedule();
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

            this.getAllMaterias();
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
    getNameHoras(horas) {

      console.log('horasTotales', horas);

      const nameDay = horas[0].dia.dia;
      const initHour = horas[0].hora.horainicio;
      const finalDay = horas.length - 1;
      const finalHour = horas[finalDay].hora.horafinal;

      return `${ formatNameDay(nameDay)}: ${formatNameHour(initHour)} - ${formatNameHour(finalHour)}`;
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
    getAllHoras() {
      axios
        .get(`${process.env.VUE_APP_API}/horas`)
        .then((res) => {
          console.log(res.data.operation);
          this.horas = res.data.data;
          console.log("horas -->", this.horas);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
    editarMateria(materia) {
      configLangSchedule();

      this.idmateria = materia.id;
      this.idDocente = materia.idDocente;
      this.idPrograma = materia.programaAcademico.nombre;
      this.nombre = materia.nombre;
      this.codigo = materia.codigo;
      this.noestudiantes = materia.noestudiantes;
      this.nocreditos = materia.nocreditos;

      console.log(materia);
    },
    actualizarMateria() {
      const materia = {
        id: this.idmateria,
        codigo: this.codigo,
        nombre: this.nombre,
        noestudiantes: this.noestudiantes,
        nocreditos: this.nocreditos,
        idDocente: this.idDocente,
        idProgramaAcademico: this.idProgramaAcademico,
        horario: this.schedule,
        idMateria: this.idmateria,
      };

      axios.put(`${process.env.VUE_APP_API}/materias`, materia).then((res) => {
        if (res.data.operation) {
          console.log(res.data);
          $("#EditarMateria").modal("hide");

          fireToast(
            "success",
            "Actualización Exitosa",
            "Los datos del docente han sido actualizado"
          );
        } else {
          console.log(res.data);

          fireToast(
            "error",
            "Error en la actualización",
            "Ha ocurrido un error al actualizar los datos del docente, intente nuevamente"
          );
        }
      });

      console.log(docenteNuevo);
      this.getAllMaterias();
    },

    resetData(){

      this.schedule = { 0: [], 1: [], 2: [], 3: [], 4: [] };


    }
  },
  computed: {
    filtrarMateria() {
      return this.materias.filter((materia) =>
        materia.codigo.toLowerCase().includes(this.codigoBusqueda)
      );
    },
  },
};
</script>
<style scoped>
.horama {
  display: flex;
}
.horaInicio {
  margin-left: 70px;
  margin-right: 70px;
}
.espaciohora {
  margin-left: 15px;
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
