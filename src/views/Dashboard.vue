<template>
  <div>
    <Navbar />
    <Sidebar />
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
import Sidebar from "../components/dashboard/Sidebar";

export default {
  components: { Navbar, Sidebar }
};
</script>
