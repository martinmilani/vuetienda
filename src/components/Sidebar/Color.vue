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
export default {
  data() {
    return {
      colors: [
        { id: 1, color: "#FFFFFF", isActive: false },
        { id: 2, color: "#222222", isActive: false },
        { id: 3, color: "#4A5365", isActive: false },
        { id: 4, color: "#84664D", isActive: false },
        { id: 5, color: "#D27D53", isActive: false },
        { id: 6, color: "#5F8EA9", isActive: false },
        { id: 7, color: "#719271", isActive: false },
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
<style scoped>
.color-box {
  border: 1px solid;
}

a:hover,
a:focus,
a:active {
  border-color: black !important;
}
</style>
