<template>
  <nav>
    <div class="dropdown">
      <router-link class="dropbtn" to="/">Home</router-link>
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
      <router-link v-if="!isLoggedIn" to="/login" :isLoggedIn=false>Login</router-link>
    </div>

    <div v-if="isLoggedIn" class="dropdown">
      <FuncionesUsuario class="dropbtn" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  border: 3px solid;
  border-color: black;
  background-color: #04AA6D;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
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
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  transition: background-color 0.5s;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;

}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
  
  transition: background-color 0.5s;
  }
</style>
