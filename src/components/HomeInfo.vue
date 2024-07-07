<template>
  <div class="the-home-info">
    <div class="the-home-info__info">
      <HomeInfoCard
          title="Community"
          message="We’re building an online community on Twitter and Discord. Join us — no barriers, no commitment. Whether you’re a fan, a dreamer, or just curious, be part of our big plan."
      />
      <HomeInfoCard
          title="Community"
          message="We’re building an online community on Twitter and Discord. Join us — no barriers, no commitment. Whether you’re a fan, a dreamer, or just curious, be part of our big plan."
      />
      <HomeInfoCard
          title="Community"
          message="We’re building an online community on Twitter and Discord. Join us — no barriers, no commitment. Whether you’re a fan, a dreamer, or just curious, be part of our big plan."
      />
    </div>
  </div>
</template>

<script setup>
import HomeInfoCard from "@/components/HomeInfoCard.vue";

</script>

<style lang="scss" scoped>
.the-home-info {
  margin: 0 0;
  background-color: #000000;

  @media #{$media-min-tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.the-home-info__info {
  display: flex;
  justify-content: space-between;
  margin: 0 0;
  flex-wrap: wrap;
  @media #{$media-phone-L} {
    justify-content: center;
  }
}
</style>
