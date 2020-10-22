<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="main-panel">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

export default {
  components: { Navbar, Sidebar }
};
</script>
