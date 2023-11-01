<template>
  <div>
    <button @click="login">Login Using Google</button>
  </div>
</template>

<script setup>
import { googleTokenLogin } from "vue3-google-login";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

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