<template>
  <div class="home">
    <div class="objetivos">
      <div class="objetivos-title">OBJETIVOS</div>
      <h3 class="titulo">En esta sección, te presentamos nuestros principales objetivos:</h3>
      <ul class="objetivos-grid">
        <li class="objetivo-li">
          <p class="objetivos-title">Ayudar a las empresas a comprender mejor a sus clientes mediante el análisis de datos de imágenes</p>
          <img src="@/assets/objetivos1.png" alt="Imagen del Objetivo 1" class="imagen-objetivo" style="width: 500px; height: 250px;"/>
        </li>
        <li class="objetivo-li">
          <p class="objetivos-title">Facilitar el proceso de toma de decisiones de marketing a través de datos y métricas precisas</p>
          <img src="@/assets/objetivos2.jpg" alt="Imagen del Objetivo 2" class="imagen-objetivo" style="width: 500px; height: 250px;" />
        </li>
        <li class="objetivo-li">
          <p class="objetivos-title">Brindar asesoramiento para desarrollar estrategias de marketing efectivas y centradas en el cliente</p>
          <img src="@/assets/objetivos3.avif" alt="Imagen del Objetivo 3" class="imagen-objetivo" style="width: 500px; height: 250px;"/>
        </li>
        <li class="objetivo-li">
          <p class="objetivos-title">Fomentar la creación de estrategias sólidas que ayuden a alcanzar metas y objetivos de marketing</p>
          <img src="@/assets/objetivos4.avif" alt="Imagen del Objetivo 4" class="imagen-objetivo" style="width: 500px; height: 250px;" />
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

.objetivos-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #363634;
}

.titulo {
  font-size: 28px;
  margin: 20px 0;
  font-weight: bold;
  color: #524636;
}

.objetivos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 0;
}

.objetivo-li {
  background-color: #d1c5ab;
  border-radius: 10px;
}

.objetivo {
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
  font-family: "Arial", sans-serif;
  color: #363634;
}

.imagen-objetivo {
  max-width: 100%;
  border: 2px solid #d1c5ab;
  border-radius: 10px;
}
</style>

