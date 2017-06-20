<template>
    <div class="c-footer-bar">
        <div class="c-container">
            <button :disabled="productsToOrder.length === 0" type="button" @click="sendOrder">Bestellung absenden</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            sendOrder() {
                this.$store.commit('prepareJSON');
                this.$store.dispatch('createOrder');
            }
        },
        computed: {
            productsToOrder() {
                return this.$store.getters.productsToOrder;
            },
        }
    }
</script>

<style scoped>
    .c-footer-bar {
        height: 60px;
        background: #fff;
        padding: 20px;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
    }
</style>