<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Asistencias por Materias</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                v-model="ccodigo"
                type="email"
                class="form-control"
                placeholder="Escriba el codigo de la materia consultar"
              />
              <div class="input-group-btn">
                <button class="btn btn-info" type="submit">
                  <i class="iconob fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Materia</th>
            <th scope="col">Asistencia</th>
            <th scope="col">Codigo QR</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(materia, index) in filtrarMateria" :key="index">
            <th scope="row">{{ materia.codigo }}</th>
            <td>{{ materia.nombre }}</td>
            <td>
              <button
                class="btn btn-light"
                @click="verEstudiantesMateria(materia)"
              >
                Ver
              </button>
            </td>
            <!-- materia.horarios[0].dia === null -->
            <td>
              <template v-if="materia.horarios[0].dia !== null">
                <a
                  @click="assignIDMateria(index)"
                  href=""
                  type="button"
                  class="btn btn-light"
                  data-toggle="modal"
                  data-target="#codigoQR"
                  >Generar QR</a
                >
              </template>
              <template v-else>
                <a @click="alertaCrearHorario" class="btn btn-light"
                  >Generar QR</a
                >
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="codigoQR"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-pq" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Codigo QR-</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <qrcode-vue :value="valueqr" :size="size"></qrcode-vue>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Imprimir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import QrcodeVue from "qrcode.vue";
import { fireToast } from "../../../util/toast";
export default {
  components: {
    QrcodeVue,
  },

  data() {
    return {
      materiasDocente: [],
      materia: {},
      codigo: "",
      ccodigo: "",
      id: 0,
      nombre: "",
      noestudiantes: "",
      valueqr: "https://qrclass-ufps.web.app/asistencia-estudiante",
      size: 300,
    };
  },

  created() {
    this.getAllDataDocente();

    // axios.post()
  },

  methods: {
    generarQR() {},
    getAllDataDocente() {
      axios
        .get(
          `${process.env.VUE_APP_API}/materias/docente/${this.$store.getters.getInfoRole.id}`
        )
        .then((res) => {
          this.materiasDocente = res.data.data;
          console.log(this.materiasDocente);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    verEstudiantesMateria(materia) {
      this.$store.dispatch("listarEstudianteMateria", materia);
      this.$router.replace({ name: "asistencia" });
      console.log("materia que envio de materia asistencia", materia);
    },

    assignIDMateria(idMateria) {
      const materiaSelected = this.materiasDocente[idMateria];

      console.log("materiaSelected", materiaSelected);

      const infoAsistencia = {
        materia: materiaSelected.nombre,
        docente: this.$store.getters.getInfoUser.fullName,
        idMateria: materiaSelected.id,
        idDocente: this.$store.getters.getInfoRole.id,
      };

      axios
        .post(`${process.env.VUE_APP_API}/qr`, infoAsistencia)
        .then((res) => {
          // this.materiasDocente = res.data.data;
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      //  console.log(materiaSelected);

      console.log(infoAsistencia);

      // this.valueqr = encodeURI(`?materia=${materiaSelected.nombre}&docente=${this.$store.getters.getInfoUser.fullName}`)
      //  this.valueqr = JSON.stringify(infoAsistencia);

      this.$store.dispatch("loadDataAsistencia", infoAsistencia);

      //  console.log(infoAsistencia);
    },

    alertaCrearHorario() {
      fireToast(
        "info",
        "Materia sin Horario",
        "Para generar un código QR Debe registrar previamente un horario, (En la sección Consultar Materia puede asignar el horario correspondiente)"
      );
    },
  },
  computed: {
    filtrarMateria() {
      return this.materiasDocente.filter((materia) =>
        materia.codigo.toLowerCase().includes(this.ccodigo)
      );
    },
  },
};
</script>
<style scoped>
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th,
.icono:hover {
  background-color: rgb(188, 0, 22);
  color: #ffffff;
}
</style>
