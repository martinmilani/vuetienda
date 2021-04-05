<template>
  <div class="details-page">
    <div class="main-content main-content-details single no-sidebar">
      <div class="container">
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  components: {
    Product,
  },

//Descomentar para cargar producto con id
 /*  mounted(){
    this.$store.dispatch("loadProduct", this.$route.params.id)
  } */
};


</script>

<style></style>
