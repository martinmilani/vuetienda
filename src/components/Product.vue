<template>
  <div>
    <div class="row">
      <div
        class="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12"
      >
        <div class="site-main">
          <MainDetailsProduct />
          <DetailsProduct />
          <div style="clear: left;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsProduct from "./product/DetailsProduct.vue";
import MainDetailsProduct from "./product/MainDetailsProduct.vue";

export default {
  name: "Product",
  components: {
    DetailsProduct,
    MainDetailsProduct,
  },
};
</script>

<style></style>
