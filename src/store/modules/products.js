import axios from 'axios';
import appConfig from '../../config.json';

const state = {
    productsToOrder: [],
    apiProducts: [],
};

const getters = {
    productsToOrder(state) {
        return state.productsToOrder;
    },
    apiProducts(state) {
        return state.apiProducts;
    },
};

const mutations = { // for sync stuff
    addProductToOrder(state, newProduct) {
        return state.productsToOrder.push(newProduct);
    },
    updateProductToOrder(state, updatedProduct) {
        const products = state.productsToOrder;

        for(let i=0, y = products.length; i<y; i++) {
            if(products[i].id === updatedProduct.id) {
                return Object.assign(state.productsToOrder, updatedProduct);
            }
        }
    },
    deleteProductToOrder(state, productToDelete) {
        const searchProduct = state.productsToOrder.find(item => item.id === productToDelete.id);

        if(searchProduct) {
            state.productsToOrder.splice(state.productsToOrder.indexOf(searchProduct), 1);
        }
    },
    loadApiProducts() {
        axios.get(appConfig.API.apiRoot + appConfig.API.routes.publishedProducts)
        .then((res) => {
           state.apiProducts = res.data.map((product) => {
               return {
                   label: product.fields.title,
                   value: product.fields.wc_id,
               }
            });
        });
    }
};

const actions = {
    loadApiProducts({commit}) {
        commit('loadApiProducts');
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};