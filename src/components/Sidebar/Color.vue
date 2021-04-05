<template>
  <div>
    <div class="widget widget-color">
      <h4 class="widgettitle">
        Colores
      </h4>
      <div class="list-color">
        <div class="container-color" v-for="color in colors" :key="color.id">
          <a
            href="#"
            class="color-box"
            :style="{ background: `${color.color}` }"
            :class="{ active: color.isActive }"
            @click.prevent="toggleActive(color)"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["colors"]),

  methods: {
    toggleActive(color) {
      if (!color.isActive) {
        color.isActive = true;
        this.$store.commit("ADD_FILTER", {
          filterOption: "colors",
          value: color.color,
        });
      } else {
        color.isActive = false;
        this.$store.commit("REMOVE_FILTER", {
          filterOption: "colors",
          value: color.color,
        });
      }
    },
  },
};
</script>
<style scoped>
.color-box {
  border: 1px solid;
}

a:hover,
a:focus,
a:active {
  border-color: grey !important;
}
</style>
