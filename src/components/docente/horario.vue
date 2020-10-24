<template>
  <div class="margin-brand">
    <h2>Horario Docente {{ nombre }}</h2>
    <ul>
      <li v-for="(objeto, index) in datosApi" :key="index">
        <h4>{{ objeto.name }}</h4>
        <b>{{ objeto.status }}</b>
      </li>
    </ul>
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
