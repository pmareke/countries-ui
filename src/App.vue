<template>
  <div id="app">
    <Countries />
  </div>
</template>

<script>
import Countries from './components/Countries'

export default {
  name: 'App',
  components: {
    Countries,
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
}
</style>
