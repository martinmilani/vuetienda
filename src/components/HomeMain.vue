<template>
  <div class="main-content">
    <div class="fullwidth-template">
      <HomeMainSlider />
      <HomeMainGridProducts />
      <BackToTop />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
window.$ = window.jQuery = $;

import BackToTop from "./BackToTop.vue";
import HomeMainSlider from "./HomeMainSlider.vue";
import HomeMainGridProducts from "./HomeMainGridProducts.vue";

export default {
  components: {
    HomeMainSlider,
    BackToTop,
    HomeMainGridProducts,
  },
};
</script>

<style></style>
