<template>
    <form action="">
        <cc-products></cc-products>
        <cc-customer-data></cc-customer-data>
    </form>
</template>

<script>
    import Products from '@/components/Products';
    import CustomerData from '@/components/CustomerData';

    export default {
        components: {
            ccProducts: Products,
            ccCustomerData: CustomerData,
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }
</style>