<template>
  <div>
    <body>
      <div class="wrapper-2 fadeIn first">
        <h2>ASISTENTE DE CLASE</h2>
        <br />
        <img id="lologin" src="img/ufps.png" class="img-responsive" />
        <br />
        <h6>Identifiquese usando su cuenta institucional en:</h6>
        <br />
        <div>
          <form @submit.prevent="validarUsuario">
            <select v-model="selected" required>
              <option disabled value="">Seleccione un Rol</option>
              <option id="Admin" value="1">Administrador</option>
              <option id="Docente" value="2">Docente</option>
              <option id="DirPrograma" value="3">Director de Programa</option>
              <option id="Estudiante" value="4">Estudiante</option>
            </select>
            <br />
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
          </form>
        </div>
      </div>
    </body>
  </div>
</template>
<script>
import GoogleSignInButton from "vue-google-signin-button-directive";
import axios from "axios";
export default {
  directives: {
    GoogleSignInButton
  },
  data() {
    return {
      selected: "",
      clientID: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`
    };
  },
  methods: {
    validarUsuario(fullName, photo, email, name, lastName) {
      this.$store.dispatch("loadInfoUser", {
        fullName: fullName,
        photo: photo,
        email: email,
        name: name,
        lastName: lastName
      });
    },
    OnGoogleAuthSuccess(idToken) {
      // console.log(idToken);
      if (idToken != "") {
        axios
          .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`)
          .then(res => {
            // this.$store.dispatch("loadInfoUser", {
            //   fullName: res.data.name,
            //   photo: res.data.picture,
            //   email: res.data.email,
            //   name: res.data.given_name,
            //   lastName: res.data.family_name
            // });
          });

        this.$router.replace("/dashboard");
      }
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    }
  },
  computed: {
    habilitarboton() {
      return this.selected == "";
    },
  },
};
</script>
