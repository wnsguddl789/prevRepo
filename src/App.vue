<template>
  <div class="app">
    <HEADER/>
    <MAIN/>
    <NAV/>
  </div>
</template>

<script>
// componets > common
import HEADER from './components/common/HEADER.vue'
import MAIN from './components/common/MAIN.vue'
import NAV from './components/common/NAV.vue'
export default {
  name: 'App',
  components: {
    HEADER,
    MAIN,
    NAV,
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
}
</style>
