import Vue from 'vue'
import Vuex from 'vuex'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../podcasts.js'
import Home from './Home.vue'

Vue.use(Vuex);

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
