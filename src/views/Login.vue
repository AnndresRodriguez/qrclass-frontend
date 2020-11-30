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
          <!-- <form @submit.prevent="test"> -->
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
            <!-- <button
              :disabled="habilitarboton"
              class="btn btn-light"
              type="submit"
            > -->
            <img
              src="https://accounts.google.com/favicon.ico"
              alt=""
              width="24"
              height="24"
            />Login with Google
          </button>
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
    };
  },
  methods: {
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

        axios
          .post(
            `${process.env.VUE_APP_API}/${createURL(this.selected)}/email`,
            { email: this.emailToFind, id: this.selected }
          )
          .then((res) => {
            console.log(res.data);

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

              this.$router.replace("/dashboard");
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
  },
};
</script>
