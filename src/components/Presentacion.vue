<template>
    <div class="presentacion">
      <h1>{{ msg }}</h1>
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
        border-color: black;
        text-align: center;
        background-color: #583d34;
    }

  h1 {
  font-size: 100px; /* Tamaño de letra de 50 */
  background: linear-gradient(45deg, #FF5733, #33FF57); /* Fondo degradado */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* El texto se vuelve transparente para que el fondo degradado sea visible */
}

  h3 {
    margin: 40px 0 0;
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
  