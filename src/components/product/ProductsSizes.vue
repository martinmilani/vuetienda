<template>
  <div class="attribute attribute_size">
    <div class="size-text text-attribute">Talles:</div>
    <div class="list-size list-item">
      <a
        href="#"
        v-for="(size, index) in productSizes"
        :key="index"
        :class="{ active: size.isActive }"
        @click.prevent="toggleActive(size)"
      >
        {{ size.size }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["productSizes"]),
  },

  methods: {
    toggleActive(size) {
      this.$store.commit("UPDATE_PRODUCT_SIZES", size);
    },
  },
};
</script>

<style></style>
