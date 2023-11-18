<template>
  <div class="predecir-view">
    <form class="submit-form" @submit="enviarImagen">
      <label for="fileInput" class="file-label">
        <input type="file" id="fileInput" ref="fileInput" accept="image/*" multiple @change="setPhotoFiles($event.target.name, $event.target.files)" />
        Subir Imagen
      </label>
    <div class="buttons">
      <button type="submit" class="upload-button">Enviar</button>
      <button @click="mostrarImagenSeleccionada" class="upload-button"> Mostrar</button>
    </div>
    <div class="image-container">
      <img v-for="(image, index) in imagenesSeleccionadas" :key="index" :src="image" alt="Selected image">
    </div>
  </form>
  <div class="title-text">
    <label for="title"></label>
    <input type="text" class="title-input" v-model="title" placeholder="Ingrese la tematica de su campaña" />
  </div>
    <div class="checkbox-container">
      <h3>Selecciona las clases:</h3>
      <div v-for="(value, key) in classes" :key="key" class="checkbox-item">
        <input type="checkbox" :id="key" :value="key" v-model="selectedClasses" >
        <label :for="key">{{ value }}</label>
      </div>
    <!--button @click="agregarOpcion"> Agregar Opcion</!--button-->
    </div>
  </div>
  <PiePagina />
</template>

<script>
import PiePagina from '@/components/PiePagina.vue'
import axios from 'axios';

export default {
  name: 'PredecirView',
  data() {
    return {
      photoFiles: [],
      classes:{ 0: 'background',1: 'aeroplane', 2: 'bicycle', 3: 'bird', 4: 'boat',
                5: 'bottle', 6: 'bus', 7: 'car', 8: 'cat', 9: 'chair',
                10: 'cow', 11: 'diningtable', 12: 'dog', 13: 'horse',
                14: 'motorbike', 15: 'person', 16: 'pottedplant',
                17: 'sheep', 18: 'sofa', 19: 'train', 20: 'tvmonitor' },
      title: "",
      selectedClasses: [],
      imagenesSeleccionadas: [],
    };
  },
  created() {
    // this.selectedClasses = Object.keys(this.classes);  
  },
  components: {
    PiePagina,
  },
  methods: {
    setPhotoFiles (fieldName, fileList) {
      this.photoFiles = [...fileList];
      //mostrarImagenSeleccionada();
    },
    mostrarImagenSeleccionada() {
      // show all the images selected
      // reset the photos already shown
      this.imagenesSeleccionadas = [];
      if (this.photoFiles.length > 0) {
        for (let i = 0; i < this.photoFiles.length; i++) {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            this.imagenesSeleccionadas.push(reader.result);
          });
          reader.readAsDataURL(this.photoFiles[i]);
        }
      }      
    },
    enviarImagen(event) {
      event.preventDefault();
      const formData = new FormData();
      this.photoFiles.forEach((element, index, array) => {
      formData.append('images[]', element);
      });
      formData.append('selected_classes', JSON.stringify(Object.keys(this.selectedClasses)));
      formData.append('title', this.title);

      axios.post("http://localhost:5000/procesar_seg", formData,
      { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(function (result) {
        console.log(result);
      }, function (error) {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.checkbox-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #828f97;
  color: #fff5f5;
  padding: 10px 20px;
  margin: 20px;
  border: 10px;
  border-radius: 4px;
}

#fileInput {
  display: none;
  
}

/* Container for images */
.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 100px; 
  justify-items: center; 
  align-items: center;
}

/* Style for each image */
.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease;

}
/* Hover effect */
.image-container img:hover {
  transform: scale(1.35); /* Slightly enlarge the image */
}

.buttons {
  display: flex;
  justify-content: center; /* Aligns items along the main axis (horizontally) */
  gap: 10px; /* Adjust the space between buttons */
}

.upload-button {
  /* Your button styles */
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.upload-button:hover {
  background-color: #2980b9;
}

.title-text {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 20px;
  width: 33%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.title-input {
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
  background: transparent;
}
</style>
