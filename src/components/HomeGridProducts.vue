<template>
  <div class="tanajil-tabs  default rows-space-40">
    <div class="container">
      <div class="tab-head">
        <ul class="tab-link">
          <li class="active">
            <a data-toggle="tab" aria-expanded="true" href="#bestseller"
              >Mas Vendidos</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-container tab-container-6">
        <div id="new_arrivals" class="tab-panel active">
          <div class="tanajil-product">
            <ul
              class="row list-products auto-clear equal-container product-grid"
            >
              <li
                v-for="product in loNuevo"
                :key="product.id"
                class="product-item  col-lg-4 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1"
              >
                <router-link
                  :to="{ name: 'ProductDetails', params: { id: product.id } }"
                >
                  <ProductCard :product="product" />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./Product-card";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },

  computed: mapGetters(["loNuevo"]),
};
</script>

<style></style>
