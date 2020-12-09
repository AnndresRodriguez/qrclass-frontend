<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Descripcion de Codigo QR</h2>
      <hr />
      <br />
      <div>
        <div class="detalle">
          <img src="/img/QR.jpg" />
        </div>
        <div>
          <br />
          <ul>
            <li>
              Contiene el Nombre de la Materia desde la cual se genero el
              Codigo.
            </li>
            <br />
            <li>Contiene la fecha en la que se genero.</li>
            <br />
            <li>Contiene el nombre del docente asignado en la materia.</li>
            <br />
            <li>
              Contiene un boton con la accion "Marcar Asistencia" para que el
              estudiante realice las acciones correspondiente y pueda marcar su
              asistencia.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.detalle {
  display: block;
  float: left;
  margin-right: 7%;
}
</style>
