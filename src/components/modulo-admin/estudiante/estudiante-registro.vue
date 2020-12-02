<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Estudiante</h2>
      <hr />
      <form @submit.prevent="registrarEstudiante">
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
              placeholder="Escriba el nombre completo del estudiante a registrar"
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
              placeholder="Escriba el codigo del estudiante"
              required
              maxlength="10"
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
      estudiantes: [],
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
    };
  },
  methods: {
    registrarEstudiante() {
      const estudiante = {
        nombre: this.nombre,
        codigo: this.codigo,
        correo: this.correo,
        telefono: this.telefono,
      };

      console.log(estudiante);
      axios
        .post(`${process.env.VUE_APP_API}/estudiantes`, estudiante)
        .then((res) => {
          fireToast(
            "success",
            "Registro Exitoso",
            "El Nuevo estudiante ha sido creado"
          );
          console.log(res.data);
        })
        .catch((error) => {
          fireToast(
            "error",
            "Error en el registro",
            "Ha ocurrido un error al crear el nuevo estudiente, intente nuevamente"
          );
          console.log("registrarAdmin", error);
        });
    },
  },
};
</script>
<style scoped></style>
