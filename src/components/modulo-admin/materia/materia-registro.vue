<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Materia</h2>
      <hr />
      <form>
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
            <input type="number" class="form-control col-2" value="0" min="1" />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Credritos</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono icono fas fa-chalkboard-teacher"></i>
            </div>
            <input type="number" class="form-control col-2" value="0" min="1" />
          </div>
        </div>
        <label class="control-label"
          >Seleccione el horaro de la materia:<br
        /></label>
        <div class="row">
          <div class="panels horama">
            <div>
              <label class="control-label">Lunes: </label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Martes:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Miercoles:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
          </div>
          <div class="panels horama">
            <div>
              <label class="control-label">Jueves:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Viernes:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
          </div>
        </div>
        <div class="boton form-group">
          <button type="submit" class="btn btn-info">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";
import $ from "jquery";
export default {
  data() {
    return {
      programa: {},
      programas: [],
      idPrograma: "",
      docente: {},
      docentes: [],
      idDocente: "",
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
      this.programa = programa;
      console.log(this.programa);
      this.idPrograma = programa.id;
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
      this.docente = docente;
      console.log(this.docente);
      this.idDocente = docente.id;
    },
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
