import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./registerServiceWorker";

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (!store.state.login) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";
window.swal = require("sweetalert2");

require("dotenv").config();
window.axios = require("axios");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
