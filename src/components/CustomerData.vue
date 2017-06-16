<template>
    <div class="c-customer-data">
        <div class="c-container">
            <div class="row">
                <div class="c-col c-col--12">
                    <h2>Rechnungsaddresse</h2>
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Vorname</label>
                    <input type="text" v-model="customerData.billing.first_name" @change="updateData">
                </div>
                <div class="c-col c-col--6">
                    <label for="">Nachname</label>
                    <input type="text" v-model="customerData.billing.last_name" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--4">
                    <label for="">Straße</label>
                    <input type="text" v-model="customerData.billing.street" @change="updateData">
                </div>
                <div class="c-col c-col--2">
                    <label for="">Hausnummer</label>
                    <input type="text" v-model="customerData.billing.street_nr" @change="updateData">
                </div>
                <div class="c-col c-col--3">
                    <label for="">PLZ</label>
                    <input type="text" v-model="customerData.billing.postcode" @change="updateData">
                </div>
                <div class="c-col c-col--3">
                    <label for="">Ort</label>
                    <input type="text" v-model="customerData.billing.city" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Land</label>
                    <input type="text" v-model="customerData.billing.country" @change="updateData">
                </div>
                <div class="c-col c-col--6">
                    <label for="">Adresse Zusatzinformation</label>
                    <input type="text" v-model="customerData.billing.address_2" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">E-Mail</label>
                    <input type="email" v-model="customerData.billing.email" @change="updateData">
                </div>
                <div class="c-col c-col-6">
                    <label for="">Telefon</label>
                    <input type="text" v-model="customerData.billing.phone" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Bereits bezahlt?</label>
                    <input type="checkbox" :value="!!customerData.set_paid" v-model="customerData.set_paid" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Abweichende Versandaddresse?</label>
                    <input type="checkbox" :value="!!customerData.differentShipping" v-model="customerData.differentShipping" @change="updateData">
                </div>
            </div>
        </div>

        <div class="c-container" v-if="customerData.differentShipping">
            <div class="row">
                <div class="c-col c-col--12">
                    <h2>Abweichende Versandaddresse</h2>
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Vorname</label>
                    <input type="text" v-model="customerData.shipping.first_name" @change="updateData">
                </div>
                <div class="c-col c-col--6">
                    <label for="">Nachname</label>
                    <input type="text" v-model="customerData.shipping.last_name" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--4">
                    <label for="">Straße</label>
                    <input type="text" v-model="customerData.shipping.street" @change="updateData">
                </div>
                <div class="c-col c-col--2">
                    <label for="">Hausnummer</label>
                    <input type="text" v-model="customerData.shipping.street_nr" @change="updateData">
                </div>
                <div class="c-col c-col--3">
                    <label for="">PLZ</label>
                    <input type="text" v-model="customerData.shipping.postcode" @change="updateData">
                </div>
                <div class="c-col c-col--3">
                    <label for="">Ort</label>
                    <input type="text" v-model="customerData.shipping.city" @change="updateData">
                </div>
            </div>
            <div class="row">
                <div class="c-col c-col--6">
                    <label for="">Land</label>
                    <input type="text" v-model="customerData.shipping.country" @change="updateData">
                </div>
                <div class="c-col c-col--6">
                    <label for="">Adresse Zusatzinformation</label>
                    <input type="text" v-model="customerData.shipping.address_2" @change="updateData">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            updateData() {
                this.$store.commit('updateCustomerData', this.customerData);
            }
        },
        computed: {
            customerData() {
                return this.$store.getters.customerData;
            }
        },
     };
</script>

<style scoped>
    .c-customer-data {
        width: 50vw;
    }
</style>