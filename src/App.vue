<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./assets/BarLogo.png" class="h-8" alt="Flowbite Logo" />
        </a>
      </router-link>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <router-link class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" v-if="!isLoggedIn" to="/login" :isLoggedIn=false>
          Login
        </router-link>
        <div v-if="isLoggedIn" class="dropdown2">
          <FuncionesUsuario class="dropbtn2" />
        </div>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-if="!isLoggedIn">
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Sobre Nosotros</a>
          </li>
          <li v-if="!isLoggedIn">
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Servicios</a>
          </li>
          <li v-if="!isLoggedIn">
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Precios</a>
          </li>
          <li v-if="!isLoggedIn">
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contactanos</a>
          </li>
          <li>
            <a
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"><router-link v-if="isLoggedIn" to="/generate">Generar Campaña</router-link></a>
          </li>
          <li>
            <a
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"><router-link v-if="isLoggedIn" to="/my_campaign">Mis Campaña</router-link></a>
          </li>
          <li>
            <a
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"><router-link v-if="isLoggedIn" to="/campaign">Ver Campaña</router-link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <!--nav>
    <div class="dropdown">
      <router-link to="/">
        <img class="logo" src="./assets/BarLogo.png" alt="Logo">
      </router-link>
    </div>
    <nav class="nav1">
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
          <a><router-link to="/">API's</router-link></a>
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
        <a>
          <router-link v-if="isLoggedIn" to="/generate" :isLoggedIn=false>Generar</router-link>
        </a>
      </div>
    </nav>
    <a class ="dropdown2">
      <router-link class="dropbtn" v-if="!isLoggedIn" to="/login" :isLoggedIn=false>Login</router-link>
    </a>
    <div v-if="isLoggedIn" class="dropdown2">
      <FuncionesUsuario class="dropbtn2" />
    </div>
  </nav-->
  <router-view />
</template>

<script>
import { mapState } from 'vuex';
import FuncionesUsuario from '@/components/FuncionesUsuario.vue'


export default {
  name: 'app',
  components: {
    FuncionesUsuario,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
};
</script>

<style>
.router-link-exact-active {
  color: inherit;
  /* Hereda el color del elemento padre */
  text-decoration: inherit;
  /* Hereda el estilo de subrayado del elemento padre */
  /* Agrega aquí cualquier otro estilo que desees heredar */
}

nav a {
  margin: 0;
  padding: 0;
}

/*
.nav1 nav {
  border: 3px solid;
  border-color: white;
  background-color: #737373;
}

body {
  margin: 0px;
}

#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  width: 140px;
  height: 50px;
  margin-right: 0px;
  margin-left: 20px;
}

nav {
  padding: 10px;
  border: 3px solid;
  border-color: transparent;
  background-color: #737373;
  display: flex;
  align-items: center;
  margin-left: 2px;
}

a:-webkit-any-link {
  text-decoration: none;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: white;
  background-color: #737373;
}

.dropbtn {
  background-color: #737373;
  color: white;
  padding: 14px;
  font-size: 16px;
  border: none;
}

.dropbtn2 {
  background-color: #737373;
  color: white;
  font-size: 16px;
  border: none;
  margin-left: auto;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown2 {
  position: relative;
  display: inline-block;
  margin-left: auto;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: opacity 0.5s, max-height 0.5s;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;

  transition: background-color 0.5s;
}

.dropdown-content a:hover {
  background-color: #517f83;
}

.dropdown:hover .dropdown-content {
  display: block;
  background-color: #737373;

}

.dropdown:hover .dropbtn {
  background-color: #A3A3A3;
  color: white;
  transition: background-color 0.5s;
}*/
</style>
