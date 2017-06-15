<template>
    <div class="c-products">
        <cc-product-row v-for="productRow in productsRows" :products="apiProducts"></cc-product-row>
        <button @click="addProduct" type="button">Add Product</button>
    </div>
</template>

<script>
    import ProductRow from '@/components/ProductRow';

    export default {
        data() {
            return {
                productsRows: [],
                apiProducts: [],
            }
        },
        components: {
            ccProductRow: ProductRow,
        },
        methods: {
            addProduct() {
                let newProduct = {
                    id: 1,
                };

                this.productsRows.push(newProduct);
            },
            removeProduct() {
                let newProduct = {
                    id: 1,
                };

                this.products.push(newProduct);
            }
        }
    }
</script>

<style scoped>
</style>