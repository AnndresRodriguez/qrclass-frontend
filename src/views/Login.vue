<template>
  <div>
    <body>
      <div class="wrapper-2 fadeIn first">
        <h2>ASISTENTE DE CLASE</h2>
        <br />
        <img
          id="lologin"
          src="img/ufps.png"
          class="img-responsive"
        /><br /><br />
        <h6>Identifiquese usando su cuenta institucional en:</h6>
        <br />
        <!-- <router-link to="/dashboard" active-class="btn btn-light">
          <img
            src="https://accounts.google.com/favicon.ico"
            alt=""
            width="24"
            height="24"
          />Login with Google
        </router-link> -->
        <button v-google-signin-button="clientID" class="btn btn-light">
          <img
            src="https://accounts.google.com/favicon.ico"
            alt=""
            width="24"
            height="24"
          />Login with Google
        </button>
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
      clientID:
        "402309539316-lrei84id8ka8r1abeosec3fo0ubss5v0.apps.googleusercontent.com"
    };
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log(idToken);
      if (idToken != "") {
        axios
          .get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`)
          .then(res => {
            this.$store.dispatch("loadInfoUser", {
              fullName: res.data.name,
              photo: res.data.picture,
              email: res.data.email,
              name: res.data.given_name,
              lastName: res.data.family_name
            });
          });

        this.$router.replace("/dashboard");
      }
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    }
  }
};
</script>
