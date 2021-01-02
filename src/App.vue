<template>
  
  <NotFound />
</template>

<script>
import NotFound from './components/NotFound.vue'

export default {
  name: 'App',
  components: {
    NotFound
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
