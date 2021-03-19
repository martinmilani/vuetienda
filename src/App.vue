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

  mounted() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadBrands");
  },
};
</script>

<style></style>
