<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Estudiantes</h2>
      <hr />
      <div>
        <br />
        <p>
          Para realizar el registro de estudiantes, por favor descargue el
          siguiente formato EXCEL
          <a href="/files/formato-estudiantes-qrclass.xlsx" download>
            Formato Excel QR CLASS UFPS</a
          >, o el formato en texto plano (txt)
          <a href="/files/formato-qrclass.txt" download>
            Formato Txt QR CLASS UFPS</a
          >
          llenelo con la informacion indicada y guardelo sin cambiar el formato.
          <br />
        </p>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div
            id="drop"
            @drop="handleDrop"
            @dragover="handleDragover"
            @dragenter="handleDragover"
          >
            Arrastre aquí su archivo excel o txt
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h4>Estudiantes a matricular</h4>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <table class="table table-striped table-hover table-condensed">
            <thead>
              <tr>
                <th v-for="(item, index) in headers" :key="index">
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in tickets" :key="idx">
                <td v-for="(key, indice) in item" :key="indice">
                  <label>{{ key }}</label>
                  <p>{{ item.key }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
      <div>
        <button class="btn btn-info" @click="matricularEstudiantes">
          Matricular Estudiantes
        </button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import XLSX from "xlsx";
import { fixdata, get_header_row } from "../../../util/xslx";

var state = {
  tickets: [{ name: "Información acerca de los Estudiantes" }],
  headers: ["Campos de estudiantes"],
  nombreMateria: "",
};

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return state;
  },

  methods: {
    registrarEstudiante() {},

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        if (roa.length > 0) {
          result[sheetName] = roa;
        }
      });
      return result;
    },

    matricularEstudiantes() {

      let estudiantesAMatricular = state.tickets;

      console.log('axios to api',estudiantesAMatricular);

      axios.post(`${process.env.VUE_APP_API}/materias/matriculas`, { estudiantes: estudiantesAMatricular, idMateria: this.$store.getters.getInfoMateria.id })
      .then((res) => {

          if (res.data.operation) {
          console.log(res.data);
          fireToast(
             "success",
             "Matricula exitosa",
             "Los estudiantes han sido matriculados correctamente"
          );
          console.log(res.data);
        
        } else {
          console.log(res.data);

          fireToast(
            "error",
            "Error en la matrícula",
            "Ha ocurrido un error en el matrícula, el documento o correo pertenece a un administrador registrado previamente"
          );
          console.log("matriculaEstudiante", error);
        }
      })
      .catch((err) => {
      console.log(err);
      });      

      // swal
      //   .fire({
      //     title: "Martriculando Estudiantes...",
      //     timer: 3000,
      //     allowOutsideClick: false,
      //     showConfirmButton: false,
      //     willOpen: () => {
      //       swal.showLoading();
      //     },
      //   })
      //   .then((result) => {
      //     fireToast(
      //       "success",
      //       "Matricula Exitosa",
      //       "Se ha matriculado los estudiantes satisfactoriamente en la materia"
      //     );
      //   });
    },

    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    },

    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var files = e.dataTransfer.files,
        i,
        f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader(),
          name = f.name;
        reader.onload = function (e) {
          var results,
            data = e.target.result,
            fixedData = fixdata(data),
            workbook = XLSX.read(btoa(fixedData), { type: "base64" }),
            firstSheetName = workbook.SheetNames[0],
            worksheet = workbook.Sheets[firstSheetName];
          state.headers = get_header_row(worksheet);
          results = XLSX.utils.sheet_to_json(worksheet);
          state.tickets = results;
          // console.log(state.tickets);
        };
        reader.readAsArrayBuffer(f);
      }
    },
  },
};
</script>
<style scoped>
#drop {
  border: 2px dashed #bbb;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  font: 20pt bold, "Vollkorn";
  color: #bbb;
}
</style>
