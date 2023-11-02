<template>
  <nav>

    <nav class="nav1">
      <div class="dropdown">
      <a><router-link class="dropbtn" to="/">Home</router-link></a>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Sobre Nosotros</button>
      <div class="dropdown-content">
        <a><router-link to="/">Contacto</router-link></a>
        <a><router-link to="/">Fundacion</router-link></a>
        <a><router-link to="/">Equipo</router-link></a>
      </div>
    </div>
    
    <div class="dropdown">
      <button class="dropbtn">Documentación</button>
      <div class="dropdown-content">
        <a><router-link to="/">Guia de uso</router-link></a>
        <a><router-link to="/">APIS's</router-link></a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Contacto</button>
      <div class="dropdown-content">
        <a><router-link to="/">Github</router-link></a>
        <a><router-link to="/">Instagram</router-link></a>
        <a><router-link to="/">Facebook</router-link></a>
      </div>
    </div>

    <div class="dropdown">
      <a><router-link class="dropbtn" v-if="!isLoggedIn" to="/login" :isLoggedIn=false>Login</router-link></a>
    </div>
    </nav>


    

    <div v-if="isLoggedIn" class="dropdown2">
      <FuncionesUsuario class="dropbtn2" />
    </div>

  </nav>
  <router-view/>
  
</template>

<script>
import { mapState } from 'vuex';
import FuncionesUsuario from '@/components/FuncionesUsuario.vue'


export default {
  name: 'app',
  components:{
    FuncionesUsuario,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
};
</script>

<style>

.nav1 nav{
  border: 3px solid;
  border-color: white;
  background-color: #b19a78;
}

body {
  margin: 0px;
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


nav {
  padding: 10px;
  border: 3px solid;
  border-color: white;
  background-color: #b19a78;
  display: flex;
  align-items: center;
}

nav a {
}

a:-webkit-any-link {
  text-decoration: none; /* Eliminar el subrayado */
}

nav a.router-link-exact-active {
  text-decoration: none; /* Eliminar el subrayado */
  color: white;
  background-color: #524636;
}

/* Dropdown Button */
.dropbtn {
  background-color: #b19a78;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropbtn2 {
  background-color: #b19a78;
  color: white;
  font-size: 16px;
  border: none;
  margin-left: auto;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown2 {
  position: relative;
  display: inline-block;
  margin-left: auto;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transition: opacity 0.5s, max-height 0.5s;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  
  transition: background-color 0.5s;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #517f83;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  background-color: #524636;

}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #524636;
  color: white;
  transition: background-color 0.5s;
  }
</style>
