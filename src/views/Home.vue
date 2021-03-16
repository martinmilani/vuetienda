<template>
  <div class="home">
    <div class="main-content">
      <div class="fullwidth-template">
        <HomeSlider />
        <HomeGridProducts />
      </div>
    </div>
  </div>
</template>

<script>
import HomeSlider from "../components/HomeSlider.vue";
import HomeGridProducts from "../components/HomeGridProducts.vue";

export default {
  name: "Home",
  components: {
    HomeSlider,
    HomeGridProducts,
  },
};
</script>

<style></style>
