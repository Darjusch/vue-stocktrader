<template>
  <div>
      <Stock
          v-for="stock in stocks" :key="stock" 
          :stock="stock">
      </Stock>
  </div>
</template>

<script>
// @ is an alias to /src
import Stock from './Stock.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  components: {
    Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>