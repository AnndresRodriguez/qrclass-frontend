<template>
  <div>
    <body>
      <div class="centrar">
        <div class="card">
          <div class="box">
            <div class="wrapper-2 fadeIn first">
              <h2>ASISTENTE DE CLASE</h2>
              <img id="lologin" src="img/ufps.png" class="img-responsive" />
              <br />
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>
<style scoped>
.select {
  border: 1px solid #ccc;
  font-size: 16px;
  height: 34px;
  width: 155px;
}
.bordeInput {
  background: white;
  border: white;
  width: 60%;
}
.infoEstudiante {
  text-align: center;
}
.centrar {
  justify-content: center;
  display: flex;
  margin-top: 2%;
}
.card {
  /* position:absolute; */
  /* top:50%;
    left:50%; */

  width: 500px;
  min-height: 580px;
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
