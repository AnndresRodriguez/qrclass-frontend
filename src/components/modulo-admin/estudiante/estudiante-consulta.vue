<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Estudiante</h2>
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
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(estudiante, index) in estudiantes" :key="index">
            <th scope="row">{{ estudiante.idEstudianteCodigo }}</th>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.correo }}</td>
            <td>{{ estudiante.telefono }}</td>
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
        <div class="modal-dialog modal-lg" role="document">
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
              <form>
                <div class="form-group">
                  <label class="control-label labD">Nombre Completo</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Escriba el nombre completo"
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
                    placeholder="Escriba el numero de codigo"
                    required
                    v-model="codigo"
                  />
                </div>
                <div class="form-group">
                  <label class="control-label">Correo Electronico</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Escriba el corre institucional (example@ufps.edu.co)"
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
                    <select name="accionA" class="form-control">
                      <option value="habilitarAdmin">Habilitar</option>
                      <option value="deshabilitarAdmin">Deshabilitar</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
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
import axios from "axios";
export default {
  data() {
    return {
      estudiantes: [],
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
    };
  },
  created() {
    this.getAllEstudiantes();
  },
  methods: {
    getAllEstudiantes() {
      axios
        .get("http://357f799f5a1b.ngrok.io/estudiantes")
        .then((res) => {
          console.log(res.data.operation);
          this.estudiantes = res.data.data;
          console.log("estudiantes -->", this.estudiantes);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editarEstudiante(estudiante) {
      this.nombre = estudiante.nombre;
      this.codigo = estudiante.idEstudianteCodigo;
      this.correo = estudiante.correo;
      this.telefono = estudiante.telefono;
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
