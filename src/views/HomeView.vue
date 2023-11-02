<template>
  <div class="home">
    <Presentacion msg="BrandVista"/>
    <Beneficios/>
    <PiePagina/>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentacion from '@/components/Presentacion.vue'
import PiePagina from '@/components/PiePagina.vue'
import Beneficios from '@/components/Beneficios.vue'
export default {
  name: 'HomeView',
  components: {
    Presentacion,
    PiePagina,
    Beneficios
  }
}
</script>
<style>

</style>
