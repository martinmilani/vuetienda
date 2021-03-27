<template>
  <div class="shop-top-control">
    <form class="select-item select-form">
      <span class="title"> Ordenar</span>
      <select v-model="quantity" class="chosen-select" @change="changeQuantity">
        <option value="12">12 Productos/Pagina</option>
        <option value="24">24 Productos/Pagina</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShopSortControl",

  props: ["productsOnPages"],

  data() {
    return {
      quantity: 12,
    };
  },

  methods: {
    changeQuantity: function() {
      this.$emit("changeQuantity", parseInt(this.quantity));
    },
  },
};
</script>

<style>
.chosen-container {
  vertical-align: top;
  font-size: inherit;
  line-height: inherit;
  text-align: left;
  width: auto !important;
}
</style>
