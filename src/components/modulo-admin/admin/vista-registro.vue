<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Administrador</h2>
      <hr />
      <form @submit.prevent="registrarAdmin">
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
              placeholder="Escriba el nombre completo del administrador a registrar"
              required
              maxlength="100"
              v-model="nombre"
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Documento de Identidad:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-id-card"></i>
            </div>
            <input
              name="name"
              type="text"
              @keypress="validateNumber"
              class="form-control"
              placeholder="Escriba el numero de documento del Admin"
              maxlength="10"
              minlength="5"
              required
              v-model="documento"
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
              placeholder="Escriba el correo institucional (misnombres@ufps.edu.co)"
              pattern=".+@[uU][fF][pP][sS][.][eE][dD][uU][.][cC][oO]"
              title="Solo se permiten cuentas de ufps.edu.co"
              maxlength="45"
              minlength="12"
              required
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
              maxlength="10"
              minlength="7"
              required
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
      administradores: [],
      nombre: "",
      documento: "",
      correo: "",
      telefono: "",
    };
  },
  methods: {
    registrarAdmin() {
      const admin = {
        nombrecompleto: this.nombre,
        documento: this.documento,
        correo: this.correo,
        telefono: this.telefono,
      };

      console.log(admin);

      axios.post(`${process.env.VUE_APP_API}/admin`, admin).then((res) => {
        if (res.data.operation) {
          console.log(res.data);
          fireToast(
             "success",
            "Registro Exitoso",
            "El Nuevo administrador ha sido creado"
          );
          console.log(res.data);
          this.limpiarinput();
        } else {
          console.log(res.data);

          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error en el registro, el documento o correo pertenece a un administrador registrado previamente"
          );
          console.log("registrarAdmin", error);
        }
      });
    },
    limpiarinput() {
      (this.nombre = ""),
        (this.documento = ""),
        (this.correo = ""),
        (this.telefono = "");
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
};
</script>
<style scoped></style>
