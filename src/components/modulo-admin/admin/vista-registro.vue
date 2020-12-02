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
              placeholder="Escriba el nombre completo del adminitrador a registrar"
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
              class="form-control"
              placeholder="Escriba el numero de documento de identidad"
              required
              maxlength="10"
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
              pattern=".+@[uU][fF][pP][sS][.][eE][dD][uU][.][cC][oO]"
              title="Solo se permiten cuentas de ufps.edu.co"
              required
              maxlength="45"
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
              placeholder="Escriba el numero de celular."
              required
              maxlength="10"
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
      axios
        .post(`${process.env.VUE_APP_API}/admin`, admin)
        .then((res) => {
          fireToast(
            "success",
            "Registro Exitoso",
            "El Nuevo administrador ha sido creado"
          );
          console.log(res.data);
        })
        .catch((error) => {
          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error al crear el nuevo administrador, intente nuevamente"
          );
          console.log("registrarAdmin", error);
        });
    },
  },
};
</script>
<style scoped></style>
