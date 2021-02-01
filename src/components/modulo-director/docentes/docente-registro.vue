<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Docente</h2>
      <hr />
      <!-- <div>
        <label
          >Para registrar docentes de forma masiva, de clic
          &nbsp;&nbsp;&nbsp;&nbsp; </label
        ><router-link :to="{ name: 'registrar-docentes' }">
          &nbsp;&nbsp;&nbsp;&nbsp; aqui</router-link
        >
      </div> -->
      <form @submit.prevent="registrarDocente">
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
              placeholder="Escriba el nombre completo del docente a registrar"
              v-model="nombre"
              maxlength="100"
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
              @keypress="validateNumber"
              placeholder="Escriba el numero de codigo del docente"
              maxlength="10"
              minlength="5"
              required
              v-model="codigo"
            />
          </div>
        </div>
        <!-- <div class="form-group">
          <label class="control-label">Selecciona el departamento</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select
              @change="listarDepartamentos(departamento)"
              v-model="departamento"
              name="departamento"
              class="form-control"
              required
            >
              <template v-for="(departamento, index) in departamentos">
                <option :key="index" :value="departamento">
                  {{ departamento.codigo }} -
                  {{ departamento.nombre }}
                </option>
              </template>
            </select>
          </div>
        </div> -->

        <div class="form-group">
          <label class="control-label">Correo Electronico</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-at"></i>
            </div>
            <input
              type="email"
              class="form-control"
              placeholder="Escriba el corre institucional (example@ufps.edu.co)"
              pattern=".+@[uU][fF][pP][sS][.][eE][dD][uU][.][cC][oO]"
              title="Solo se permiten cuentas de ufps.edu.co"
              required
              maxlength="45"
              minlength="12"
              v-model="correo"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Telefono</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-phone"></i>
            </div>
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
import { onlyNumbers } from "../../../util/tools";
export default {
  data() {
    return {
      docentes: [],
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      departamento: {},
      departamentos: [],
      iddepartamento: 0,
    };
  },
  created() {
    this.getAllDepartamentos();
  },
  methods: {
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
      this.iddepartamento = departamento.codigo;
      console.log(this.codigo);
    },

    registrarDocente() {
      const docente = {
        codigo: this.codigo,
        nombre: this.nombre,
        correo: this.correo,
        telefono: this.telefono,
        idDepartamento: this.iddepartamento,
      };

      axios.post(`${process.env.VUE_APP_API}/docentes`, docente).then((res) => {
        if (res.data.operation) {
          console.log(res.data);
          fireToast(
            "success",
            "Registro Exitoso",
            "El Nuevo docente ha sido creado"
          );
          console.log(res.data);
          this.limpiarinput();
        } else {
          console.log(res.data);

          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error en el registro, el codigo o correo pertenece a un docente registrado previamente"
          );
          console.log("registrarDocente", error);
        }
      });
    },
    limpiarinput() {
      (this.nombre = ""),
        (this.codigo = ""),
        (this.correo = ""),
        (this.telefono = "");
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
};
</script>

<style scoped>
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
</style>
