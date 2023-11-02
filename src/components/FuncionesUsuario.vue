<template>
    <div class="funciones-usuario2">

        <div class="item">
            <img :src=picture>
        </div>

        <div class="item">
            <h3>{{ name }}</h3>
        </div>

        <div class="item">
            <RouterLink to="/predecir">Predecir</RouterLink>
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

img {
    width: 50px;
}

.funciones-usuario2 {
    border: 3px solid !important;
    border-color: white !important;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.item {
    padding: 10px;
}
</style>