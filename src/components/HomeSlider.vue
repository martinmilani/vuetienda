<template>
  <div class="slide-container">
    <splide :options="options">
      <splide-slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
        <img :src="`${slide}`" alt="" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "HomeSlider",
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      options: {
        type: "loop",
        width: "100%",
        speed: 1200,
        gap: "10em",
        autoWidth: true,
        pagination: false,
        autoplay: true,
        focus: "center",
        breakpoints: {
          "768": {
            autoWidth: false,
          },
        },
      },

      slides: [
        "assets/images/8-01-2021-11-25-5ff824f834673.jpg",
        "assets/images/8-02-2021-14-41-60213165a4a35.gif",
        "assets/images/19-02-2021-19-17-602ff2a716aa6.jpg",
      ],
    };
  },
};
</script>
<style scoped>
.slide-container {
  max-width: 1250px;
  margin: 2em auto 2em auto;
}

.splide__slide img {
  border-radius: 10px;
}

@media screen and (max-width: 1100px) {
  .slide-container {
    width: 95%;
  }
}
</style>

<style>
@media screen and (max-width: 800px) {
  .splide__arrow--prev,
  .splide__arrow--next {
    display: none;
  }
}
</style>
