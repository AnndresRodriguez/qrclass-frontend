<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Configurar Notificaciones</h2>
      <hr />
      <div>
        <h5>NOTA:</h5>
        <ul>
          <li>
            Esta opcion le permite definir como se van a generar los codigos QR
          </li>
          <li>Una ve generado el codigo QR, se le envia una copia al correo</li>
        </ul>
        <div>
          <form>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Al principio de la clase, se envia por correo electronico
                (Automatico).
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked
              />
              <label class="form-check-label" for="exampleRadios2">
                Al finalizar de la clase, se envia por correo electronico
                (Automatico).
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                checked
              />
              <label class="form-check-label" for="exampleRadios3">
                Cuando el docente lo habilite, se envia por correo*.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios4"
                value="option4"
                checked
              />
              <label class="form-check-label" for="exampleRadios4">
                Cuando el docente lo habilite, no se envia por correo*.
              </label>
            </div>
            <label
              >* Si selecciona una de estas opciones, recuerde que para generar
              el codigo QR, debe realizar esta accion con el boton "Generar QR"
              en la lista de asistencias por materia.</label
            >
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
