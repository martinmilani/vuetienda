<template>
  <div class="details-page">
    <div class="main-content main-content-details single no-sidebar">
      <div class="container">
        <Product />
      </div>
    </div>
    <a href="#" class="backtotop">
      <i class="fa fa-angle-double-up"></i>
    </a>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "FullWidthProduct",
  components: {
    Product,
  },
};
</script>

<style></style>
