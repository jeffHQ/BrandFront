<template>
  <div class="flex justify-center mt-10">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
      Tu campaña ha sido generada con éxito
    </h1>
  </div>
  <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    Abajo podrás encontrar los datos de tu campaña, esperamos que esta campaña te ayude a llegar a los clientes que
    buscas.
  </p>

  <img class="rounded-full w-[500px] h-[400px] mt-8 mb-8" :src="image" alt="image description">

  <div class="relative overflow-x-auto w-[1000px] mx-auto mb-10">
    <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-black">{{ campaign.DESCRIPCION }}</h2>
  </div>

  <div class="relative overflow-x-auto w-[700px] mx-auto mb-10">
    <table class="w-full text-sm text-left text-gray-700">
      <thead class="text-xs text-gray-900 uppercase bg-gray-200">
        <tr>
          <th scope="col" class="px-6 py-3 border-gray-400">
            Nombres recomendados para tu campaña
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b border-gray-400" v-for="(nombre, index) in campaign.NOMBRES" :key="index">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ nombre }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black">
    Ideas:
  </p>
  <div class="flex justify-center mt-4 mb-4" v-for="(idea, index) in campaign.IDEAS" :key="index">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 font-normal text-gray-700">{{ idea }}</p>
      </div>
    </a>
  </div>
  
  <p class="mb-6 text-lg font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black">
    Colaboraciones:
  </p>
  <div class="flex justify-center mt-10 mb-10">
  <ul class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-4" v-for="(colaboracion, index) in campaign.COLABORACIONES" :key="index">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ colaboracion }}</p>
    </li>
  </ul>
</div>



  <PiePagina />
</template>

<script>
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'ViewCampaignView',
  components: {
    PiePagina,
  },
  data() {
    return {
      campaign: '',
      image: ''
    }
  },
  mounted() {
    let campaign = sessionStorage.getItem('campaign');
    this.campaign = JSON.parse(campaign);
    this.image = sessionStorage.getItem('image');
  }
}

</script>