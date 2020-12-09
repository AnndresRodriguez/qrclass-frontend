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
        <div class="espacio">
          <br />
          <form>
            <!-- <div>
              <input
                class="form-check-input"
                type="radio"
                name="radios"
                id="1"
                value="1"
                checked
              />
              <label for="1">
                Al principio de la clase, se envia por correo electronico
                (Automatico).
              </label>
            </div>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="radios"
                id="2"
                value="2"
                checked
              />
              <label for="2">
                Al finalizar de la clase, se envia por correo electronico
                (Automatico).
              </label>
            </div> -->
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="radios"
                id="3"
                value="3"
                checked
              />
              <label for="3">
                Cuando el docente lo habilite, se envia por correo*.
              </label>
            </div>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="radios"
                id="4"
                value="4"
                checked
              />
              <label for="4">
                Cuando el docente lo habilite, no se envia por correo*.
              </label>
            </div>
            <div>
              <br />
              <p>
                * Si selecciona una de estas opciones, recuerde que para generar
                el codigo QR, debe realizar esta accion con el boton "Generar
                QR" en la lista de asistencias por materia.
              </p>
            </div>

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
<style scoped>
.espacio {
  margin-left: 7%;
}
</style>
