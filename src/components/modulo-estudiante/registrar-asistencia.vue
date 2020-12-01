import { Estudiante } from '../../../../qrclass-backend/src/models/estudiante.entity';
<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 infoEstudiante">
      <h2>Descripcion de la Asistencia</h2>
      <hr />
      <div class="panel-body">
        <div class="form-group">
          <h2>Datos de la Materia</h2>

          <div class="card">
            <div class="box">
              <i class="far fa-calendar-check fa-4x" style="color:#bc0016"></i>
              <h2>
                Programación Web <br /> <br />
                <span> Lunes 8 a 10 a.m </span> <br />
                
              </h2>
              <!-- <i class="icono fas fa-user-edit fa-3x"></i> -->
              <h6>30/11/2020</h6>
              <h5>Maria del Pilar Rojas Puentes</h5>
            </div>
          </div>
          <!-- <div>
            <label class="control-label">Nombre:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Nombre de la Matreria"
            /><br />
            <label class="control-label">Codigo:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Codigo de la Matreria"
            /><br />
            <label class="control-label">Horario:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Horario de la Matreria"
            /><br />
            <label class="control-label">Docente:</label>
            <input
              class="bordeInput"
              disabled
              placeholder="Docente Asignado"
            /><br />
          </div> -->
        </div>
        <div class="form-group">
          <h2>Datos del Estudiante</h2>
          <label class="control-label">Nombre:</label>
          <input
            class="bordeInput"
            disabled
            placeholder="Nombre del Estudiante"
          /><br />
          <label class="control-label">Codigo:</label>
          <input
            class="bordeInput"
            disabled
            placeholder="Codigo del Estudiante"
          /><br />
        </div>
        <div>
          <br />
          <button type="button" class="btn btn-primary">
            Marcar Asistencia
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.bordeInput {
  background: white;
  border: white;
  width: 60%;
}
.infoEstudiante {
  text-align: center;
}

.card {
  /* position:absolute; */
  /* top:50%;
    left:50%; */

  width: 300px;
  min-height: 400px;
  background: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.5s;
}
.card:hover {
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);
}
.card .box {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}
.card .box .img {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}
.card .box .img img {
  width: 100%;
  height: 100%;
}
.card .box h2 {
  font-size: 20px;
  color: #262626;
  margin: 20px auto;
}
.card .box h2 span {
  font-size: 17px;
  background: #bc0016;
  color: #fff;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 15px;
}
.card .box p {
  color: #262626;
}
.card .box span {
  display: inline-flex;
}
.card .box ul {
  margin: 0;
  padding: 0;
}
.card .box ul li {
  list-style: none;
  float: left;
}
.card .box ul li a {
  display: block;
  color: #aaa;
  margin: 0 10px;
  font-size: 20px;
  transition: 0.5s;
  text-align: center;
}
.card .box ul li:hover a {
  color: #e91e63;
  transform: rotateY(360deg);
}
</style>
