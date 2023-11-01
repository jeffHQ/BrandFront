<template>
  <div class="home">
    <Presentacion msg="BrandVista"/>
    <PiePagina/>
  </div>
</template>

<script>
// @ is an alias to /src
import Presentacion from '@/components/Presentacion.vue'
import PiePagina from '@/components/PiePagina.vue'
export default {
  name: 'HomeView',
  components: {
    Presentacion,
    PiePagina
  }
}
</script>
