<template>
  <div>
    <form @submit="enviarImagen">
      <input type="file" ref="fileInput" accept="image/*" @change="cargarImagen" />
      <button type="submit">Subir Imagen</button>
    </form>
  </div>
  <PiePagina/>
</template>

<script>

import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'PredecirView',
  data() {
    return {
      imagenSeleccionada: null,
    };
  },
  components: {
    PiePagina,
  },
  methods: {
    cargarImagen(event) {
      this.imagenSeleccionada = event.target.files[0];
    },
    enviarImagen(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append('imagen', this.imagenSeleccionada);

      // Reemplaza la URL con la dirección de tu API
      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('La imagen se ha subido con éxito:', data);
          // Puedes realizar acciones adicionales aquí, como mostrar una confirmación al usuario.
        })
        .catch(error => {
          console.error('Error al subir la imagen:', error);
          // Maneja los errores y proporciona retroalimentación al usuario si es necesario.
        });
    },
  },
};
</script>
