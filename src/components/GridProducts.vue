<template>
  <div
    class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12"
  >
    <div class="site-main">
      <h3 class="custom_blog_title">
        {{ customTitle }}
      </h3>
      <ShopSortControl />
      <ul class="row list-products auto-clear equal-container product-grid">
        <!--<ProductCard :product="productExample" />-->
        <li
          v-for="product in products"
          :key="product.id"
          class="product-item product-type-variable col-lg-4 col-md-6 col-sm-6 col-xs-6 col-ts-12 style-1"
        >
          <router-link :to="{ path: '/full' }" append>
            <ProductCard :product="product" />
          </router-link>
        </li>
      </ul>
      <GridPagination />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/Product-card.vue";
import ShopSortControl from "../components/gridProducts/ShopSortControl.vue";
import GridPagination from "../components/gridProducts/GridPagination.vue";

export default {
  name: "TiendaIndex",
  components: {
    ProductCard,
    ShopSortControl,
    GridPagination,
  },
  props: {
    customTitle: {
      type: String,
      default: "",
    },
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
.shop-grid-content {
  margin-top: 1.25em;
}
</style>
