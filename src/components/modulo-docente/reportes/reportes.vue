<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Generar Reportes</h2>
      <hr />
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Reporte Materia</th>
            <th scope="col">Lista Estudiantes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Generar</td>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-link"
                data-toggle="modal"
                data-target="#listarEstudiantes"
                >Ver</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
