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
        orderId: 1,
        orderNumber: 1,
        completedAt: '2017-06-22T18:34:17Z',
        total: 0.00,
    },
    getters: {
      baseData(state) {
          return {
              total: state.total,
              orderId: state.orderId,
              orderNumber: state.orderNumber,
              completedAt: state.completedAt,
          }
      }
    },
    mutations: {
        resetData(state) {
            state.products.productsToOrder = [];
            state.customerData = [];
            state.preparedJson = {};
        },
        updateValue(state, values) {
            for (let key in values) {
                if (!values.hasOwnProperty(key)) {
                    continue;
                }

                state[key] = values[key];
            }
        },
        prepareJSON(state) {
            const jsonObject = {
                "order": {
                    "id": parseInt(state.orderId),
                    "order_number": parseInt(state.orderNumber),
                    "completed_at": new Date(state.completedAt),
                    "status": 'pending',
                    "total": state.total,
                    "total_tax": '0.00',
                    "total_shipping": '9.80',
                    "shipping_tax": '0.00',
                    "payment_details": {
                        "method_id": '',
                        "method_title": ''
                    },
                    "billing_address": {
                        "first_name": state.customerData.billing.first_name,
                        "last_name": state.customerData.billing.last_name,
                        "company": state.customerData.billing.company,
                        "address_1": `${state.customerData.billing.street} ${state.customerData.billing.street_nr}`,
                        "address_2": state.customerData.billing.address_2,
                        "city": state.customerData.billing.city,
                        "state": '',
                        "postcode": state.customerData.billing.postcode,
                        "country": 'Deutschland',
                        "email": state.customerData.billing.email,
                        "phone": state.customerData.billing.phone
                    },
                    "shipping_address": {
                        "first_name": state.customerData.billing.first_name,
                        "last_name": state.customerData.billing.last_name,
                        "company": state.customerData.billing.company,
                        "address_1": `${state.customerData.billing.street} ${state.customerData.billing.street_nr}`,
                        "address_2": state.customerData.billing.address_2,
                        "city": state.customerData.billing.city,
                        "state": '',
                        "postcode": state.customerData.billing.postcode,
                        "country": 'Deutschland',
                    },
                    "note": '',
                    "view_order_url": '',
                    "line_items": state.products.productsToOrder.map((product) => {
                        return {
                            "subtotal": product.price,
                            "subtotal_tax": '0.00',
                            "total_tax": '0.00',
                            "price": product.price,
                            "product_id": product.product,
                            "quantity": product.quantity,
                            "meta": [
                                {
                                    "key": 'Appointment ID',
                                    "value": parseInt(product.appointmentId),
                                },
                                {
                                    "key": 'Date',
                                    "value": product.from,
                                },
                                {
                                    "key": 'end_date',
                                    "value": product.to,
                                },
                            ],
                        }
                    }),
                    "customer": {
                        "id": parseInt(state.customerData.id),
                        "email": state.customerData.billing.email,
                        "first_name": state.customerData.billing.first_name,
                        "last_name": state.customerData.billing.last_name,
                        "username": '',
                    },
                },
            };

            state.preparedJson = jsonObject
        }
    },
    actions: {
        createOrder({commit, state}) {
            axios.post(appConfig.API.apiRoot + appConfig.API.routes.newOrder, state.preparedJson)
            .then((res) => {
                if(res.status === 'Created') {
                    commit('resetData');
                }
            });
        }
    },
    modules: {
        products,
        customerData,
    }
});