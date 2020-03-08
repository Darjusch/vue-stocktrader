<template>
    <div class="col-sm-5 col-md-3">
        <div class="panel panel-success">
            <div class="panel panel-heading">
                <h3 class="panel-title clearfix">
                {{ stock.name }}
                <small>(Symbol: {{ stock.symbol }} | Price: {{ stock.price }})</small>
                    <router-link :to="{ name: 'Info', params: { symbolInfo } }" class="btn-circle pull-right ">Info</router-link> 
                    <!-- //@click="requestInfo(stock.symbol) -->
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
            quantity: 0,
            symbolInfo: this.stock
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
                quantity: Number(this.quantity),
                symbol: this.stock.symbol
            };
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
           
        }
        // ,
        // requestInfo(symbol) {
        //     console.log("reached button function " + symbol)
        //     this.$store.dispatch('getInfo', symbol)
        // }
        

    },

}
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
    .btn-circle {
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 12px;
        line-height: 1.428571429;
        border-radius: 15px;
        background-color: #5bc0de;
        color: #fff;
    }
</style>