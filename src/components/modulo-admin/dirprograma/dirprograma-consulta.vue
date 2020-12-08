<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Director de Programa</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Correo Electrico: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                placeholder="example@ufps.edu.co"
                v-model="correo"
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
      <h5 class="h5L">Lista de Directores Academicos</h5>
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
          <tr v-for="(director, index) in filtrarDirector" :key="index">
            <th scope="row">{{ director.codigo }}</th>
            <td>{{ director.nombre }}</td>
            <td>{{ director.correo }}</td>
            <td>{{ director.telefono }}</td>
            <td>{{ validarEstado(director.estado) }}</td>
            <td>
              <a
                data-toggle="modal"
                data-target="#EditarDirPrograma"
                @click="editarDirector(director)"
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
        id="EditarDirPrograma"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                Actualizar Datos del Director de Programa
              </h4>
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
              <form @submit.prevent="actualizarDirector">
                <div class="form-group">
                  <label class="control-label labD">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el nombre completo del director a registrar"
                    required
                    maxlength="100"
                    v-model="nombre"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Codigo:</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el numero de codigo del directos"
                    required
                    disabled
                    v-model="codigo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Correo Electronico</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Escriba el corre institucional (example@ufps.edu.co)"
                    pattern=".+@[uU][fF][pP][sS][.][eE][dD][uU][.][cC][oO]"
                    title="Solo se permiten cuentas de ufps.edu.co"
                    required
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
                    required
                    maxlength="10"
                    minlength="7"
                    v-model="telefono"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Accion:</label>
                  <div class="input-group">
                    <select
                      name="accionA"
                      class="form-control"
                      @change="setEstadoDirector(estadoDirector)"
                      v-model="estadoDirector"
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
      directores: [],
      id: 0,
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      estadoDirector: 1,
      ccorreo:"",
    };
  },
  created() {
    this.getAllDirector();
  },
  methods: {
    validarEstado(estado) {
      let msn = "";
      estado == 1 ? (msn = "Activo") : (msn = "Inactivo");
      return msn;
    },
    getAllDirector() {
      axios
        .get(`${process.env.VUE_APP_API}/directores`)
        .then((res) => {
          console.log(res.data.operation);
          this.directores = res.data.data;
          console.log("directores -->", this.directores);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setEstadoDirector(estadoDirector) {
      console.log(estadoDirector);
      this.estadoDirector = estadoDirector;
    },

    editarDirector(director) {
      this.id = director.id;
      this.codigo = director.codigo;
      this.nombre = director.nombre;
      this.correo = director.correo;
      this.telefono = director.telefono;
      this.estadoDirector = director.estado;
    },

    actualizarDirector() {
      const actualizarDirector = {
        id: this.id,
        nombre: this.nombre,
        codigo: this.codigo,
        correo: this.correo,
        telefono: this.telefono,
        estado: this.estadoDirector,
      };
      axios
        .put(`${process.env.VUE_APP_API}/directores`, actualizarDirector)
        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            $("#EditarDirPrograma").modal("hide");

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del director de programa han sido actualizado"
            );
            this.getAllDirector();
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al actualizar los datos del director de programa, intente nuevamente"
            );
          }
        });
      console.log(actualizarDirector);
      this.getAllDirector();
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
  computed: {
    filtrarDirector() {
      return this.directores.filter(director =>
        director.correo.toLowerCase().includes(this.ccorreo)
      );
    }
  }
}
</script>
<style scoped>
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