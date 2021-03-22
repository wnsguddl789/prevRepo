<template>
  <div class="app">
    <HEADER>></HEADER>
    <div class="container">
      <router-view></router-view>
    </div>    
    <FOOTER></FOOTER>
  </div>
</template>

<script>
// componets > common
import HEADER from './components/common/HEADER.vue'
// import MAIN from './components/common/MAIN.vue'
import FOOTER from './components/common/FOOTER.vue'
// componets > board
// import LIST from './components/board/LIST.vue'

export default {
  name: 'App',
  components: {
    HEADER,
    FOOTER,
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0,0,0,0.6); 
}
.container {
	 margin-top: 20px ;
 }

</style>
