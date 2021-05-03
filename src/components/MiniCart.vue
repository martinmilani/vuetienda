<template>
  <div class="cart-container">
    <div id="mySidebar" class="sidebar" :class="{ mobile: onMobile }">
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
            <transition-group
              tag="ul"
              name="list"
              class="minicart-items"
              appear
            >
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
        <router-link :to="{ name: 'CheckoutFlow' }" class="routerLink">
          <button
            @click="closeNav"
            :disabled="basket.length == 0"
            :class="{ disabled: basket.length == 0 }"
            class="checkout-button"
          >
            INICAR COMPRA
          </button>
        </router-link>
      </div>
    </div>

    <div class="basket-icon" id="basket-icon">
      <a v-on:click="openNav" :class="{ hide: onMobile }"
        ><i class="fal fa-shopping-cart"></i
      ></a>
      <span class="count" :class="{ hide: onMobile }"> {{ basketCount }} </span>
    </div>
  </div>
</template>

<script>
import MiniCartItem from "./MiniCartItem.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "MiniCart",

  props: ["onMobile"],

  components: { MiniCartItem },

  computed: {
    ...mapState(["basket"]),
    ...mapGetters(["basketCount", "basketSum"]),
  },

  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "400px";
    },

    closeNav() {
      if (this.onMobile) {
        document.getElementsByClassName("mobile")[0].style.width = "0";
      } else {
        document.getElementById("mySidebar").style.width = "0";
      }
    },
  },
};
</script>

<style scoped>
.disabled {
  background-color: grey !important;
}

.hide {
  display: none;
}

.basket-icon > a {
  font-size: 2em;
  padding: 0.25em;
}

.no-products {
  text-align: center;
  padding-top: 50%;
  color: #888;
  font-weight: 700;
  margin-bottom: 0;
  text-transform: uppercase;
}

.cart-main {
  height: calc(100% - 130px);
  overflow: auto;
  padding: 1em;
}
.sidebar {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: #ffff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 70px;
  box-shadow: 0 3px 18px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;
}
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #888888;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #ff9a94;
}

.cart-title {
  height: 50px;
  position: absolute;
  top: 10px;
  left: 33px;
  width: 88%;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 2em;
  font-size: 18px;
  color: #222;
  padding: 8px 4px;
  margin: 0;
}

.sidebar .closebtn {
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
  color: #888888;
}

.cart-footer {
  padding: 0 2.25em;
  height: 100px;
}

.cart-footer > .cart-subtotal {
  padding-top: 1.75em;
}

.cart-footer > .cart-subtotal > span {
  font-weight: 700;
  font-size: 1.5rem;
  color: #111;
}

.cart-footer > .cart-subtotal > span > span {
  font-size: 2.25rem;
}

.cart-footer > button {
  margin-top: 1.5em;
  text-align: center;
  width: 100%;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.basket-icon {
  transition: margin-left 0.5s;
  padding: 16px 6px;
  cursor: pointer;
}

.router-link-active,
.routerLink {
  margin: 0;
  padding: 8px 0 !important;
}

.checkout-button {
  width: 100%;
}

.checkout-button:hover {
  background-color: #2d9b9b;
}

.cart-main ul {
  position: relative;
}

.mini_cart_item {
  list-style: none;
  overflow: hidden;
  padding: 20px 0;
  padding-right: 1em;
  border-bottom: 1px solid #f1f1f1;
}

/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}

.list-move {
  transition: all 0.3s ease;
}

/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.switch-enter-active {
  transition: all 0.5s ease;
}

.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
