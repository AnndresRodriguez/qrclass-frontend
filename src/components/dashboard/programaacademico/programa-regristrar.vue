<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Registrar Programa Academico</h2>
      <hr />
      <form>
        <div class="form-group">
          <label class="control-label">Nombre del programa</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class=" icono fas fa-user"></i>
            </div>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Escriba el nombre del programa academico"
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
              placeholder="Escriba el codigo del programa academico"
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
        <div class="boton form-group">
          <button type="submit" class=" btn btn-info">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
