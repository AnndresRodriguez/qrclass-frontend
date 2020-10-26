<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Administrador</h2>
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
              placeholder="Escriba el nombre completo del adminitrador a registrar"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Documento de Identidad:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="icono fas fa-id-card"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el numero de documento de identidad"
              required
            />
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
.cssRegistro h2 {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro hr {
  border-top: 1px solid rgb(188, 0, 22);
}
.boton {
  justify-content: center;
  display: flex;
}
</style>
