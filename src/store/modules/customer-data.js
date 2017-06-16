const state = {
    customerData: {
        set_paid: false,
        differentShipping: false,
        billing: {
            first_name: '',
            last_name: '',

            street: '',
            street_nr: '',
            address_2: '',
            postcode: '',
            city: '',
            country: '',
            email: '',
            phone: '',
        },
        shipping: {
            first_name: '',
            last_name: '',
            street: '',
            street_nr: '',
            address_2: '',
            postcode: '',
            city: '',
            country: '',
        },
    },
};

const getters = {
    customerData(state) {
        return state.customerData;
    },
};

const mutations = { // for sync stuff
    updateCustomerData(state, updatedData) {
        Object.assign(state.customerData, updatedData);
    },
};

export default {
    state,
    getters,
    mutations,
};