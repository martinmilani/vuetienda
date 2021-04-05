<template>
  <div>
    <!-- Main Slider -->
    <div
      class="image-preview-container image-thick-box image_preview_container"
    >
      <splide :options="primaryOptions" ref="primary">
        <splide-slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
          <img :src="`${slide}`" alt="" />
        </splide-slide>
      </splide>
    </div>

    <!-- Thumbnail slider -->
    <div class="product-preview image-small product_preview">
      <splide :options="secondaryOptions" ref="secondary">
        <splide-slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
          <img :src="`${slide}`" alt="" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "DetailsProductSlide",
  components: {
    Splide,
    SplideSlide,
  },

  props: ["slides"],

  data() {
    return {
      primaryOptions: {
        type: "loop",
        pagination: false,
        arrows: false,
      },

      secondaryOptions: {
        type: "loop",
        perPage: 3,
        rewind: true,
        width: 800,
        gap: "5.25rem",
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: "center",
        isNavigation: true,
        padding: "8rem",
        breakpoints: {
          "900": {
            type: "loop",
            gap: "1em",
            perPage: 2,
          },
        },
      },
    };
  },

  mounted() {
    // Set the sync target.
    this.$refs.primary.sync(this.$refs.secondary.splide);
  },
};
</script>

<style></style>
