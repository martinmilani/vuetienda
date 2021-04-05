<template>
  <div id="mySidebar2" class="sidebar">
    <div class="cart-title">
      <h3>Carrito</h3>
    </div>
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">×</a>
    <div class="cart-main">
      <transition name="switch">
        <div v-if="basket.length == 0" class="no-products">
          <p class="text">El carrito esta vacio</p>
        </div>
        <div v-else>
          <transition-group tag="ul" name="list" class="minicart-items" appear>
            <li
              v-for="product in basket"
              :key="product.id + product.color + product.size"
              class="product-cart mini_cart_item"
            >
              <MiniCartItem :product="product" />
            </li>
          </transition-group>
        </div>
      </transition>
    </div>
    <div class="cart-footer">
      <div class="cart-subtotal">
        <span>
          Subtotal:
          <span>${{ basketSum }}</span>
        </span>
      </div>
      <button class="checkout-button">INICAR COMPRA</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "400px";
    },

    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
  },
};
</script>

<style></style>
