<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
    <BackToTop />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import BackToTop from "./components/BackToTop.vue";

export default {
  name: "app",

  components: {
    TheHeader,
    TheFooter,
    BackToTop,
  },

  beforeMount() {
    
    //this.$store.dispatch("loadProducts"); Descomentar para levantar datos desde la api
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadBrands");
    this.$store.dispatch("loadLogo");
    this.$store.dispatch("loadSlides");
    this.$store.dispatch("loadDatosTienda");
  },
};
</script>

<style></style>
