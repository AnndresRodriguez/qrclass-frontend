<template>
  <div class="margin-brand">
    <h2>Horario Docente</h2>
  </div>
</template>


<script>
import axios from "axios";
export default {
mounted(){
  this.abriApi();
},

methods: {

   abriApi() {
    axios.get("https://removal-api.herokuapp.com/service")
    .then(respuesta => {console.log(respuesta.data)})
  },





}

  
}
</script>
<style scoped>

</style>