<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Estudiantes</h2>
      <hr />
      <div>
        <br />
        <p>
          Para realizar el registro de estudantes, por favor descargue el
          siguiente formato
          <a
            href="https://res.cloudinary.com/sigtam/raw/upload/v1606918539/formato-estudiantes-qrclass_gpexph.xlsx"
            target="_blank"
          >
            Formato QR CLASS UFPS</a
          >, llenelo con la informacion indicada y guardelo sin cambiar el
          formato.<br />
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
            Arrastre aquí su archivo excel
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
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { fireToast } from "../../../util/toast";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import XLSX from "xlsx";
import { fixdata, get_header_row } from '../../../util/xslx'

var state={
    tickets:[{ name: "Información acerca de los Estudiantes" }],
    headers:["Campos de estudiantes"],
    nombreMateria: ''
}

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return state
  },

  methods: {
    registrarEstudiante() {},

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    workbook_to_json(workbook) {
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if(roa.length > 0){
          result[sheetName] = roa;
        }
      });
      return result;
    },

  
    handleDragover(e) {
	    e.stopPropagation();
	    e.preventDefault();
	    e.dataTransfer.dropEffect = 'copy';
    },

    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("DROPPED");
      var files = e.dataTransfer.files, i, f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
          var reader = new FileReader(),
          name = f.name;
          reader.onload = function(e) {
            var results, 
                data = e.target.result, 
                fixedData = fixdata(data), 
                workbook= XLSX.read(btoa(fixedData), {type: 'base64'}), 
                firstSheetName = workbook.SheetNames[0], 
                worksheet = workbook.Sheets[firstSheetName];
            state.headers= get_header_row(worksheet);
            results= XLSX.utils.sheet_to_json(worksheet);
            state.tickets=results;
          };
          reader.readAsArrayBuffer(f);
    }
}

  },
};
</script>
<style scoped>
  #drop{
  border: 2px dashed #bbb;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      padding: 25px;
      text-align: center;
      font: 20pt bold,"Vollkorn";
      color: #bbb;
  }
</style>