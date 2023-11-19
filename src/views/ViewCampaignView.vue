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

  <img class="rounded-full w-[500px] h-[400px] mt-8 mb-8" src="/Padre.webp" alt="image description">

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
        <tr class="bg-white border-b border-gray-400">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            Héroes de casa: Celebrando a papá
          </th>
        </tr>
        <tr class="bg-white border-b border-gray-400">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            Gracias, Papá: Un día para celebrar
          </th>
        </tr>
        <tr class="bg-white border-gray-400">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            Papás protagonistas: Su día especial
          </th>
        </tr>
      </tbody>
    </table>
  </div>


  <div class="flex justify-center mt-4 mb-4">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Campañas personalizadas</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.</p>
      </div>
    </a>
  </div>

  <div class="flex justify-center mt-4 mb-4">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Clima variado</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.</p>
      </div>
    </a>
  </div>

  <div class="flex justify-center mt-4 mb-4">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Eventos y actividades temáticas</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.</p>
      </div>
    </a>
  </div>

  <div class="flex justify-center mt-4 mb-4">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Marketing digital</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.</p>
      </div>
    </a>
  </div>

  <div class="flex justify-center mt-4 mb-4">
    <a href="#"
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-auto">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/personalizacion.jpg" alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Colaboraciones</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far,
          in reverse chronological order.</p>
      </div>
    </a>
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
}

</script>