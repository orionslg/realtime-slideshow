<template>
  <div id="app">
    <Slideshow />
  </div>
</template>

<script>
import Slideshow from './components/Slideshow.vue'

export default {
  name: 'App',
  components: {
    Slideshow
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
