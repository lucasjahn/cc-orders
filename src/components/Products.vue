<template>
    <div class="c-products">
        <div class="c-container">
            <h2>Produkte</h2>
            <cc-product-row v-if="productsToOrder.length > 0" v-for="productToOrder in productsToOrder" :product="productToOrder" :key="productToOrder.id"></cc-product-row>
            <button @click="addProduct" type="button">Add Product</button>
        </div>
    </div>
</template>

<script>
    import ProductRow from '@/components/ProductRow';
    import { mapGetters } from 'vuex';
    import uuid from 'uuid/v4';

    export default {
        components: {
            ccProductRow: ProductRow,
        },
        methods: {
            addProduct() {
                const newProduct = {
                    id: uuid(),
                    product: '',
                    quantity: 1,
                    from: '',
                    to: '',
                };

                this.$store.commit('addProductToOrder', newProduct);
            },
        },
        computed: mapGetters({
            productsToOrder: 'productsToOrder'
        }),
        created() {
            this.$store.dispatch('loadApiProducts');
        }
    }
</script>

<style scoped>
    .c-products {
        width: 50vw;
    }
</style>