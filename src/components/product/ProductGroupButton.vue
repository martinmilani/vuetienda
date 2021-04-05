<template>
  <div class="group-button">
    <div class="quantity-add-to-cart">
      <div class="quantity">
        <div class="control">
          <a class="btn-number " href="#" @click.prevent="updateProductQuantity"
            >-</a
          >
          <input
            type="text"
            v-model="productQuantity"
            title="Qty"
            class="input-qty qty"
            size="4"
          />
          <a href="#" class="btn-number " @click.prevent="updateProductQuantity"
            >+</a
          >
        </div>
      </div>
      <button class="single_add_to_cart_button button" @click="addToBasket">
        Agregar al carrito
      </button>
      <transition name="fade">
        <div v-if="show" class="alert alert-danger alert-container">
          <a href="#" class="close" @click.prevent="show = false">&times;</a>
          <strong>Debe seleccionar un color y un talle</strong>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return { show: false };
  },

  computed: {
    ...mapState([
      "product",
      "productQuantity",
      "productColors",
      "productSizes",
    ]),
  },

  methods: {
    updateProductQuantity(e) {
      this.$store.commit("UPDATE_PRODUCT_QUANTITY", e.target.text);
    },

    addToBasket() {
      let selectedColor = this.productColors.filter((color) => color.isActive);
      let selectedSize = this.productSizes.filter((size) => size.isActive);
      if (selectedSize.length == 0 || selectedColor == 0) {
        this.show = true;
      } else {
        this.$store.commit("ADD_TO_BASKET", {
          id: this.product.id,
          img: this.product.img[0],
          name: this.product.name,
          price: this.product.price,
          color: this.productColors.filter((color) => color.isActive)[0].color,
          category: this.product.category[0],
          brand: this.product.brand[0],
          size: this.productSizes.filter((size) => size.isActive)[0].size,
          quantity: this.productQuantity,
        });
      }
    },
  },
};
</script>

<style>
.alert-container {
  margin-top: 1em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.single_add_to_cart_button:hover {
  background-color: var(--accent-color-dark);
}
.single_add_to_cart_button:active {
  background-color: var(--accent-color-light);
}
</style>
