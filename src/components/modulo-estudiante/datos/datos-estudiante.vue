<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Mis Datos</h2>
      <hr />
      <br />
      <form @submit.prevent="actualizarEstudiante">
        <div class="form-group">
          <label class="control-label labD">Nombre Completo</label>
          <input
            name="name"
            type="text"
            class="form-control bordeInput"
            disabled
            v-model="nombre"
          />
        </div>
        <div class="form-group">
          <label class="control-label">Codigo:</label>
          <input
            name="name"
            type="text"
            class="form-control bordeInput"
            disabled
            v-model="codigo"
          />
        </div>
        <div class="form-group">
          <label class="control-label">Correo Electronico</label>
          <input
            type="email"
            class="form-control bordeInput"
            disabled
            v-model="correo"
          />
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Telefono</label>
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
        <div class="boton form-group">
          <button type="submit" class="btn btn-info">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { fireToast } from "../../../util/toast";
import { onlyNumbers } from "../../../util/tools";
import $ from "jquery";
export default {
  data() {
    return {
      id: 0,
      nombre: "",
      codigo: "",
      correo: "",
      telefono: "",
      estadoE: 1,
      ccorreo: "",
    };
  },
  created() {
    this.getEstudiante();
  },
  methods: {
    getEstudiante() {
      axios
        .get(
          `${process.env.VUE_APP_API}/estudiantes/${this.$store.getters.getInfoRole.id}`
        )
        .then((res) => {
          console.log(res.data.operation);
          this.id = res.data.data.id;
          this.nombre = res.data.data.nombre;
          this.codigo = res.data.data.codigo;
          this.correo = res.data.data.correo;
          this.telefono = res.data.data.telefono;
          this.estadoE = res.data.data.estado;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    actualizarEstudiante() {
      const estudiante = {
        nombre: this.nombre,
        documento: this.documento,
        correo: this.correo,
        telefono: this.telefono,
        estado: this.estadoE,
      };
      axios
        .put(`${process.env.VUE_APP_API}/estudiantes`, {
          idEstudiante: this.id,
          estudiante,
        })

        .then((res) => {
          if (res.data.operation) {
            console.log(res.data);

            fireToast(
              "success",
              "Actualización Exitosa",
              "Los datos del estudiante han sido actualizados"
            );
            this.getEstudiante();
          } else {
            console.log(res.data);

            fireToast(
              "error",
              "Error en la actualización",
              "Ha ocurrido un error al actualizar los datos del estudiante, intente nuevamente"
            );
          }
        });
      console.log(estudiante);
      this.getEstudiante();
    },
    validateNumber($event) {
      onlyNumbers($event);
    },
  },
  computed: {
    filtrarEstudiante() {
      return this.estudiantes.filter((estudiante) =>
        estudiante.correo.toLowerCase().includes(this.ccorreo)
      );
    },
  },
};
</script>

<style scoped>
.bordeInput {
  background: white !important;
  border: white !important;
}
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
</style>
