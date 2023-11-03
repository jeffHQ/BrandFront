<template>
  <div class="home">
    <div class="fundacion">
      <h2>FUNDACIÓN</h2>
      <div class="fundacion-content">
        <div class= "color-bg">
        <p>Nuestra fundación es una organización sin fines de lucro comprometida con la promoción y apoyo de iniciativas de marketing innovadoras. Trabajamos en estrecha colaboración con pequeñas y medianas empresas para ayudarles a alcanzar sus objetivos comerciales a través de estrategias de marketing efectivas.</p>
        <p>En la Fundación, creemos en la importancia de la investigación y el análisis de datos para tomar decisiones informadas en marketing. Nuestro equipo de expertos se dedica a brindar asesoramiento y recursos que permiten a las empresas comprender mejor a sus clientes y mejorar sus estrategias de marketing.</p>
        <p>Colaboramos con empresas de diversos sectores para fomentar la creación de estrategias sólidas que se adapten a sus necesidades y metas. Nuestro objetivo es contribuir al crecimiento y éxito de las empresas a través de la aplicación de prácticas de marketing efectivas y centradas en el cliente.</p>
        <img src="@/assets/team.jpg" alt="Image of the group" class="group-image" style="width: 400px; height: 200px;"/>
        </div>
      </div>
    </div>
  </div>
  <PiePagina/>
</template>


<script>
import Presentacion from '@/components/Presentacion.vue'
import PiePagina from '@/components/PiePagina.vue'
import Beneficios from '@/components/Beneficios.vue'
export default {
  name: 'fundacionview',
  components: {
    Presentacion,
    PiePagina,
    Beneficios
  }
}
</script>

<style>
.fundacion {
  text-align: center;
  padding: 20px;
}

.color-bg {
  background-color: #b19a78; 
  padding: 20px; 
  border-radius: 10px; 
  color: #fff; 
}


.fundacion h2 {
  background-color: #d1c5ab;
  padding: 10px;
  border: 2px solid #524636;
  border-radius: 10px;
  font-size: 28px;
  display: inline;
}
</style>
