<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Descripcion de la Asistencia</h2>
      <br />
      <div class="centrar">
        <div class="card">
          <div class="box">
            <h2>
              Programación Web <br /><br />
              <span> Lunes 8 a 10 a.m </span><br /><br />
              <h6>30/11/2020</h6>
            </h2>
            <i class="far fa-calendar-check fa-4x" style="color: #bc0016"></i>
            <br /><br />
            <span>Docente:</span>
            <h5>Maria del Pilar Rojas Puentes</h5>
            <div>
              <br />
              <button type="button" class="btn btn-primary">
                Marcar Asistencia
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
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
.cssRegistro {
  margin-top: 2%;
}
.centrar {
  justify-content: center;
  display: flex;
}
.card {
  width: 300px;
  min-height: 450px;
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
  top: 45%;
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
