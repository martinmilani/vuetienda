<template>
  <div class="shopcart-description content-wrap">
    <router-link :to="{ name: 'ProductDetails' }" class="product-media">
      <img :src="`${product.img}`" alt="img" />
    </router-link>
    <div class="product-details">
      <h5 class="product-name">
        <router-link :to="{ name: 'ProductDetails' }">{{
          product.name
        }}</router-link>
      </h5>
      <div class="variations">
        <span class="attribute_color">
          Color:
          <a class="color-box" :style="{ background: `${product.color}` }"></a>
        </span>
        <span> Talle: {{ product.size }} </span>
      </div>
      <span class="product-price">
        <span class="price">
          Precio: <span>${{ product.price }}</span>
        </span>
      </span>
      <span class="product-quantity"> (x {{ product.quantity }}) </span>
      <div v-if="!plainList" class="product-remove">
        <a @click="removeFromBasket"
          ><i class="fa fa-trash-o" aria-hidden="true"></i
        ></a>
      </div>
    </div>
     <div class="quantity-add-to-cart">
      <div  class="quantity">
        <div v-if="!plainList" class="control">
          <a class="btn-number " href="#" @click.prevent="updateBasketProductQuantity"
            >-</a
          >
          <input
            type="text"
            :value="product.quantity"
            title="Qty"
            class="input-qty qty"
            size="4"
          />
          <a href="#" class="btn-number " @click.prevent="updateBasketProductQuantity"
            >+</a
          >
        </div>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  props: ["product","plainList"],

  methods: {
    updateBasketProductQuantity(e) {
      this.$store.commit("UPDATE_BASKET_PRODUCT_QUANTITY", { operation: e.target.text, product:this.product});
    },
    removeFromBasket() {
      this.$store.commit("REMOVE_FROM_BASKET", { id: this.product.id });
    },
  },
};
</script>

<style scoped>
.control{
  width: 60px !important;
  padding: 0 5px !important;
  height: 20px;
  margin-top:5px
}
.quantity{
  margin-top: 2em;
  margin-left: 0.25em;
}
.product-remove:hover {
  cursor: pointer;
}

.color-box {
  height: 10px;
  width: 10px;
  border-radius: 5px;
  margin-left: 5px;
  border: 1px solid grey;
}
</style>
