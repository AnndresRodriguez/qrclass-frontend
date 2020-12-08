<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Programa Academico</h2>
      <hr />
      <form @submit.prevent="registrarProgramaAcademico">
        <div class="form-group">
          <label class="control-label">Nombre del programa</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-user"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el nombre del programa academico"
              required
              maxlength="100"
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
              @keypress="validateNumber"
              placeholder="Escriba el codigo del programa academico"
              required
              maxlength="10"
              minlength="3"
              v-model="codigo"
            />
          </div>
        </div>
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
              v-model="correo"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label"
            >Selecciona el director de programa:</label
          >
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select
              @change="listarDirectores(director)"
              v-model="director"
              name="director"
              class="form-control"
              required
            >
              <template v-for="(director, index) in directores">
                <option :key="index" :value="director">
                  {{ director.codigo }} -
                  {{ director.nombre }}
                </option>
              </template>
            </select>
          </div>
        </div>

        <div class="boton form-group">
          <button type="submit" class="btn btn-info">Registrar</button>
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
      programas: [],
      nombre: "",
      codigo: "",
      correo: "",
      director: {},
      directores: [],
      iddirector: 0,
    };
  },
  created() {
    this.getAllDirectores();
  },
  methods: {
    
    getAllDirectores() {
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

    listarDirectores(director) {
      this.iddirector = director.id;
      console.log(this.iddirector);
    },
    registrarProgramaAcademico() {
      const programa = {
        codigo: this.codigo,
        nombre: this.nombre,
        correo: this.correo,
        idDirector: this.iddirector,
      };
      console.log(programa);

      axios.post(`${process.env.VUE_APP_API}/programa-academicos`, programa).then((res) => {
        console.log("a registrar:", res.data.operation);
        if (res.data.operation) {
          console.log(res.data);
          fireToast(
            "success",
            "Registro Exitoso",
            "El Nuevo director de programa ha sido creado"
          );
          console.log(res.data);
          this.limpiarinput();
        } else {
          console.log(res.data);

          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error en el registro, el codigo o correo pertenece a un programa academico registrado previamente"
          );
          // console.log("registrarProgramaAcademico", error);
        }
      });

    },
    limpiarinput(){
      this.nombre="",
      this.codigo="",
      this.correo=""
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
};
</script>
<style scoped></style>
