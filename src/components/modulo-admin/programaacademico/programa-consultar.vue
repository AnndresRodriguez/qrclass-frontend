<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Programa Academico</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-4 col-form-label"
          >Nombre del Programa Academico:
        </label>
        <div class="col-sm-8">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nombre del Programa Academico"
                v-model="nombre"
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
      <h5 class="h5L">Lista de Programas Academicos</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Director</th>
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(programa, index) in filtrarPrograma" :key="index">
            <th scope="row">{{ programa.codigo }}</th>
            <td>{{ programa.nombre }}</td>
            <td>{{ programa.correo }}</td>
            <td>{{ programa.dirprograma.nombre }}</td>
            <td>
              <a
                data-toggle="modal"
                data-target="#EditarPrograma"
                @click="editarPrograma(programa)"
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
        id="EditarPrograma"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Actualizar Datos Programa Academico</h4>
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
              <form>
                <div class="form-group">
                  <label class="control-label labD">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    disabled
                    v-model="nombre"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Codigo:</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    disabled
                    v-model="codigo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Correo Electronico</label>
                  <input
                    type="email"
                    class="form-control"
                    required
                    v-model="correo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label"
                    >Director Programa Academico:</label
                  >
                  <div class="input-group">
                    <select
                      @change="listarDirectores(dirprograma)"
                      v-model="dirprograma"
                      name="dirprograma"
                      class="form-control"
                    >
                      <template v-for="(dirprograma, index) in dirprogramas">
                        <option :key="index" :value="dirprograma">
                          {{ dirprograma.codigo }} -
                          {{ dirprograma.nombre }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label">Accion:</label>
                  <div class="input-group">
                    <select
                      name="accionA"
                      class="form-control"
                      @change="setEstadoPrograma(estadoPrograma)"
                      v-model="estadoPrograma"
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
      programas: [],
      id: 0,
      nombre: "",
      codigo: "",
      correo: "",
      dirprograma: {},
      dirprogramas: [],
      idDirectorPrograma: "",
      estadoPrograma: 1,
    };
  },
  created() {
    this.getAllProgramas();
    this.getAllDirectoresPrograma();
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

    setEstadoPrograma(estadoPrograma) {
      console.log(estadoPrograma);
      this.estadoPrograma = estadoPrograma;
    },

    editarPrograma(programa) {
      this.id = programa.id;
      this.codigo = programa.codigo;
      this.nombre = programa.nombre;
      this.correo = programa.correo;
    },
    getAllDirectoresPrograma() {
      axios
        .get(`${process.env.VUE_APP_API}/`)
        .then((res) => {
          console.log(res.data.operation);
          this.dirprogramas = res.data.data;
          console.log("dirprogramas -->", this.dirprogramas);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarDirectores(dirprograma) {
      this.dirprograma = dirprograma;
      console.log(this.dirprograma);
      this.idDirectorPrograma = dirprograma.codigo;
    },

    actualizarPrograma() {
      const programaNuevo = {
        id: this.id,
        codigo: this.codigo,
        nombre: this.nombre,
        correo: this.correo,
        estado: this.estadoPrograma,
        idDirectorPrograma: this.idDirectorPrograma,
      };

      axios
        .put(`${process.env.VUE_APP_API}/programa-academicos`, programaNuevo)
        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);
            $("#EditarPrograma").modal("hide");

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del programa academico han sido actualizados"
            );
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al actualizar los datos del programa academico, intente nuevamente"
            );
          }
        });

      console.log(programaNuevo);
    },
  },
  computed: {
    filtrarPrograma() {
      return this.programas.filter((programa) =>
        programa.nombre.includes(this.nombre)
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
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th,
.icono:hover {
  background-color: rgb(188, 0, 22);
  color: #ffffff;
}
</style>
