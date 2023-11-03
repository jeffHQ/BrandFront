<template>
  <div class="home">
    <div class="objetivos">
      OBJETIVOS
      <h3>En esta sección, te presentamos nuestros principales objetivos:</h3>
      <ul class="objetivos-grid">
        <li>
          <p>Ayudar a las empresas a comprender mejor a sus clientes mediante el análisis de datos de imágenes.</p>
          <img src="@/assets/objetivos1.png" alt="Imagen del Objetivo 1" style="width: 500px; height: auto;"/>
        </li>
        <li>
          <p>Facilitar el proceso de toma de decisiones de marketing a través de datos y métricas precisas.</p>
          <img src="@/assets/objetivos2.jpg" alt="Imagen del Objetivo 2" style="width: 300px; height: auto;"/>
        </li>
        <li>
          <p>Brindar asesoramiento para desarrollar estrategias de marketing efectivas y centradas en el cliente.</p>
          <img src="@/assets/objetivos3.png" alt="Imagen del Objetivo 3" style="width: 400px; height: auto;"/>
        </li>
        <li>
          <p>Fomentar la creación de estrategias sólidas que ayuden a alcanzar metas y objetivos de marketing.</p>
          <img src="@/assets/objetivos4.avif" alt="Imagen del Objetivo 4" style="width: 400px; height: auto;" />
        </li>
      </ul>
    </div>
  </div>
  <PiePagina/>
</template>

<script>
import Presentacion from '@/components/Presentacion.vue'
import PiePagina from '@/components/PiePagina.vue'
import Beneficios from '@/components/Beneficios.vue'
export default {
  name: 'objetivosview',
  components: {
    Presentacion,
    PiePagina,
    Beneficios
  }
}
</script>

<style>
.objetivos {
  text-align: center;
  padding: 20px;
}

h3 {
  font-size: 24px;
  margin: 20px 0;
}

.objetivos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 20px;
  list-style: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
}

img {
  max-width: 100%;
}
</style>
