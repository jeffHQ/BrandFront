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
      class="py-2.5 px-5 me-2 mb-10 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Generar
      Campaña</button>
  </div>
  <PiePagina />
</template>

<script>
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'PredecirView',
  data() {
    return {
      images: [],
      tematica: '',
      rubro: '',
      detalles: '',
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
      this.$refs.fileInput.value = null; // Limpia el valor del input de archivo
    },
    eliminarImagen(index) {
      this.images.splice(index, 1);
    },
    async enviarDatos() {

      this.$router.push('/view_campaign');
      /*
      const response = await fetch('tu_endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tematica: this.tematica, rubro: this.rubro, detalles: this.detalles })
      });

      if (response.ok) {
        this.$router.push('/view_campaign');
      } else {
        // maneja el error
      }*/
    }
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
</style>