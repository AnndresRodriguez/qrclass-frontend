<template>
  <div>
    <Navbar />
    <Sidebar />
    <Main />
  </div>
</template>
<script>
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import Main from "../components/dashboard/Main";

export default {
  components: { Navbar, Sidebar, Main }
};
</script>
