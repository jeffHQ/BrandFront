<template>
    <div class="funciones-usuario2">
        <!--div class="item">
            <img :src=picture>
        </div-->
        <button type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" :src=picture alt="user photo">
        </button>
        <div class="item">
            <a>{{ name }}</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'funcionesusuario',
    components: {
    },
    computed: {
        ...mapState(['name', 'picture']),
    },
};
</script>

<style>
/*
div a.router-link-exact-active {
    text-decoration: none;
    color: white;
    background-color: #737373;
}
*/
h3 {
    font-weight: lighter;
    font-size: none;
}

img {
    width: 50px;
}

a {
    color: white;
    padding: 16px;
}

.funciones-usuario2 {
    border: 3px solid !important;
    border-color: transparent !important;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: white;
}

.item {
    color: white;
}

/*
.router-link:hover {
    background-color: #A3A3A3;
    color: white;
    transition: background-color 0.5s;
}*/

</style>