<template>
    <div class="c-product">
        <select v-model="newProduct.product">
            <option value=""></option>
            <option value="option.value" v-for="option in products">{{ option.label }}</option>
        </select>

        <div class="c-product__quantity">
            Quantity
            <button type="button" @click="newProduct.quantity--">-</button><span>{{ newProduct.quantity }}</span><button type="button" @click="newProduct.quantity++">+</button>
        </div>

        <div class="c-product__price">Price</div>

        <div class="c-product__dates">Dates
            <input type="text" v-model="newProduct.from">
            <input type="text" v-model="newProduct.to">
        </div>

        <button class="c-product__delete" type="button" @click="removeProduct">Delete</button>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            newProduct: {
                product: '',
                quantity: 1,
                from: '',
                to: '',
            },
          };
        },
        props: {
            product: {
                type: Object,
                required: true,
            }
        },
        methods: {
            updateNewProduct() {
                this.newProduct.id = this.product.id;

                this.$emit('productUpdated', this.newProduct);
            },
            removeProduct() {
                //eventStore.$emit('removeProduct', this.product.id);
            }
        }
    }
</script>

<style scoped>
    .c-product {
        display: flex;
    }
</style>