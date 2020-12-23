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
              <h6>Identifiquese usando su cuenta institucional</h6>
              <br />
              <div>
                <div class="d-flex justify-content-around" style="width: 400px">
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                    @click="activate('1')"
                  >
                    <div
                      id="botonAdmin"
                      class="d-flex justify-content-center align-items-center container-icono"
                      style="cursor:pointer"
                    >
                      <i class="fas fa-user-lock fa-2x" style="margin:0"></i>
                    </div>
                    <h6>Administrador</h6>
                  </div>
                  <div @click="activate('2')">
                    <div
                      id="botonDocente"
                      class="d-flex justify-content-center align-items-center container-icono"
                      style="cursor:pointer"
                    >
                      <i
                        class="fas fa-chalkboard-teacher fa-2x"
                        style="margin:0"
                      ></i>
                    </div>
                    <h6>Docente</h6>
                  </div>
                  <div @click="activate('3')">
                    <div
                      id="botonDirPrograma"
                      class="d-flex justify-content-center align-items-center container-icono"
                      style="cursor:pointer"
                    >
                      <i
                        class="fas fa-chalkboard-teacher fa-2x"
                        style="margin:0"
                      ></i>
                    </div>
                    <h6>Dir. Programa</h6>
                  </div>
                  <div @click="activate('4')">
                    <div
                      id="botonEstudiante"
                      class="d-flex justify-content-center align-items-center container-icono"
                      style="cursor:pointer"
                    >
                      <i class="fas fa-user fa-2x" style="margin:0"></i>
                    </div>
                    <h6>Estudiante</h6>
                  </div>
                  <!-- <div @click="redirectScan()">
                    <div
                      id="botonEstudiante"
                      class="d-flex justify-content-center align-items-center container-icono"
                      style="cursor:pointer"
                    >
                      <i class="fas fa-user fa-2x" style="margin:0"></i>
                    </div>
                    <h6>Estudiante</h6>
                  </div> -->
                </div>
                <!-- <form @submit.prevent="test"> -->
                <!-- <select class="select" v-model="selected" required>
                  <option disabled value="">Seleccione un Rol</option>
                  <option id="Admin" value="1">Administrador</option>
                  <option id="Docente" value="2">Docente</option>
                </select> -->
                <!-- <br /> -->
                <br />
                <button
                  :disabled="habilitarboton"
                  class="btn btn-light"
                  v-google-signin-button="clientID"
                >
                  <img
                    src="https://accounts.google.com/favicon.ico"
                    alt=""
                    width="24"
                    height="24"
                  />Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>
<script>
/* eslint-disable */
import GoogleSignInButton from "vue-google-signin-button-directive";
import axios from "axios";
import { createURL } from "../util/tools";
import { fireToast } from "../util/toast";
export default {
  directives: {
    GoogleSignInButton,
  },
  data() {
    return {
      id: "",
      selected: "",
      emailToFind: "",
      fullName: "",
      photo: "",
      email: "",
      name: "",
      lastName: "",
      clientID: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
      botonAdmin: false,
      botonDocente: false
    };
  },
  methods: {

    redirectScan(){
      window.open('https://qrclass-ufps.web.app/scan-estudiante', '_blank');
    },

    
    activate(value){
      this.selected = value;
        if(value === "1"){
botonDirPrograma
          document.getElementById("botonAdmin").classList.add('container-icono-selected', 'icono-selected');
          document.getElementById("botonDocente").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonDirPrograma").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonEstudiante").classList.remove('container-icono-selected', 'icono-selected');
        }else if(value === "2"){

          document.getElementById("botonDocente").classList.add('container-icono-selected', 'icono-selected');
          document.getElementById("botonAdmin").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonDirPrograma").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonEstudiante").classList.remove('container-icono-selected', 'icono-selected');
          
        }else if(value === "3"){

          document.getElementById("botonEstudiante").classList.add('container-icono-selected', 'icono-selected');
          document.getElementById("botonDocente").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonDirPrograma").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonAdmin").classList.remove('container-icono-selected', 'icono-selected');

        }else{

          document.getElementById("botonEstudiante").classList.add('container-icono-selected', 'icono-selected');
          document.getElementById("botonDocente").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonDirPrograma").classList.remove('container-icono-selected', 'icono-selected');
          document.getElementById("botonAdmin").classList.remove('container-icono-selected', 'icono-selected');

        }
    },

    test() {
      console.log("url", createURL(this.selected));
      console.log(
        "endpoint",
        `${process.env.VUE_APP_API}/${createURL(this.selected)}/email`
      );
    },

    async OnGoogleAuthSuccess(idToken) {
      if (idToken != "") {
        await axios
          .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`)
          .then((res) => {
            console.log("google-response", res.data);

            this.emailToFind = res.data.email;
            this.fullName = res.data.name;
            this.photo = res.data.picture;
            this.email = res.data.email;
            this.name = res.data.given_name;
            this.lastName = res.data.family_name;
          });

        // let alert = swal.fire({
        //             title: "Iniciando Sesión, por favor espere....",
        //             allowEscapeKey: false,
        //             allowOutsideClick: false,
        //             showConfirmButton: false,
        //             onOpen: () => {
        //                 swal.showLoading();
        //             }
        //         });

        axios
          .post(
            `${process.env.VUE_APP_API}/${createURL(this.selected)}/email`,
            { email: this.emailToFind, id: this.selected }
          )
          .then((res) => {
            // console.log(res.data);
            // alert.close();
            if (res.data.operation) {
              this.$store.dispatch("loadInfoUser", {
                fullName: this.fullName,
                photo: this.photo,
                email: this.email,
                name: this.name,
                lastName: this.lastName,
              });

              this.$store.dispatch("loadRoleID", {
                idRole: this.selected,
                id: res.data.data.id,
              });
              this.$store.dispatch("loginUser", true);
              
              this.$router.replace("/dashboard").catch(()=>{});
            } else {
              fireToast(
                "error",
                "Acceso denegado",
                "El usuario ingresado no tiene acceso al sistema, ingrese con una cuenta autorizada"
              );

              
              this.$router.replace("/");
              this.selected = "";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
  },
  computed: {
    habilitarboton() {
      return this.selected == "";
    },

    resaltarBoton(){
      return ' .container-icono-selected .icono-selected'

    }
  },
};
</script>
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

.container-icono{

  border: solid red 1px;
  border-radius:50%;
  width: 70px;
  height:70px;
  background: #fff;
  color:#d31024

}

.icono{
  color:#d31024
}


.container-icono-selected{
  background: #d31024;
  color:#fff
}
</style>

