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
          <!-- <input type="file" id="archivoEstudiantes" accept=".csv" /> -->
          <input
            type="file"
            id="archivoEstudiantes"
            ref="file"
            @change="handleFileUpload()"
            class="form-control-file"
            required
          />
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
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import XSLX from 'xlsx';
export default {
  components: {
        vueDropzone: vue2Dropzone
  },
  data() {
    return {
      estudiantes: [],
      file: ''
    };
  },

  methods: {

    registrarEstudiante(){

      



    },

    handleFileUpload(){
        this.file = this.$refs.file.files[0];
    }

  
  },
}
</script>
<style scoped></style>