<template>
  <Banner />
  <HomeInfo />
  <HomeStats />
  <div class="home" :style="{ backgroundImage }">
    <h2>Home Page</h2>
    <p>This is the home page content.</p>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import HomeStats from "@/components/HomeStats.vue";
import HomeInfo from "@/components/HomeInfo.vue";

export default {
  name: 'Home',
  components: {HomeInfo, HomeStats, Banner},
}
</script>

<style scoped>
.home {
  padding: 2rem;
}
</style>
