<template>
  <div>
    <Header msg="Welcome to Your Vue.js App" />
    <div class="main-content main-content-product left-sidebar">
      <div class="container">
        <div class="row">
          <Breadcrumb/>
        </div>
        <div class="row">
          <GridProducts :customTitle="`Grid Products`" :products="products" />
          <Sidebar/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import GridProducts from "../components/GridProducts.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  name: "TiendaIndex",
  components: {
    Header,
    Footer,
    Sidebar,
    GridProducts,
    Breadcrumb,
  },

  mounted() {
    this.hacer();
  },
  methods: {
    hacer() {
      console.log(this.valor);
    },
  },

  data: function() {
    return {
      valor: 1,
      products: [
        {
          id: 1,
          name: "Lavandina Dina",
          image: "assets/images/product-item-1.jpg",
        },
        {
          id: 2,
          name: "Jabón Auschwitz",
          image: "assets/images/product-item-2.jpg",
        },
        {
          id: 3,
          name: "Raid Matatodo",
          image: "assets/images/product-item-3.jpg",
        },
        {
          id: 4,
          name: "Lavandina Dina",
          image: "assets/images/product-item-1.jpg",
        },
        {
          id: 5,
          name: "Jabón Auschwitz",
          image: "assets/images/product-item-2.jpg",
        },
        {
          id: 6,
          name: "Raid Matatodo",
          image: "assets/images/product-item-3.jpg",
        },
        {
          id: 7,
          name: "Lavandina Dina",
          image: "assets/images/product-item-1.jpg",
        },
        {
          id: 8,
          name: "Jabón Auschwitz",
          image: "assets/images/product-item-2.jpg",
        },
        {
          id: 9,
          name: "Raid Matatodo",
          image: "assets/images/product-item-3.jpg",
        },
        {
          id: 10,
          name: "Lavandina Dina",
          image: "assets/images/product-item-1.jpg",
        },
        {
          id: 11,
          name: "Jabón Auschwitz",
          image: "assets/images/product-item-2.jpg",
        },
        {
          id: 12,
          name: "Raid Matatodo",
          image: "assets/images/product-item-3.jpg",
        },
      ],
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
