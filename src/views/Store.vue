<template>
  <div>
    <div class="main-content main-content-product left-sidebar">
      <div class="container">
        <div class="row" v-if="true">
          <GridProducts :customTitle="`Productos`" />
          <Sidebar />
        </div>
        <div class="row" v-else>
          <div class="content-area shop-grid-content no-banner col-xs-12">
            <div class="site-main">
              <h3 class="custom_blog_title custom_blog_title-center">
                No hay productos que coincidan con la busqueda
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import GridProducts from "../components/GridProducts.vue";

export default {
  components: {
    Sidebar,
    GridProducts,
  },
};
</script>

<style scoped>
.custom_blog_title-center {
  text-align: center;
  margin-top: 40px;
  height: 20vh;
}
</style>
