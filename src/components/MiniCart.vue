<template>
  <div class="block-minicart tanajil-mini-cart block-header tanajil-dropdown">
    <a
      href="javascript:void(0);"
      class="shopcart-icon"
      data-tanajil="tanajil-dropdown"
    >
      Cart
      <span class="count">
        {{ basketCount }}
      </span>
    </a>
    <div v-if="basketCount === 0">
      <div div class="no-product tanajil-submenu">
        <p class="text">
          You have
          <span>
            0 item(s)
          </span>
          in your bag
        </p>
      </div>
    </div>
    <div v-else>
      <div class="shopcart-description tanajil-submenu">
        <div class="content-wrap">
          <h3 class="title">Shopping Cart</h3>
          <ul class="minicart-items">
            <li
              v-for="product in basket"
              :key="product.id"
              class="product-cart mini_cart_item"
            >
              <MiniCartItem :product="product" />
            </li>
          </ul>
          <div class="subtotal">
            <span class="total-title">Subtotal: </span>
            <span class="total-price">
              <span class="Price-amount"> ${{ basketSum }} </span>
            </span>
          </div>
          <div class="actions">
            <a class="button button-viewcart" href="shoppingcart.html">
              <span>View Bag</span>
            </a>
            <a href="checkout.html" class="button button-checkout">
              <span>Checkout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import MiniCartItem from "./MiniCartItem.vue";

export default {
  name: "MiniCart",
  computed: {
    ...mapGetters(["basketCount", "basketSum"]),
    ...mapState(["basket"]),
  },

  components: {
    MiniCartItem,
  },
};
</script>

<style></style>
