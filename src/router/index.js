import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PredecirView from '../views/PredecirView.vue'

import ObjetivosView from '../views/ObjetivosView.vue'
import GuiaView from '../views/GuiaView.vue'
import FundacionView from '../views/FundacionView.vue'
import EquipoView from '../views/EquipoView.vue'
import APIView from '../views/APIView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/predecir',
    name: 'predecir',
    component: PredecirView
  },
  {
    path: '/objetivosview',
    name: 'objetivosview',
    component: ObjetivosView
  },
  {
    path: '/guiaview',
    name: 'guiaview',
    component: GuiaView
  },
  {
    path: '/fundacionview',
    name: 'fundacionview',
    component: FundacionView
  },
  {
    path: '/equipoview',
    name: 'equipoview',
    component: EquipoView
  },
  {
    path: '/apiview',
    name: 'apiview',
    component: APIView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
