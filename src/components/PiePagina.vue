<template>
    <div class="piepagina">
      <div class="sub_div">
        <ul class="menu">
          <a class="title_section">Sobre Nosotros</a>
          <a><router-link class="router-link" to="/">Fundacion</router-link></a>
          <a><router-link class="router-link" to="/">Objetivos</router-link></a>
          <a><router-link class="router-link" to="/">Equipo</router-link></a>
        </ul>
      </div>
      <div class="sub_div">
        <ul class="menu">
          <a class="title_section">Documentacion</a>
          <a><router-link class="router-link" to="/">Guia de Uso</router-link></a>
          <a><router-link class="router-link" to="/">API's</router-link></a>
        </ul>
      </div>
      <div class="sub_div">
        <ul class="menu">
          <a class="title_section">Contacto</a>
          <a><router-link class="router-link" to="/">GitHub</router-link></a>
          <a><router-link class="router-link" to="/">Instagram</router-link></a>
          <a><router-link class="router-link" to="/">Facebook</router-link></a>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>

  .router-link {
    background-color: #d1c5ab;
    padding: 0px;
  }
  a {
    padding-top: 0px;
    background-color: #d1c5ab;
  }
  .piepagina {
    border: 3px solid;
    border-color: white;
    display: flex;
    background-color: #d1c5ab;
    padding: 50px;
    font-size: 1.2em;
  }
  
  .sub_div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .menu {
    padding: 0;
    list-style: none;
    margin-left: 10px;
    align-self: flex-start; /* Alinea el título a la izquierda verticalmente */
  }
  
  ul.menu {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
}

  .title_section {
    font-weight: bold;
    color: #524636;
  }
  
  .part_section {
    color: #363634;
  }
  </style>
  