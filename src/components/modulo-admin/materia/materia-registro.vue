<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Materia</h2>
      <hr />
      <form>
        <div class="form-group">
          <label class="control-label">Nombre Completo</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class=" icono fas fa-user"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el nombre de la materia a registrar"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Codigo:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-id-card"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el codigo de la materia"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Seleccione el Programa Academico</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select name="departamento" class="form-control">
              <option value="ingsistemas">Ing. Sistemas</option>
              <option value="ingcivil">Ing. Civil</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Estudiantes</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-users"></i>
            </div>
            <input type="number" class="form-control col-2" value="0" min="1" />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Credritos</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono icono fas fa-chalkboard-teacher"></i>
            </div>
            <input type="number" class="form-control col-2" value="0" min="1" />
          </div>
        </div>
        <label class="control-label"
          >Seleccione el horaro de la materia:<br
        /></label>
        <div class="row ">
          <div class="panels horama">
            <div>
              <label class="control-label">Lunes: </label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Martes:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Miercoles:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
          </div>
          <div class="panels horama">
            <div>
              <label class="control-label">Jueves:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
            <div>
              <label class="control-label">Viernes:</label>
              <input class="esphora" type="time" id="appt" name="appt" />
            </div>
          </div>
        </div>
        <div class="boton form-group">
          <button type="submit" class=" btn btn-info">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.esphora {
  margin-left: 1em;
}
.horama {
  margin-left: 4em;
}
</style>
