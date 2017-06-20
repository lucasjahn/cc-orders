import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import appConfig from'../config.json';

// modules
import  products from './modules/products';
import  customerData from './modules/customer-data';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      preparedJson: {},
    },
    mutations: {
        resetData(state) {
            state.productsToOrder = [];
            state.customerData = [];
            state.preparedJson = {};
        },
        prepareJSON(state) {
            const jsonObject = {
                "set_paid": state.customerData.set_paid,
                "billing": {
                    "first_name": state.customerData.billing.first_name,
                    "last_name": state.customerData.billing.last_name,
                    "address_1": `${state.customerData.billing.street} ${state.customerData.billing.street_nr}`,
                    "address_2": state.customerData.billing.address_2,
                    "city": state.customerData.billing.city,
                    "state": '',
                    "postcode": state.customerData.billing.postcode,
                    "country": state.customerData.billing.country,
                    "email": state.customerData.billing.email,
                    "phone": state.customerData.billing.phone
                },
                "shipping": {
                    "first_name": state.customerData.shipping.first_name,
                    "last_name": state.customerData.shipping.last_name,
                    "address_1": `${state.customerData.shipping.street} ${state.customerData.shipping.street_nr}`,
                    "address_2": state.customerData.shipping.address_2,
                    "city": state.customerData.shipping.city,
                    "state": '',
                    "postcode": state.customerData.shipping.postcode,
                    "country": state.customerData.shipping.country
                },
                "line_items": state.products.productsToOrder.map((product) => {
                    return {
                        product_id: product.product,
                        quantity: product.quantity
                    }
                }),
                "shipping_lines": [
                    {
                        "method_id": "flat_rate",
                        "method_title": "Flat Rate",
                        "total": 10
                    }
                ]
            };

            state.preparedJson = jsonObject;
        }
    },
    actions: {
        createOrder({commit, state}) {
            axios.post(appConfig.API.apiRoot + appConfig.API.routes.newOrder, state.preparedJson, {
                auth: {
                    username: appConfig.API.clientKey,
                    password: appConfig.API.clientSecret,
                },
            })
            .then((res) => {
                debugger;
                commit('resetData');
            });
        }
    },
    modules: {
        products,
        customerData,
    }
});