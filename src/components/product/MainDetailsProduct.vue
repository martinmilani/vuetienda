<template>
  <div class="details-product">
    <div class="details-thumd">
      <DetailsProductSlide :slides="product.img" />
    </div>

    <div class="details-infor">
      <h1 class="product-title">{{ product.name }}</h1>
      <div class="availability">
        Disponibilidad:
        <div v-if="product.stock == 0">
          <a href="#">Sin Stock</a>
        </div>
        <div v-else>
          <a href="#">Stock Disponible</a>
        </div>
      </div>
      <div class="price">
        <span>${{ product.price }}</span>
      </div>
      <div class="product-details-description">
        <ul>
          <li>Vestibulum tortor quam</li>
          <li>Imported</li>
          <li>Art.No. 06-7680</li>
        </ul>
      </div>

      <div class="variations">
        <ProductColors />
        <ProductSizes />
      </div>

      <ProductGroupButton />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DetailsProductSlide from "./DetailsProductSlide.vue";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductsSizes";
import ProductGroupButton from "./ProductGroupButton";

export default {
  name: "MainDetailsProduct",

  components: {
    DetailsProductSlide,
    ProductColors,
    ProductSizes,
    ProductGroupButton,
  },

  computed: {
    ...mapState(["product"]),
  },
};
</script>

<style scoped>
.active {
  border: 2px solid #ff9a94 !important;
}

.variations {
  display: flex;
  flex-direction: column;
}

.details-product {
  margin-top: 4em;
}

.quantity-add-to-cart {
  margin-top: 2em;
}
</style>
