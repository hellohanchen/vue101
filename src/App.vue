<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Header
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
</style>
