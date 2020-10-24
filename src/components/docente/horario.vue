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
/* eslint-disable */
import axios from "axios";
export default {

  mounted(){
    this.getApi();
  },

  data(){
     return {
       nombre: 'Andres',
       datosApi: []
     }
  },

  methods: {
     getApi(){
        axios.get('https://removal-api.herokuapp.com/service')
        .then(respuesta => {
          this.datosApi = respuesta.data;
          console.log(respuesta.data);
        })
     }
  },
};
</script>
