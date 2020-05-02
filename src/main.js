import Vue from 'vue'
import Vuex from 'vuex'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import JQuery from 'jquery'
import products from '../podcasts.js'
import Home from './Home.vue'
import Login from './Login.vue'
import Register from './Register.vue'

Vue.use(Vuex);
window.$ = JQuery;

const store = new Vuex.Store({
  modules: {
    products
  }
})

new Vue({
  el: '#app',
  render: h => h(Home),
  store
})

new Vue({
  el: '#login',
  render: h => h(Login),
})

new Vue({
  el: '#register',
  render: h => h(Register),
})
