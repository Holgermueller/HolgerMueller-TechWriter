<template>
  <div id="app">
    <Nav/>
    <Home/>
  </div>
</template>

<script>
import Home from './components/home.vue'
import Nav from "./components/Layout/Nav"

export default {
  name: 'app',
  components: {
    Nav,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
