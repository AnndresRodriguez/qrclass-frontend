/* eslint-disable */
<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Docente</h2>
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
      <h5 class="h5L">Lista de Docentes</h5>
      <hr />
      <div class="ctabla">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Documento</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Departamento</th>
              <th scope="col">Telefono</th>
              <th scope="col">Estado</th>
              <th scope="col">Funcion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in filtrarDocente" :key="index">
              <th scope="row">{{ docente.id }}</th>
              <th>{{ docente.codigo }}</th>
              <td>{{ docente.nombre }}</td>
              <td>{{ docente.correo }}</td>
              <td>{{ docente.departamento.nombre }}</td>
              <td>{{ docente.telefono }}</td>
              <td>{{ validarEstado(docente.estado) }}</td>
              <td>
                <a
                  data-toggle="modal"
                  data-target="#EditarDocente"
                  @click="editarDocente(docente)"
                >
                  <i class="icono fas fa-user-edit"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="EditarDocente"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Actualizar Datos del Docente</h4>
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
              <form @submit.prevent="actualizarDocente">
                <div class="form-group">
                  <label class="control-label labD">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el nombre completo del docente a registrar"
                    required
                    v-model="nombre"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Codigo:</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder=""
                    required
                    disabled
                    v-model="codigo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"
                    >Selecciona el departamento</label
                  >
                  <div class="input-group">
                    <select
                      @change="listarDepartamentos(departamento)"
                      v-model="departamento"
                      name="departamento"
                      class="form-control"
                    >
                      <template v-for="(departamento, index) in departamentos">
                        <option :key="index" :value="departamento">
                          {{ departamento.codigo }} -
                          {{ departamento.nombre }}
                        </option>
                      </template>
                    </select>
                  </div>
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
                    v-model="correo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Numero de Telefono</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Escriba el numero de celular."
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
                      @change="setEstadoDocente(estadoDocente)"
                      v-model="estadoDocente"
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
export default {
  data() {
    return {
      docentes: [],
      id: 0,
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      departamento: {},
      departamentos: [],
      iddepartamento: "",
      estadoDocente: 1,
      ccorreo:"",
    };
  },
  created() {
    this.getAllDocentes();
    this.getAllDepartamentos();
  },
  methods: {
    validarEstado(estado) {
      let msn = "";
      estado == 1 ? (msn = "Activo") : (msn = "Inactivo");
      return msn;
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

    setEstadoDocente(estadoDocente) {
      console.log(estadoDocente);
      this.estadoDocente = estadoDocente;
    },

    editarDocente(docente) {
      this.id = docente.id;
      this.codigo = docente.codigo;
      this.nombre = docente.nombre;
      this.correo = docente.correo;
      this.telefono = docente.telefono;
    },
    getAllDepartamentos() {
      axios
        .get(`${process.env.VUE_APP_API}/departamentos`)
        .then((res) => {
          console.log(res.data.operation);
          this.departamentos = res.data.data;
          console.log("departamentos -->", this.departamentos);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarDepartamentos(departamento) {
      this.departamento = departamento;
      console.log(this.departamento);
      this.iddepartamento = departamento.codigo;
    },

    actualizarDocente() {
      const docenteNuevo = {
        id: this.id,
        codigo: this.codigo,
        nombre: this.nombre,
        correo: this.correo,
        telefono: this.telefono,
        estado: this.estadoDocente,
        idDepartamento: this.iddepartamento,
      };

      axios
        .put(`${process.env.VUE_APP_API}/docentes`, docenteNuevo)
        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            $("#EditarDocente").modal("hide");

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del docente han sido actualizado"
            );
            this.getAllDocentes();
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
      this.getAllDocentes();
    },
  },
  computed: {
    filtrarDocente() {
      return this.docentes.filter((docente) =>
        docente.correo.toLowerCase().includes(this.ccorreo)
      );
    },
  },
};
</script>

<style scoped>
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
.ctabla {
  overflow: auto;
  margin-left: -70px;
  margin-right: -50px;
}
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th,
.icono:hover {
  background-color: rgb(188, 0, 22);
  color: #ffffff;
}
</style>
