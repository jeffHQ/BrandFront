<template>
    <div class="home">
        FUNDACION
    </div>
    <PiePagina/>
  </template>
  
  <script>
  // @ is an alias to /src
  import Presentacion from '@/components/Presentacion.vue'
  import PiePagina from '@/components/PiePagina.vue'
  import Beneficios from '@/components/Beneficios.vue'
  export default {
    name: 'fundacionview',
    components: {
      Presentacion,
      PiePagina,
      Beneficios
    }
  }
  </script>
  <style>
  
  </style>
  