<template>
  <div>
    <!-- Main Slider -->
    <div
      class="image-preview-container image-thick-box image_preview_container"
    >
      <splide :options="primaryOptions" ref="primary">
        <splide-slide>
          <img src="assets/images/product-item-6.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423a77061.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423955014.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423a2e88c.jpg" />
        </splide-slide>
      </splide>
    </div>

    <!-- Thumbnail slider -->
    <div class="product-preview image-small product_preview">
      <splide :options="secondaryOptions" ref="secondary">
        <splide-slide>
          <img src="assets/images/product-item-6.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423a77061.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423955014.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="assets/images/27-11-2020-20-15-5fc1423a2e88c.jpg" />
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
            //padding: 1,
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
