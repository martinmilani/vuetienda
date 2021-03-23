<template>
  <div class="main-content">
    <div class="fullwidth-template">
      <HomeSlider />
      <HomeGridProducts />
      <BackToTop />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
window.$ = window.jQuery = $;

import BackToTop from "./BackToTop.vue";
import HomeSlider from "./HomeSlider.vue";
import HomeGridProducts from "./HomeGridProducts.vue";

export default {
  components: {
    HomeSlider,
    BackToTop,
    HomeGridProducts,
  },
};
</script>

<style></style>
