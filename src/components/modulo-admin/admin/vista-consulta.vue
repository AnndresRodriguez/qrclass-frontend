<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Administrador</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Correo Electrónico: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
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
      <h5 class="h5L">Lista de Administradores</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Documento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Estado</th>
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(admin, index) in filtrarAdministrador" :key="index">
            <th scope="row">{{ admin.documento }}</th>
            <td>{{ admin.nombrecompleto }}</td>
            <td>{{ admin.correo }}</td>
            <td>{{ admin.telefono }}</td>
            <td>{{ validarEstado(admin.estado) }}</td>
            <td>
              <a
                data-toggle="modal"
                data-target="#EditarAdmin"
                @click="editarAdmin(admin)"
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
        id="EditarAdmin"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Actualizar Datos del Administrador</h4>
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
              <form @submit.prevent="actualizarAdmin">
                <div class="form-group">
                  <label class="control-label">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el nombre completo del Admin a registrar"
                    maxlength="100"
                    required
                    v-model="nombre"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Documento:</label>
                  <input
                    class="form-control bordeInput"
                    required
                    disabled
                    v-model="documento"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Correo Electronico</label>
                  <input
                    type="email"
                    class="form-control bordeInput"
                    placeholder="Escriba el correo institucional (misnombres@ufps.edu.co)"
                    pattern=".+@[uU][fF][pP][sS][.][eE][dD][uU][.][cC][oO]"
                    maxlength="45"
                    minlength="12"
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
                      @change="setEstadoAdmin(estadoAdmin)"
                      v-model="estadoAdmin"
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
import $ from "jquery";
import { onlyNumbers } from '../../../util/tools';
export default {
  data() {
    return {
      administradores: [],
      id: 0,
      nombre: "",
      documento: "",
      correo: "",
      telefono: "",
      estadoAdmin: 1,
      ccorreo:"",
    };
  },
  created() {
    this.getAllAdmin();
  },
  methods: {
    validarEstado(estado) {
      let msn = "";
      estado == 1 ? (msn = "Activo") : (msn = "Inactivo");
      return msn;
    },
    getAllAdmin() {
      axios
        .get(`${process.env.VUE_APP_API}/admin`)
        .then((res) => {
          console.log(res.data.operation);
          this.administradores = res.data.data;
          console.log("administradores -->", this.administradores);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setEstadoAdmin(estadoAdmin) {
      console.log(estadoAdmin);
      this.estadoAdmin = estadoAdmin;
    },

    editarAdmin(admin) {
      this.id = admin.id;
      this.documento = admin.documento;
      this.nombre = admin.nombrecompleto;
      this.correo = admin.correo;
      this.telefono = admin.telefono;
      this.estadoAdmin = admin.estado;
    },

    actualizarAdmin() {
      const dataNuevaAdmin= {
        id: this.id,
        nombrecompleto: this.nombre,
        documento: this.documento,
        correo: this.correo,
        telefono: this.telefono,
        estado: this.estadoAdmin,
      };

    
      axios.put(`${process.env.VUE_APP_API}/admin`, dataNuevaAdmin).then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            $("#EditarAdmin").modal("hide");

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del administrador han sido actualizado"
            );
            this.getAllAdmin();
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al actualizar, verifique si el documento o correo ya pertenece a un administrador registrado previamente"
            );
          }
        });
      
    },

    validateNumber($event){
      onlyNumbers($event)
    }

  },
  computed: {
    filtrarAdministrador() {
      return this.administradores.filter((admin) =>
        admin.correo.includes(this.ccorreo)
      );
    },
  },
};
</script>
<style scoped>
.bordeInput {
  background: white !important;
  border: white !important;
}
.cssRegistro .modal-title h4 {
  text-align: center;
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
