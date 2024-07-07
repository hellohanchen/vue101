<template>
  <nav class="nav">
    <router-link to="/">GOAT</router-link>
    <router-link to="/app">App</router-link>
    <a href="https://x.com/goatwithus" target="_blank" class="twitter-icon">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://discord.gg/vzjUTBMwfW" target="_blank" class="social-icon discord-icon">
      <i class="fab fa-discord"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 1rem;
}
.nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}
.nav a:hover {
  text-decoration: underline;
}
</style>
