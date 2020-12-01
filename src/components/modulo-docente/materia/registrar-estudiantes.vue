<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Estudiante</h2>
      <hr />
      <form @submit.prevent="registrarEstudiante">
        <div for="archivoEstudiantes" class="form-group">
          <p class="control-label">
            Seleccione el archivo con la lista de estudiantes a registrar:<br />
          </p>
          <input type="file" id="archivoEstudiantes" accept=".csv" />
          <p class="control-label">
            Nota: Solo se permiten archivos en formato .csv.<br />
          </p>
        </div>
        <div class="modal-footer">
          <router-link class="btn btn-info" :to="{ name: 'consulta' }"
            >Volver</router-link
          >
          <button type="submit" class="btn btn-primary">Registrar</button>
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