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
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Ver</td>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#codigoQR"
                >Generar QR</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Ver</td>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#codigoQR"
                >Generar QR</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>
              <router-link :to="{ name: 'asistencia' }">Ver</router-link>
            </td>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#codigoQR"
                >Generar QR</a
              >
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
              <h4 class="modal-title">Codigo QR</h4>
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
              <img class="" src="/img/qr_img.png" />
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
