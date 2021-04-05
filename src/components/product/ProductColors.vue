<template>
  <div class="attribute attribute_color">
    <div class="color-text text-attribute title">Colores:</div>
    <div
      class="list-color list-product"
      v-for="color in productColors"
      :key="color.id"
    >
      <a
        href="#"
        class="color-box color-box-product"
        :style="{ background: `${color.color}` }"
        :class="{ active: color.isActive }"
        @click.prevent="toggleActive(color)"
      ></a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["productColors"]),
  },

  methods: {
    toggleActive(color) {
      this.$store.commit("UPDATE_PRODUCT_COLORS", color);
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 0.75em;
}

.color-box-product {
  margin-right: 1em !important;
  border: 1px solid gray;
}

a:hover {
  border: 1px solid #ff9a94 !important;
}
</style>
