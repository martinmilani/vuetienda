<template>
  <div>
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
          {{ product.color }}
        </span>
        <span class="attribute_size">
          {{ product.size }}
        </span>
      </div>
      <span class="product-price">
        <span class="price">
          <span>${{ product.price }}</span>
        </span>
      </span>
      <span class="product-quantity"> (x {{ product.quantity }}) </span>
      <div class="product-remove">
        <a @click="removeFromBasket"
          ><i class="fa fa-trash-o" aria-hidden="true"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    removeFromBasket() {
      this.$store.commit("REMOVE_FROM_BASKET", { id: this.product.id });
    },
  },
};
</script>

<style></style>
