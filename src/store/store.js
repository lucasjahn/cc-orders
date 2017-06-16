import Vue from 'vue';
import Vuex from 'vuex';

// modules
import  products from './modules/products';
import  customerData from './modules/customer-data';

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
       products,
       customerData,
   }
});