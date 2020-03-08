<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading">           
                <h2>{{ symbolInfo.name }} ({{ symbolInfo.symbol }})</h2>
                <hr>
             <div class="panel-body">
                <h2>Current price: ${{ symbolInfo.price }}</h2>
                <h2>Target high: ${{ symbolInfo.info.targetHigh}}</h2>
                <h2>Target low: ${{ symbolInfo.info.targetLow}}</h2>
                <h2>Target mean: ${{ symbolInfo.info.targetMean}}</h2>
                <h2>Target median: ${{ symbolInfo.info.targetMedian}}</h2>
                <br>
                <hr>
                <h2>Last Updated: {{ symbolInfo.info.lastUpdated.slice(0, -9)}}</h2>
            </div>
        </div>
    </div>
    </div>
</template>
<script>


export default {
    props: ['symbolInfo'],

    mounted() {
        this.$store.dispatch('getInfo', this.symbolInfo.symbol )
    }
}
</script>