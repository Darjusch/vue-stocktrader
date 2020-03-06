<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-warning">
            <div class="panel panel-heading">
                <h3 class="panel-title">
                {{ stock.name }}
                <small>( Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
                </h3>
            </div>
            <div class="panel-body">
            <div class="pull-left">
            <input 
                type="number"
                placeholder="Quantity"
                class="form-control"
                v-model="quantity"
                :class="{danger: insufficientQuantity}"

                >
            <button 
                class="btn btn-success"
                @click="sellStock"
                :disabled="quantity <= 0 || insufficientQuantity"
                >
                Sell
            </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    data: function() {
        return {
            quantity: 0
            }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockID: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            console.log(order)
            this.placeSellOrder(order);
            this.quantity = 0

        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    }

}
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>