<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Horario</h2>
      <hr />
      <br />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">6:00</th>
            <td>
              <a
                href=""
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#verMateria"
                >ver</a
              >
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">7:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">8:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cssRegistro">
      <div
        class="modal fade"
        id="verMateria"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Detalle de la Materia</h4>
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
                <div class="form-group">
                  <label class="control-label">Horario:</label>
                  <div class="input-group"></div>
                </div>
                <div class="modal-footer">
                  <a
                    data-dismiss="modal"
                    aria-label="Close"
                    class="btn btn-info"
                    >Volver</a
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
