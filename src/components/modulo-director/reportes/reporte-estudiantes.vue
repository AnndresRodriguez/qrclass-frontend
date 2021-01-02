<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <router-link class="btn btn-info" :to="{ name: 'dreportes' }"
        >Volver</router-link
      >
      <h2>Lista de Estudiantes</h2>
      <hr />
      <div>
        <label class="col-sm-2 col-form-label">Materia: </label>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo Estudiante: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                type="email"
                class="form-control"
                placeholder="1151103"
                v-model="ccodigo"
              />
              <div class="input-group-btn">
                <button class="btn btn-info" type="submit">
                  <i class="iconob fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1151103</th>
              <td>Isabela Contreras</td>
              <td>
                <a
                  href=""
                  type="button"
                  class="btn btn-light"
                  data-toggle="modal"
                  data-target="#detalleAsistencia"
                  >ver</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cssRegistro">
          <div
            class="modal fade"
            id="detalleAsistencia"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-pq" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Asistencia por Estudiante</h4>
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
                  <div class="form-group">
                    <label class="control-label">codigo:</label>
                    <label class="control-label">Estudiante</label>
                    <label class="control-label">codigo + Materia</label>
                    <label class="control-label">No. de Asistencias</label>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Generar Reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
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
