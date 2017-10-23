import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import ptBR from 'vee-validate/dist/locale/pt_BR';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost/api-php/';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, //ou apenas router
  mode: 'history'
});

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router, //o mesmo que: {router: router}
  render: h => h(App)
})
