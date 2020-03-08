<template>
  <div>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
        <li> <router-link to="/stocks" class="nav-link">Stocks</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End Day</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Load & Save <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
          </ul>
        </li>
        <li><div class="navbar-brand"><strong> Your Funds: {{ funds | currency }} </strong></div></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
      funds() {
        return this.$store.getters.funds;
      }
  },
  methods: {

    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      load: 'loadData'

    }),
    endDay(){
          this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data);
    },
    loadData(){
      this.load('loadData')
    }
  }
}
</script>

<style scoped>

</style>

