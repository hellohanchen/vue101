<template>
  <div class="the-home-stats">
    <div class="the-home-stats__info">
      <HomeStatsCard
          title="Total Funders"
          stats="1"
      />
      <HomeStatsCard
          title="Total Funders"
          stats="1"
      />
      <HomeStatsCard
          title="Total Funders"
          stats="1"
      />
      <HomeStatsCard
          title="Total Funders"
          stats="1"
      />
    </div>
  </div>
</template>

<script setup>
import HomeStatsCard from "@/components/HomeStatsCard.vue";

</script>

<style lang="scss" scoped>
.the-home-stats {
  @media #{$media-min-tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.the-home-stats__info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media #{$media-phone-L} {
    justify-content: center;
  }
}
</style>
