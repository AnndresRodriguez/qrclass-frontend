<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Estudiantes</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo Materia: </label>
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
      <div class="cssRegistro">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Lista de Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1151103</th>
              <td>Programacion I</td>
              <td>
                <router-link :to="{ name: 'estudiante' }">Ver</router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
