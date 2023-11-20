<template>
  <section
    class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">En {{ msg }}
      </h1>
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Queremos que tu negocio crezca
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Nos preocupamos por tu negocio, por eso te ofrecemos una herramienta que te ayudará a generar
        campañas de marketing para que puedas llegar a más clientes.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          <router-link to="/generate">Generar Campaña</router-link>
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <a href="#"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
          Como genero mi campaña
        </a>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: 'Presentacion',
  props: {
    msg: String
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 100px;
  /* Tamaño de letra de 50 */
  background: linear-gradient(50deg, #363634, white, #524636);
  /* Fondo degradado */
  /*background: linear-gradient(45deg, #FF5733, #33FF57); /* Fondo degradado */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* El texto se vuelve transparente para que el fondo degradado sea visible */
  margin-bottom: 10px;
}
</style>
  