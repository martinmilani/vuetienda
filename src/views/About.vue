<template>
  <div>
    <div class="main-content main-content-about">
      <div class="container">
        <div class="row">
          <div
            class="content-area content-about col-lg-12 col-md-12 col-sm-12 col-xs-12"
          >
            <div class="site-main">
              <h3 class="custom_blog_title">Nosotros</h3>
              <div class="about-text-container">
                <div class="about-text ">
                  <p>
                    {{ datosTienda.nosotros }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["datosTienda"]),
};
</script>

<style scoped>
.custom_blog_title {
  margin-top: 2em;
}
.row-about {
  max-width: 1100px;
}

.about-text-container {
  margin-top: 2em;
}

.about-text {
  font-size: 1em;
}
</style>
