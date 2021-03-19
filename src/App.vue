<template>
  <div class="app">
    <HEADER/>
    <MAIN/>
    <FOOTER/>
  </div>
</template>

<script>
// componets > common
import HEADER from './components/common/HEADER.vue'
import MAIN from './components/common/MAIN.vue'
import FOOTER from './components/common/FOOTER.vue'
export default {
  name: 'App',
  components: {
    HEADER,
    MAIN,
    FOOTER,
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
