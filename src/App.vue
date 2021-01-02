<template>
  <div id="app">
    <div class="header"><Header /></div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
   Header
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
}
</style>
