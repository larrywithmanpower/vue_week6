import { createApp } from 'vue';
import { bootstrap } from 'bootstrap/dist/js/bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(bootstrap)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app');
