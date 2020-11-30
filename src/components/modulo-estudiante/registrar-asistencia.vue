<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 infoEstudiante">
      <h2>Descripcion de la Asistencia</h2>
      <hr />
      <div class="panel-body">
        <div class="form-group">
          <h2>Datos de la Materia</h2>
          <div>
            <label class="control-label">Nombre:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Nombre de la Matreria"
            /><br />
            <label class="control-label">Codigo:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Codigo de la Matreria"
            /><br />
            <label class="control-label">Horario:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Horario de la Matreria"
            /><br />
            <label class="control-label">Docente:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Docente Asignado"
            /><br />
          </div>
        </div>
        <div class="form-group">
          <h2>Datos del Estudiante</h2>
          <label class="control-label">Nombre:</label>
          <input
            class="bordeInput"
            disabled
            placeholder="Nombre del Estudiante"
          /><br />
          <label class="control-label">Codigo:</label>
          <input
            class="bordeInput"
            disabled
            placeholder="Codigo del Estudiante"
          /><br />
        </div>
        <div>
          <br />
          <button type="button" class="btn btn-primary">
            Marcar Asistencia
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.bordeInput {
  background: white;
  border: white;
  width: 60%;
}
.infoEstudiante {
  text-align: center;
}
</style>
