<template>
  <div>
      <h2>Trade or View your Portfolio</h2>
      <hr>
      <h6>You may Save & Load your Data</h6>
      <h6>Click on 'End-Day' to begin a new Day!</h6>
      <hr>
      
  </div>
</template>

<script>
export default {
  computed: {
      funds() {
        return this.$store.getters.funds;
      }


  }
}
</script>

<style scoped>

</style>