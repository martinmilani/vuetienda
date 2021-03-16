<template>
  <div>
    <div class="main-content main-content-product left-sidebar">
      <div class="container">
        <div class="row">
          <GridProducts :customTitle="`Productos`" />
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import GridProducts from "../components/GridProducts.vue";

//import {mapState} from 'vuex'

export default {
  name: "TiendaIndex",
  components: {
    Sidebar,
    GridProducts,
  },
};
</script>

<style></style>
