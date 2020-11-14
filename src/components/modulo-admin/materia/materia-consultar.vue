<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Consultar Materia</h2>
      <hr />
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Codigo: </label>
        <div class="col-sm-10">
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="1151103" />
              <div class="input-group-btn">
                <button class="btn btn-info" type="submit">
                  <i class="iconob fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <h5 class="h5L">Lista de Materias</h5>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Programa Aca.</th>
            <th scope="col">No.Est.</th>
            <th scope="col">Horario</th>
            <th scope="col">Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Ing. Sistemas</td>
            <td>35</td>
            <td>L 8 a 10, Mi 8 a 10</td>
            <td><i class="icono fas fa-user-edit"></i></td>
          </tr>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Ing. Sistemas</td>
            <td>35</td>
            <td>L 8 a 10, Mi 8 a 10</td>
            <td><i class="icono fas fa-user-edit"></i></td>
          </tr>
          <tr>
            <th scope="row">1151103</th>
            <td>Programacion I</td>
            <td>Ing. Sistemas</td>
            <td>35</td>
            <td>L 8 a 10, Mi 8 a 10</td>
            <td>
              <a href="" data-toggle="modal" data-target="#EditarMateria"
                ><i class="icono fas fa-user-edit"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="EditarMateria"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Actualizar Datos de la Materia</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label class="control-label">Nombre Completo</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="icono fas fa-user"></i>
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
                  <label class="control-label"
                    >Seleccione el Programa Academico</label
                  >
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
                    <input
                      type="number"
                      class="form-control col-2"
                      value="0"
                      min="1"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label">Numero de Credritos</label>
                  <div class="input-group">
                    <div class="input-group-addon">
                      <i class="icono icono fas fa-chalkboard-teacher"></i>
                    </div>
                    <input
                      type="number"
                      class="form-control col-2"
                      value="0"
                      min="1"
                    />
                  </div>
                </div>
                <label class="control-label"
                  >Seleccione el horaro de la materia:<br
                /></label>
                <div class="row">
                  <div class="panels horama">
                    <div>
                      <label class="control-label">Lunes: </label>
                      <input
                        class="esphora"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                    <div>
                      <label class="control-label">Martes:</label>
                      <input
                        class="esphora"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                    <div>
                      <label class="control-label">Miercoles:</label>
                      <input
                        class="esphora"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                  </div>
                  <div class="panels horama">
                    <div>
                      <label class="control-label">Jueves:</label>
                      <input
                        class="esphora"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                    <div>
                      <label class="control-label">Viernes:</label>
                      <input
                        class="esphora"
                        type="time"
                        id="appt"
                        name="appt"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cssRegistro .modal-title {
  text-align: center;
  color: rgb(188, 0, 22);
}
.cssRegistro .form-group {
  margin-bottom: 0rem;
}
.table-hover tbody tr:hover td,
.table-hover tbody tr:hover th,
.icono:hover {
  background-color: rgb(188, 0, 22);
  color: #ffffff;
}
</style>
