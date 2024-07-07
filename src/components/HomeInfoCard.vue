<template>
  <div class="info-card">
    <div class="info__background">
      <div class="info__info">
        <h3>{{ title }}</h3>
        <p class="info__message">{{ message }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  message: String,
});
</script>

<style lang="scss" scoped>
.info-card {
  display: flex;
  flex-direction: column;
  max-width: 31%;
  width: 100%;
  background: none;
  opacity: 1;
  margin: 0 1% 0;

  &:hover {
    opacity: 0.8;
  }
}

.info__background {
  top: 0;
  overflow: hidden;
  position: relative;
  padding: 0 0 0;
  background-image: url("../assets/images/card_background.jpg");
  background-position: center;
  background-size: cover;

  @include create-box-shadow-blur();

  @media #{$media-min-tablet} {
    margin: 0 0 0 0;
    height: auto;
    padding: 0;
  }
}

.info__info {
  color: #ffffff;
  font-size: 24px;
  line-height: 32px;
  position: relative;
  width: 100%;
  margin: auto auto 0;

  @media #{$media-min-tablet} {
    font-size: 16px;
    line-height: 24px;
    width: 345px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    width: auto;
    line-height: 20px;
  }
}

.info__message {
  text-align: left;
  margin: 5% 5% 5%;
}
</style>
