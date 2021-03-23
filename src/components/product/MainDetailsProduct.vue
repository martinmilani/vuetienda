<template>
  <div class="details-product">
    <div class="details-thumd">
      <DetailsProductSlide />
    </div>
    <div class="details-infor">
      <h1 class="product-title">{{ product.name }}</h1>
      <div class="availability">
        Disponibilidad:
        <a href="#">in Stock</a>
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
        <div class="attribute attribute_color">
          <div class="color-text text-attribute">Color:</div>
          <div class="list-color list-product">
            <a href="#" class="color1"></a>
            <a href="#" class="color2"></a>
            <a href="#" class="color3 active"></a>
            <a href="#" class="color4"></a>
          </div>
        </div>
        <div class="attribute attribute_size">
          <div class="size-text text-attribute">Talle:</div>
          <div class="list-size list-product">
            <a href="#" class>xs</a>
            <a href="#" class>s</a>
            <a href="#" class="active">m</a>
            <a href="#" class>l</a>
            <a href="#" class>xl</a>
            <a href="#" class>xxl</a>
          </div>
        </div>
      </div>
      <div class="group-button">
        <div class="quantity-add-to-cart">
          <div class="quantity">
            <div class="control">
              <a class="btn-number qtyminus quantity-minus" href="#">-</a>
              <input
                type="text"
                data-step="1"
                data-min="0"
                value="1"
                title="Qty"
                class="input-qty qty"
                size="4"
              />
              <a href="#" class="btn-number qtyplus quantity-plus">+</a>
            </div>
          </div>
          <button class="single_add_to_cart_button button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsProductSlide from "./DetailsProductSlide.vue";

export default {
  name: "MainDetailsProduct",

  data() {
    return {
      productId: this.$route.params.id,
    };
  },

  components: {
    DetailsProductSlide,
  },

  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  /* methods: {
    addToBasket() {
      this.$store.commit("ADD_TO_BASKET");
    },
  }, */

  mounted() {
    this.$store.dispatch("loadProduct", this.productId);
  },
};
</script>

<style scoped>
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

.single_add_to_cart_button:hover {
  background-color: var(--accent-color-dark);
}
.single_add_to_cart_button:active {
  background-color: var(--accent-color-light);
}
</style>
