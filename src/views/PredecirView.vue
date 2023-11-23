<template>
  <div class="flex justify-center mt-10">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
      Genera tu campaña
    </h1>
  </div>
  <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    A continuación te pediremos algunos datos para generar tu campaña, se lo más específico posible para que podamos
    generar una campaña que se adapte a tus necesidades.
  </p>

  <div class="flex justify-center">
    <div class="relative h-11 w-1/2 min-w-[200px] m-4">
      <input v-model="tematica"
        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " />
      <label
        class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Temática para tu campaña
      </label>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="relative h-11 w-1/2 min-w-[200px] m-4">
      <input v-model="rubro"
        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " />
      <label
        class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Rubro de tu negocio
      </label>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
      <div class="relative w-full min-w-[200px]">
        <textarea v-model="detalles"
          class="peer h-full min-h-[300px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "></textarea>
        <label
          class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Danos más detalles sobre tu campaña
        </label>
      </div>
    </div>
  </div>

  <div class="center-container">
    <div class="mb-3">
      <label for="formFileMultiple" class="mb-2 inline-block text-neutral-700 dark:text-neutral-200 label">
        Sube tus imagenes
      </label>
      <input ref="fileInput" @change="cargarImagen"
        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file" id="formFileMultiple" multiple />
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <div v-for="(image, index) in images" :key="index" class="relative">
      <img class="h-auto max-w-full rounded-lg" :src="image" alt="">
      <button @click="eliminarImagen(index)"
        class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">X</button>
    </div>
  </div>

  <div class="flex justify-center">
    <button @click="enviarDatos" type="button"
      class="py-2.5 px-5 me-2 mb-10 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      Generar Campaña</button>
  </div>

  <div v-if="loading" class="loading-screen">
    <div role="status">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    Generando ideas...
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
      images: [],
      classes: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17],
      tematica: '',
      rubro: '',
      detalles: '',
      loading: false,
    };
  },
  components: {
    PiePagina,
  },
  methods: {
    cargarImagen(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.images.push(URL.createObjectURL(files[i]));
      }
      //this.$refs.fileInput.value = null; // Limpia el valor del input de archivo
    },
    eliminarImagen(index) {
      this.images.splice(index, 1);
    },
    async enviarDatos() {
      const formData = new FormData();
      formData.append('tematica', this.tematica);
      formData.append('rubro', this.rubro);
      formData.append('detalles', this.detalles);
      formData.append('classes', this.classes);
      if (this.images) {
        for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
          formData.append(`images[]`, this.$refs.fileInput.files[i]);
      }
      }
      for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }
      this.loading = true;
      axios.post("http://127.0.0.1:5000/procesar_seg", formData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          console.log(response);
          // COMENTAR TODO LO DE ABAJO SI NO VAS A USAR CHAT GPT  Y SOLO PRUEBAS EN CONSOLA
          sessionStorage.setItem('campaign', JSON.stringify(response.data[2].campaign));
          sessionStorage.setItem('image', response.data[3].image)
          sessionStorage.setItem('campaign', JSON.stringify(response.data[3].titles));
          this.$router.push('/view_campaign');
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.center-container {
  display: flex;
  justify-content: center;
}

#formFileMultiple {
  width: 150%;
  padding: 5px;
  font-size: 14px;
  color: black;
}

.label {
  color: black;
  display: flex;
  justify-content: center;

}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Ajusta el grid para tener 3 columnas */
  gap: 4rem;
  /* Ajusta el espacio entre las imágenes */
  justify-content: center;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
}

img {
  width: 100%;
  /* Ajusta el ancho de las imágenes a 100% */
  height: auto;
  /* Mantiene la proporción de las imágenes */
  margin: auto;
}

button {
  margin: 1rem;
  /* Ajusta el margen del botón */
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
}</style>