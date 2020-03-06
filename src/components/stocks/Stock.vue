<template>
    <div class="col-sm-5 col-md-3">
        <div class="panel panel-success">
            <div class="panel panel-heading">
                <h3 class="panel-title">
                {{ stock.name }}
                <small>Price: {{ stock.price }}</small>
                </h3>
            </div>
            <div class="panel-body">
            <div class="pull-left">
            <input 
                type="number"
                placeholder="Quantity"
                class="form-control"
                v-model="quantity"
                :class="{danger: insufficientFunds}"
                >
            </div>
            <div class="pull-right">
            <button 
                class="btn btn-success"
                @click="inStock"
                :disabled="insufficientFunds||quantity<=0"
                >Buy
            </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['stock'],
    data: function() {
        return {
            quantity: 0
            }
    },
    computed: {
        insufficientFunds() {
            return (this.quantity * this.stock.price) > this.$store.getters.funds;
        }
    },
    methods: {
        inStock() {
            const order = {
                stockID: this.stock.id,
                stockName: this.stock.name, 
                stockPrice: this.stock.price,
                quantity: Number(this.quantity)
            };
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
           
        },

    },

}
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>