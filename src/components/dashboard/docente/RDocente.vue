<template>
  <div class="margin-brand">
    <div class="col-md-10 " id="cssRegistro">
      <h2>Registrar Docente</h2>
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
              placeholder="Escriba el nombre completo del docente a registrar"
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
              placeholder="Escriba el numero de codigo del docente"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Selecciona el departamento</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-check-square"></i>
            </div>
            <select name="departamento" class="form-control">
              <option value="dptoMa">Departamento de Matematicas</option>
              <option value="dptoFi">Departamento de Fisica</option>
              <option value="dptoEl">Departamento de Electronica</option>
              <option value="dptoDi">Departamento de Diseño</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">Correo Electronico</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class=" icono fas fa-at"></i>
            </div>
            <input
              type="email"
              class="form-control"
              placeholder="Escriba el corre institucional (example@ufps.edu.co)"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Numero de Telefono</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-phone"></i>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Escriba el numero de celular."
              required
            />
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
.icono {
  font-size: 30px;
  color: rgb(188, 0, 22);
  margin-right: 0.5em;
}
#cssRegistro h2 {
  text-align: center;
  color: rgb(188, 0, 22);
}
#cssRegistro hr {
  border-top: 1px solid rgb(188, 0, 22);
}
.boton {
  justify-content: center;
  display: flex;
}
#cssRegistro .form-group {
  margin-bottom: 0rem;
}
</style>
