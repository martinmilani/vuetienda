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
export default {
  data() {
    return {
      sizes: [
        { size: "xs", isActive: false },
        { size: "s", isActive: false },
        { size: "m", isActive: false },
        { size: "l", isActive: false },
        { size: "xl", isActive: false },
        { size: "xxl", isActive: false },
      ],
    };
  },

  methods: {
    toggleActive(color) {
      return (color.isActive = !color.isActive);
    },
  },
};
</script>
<style scoped></style>
