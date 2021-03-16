<template>
  <div>
    <div class="main-content main-content-about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-trail breadcrumbs">
              <ul class="trail-items breadcrumb">
                <li class="trail-item trail-begin">
                  <router-link to="/"> Home </router-link>
                </li>
                <li class="trail-item trail-end active">
                  Acerca de Nosotros
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="content-area content-about col-lg-12 col-md-12 col-sm-12 col-xs-12"
          >
            <div class="site-main">
              <h3 class="custom_blog_title">Nosotros</h3>
              <div class="page-main-content">
                <div class="about-img-container">
                  <img
                    class="about-img"
                    src="assets/images/closeup-sketched-cloth-designs.jpg"
                    alt="Image"
                  />
                </div>
                <div class="about-text-container">
                  <div class="about-text ">
                    <p>
                      SUSHMITA nace como el resultado de la mezcla de dos
                      culturas, enriquecida por viajes, vivencias y pluralidad
                      de colores, sabores que le dan esa identidad única que
                      caracteriza nuestra marca. Un estilo de ropa que te
                      conecta con tu feminidad, esencia y natural belleza. Para
                      una mujer como vos, de espíritu jovial y divertido, que
                      puede disfrutar de la identidad libre, aventurera y
                      ultra-femenina que refleja la marca.
                    </p>
                    <p>
                      SUSHMITA es una mujer con una sonrisa en la cara,
                      espirando amor, vitalidad y felicidad.
                    </p>
                    <p>
                      Llevamos mas de 8 años en el mercado de la ropa y queremos
                      seguir siendo parte de tu elección. Gracias por elegirnos
                      y ser nuestra musa inspiradora.
                    </p>
                    <p>
                      Trabajamos para darte una prenda de calidad y versátil que
                      puedas usar para cualquier ocasión en tu vida.
                    </p>
                    <p>
                      Como nace cada una de nuestras prendas? El proceso de
                      diseño de una prenda de SUSHMITA nace de la inspiración en
                      tendencias,colores y lugares creando prendas diferentes.
                      Luego hacemos una selección de estampados y géneros
                      tomando en cuenta cada diseño para lograr una combinación
                      perfecta, armoniosa y original. El siguiente paso es
                      confeccionar las muestras para asegurarnos que muestran
                      prendas sean cómodas y hermosas. Una vez seguros de
                      cumplir con estos objetivos, comenzamos con la producción
                      de los diseños que luego tu podrás disfrutar.
                    </p>
                  </div>
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
export default {};
</script>

<style scoped>
.row-about {
  max-width: 1100px;
}

.about-text-container {
  margin-top: 4em;
}

.about-text {
  font-size: 1em;
}

.about-img {
  object-fit: cover;
  width: 100%;
  height: 300px;
}

@media screen and (max-width: 768px) {
  .about-img {
    height: 200px;
  }
}

@media screen and (max-width: 500px) {
  .about-img {
    height: 150px;
  }
}
</style>
