<template>
  <div class="shop-top-control">
    <form class="select-form">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
          <!--     <span class="title"> Ordenar</span> -->
          <select
            v-model="quantity"
            class="form-control"
            @change="changeQuantity"
          >
            <option value="12">12 Productos/Pagina</option>
            <option value="24">24 Productos/Pagina</option>
          </select>
        </div>
      </div>
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
