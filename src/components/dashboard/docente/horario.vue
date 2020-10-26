<template>
  <div class="margin-brand">
    <h2>Horario Docente {{ nombre }}</h2>
    <ul>
      <li v-for="(objeto, index) in lista" :key="index">
        <h4>{{ objeto.name }}</h4>
        <b>{{ objeto.status }}</b>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
export default {
  mounted() {
    this.abriApi();
  },

  data() {
    return {
      lista: [],
      nombre: "Angelica"
    };
  },

  methods: {
    abriApi() {
      axios.get("https://removal-api.herokuapp.com/service").then(respuesta => {
        this.lista = respuesta.data;
        console.log(respuesta.data);
      });
    }
  }
};
</script>
<style scoped>

</style>
