<template>
  <div>
    <div class="widget widget_filter_size">
      <h4 class="widgettitle">Talles</h4>
      <ul class="list-size">
        <li
          v-for="(size, index) in sizes"
          :key="index"
          :class="{ active: size.isActive }"
          @click.prevent="toggleActive(size)"
        >
          <a href="#">{{ size.size }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["sizes"]),

  methods: {
    toggleActive(size) {
      if (!size.isActive) {
        size.isActive = true;
        this.$store.commit("ADD_FILTER", {
          filterOption: "sizes",
          value: size.size,
        });
      } else {
        size.isActive = false;
        this.$store.commit("REMOVE_FILTER", {
          filterOption: "sizes",
          value: size.size,
        });
      }
    },
  },
};
</script>
<style scoped></style>
