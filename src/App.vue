<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar> 
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'


export default {
  components: {
    Navbar,
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>


<style lang="scss">
  .slide-enter-acitve{
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out{
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
