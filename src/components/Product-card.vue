<template>
  <div>
    <div class="product-inner equal-element">
      <div class="product-thumb">
        <div class="thumb-inner">
          <a href="#">
            <img :src="`${product.img}`" alt="img" />
          </a>
        </div>
      </div>
      <div class="product-info">
        <h5 class="product-name product_title">
          <a href="#">{{ product.name }}</a>
        </h5>
        <div class="group-info">
          <div class="price">
            <ins> ${{ product.price }} </ins>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <button class="single_add_to_cart_button button">
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    clicked() {
      console.log("clicked!");
    },
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 1.25em;
  margin-bottom: 0.5em;
}

.single_add_to_cart_button:hover {
  background-color: var(--accent-color-dark);
}
.single_add_to_cart_button:active {
  background-color: var(--accent-color-light);
}
</style>
