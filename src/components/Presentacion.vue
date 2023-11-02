<template>
    <div class="presentacion">
      <h1>{{ msg }}</h1>
      <h4>Somos un servicio que brinda un plan de Marketing a pequeñas y medianas empresas
         ayudando a conocer datos estadisticos de los clientes a partir del análisis de imágenes.</h4>

      <div class="brandvista-1">
        BrandVista
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Presentacion',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .presentacion {
        border: 3px solid;
        border-color: white;
        text-align: center;
        background-color: #b19a78;
  }

  h1 {
  font-size: 100px; /* Tamaño de letra de 50 */
  background: linear-gradient(50deg, #363634, white, #524636); /* Fondo degradado */
  /*background: linear-gradient(45deg, #FF5733, #33FF57); /* Fondo degradado */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* El texto se vuelve transparente para que el fondo degradado sea visible */
  margin-bottom: 10px;
  }

  h3 {
    margin: 40px 0 0;
    color: white;
  }
  h4 {
    color: white;
    font-weight:lighter !important;
    margin-left: 35%;
    margin-right: 35%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  