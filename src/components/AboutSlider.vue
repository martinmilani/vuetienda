<template>
  <div class="carousel-container">
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
  name: "App",
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      options: {
        type: "loop",
        width: "100%",
        perPage: 3,
        perMove: 1,
        autoWidth: true,
        gap: "5em",
        focus: "center",
        pagination: false,
        breakpoints: {
          "1200": {
            perPage: 2,
            gap: "6rem",
            padding: "6rem",
            focus: false,
            autoWidth: false,
            width: "800px",
          },

          "900": {
            perPage: 2,
            gap: "6rem",
            padding: "6rem",
            focus: false,
            autoWidth: false,
            width: "700px",
          },

          "620": {
            perPage: 1,
            gap: "6rem",
            padding: "6rem",
            focus: false,
            autoWidth: false,
            width: "300px",
          },
        },
      },

      slides: [
        "assets/images/member1.png",
        "assets/images/member2.png",
        "assets/images/member3.png",
        "assets/images/member2.png",
      ],
    };
  },
};
</script>

<style scoped>
.carousel-container {
  max-width: 1200px;
  width: "100%";
  display: flex;
  justify-content: center;
}

.splide__slide img {
  border-radius: 1000px;
}
</style>
