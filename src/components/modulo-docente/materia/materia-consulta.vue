<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Materia</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="1151103" />
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
      <br />
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">No.Est.</th>
            <th scope="col">Horario</th>
            <th scope="col">Lista Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>35</td>
            <td>L 8 a 10, Mi 8 a 10</td>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-link"
                data-toggle="modal"
                data-target="#ver"
                >Ver</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="ver"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Lista de Estudiantes</h4>
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
              <router-link
                data-dismiss="modal"
                :to="{ name: 'registrar-estudiantes' }"
                >Registrar Estudiantes</router-link
              >
              <p>Materia: Calculo I</p>
              <p>Codigo: 1151101</p>
              <p>No. de Estudiantes: 35</p>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre Estudiante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1151123</th>
                    <td>Juan Jose Camargo</td>
                  </tr>
                  <tr>
                    <th scope="row">1151124</th>
                    <td>Juan Luis Sandoval</td>
                  </tr>
                  <tr>
                    <th scope="row">1151125</th>
                    <td>Andrea Gutierrez</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <a data-dismiss="modal" aria-label="Close" class="btn btn-info"
                >Volver</a
              >
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
       materiasDocente: []
    }
  },

  created() {
      this.getAllDataDocente();

   
      
   // axios.post()
  },

  methods: {
      getAllDataDocente(){

        axios.post(`${process.env.VUE_APP_API}/materias/${this.$store.getters.getInfoRole.id}`)
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
