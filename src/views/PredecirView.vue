<template>
  <div class="predecir-view">
    <form @submit="enviarImagen">
      <label for="fileInput" class="file-label">
        <input type="file" id="fileInput" ref="fileInput" accept="image/*" multiple @change="setPhotoFiles($event.target.name, $event.target.files)" />
        Subir Imagen
      </label>
      <img v-if="imagenSeleccionada" :src="imagenSeleccionadaUrl" class="image-preview" alt="Vista previa de la imagen" />
      <button type="submit" class="upload-button">Enviar</button>
      <button @click="mostrarImagenSeleccionada"> Mostrar</button>
      <div>
  <img v-for="(image, index) in imagenesSeleccionadas" :key="index" :src="image" alt="Selected image">
  </div>
    </form>
      <div class="checkbox-container">
        <h3>Selecciona las clases:</h3>
        <div v-for="(value, key) in classes" :key="key" class="checkbox-item">
          <input type="checkbox" :id="key" :value="key" v-model="selectedClasses" >
          <label :for="key">{{ value }}</label>
        </div>
      <button @click="agregarOpcion"> Agregar Opcion</button>
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
      title: null,
      selectedClasses: [],
      imagenesSeleccionadas: [],
    };
  },
  created() {
    this.selectedClasses = Object.keys(this.classes); // Set selectedClasses to the keys of classes after the component is created
  },
  components: {
    PiePagina,
  },
  methods: {
    setPhotoFiles (fieldName, fileList) {
      this.photoFiles = fileList;
      console.log(this.photoFiles);
      //mostrarImagenSeleccionada();
    },
    mostrarImagenSeleccionada() {
      // show all the images selected
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
      formData.append('photo-' + index, element);
      });
      formData.append('selected_classes', this.classes);
      formData.append('title', this.title);

      axios.post("http://localhost:4000/segmentation/", formData)
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
