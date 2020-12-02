<template>
  <div class="main-header">
    <div class="logo-header" style="background-color:#bc0016 ">
      <div class="nav-toggle">
        <button class="btn btn-toggle toggle-sidebar">
          <i class="icon-menu"></i>
        </button>
      </div>
      <button
        class="navbar-toggler sidenav-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="icon-menu"></i>
        </span>
      </button>
      <a href="index.html" class="logo">
        <img
          id="logoHorizontal"
          src="/img/blanco.png"
          alt="navbar brand"
          class="navbar-brand"
        />
      </a>

      <button class="topbar-toggler more">
        <i class="icon-options-vertical"></i>
      </button>
    </div>
    <nav
      class="navbar navbar-header navbar-expand-lg"
      style="background-color:#bc0016"
    >
      <div class="container-fluid">
        <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
          <li class="nav-item toggle-nav-search hidden-caret">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#search-nav"
              role="button"
              aria-expanded="false"
              aria-controls="search-nav"
            >
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li class="nav-item dropdown hidden-caret"></li>

          <li class="nav-item dropdown hidden-caret">
            <a
              class="dropdown-toggle profile-pic"
              data-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <div class="avatar-sm">
                <img
                  :src="photo"
                  alt="imagen-perfil"
                  class="avatar-img rounded-circle"
                />
              </div>
            </a>
            <ul class="dropdown-menu dropdown-user animated fadeIn">
              <div class="dropdown-user-scroll scrollbar-outer">
                <li>
                  <a href="" class="dropdown-item" @click="cerrarSesion">
                    Cerrar Sesión
                  </a>
                  <!-- <router-link to="/" active-class="dropdown-item"
                    ></router-link
                  > -->
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>
<script>
/* eslint-disable */
import userMixin from "../../mixins/userMixin";
export default {
  mixins: [userMixin],
  methods: {
    cerrarSesion() {
      localStorage.clear();
      this.$router.push({ name: "login" }).catch(()=>{});
    }
  }
};
</script>
