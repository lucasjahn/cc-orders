<template>
    <div class="c-product">
        <select v-model.lazy="product.product" @change="updateProduct">
            <option value=""></option>
            <option :value="option.value" v-for="option in apiProducts">{{ option.label }}</option>
        </select>

        <div class="c-product__quantity">
            Quantity
            <button type="button" @click="decreaseQuantity" :disabled="product.quantity === 0">-</button><span>{{ product.quantity }}</span><button type="button" @click="increaseQuantity">+</button>
        </div>

        <div class="c-product__price">
            Appointment ID
            <input type="number" v-model.lazy="product.appointmentId"  @change="updateProduct">
        </div>

        <div class="c-product__price">
            Price
            <input type="number" v-model.lazy="product.price"  @change="updateProduct">
        </div>

        <div class="c-product__dates">Dates
            <input type="text" v-model.lazy="product.from" @change="updateProduct">
            <input type="text" v-model.lazy="product.to" @change="updateProduct">
        </div>

        <button class="c-product__delete" type="button" @click="removeProduct">Delete</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: {
            product: {
                type: Object,
                required: true,
            }
        },
        methods: {
            increaseQuantity() {
                this.product.quantity++;
                this.updateProduct();
            },
            decreaseQuantity() {
                this.product.quantity--;
                this.updateProduct();
            },
            updateProduct() {
                this.$store.commit('updateProductToOrder', this.product);
            },
            removeProduct() {
                this.$store.commit('deleteProductToOrder', this.product);
            }
        },
        computed: mapGetters({
            apiProducts: 'apiProducts',
        })
    }
</script>

<style scoped>
    .c-product {
        display: flex;
    }
</style>