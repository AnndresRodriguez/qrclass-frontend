<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Configurar Periodo Academico</h2>
      <hr />
      <div>
        <h5>NOTA:</h5>
        <p>
          La configuracion del periodo academico, le permite identificar la
          cantidad de asistencias que van a tomar en cada materia que ud tenga a
          su cargo.
        </p>
        <div>
          <form action="">
            <label>*Esta Opcion es Obligatoria</label>
            <div class="form-group">
              <label class="control-label">Fecha de Inicio</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <input
                    class="form-control"
                    type="date"
                    value=""
                    id="dateinicio"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">Fecha de Fin</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <input
                    class="form-control"
                    type="date"
                    value=""
                    id="datefin"
                    required
                  />
                </div>
              </div>
            </div>
            <label>Una vez definida la el periodo academico, recuerde que este no se puede  modificar.</label>
            <div class="boton form-group">
              <button type="submit" class="btn btn-info">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
