<template>
    <div class="funciones-usuario2">

        <div class="item">
            <img :src=picture>
        </div>

        <div class="item">
            <a>{{ name }}</a>
        </div>

        <div class="item">
            <a><RouterLink class="router-link" to="/predecir">Predecir</RouterLink></a>
        </div>

        

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'funcionesusuario',
  components:{
  },
  computed: {
    ...mapState(['name', 'picture']),
  },
};
</script>

<style>

div a.router-link-exact-active {
  text-decoration: none; /* Eliminar el subrayado */
  color: white;
  background-color: #524636;
}

h3 {
    font-weight: lighter;
    font-size: none;
}

img {
    width: 50px;
}

a {
    color: white;
    padding: 16px;
}

.funciones-usuario2 {
    border: 3px solid !important;
    border-color: white !important;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: white;
}

.item {
    color: white;
}

.router-link:hover {
    background-color: #524636;
    color: white;
    transition: background-color 0.5s;
}
</style>