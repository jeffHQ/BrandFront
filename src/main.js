import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'
import Vuex from 'vuex'

const app = createApp(App);
app.use(Vuex)
app.use(store);
app.use(router);

app.use(vue3GoogleLogin, {  clientId: '417399941555-d7tndr3frgjgj74kumm468ff14c0d40i.apps.googleusercontent.com'});

app.mount('#app');