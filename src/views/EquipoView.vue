<template>
  <div class="home" >
    <div class="equipo-title">
      <h2>EQUIPO</h2>
    </div>
    <div class="equipo-list">
      <ul>
        <li>
          <div class="equipo-member">
            <p>Alexandro Chamochumbi Gutierrez</p>
            <img src="@/assets/alexandro.jpg" alt="Foto del Miembro 1" />
            <p>Rol: Desarrollador Frontend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Ronaldo Flores de Soto</p>
            <img src="@/assets/ronaldo.jpg" alt="Foto del Miembro 2" />
            <p>Rol: Desarrollador Frontend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Rodo Vilcarromero Mocoso</p>
            <img src="@/assets/rodo.jpg" alt="Foto del Miembro 3" />
            <p>Rol: Desarrollador Backend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Salvador Olivares Leandro</p>
            <img src="@/assets/salvadoreño.jpg" alt="Foto del Miembro 4" />
            <p>Rol: Desarrollador Backend</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Mauricio Alvarez Julca</p>
            <img src="@/assets/mauricio.jpg" alt="Foto del Miembro 5" />
            <p>Rol: IA</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Jeffry Hilario Quintana</p>
            <img src="@/assets/venezuela.jpg" alt="Foto del Miembro 6" />
            <p>Rol: Accionista mayoritario (temporal)</p>
          </div>
        </li>
        <li>
          <div class="equipo-member">
            <p>Diego Pacheco Ferrel</p>
            <img src="@/assets/diego.jpg" alt="Foto del Miembro 7" />
            <p>Rol: IA</p>
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

.equipo-title {
  text-align: center;
  padding: 20px;
}

.equipo-title h2 {
  background-color: #d1c5ab;
  padding: 10px;
  border: 2px solid #524636;
  border-radius: 10px;
  font-size: 28px;
  display: inline;
}

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
  flex: 0 0 calc(33.33% - 20px); 
  background-color: #d1c5ab; 
  border: 2px solid #524636;
  border-radius: 10px;
  padding: 20px;
}

.equipo-member img {
  width: 220px;
  height: 200px;
}

.equipo-member p {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #363634; 
}
</style>
