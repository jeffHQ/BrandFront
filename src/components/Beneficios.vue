<template>
    <div class="beneficios">
        <h1 class="titulo">Beneficios</h1>
        <h3 class="subtitulo">Te brindamos un asesoramiento sobre un plan de Marketing que
             te pueda a ayudar a poder analizar tus datos, hacerlo economico 
             e idear un usuario ideal para tu negocio </h3>
        
        <div class="sub-beneficios">
            <div class="sub-sub-beneficios">
                    <div class="icono">
                        <img class="icono" :src="require('@/assets/check.png')">
                    </div>
                    <div class="texto">
                        <h2>Analisis de Datos</h2>
                        <h3>Análisis de datos La capacidad para analizar datos y métricas de 
                            marketing te ayudará a tomar decisiones informadas y ajustar 
                            tu estrategia según sea necesario</h3>
                    </div>
                </div>
            <div class="sub-sub-beneficios">
                    <div class="icono">
                        <img class="icono" :src="require('@/assets/check.png')">
                    </div>
                    <div class="texto">
                        <h2>Orientación al Cliente</h2>
                        <h3>Pon al cliente en el centro de tus decisiones de marketing. 
                            Escucha sus necesidades y preferencias y adapta tu enfoque en consecuencia</h3>
                    </div>
            </div>
            <div class="sub-sub-beneficios">
                    <div class="icono">
                        <img class="icono" :src="require('@/assets/check.png')">
                    </div>
                    <div class="texto">
                        <h2>Estrategia Sólida</h2>
                        <h3>Desarrollar una estrategia de marketing clara
                             y bien definida te ayudará a establecer objetivos, 
                             prioridades y un plan de acción coherente</h3>
                    </div>

            </div>
        </div>
            

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'beneficios',
  components:{
  },
  computed: {
    ...mapState(['name', 'picture']),
  },
};
</script>

<style scoped>
.titulo {
    padding-top: 50px;
}

h1 {
    font-weight: 900;
}

.subtitulo {
    text-align: center;
    padding-left: 600px;
    padding-right: 600px;
    padding-bottom: 40px;
}

h3 {
    text-align: justify;
}

.icono {
    padding: 10px;
}

.sub-sub-beneficios {
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
}

.sub-beneficios {
    display: flex;
    flex-direction: row;
    padding-left: 200px;
    padding-right: 200px;
}
.beneficios {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b19a78;
}
</style>