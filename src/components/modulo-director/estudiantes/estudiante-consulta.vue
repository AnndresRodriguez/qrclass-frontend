<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Estudiante</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Correo Electrónico: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left">
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                placeholder="example@ufps.edu.co"
                v-model="ccorreo"
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
      <h5 class="h5L">Lista de Estudiantes</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Estado</th>
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(estudiante, index) in filtrarEstudiante" :key="index">
            <th scope="row">{{ estudiante.codigo }}</th>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.correo }}</td>
            <td>{{ estudiante.telefono }}</td>
            <td>{{ validarEstado(estudiante.estado) }}</td>
            <td>
              <a
                data-toggle="modal"
                data-target="#EditarEstudiante"
                @click="editarEstudiante(estudiante)"
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
        id="EditarEstudiante"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title pl-2">Actualizar Datos del Estudiante</h4>
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
              <form @submit.prevent="actualizarEstudiante">
                <div class="form-group">
                  <label class="control-label labD">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el nombre completo"
                    maxlength="100"
                    required
                    v-model="nombre"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Codigo:</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control bordeInput"
                    disabled
                    v-model="codigo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Correo Electronico</label>
                  <input
                    type="email"
                    class="form-control bordeInput"
                    disabled
                    v-model="correo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Numero de Telefono</label>
                  <input
                    type="text"
                    class="form-control"
                    @keypress="validateNumber"
                    placeholder="Escriba el numero de celular."
                    maxlength="10"
                    minlength="7"
                    required
                    v-model="telefono"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Accion:</label>
                  <div class="input-group">
                    <select
                      name="accionA"
                      class="form-control"
                      @change="setEstadoEstudiante(estadoE)"
                      v-model="estadoE"
                    >
                      <option value="1">Habilitar</option>
                      <option value="0">Deshabilitar</option>
                    </select>
                  </div>
                </div>
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
  </div>
</template>
<script>
/* eslint-disable */

import { fireToast } from "../../../util/toast";
import { onlyNumbers } from "../../../util/tools";
import $ from "jquery";
export default {
  data() {
    return {
      estudiantes: [],
      id: 0,
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      estadoE: 1,
      ccorreo:"",
      idPrograma: ''
    };
  },
  created() {
    this.getAllEstudiantes();
  },
  methods: {
    validarEstado(estado) {
      let msn = "";
      estado == 1 ? (msn = "Activo") : (msn = "Inactivo");
      return msn;
    },
    async getAllEstudiantes() {

      await axios.get(`${process.env.VUE_APP_API}/programa-academicos/directores/${this.$store.getters.getInfoRole.id}
      `)
      .then(res => {

         this.idPrograma = res.data.data.id;
         console.log('this.idPrograma', this.idPrograma);

      })

      console.log('this.idPrograma', this.idPrograma);

      axios
        // .get(`${process.env.VUE_APP_API}/estudiantes/programa/${this.idPrograma}`)
        .get(`${process.env.VUE_APP_API}/estudiantes`)
        .then(res => {
          console.log(res.data.operation);
          console.log('res.data.data',res.data.data)
          this.estudiantes = res.data.data;
          console.log("estudiantes -->", this.estudiantes);
        })
        .catch(error => {
          console.log(error);
        });
    },

    editarEstudiante(estudiante) {
      this.id = estudiante.id;
      this.nombre = estudiante.nombre;
      this.codigo = estudiante.codigo;
      this.correo = estudiante.correo;
      this.telefono = estudiante.telefono;
      this.estadoE = estudiante.estado;
    },
    setEstadoEstudiante(estadoEstudiante) {
      console.log(estadoEstudiante);
      this.estadoE = estadoEstudiante;
    },
    actualizarEstudiante() {
      const estudiante = {
        nombre: this.nombre,
        documento: this.documento,
        correo: this.correo,
        telefono: this.telefono,
        estado: this.estadoE
      };
      axios
        .put(`${process.env.VUE_APP_API}/estudiantes`, {idEstudiante: this.id, estudiante})

        .then(res => {
          if (res.data.operation) {
            console.log(res.data);
            $("#EditarEstudiante").modal("hide");

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del estudiante han sido actualizados"
            );
            this.getAllEstudiantes();
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al actualizar los datos del estudiante, intente nuevamente"
            );
          }
        });
      console.log(estudiante);
      this.getAllEstudiantes();
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
  computed: {
    filtrarEstudiante() {
      return this.estudiantes.filter(estudiante =>
        estudiante.correo.toLowerCase().includes(this.ccorreo)
      );
    }
  }
};
</script>

<style scoped>
.bordeInput {
  background: white !important;
  border: white !important;
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
