<template>
  <div>
    <Navbar />
    <component :is="menuSidebar"></component>
    <div class="main-panel">
      <div class="margin-brand">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/dashboard/Navbar";
import Sidebaradmin from "../components/dashboard/SidebarAdmin";
import SidebarDocente from "../components/dashboard/SidebarDocente";
import SidebarDirector from "../components/dashboard/SidebarDirector";
import { dashboardRole } from "../util/tools";

export default {
  components: { Navbar, Sidebaradmin, SidebarDocente, SidebarDirector },

  created() {
    this.menuSidebar = dashboardRole(this.$store.getters.getInfoRole.idRole);
  },

  data() {
    return {
      menuSidebar: ""
    };
  }
};
</script>
