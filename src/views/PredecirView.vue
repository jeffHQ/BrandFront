<template>
  <div class="predecir-view">
    <form @submit="enviarImagen">
      <label for="fileInput" class="file-label">
        <input type="file" id="fileInput" ref="fileInput" accept="image/*" @change="cargarImagen" />
        Subir Imagen
      </label>
      <img v-if="imagenSeleccionada" :src="imagenSeleccionadaUrl" class="image-preview" alt="Vista previa de la imagen" />
      <button type="submit" class="upload-button">Enviar</button>
    </form>
  </div>
  <PiePagina />
</template>

<script>
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'PredecirView',
  data() {
    return {
      imagenSeleccionada: null,
      imagenSeleccionadaUrl: null,
    };
  },
  components: {
    PiePagina,
  },
  methods: {
    cargarImagen(event) {
      this.imagenSeleccionada = event.target.files[0];
      this.mostrarImagenSeleccionada();
    },
    mostrarImagenSeleccionada() {
      if (this.imagenSeleccionada) {
        const reader = new FileReader();
        reader.readAsDataURL(this.imagenSeleccionada);
        reader.onload = (e) => {
          this.imagenSeleccionadaUrl = e.target.result;
        };
      } else {
        this.imagenSeleccionadaUrl = null;
      }
    },
    enviarImagen(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append('imagen', this.imagenSeleccionada);

      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('La imagen se ha subido con éxito:', data);
        })
        .catch(error => {
          console.error('Error al subir la imagen:', error);
        });
    },
  },
};
</script>

<style scoped>
.predecir-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
}

.file-label {
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
}

#fileInput {
  display: none;
}

.image-preview {
  max-width: 1000px;
  max-height: 300px;
  margin-top: 10px;
  width: 500px;
}

.upload-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.upload-button:hover {
  background-color: #2188c3;
  transform: scale(1.1);
}
</style>
