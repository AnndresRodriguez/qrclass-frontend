<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Horario</h2>
      <hr />
      <br />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">6:00</th>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#verMateria"
                >ver</a
              >
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">7:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">8:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="verMateria"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Detalle de la Materia</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label class="control-label">Nombre:</label>
                  <input class="bordeInput" disabled v-model="nombre" /><br />

                  <label class="control-label">Codigo: </label>
                  <input class="bordeInput" disabled v-model="codigo" /><br />

                  <label class="control-label">Programa Academico: </label>
                  <input class="bordeInput" disabled v-model="programa" /><br />

                  <label class="control-label">No. de Estudiantes: </label>
                  <input
                    class="bordeInput"
                    disabled
                    v-model="noestudiantes"
                  /><br />

                  <label class="control-label">No. de Creditos: </label>
                  <input
                    class="bordeInput"
                    disabled
                    v-model="nocreditos"
                  /><br />

                  <label class="control-label">Horario: </label>
                  <input
                    class="bordeInput"
                    disabled
                    v-model="nombre"
                    placeholder="horaio de a materia"
                  /><br />
                </div>
                <div class="modal-footer">
                  <a
                    data-dismiss="modal"
                    aria-label="Close"
                    class="btn btn-info"
                    >Volver</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      materiasDocente: [],
      materia: {},
      codigo: "",
      id: 0,
      nombre: "",
      ccodigo: "",
      programa: "",
      nocreditos: "",
      noestudiantes: "",
      horario: "",
    };
  },

  created() {
    this.getAllDataDocente();
  },

  methods: {
      getAllDataDocente(){

        axios.get(`${process.env.VUE_APP_API}/materias/docente/${this.$store.getters.getInfoRole.id}`)
        .then( res => {
          this.materiasDocente = res.data.data;
          console.log(this.materiasDocente)
        })
        .catch( err => {
          console.log(err);
        })

      }
      
  },  

}
</script>

<style scoped>
.bordeInput {
  background: white;
  border: white;
  width: 60%;
}
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
</style>
