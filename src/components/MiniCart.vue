<template>
  <div class="block-minicart tanajil-mini-cart block-header tanajil-dropdown">
    <a
      href="javascript:void(0);"
      class="shopcart-icon"
      data-tanajil="tanajil-dropdown"
    >
      Cart
      <span class="count">
        {{ basketCount }}
      </span>
    </a>
    <div class="no-product tanajil-submenu">
      <div v-if="basketEmpty">
        <p class="text">
          You have
          <span>
            0 item(s)
          </span>
          in your bag
        </p>
      </div>
      <div v-else>
        <p class="text">
          You have
          <span> {{ basketCount }} item(s) </span>
          in your bag
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MiniCart",
  computed: mapGetters(["basketEmpty", "basketCount"]),
};
</script>

<style></style>
