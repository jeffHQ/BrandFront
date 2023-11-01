<template>
    <div class="piepagina">
      <div class="sub_div">
        <ul class="menu">
          <li class="title_section">Sobre Nosotros</li>
          <li class="part_section">Fundacion</li>
          <li class="part_section">Objetivos</li>
          <li class="part_section">Equipo</li>
        </ul>
      </div>
      <div class="sub_div">
        <ul class="menu">
          <li class="title_section">Documentación</li>
          <li class="part_section">Guia de uso</li>
          <li class="part_section">APIs</li>
        </ul>
      </div>
      <div class="sub_div">
        <ul class="menu">
          <li class="title_section">Contacto</li>
          <li class="part_section">Github</li>
          <li class="part_section">Instagram</li>
          <li class="part_section">Facebook</li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .piepagina {
    border: 3px solid;
    border-color: black;
    display: flex;
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
  
  .title_section {
    font-weight: bold;
  }
  
  .part_section {
  }
  </style>
  