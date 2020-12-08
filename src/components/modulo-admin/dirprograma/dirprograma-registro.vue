<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Director de Programa Academico</h2>
      <hr />
      <form @submit.prevent="registrarDirector">
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
              placeholder="Escriba el nombre completo del director a registrar"
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
              placeholder="Escriba el numero de codigo del director"
              required
              maxlength="10"
              minlength="5"
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
      directores: [],
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
    };
  },
  methods: {
    
    registrarDirector() {
      const director = {
        nombre: this.nombre,
        codigo: this.codigo,
        correo: this.correo,
        telefono: this.telefono,
      };

      console.log(director);
      axios.post(`${process.env.VUE_APP_API}/directores`, director).then((res) => {
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
            "Ha ocurrido un error en el registro, el documento o correo pertenece a un director de programa registrado previamente"
          );
          console.log("registrarDirector", error);
        }
      });
    },
    limpiarinput(){
      this.nombre= "",
      this.codigo="",
      this.correo="",
      this.telefono=""
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
