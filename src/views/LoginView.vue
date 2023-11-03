<template>
  <div>
    <button @click="login" class="elegant-button">Login Using Google</button>
  </div>
  <PiePagina/>
  
</template>


<script setup>
import { googleTokenLogin } from "vue3-google-login";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import PiePagina from '@/components/PiePagina.vue'



const store = useStore();
const router = useRouter();

const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response);
    const accessToken = response['access_token'];

    fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const name = data['name'];
        const picture = data['picture'];
        store.dispatch('login', {name, picture});
        router.push({ name: "home" });
      })
      .catch(error => {
        console.error('Error al obtener datos del perfil del usuario:', error);
      });
  });
}
</script>

<style scoped>
.elegant-button {
  background-color: #3498db; /* Color de fondo del botón */
  color: #fff; /* Color del texto del botón */
  padding: 10px 20px; /* Relleno interno del botón */
  border: none; /* Borde del botón */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  transition: background-color 0.3s, transform 0.3s; /* Transición de color de fondo y transformación (escala) */
}

.elegant-button:hover {
  background-color: #2188c3; /* Cambia el color de fondo cuando el cursor está sobre el botón */
  transform: scale(1.1); /* Hace que el botón se agrande un poco al pasar el cursor */
}
</style>

<script>
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'loginview', // Puedes darle un nombre al componente si lo deseas
  components: {
    PiePagina
  }
}
</script>