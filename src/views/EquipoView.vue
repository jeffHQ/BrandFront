<template>
  <div class="home">
    EQUIPO
    <div class="equipo-list">
      <ul>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 1</p>
            <img src="ruta/a/la/foto1.jpg" alt="Foto del Miembro 1" />
            <p>Rol: Diseñador de Interfaz</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 2</p>
            <img src="ruta/a/la/foto2.jpg" alt="Foto del Miembro 2" />
            <p>Rol: Desarrollador Frontend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 3</p>
            <img src="ruta/a/la/foto3.jpg" alt="Foto del Miembro 3" />
            <p>Rol: Desarrollador Backend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 4</p>
            <img src="ruta/a/la/foto4.jpg" alt="Foto del Miembro 4" />
            <p>Rol: Especialista en Seguridad Web</p>
          </div>
        </li>
        <li>
          <div class= "equipo-member">
            <p>Nombre del Miembro 5</p>
            <img src="ruta/a/la/foto5.jpg" alt="Foto del Miembro 5" />
            <p>Rol: Analista de Datos</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 6</p>
            <img src="ruta/a/la/foto6.jpg" alt="Foto del Miembro 6" />
            <p>Rol: Especialista en Experiencia de Usuario</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Nombre del Miembro 7</p>
            <img src="ruta/a/la/foto7.jpg" alt="Foto del Miembro 7" />
            <p>Rol: Gerente de Proyecto</p>
          </div>
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
  name: 'equipoview',
  components: {
    Presentacion,
    PiePagina,
    Beneficios
  }
}
</script>

<style>
.equipo-list ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.equipo-member {
  margin: 10px;
  text-align: center;
  flex: 1;
}

.equipo-member p {
  font-size: 18px;
  font-weight: bold;
}
</style>

