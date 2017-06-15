import Vue from 'vue';
import Vuex from 'vuex';

// modules
import  products from './modules/products';

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
       products,
   }
});