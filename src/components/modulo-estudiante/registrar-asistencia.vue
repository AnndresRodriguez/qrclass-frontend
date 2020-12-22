<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 cssRegistro">
      <h2>Descripcion de la Asistencia</h2>
      <br />
      <div class="centrar">
        <div class="card">
          <div class="box">
            <h2>
              {{ materia }} <br /><br />
              <span> {{ fechaMateria }} </span><br /><br />
              <!-- <h6>30/11/2020</h6> -->
            </h2>
            <i class="far fa-calendar-check fa-4x" style="color: #bc0016"></i>
            <br /><br />
            <span>Docente:</span>
            <h5>{{ docente }}</h5>
            <div>
              <br />
              <button
                v-google-signin-button="clientID"
                type="button"
                class="btn btn-primary"
              >
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
<script>
/* eslint-disable */
import GoogleSignInButton from "vue-google-signin-button-directive";
import axios from "axios";
import { createURL, formatDate } from "../../util/tools";
import { fireToast } from "../../util/toast";
export default {
  directives: {
    GoogleSignInButton,
  },

  created(){

    // axios.get(`${process.env.VUE_APP_API}/qr`)
    axios.get(`${process.env.VUE_APP_API}/qr`)
        .then((res) => {

          console.log(res.data.data);

          this.materia = res.data.data.materia;
          this.docente = res.data.data.docente;
          this.idMateria = res.data.data.idMateria;
          this.idDocente = res.data.data.idDocente;
          this.fechaMateria = formatDate(new Date(res.data.data.createdAt));
          this.idScan = res.data.data.id
          this.fechaRaw = res.data.data.createdAt;



          // this.materiasDocente = res.data.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

    
    // alert(this.$store.getters.getAsistencia.materia)
    // this.materia = this.$store.getters.getAsistencia.materia;
    // this.docente = this.$store.getters.getAsistencia.docente;
    // this.fechaMateria = formatDate(new Date());

  

    // this.materia = this.$store.getters.getAsistencia.materia;
    // this.docente = this.$store.getters.getAsistencia.docente;
    
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

      materia: '',
      docente: '',
      idMateria: '',
      idDocente: '',
      idEstudiante: '',
      fechaMateria: '',
      fechaRaw: '',
      idScan: '',
      estudianteValido: false

    };
  },

  methods: {
    test() {
      console.log("url", createURL(this.selected));
      console.log(
        "endpoint",
        `${process.env.VUE_APP_API}/estudiantes/email`
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

        await axios
          .post(
            `${process.env.VUE_APP_API}/estudiantes/email`,
            { email: this.emailToFind, id: this.selected }
          )
          .then((res) => {
            console.log(res.data);

            if (res.data.operation) {
                this.idEstudiante = res.data.data.id
                this.estudianteValido = true;
            } else {
              fireToast(
                "error",
                "Acceso denegado",
                "El usuario ingresado no tiene acceso al sistema, ingrese con una cuenta autorizada"
              );

              // this.$router.replace("/");
              // this.selected = "";
            }
          })
          .catch((err) => {
            console.log(err);
          });

          if(this.estudianteValido){

            axios.put(`${process.env.VUE_APP_API}/asistencias`,
            { idScan: this.idScan, idEstudiante: this.idEstudiante, idMateria:this.idMateria, idDocente: this.idDocente, asistio: 1, fecha: this.fechaRaw })
            .then(res => {

                if(res.data.operation){
                  fireToast(
                  "success",
                  "Asistecia registrada",
                  `${this.name} se ha registrado su asistencia a la materia ${this.materia} correctamente`);

                  // this.$store.dispatch("loadRoleID", { idRole: 4, id: this.idEstudiante });
                  // this.$store.dispatch("loginUser", true);
                  // this.$router.replace("/dashboard").catch(()=>{});

                }else{

                  fireToast(
                  "error",
                  "Asistencia no registrada",
                  `No se ha registrado su asistencia a la materia ${this.materia} correctamente, intente nuevamente`);
              }

          })

          }   
      }
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
  }
};
</script>
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
  margin-top: 5%;
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
