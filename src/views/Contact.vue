<template>
  <div>
    <div class="main-content main-content-contact">
      <div class="container">
        <div class="row">
          <div
            class="content-area content-contact col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style="margin-top:4em"
          >
            <div class="site-main">
              <h3 class="custom_blog_title">Contactanos</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="page-main-content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-contact">
                <div class="col-lg-8 no-padding">
                  <div class="form-message">
                    <h2 class="title">
                      Envianos tu consulta!
                    </h2>
                    <form class="tanajil-contact-fom" @submit="handleSubmit">
                      <div class="row">
                        <div class="col-sm-6">
                          <p>
                            <span class="form-label">Tu Nombre *</span>
                            <span class="form-control-wrap your-name">
                              <input
                                title="your-name"
                                type="text"
                                name="your-name"
                                size="40"
                                class="form-control form-control-name"
                                required
                              />
                            </span>
                          </p>
                        </div>
                        <div class="col-sm-6">
                          <p>
                            <span class="form-label">
                              Tu Email *
                            </span>
                            <span class="form-control-wrap your-email">
                              <input
                                title="your-email"
                                type="email"
                                name="your-email"
                                size="40"
                                class="form-control form-control-email"
                                required
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <p>
                            <span class="form-label">Teléfono</span>
                            <span class="form-control-wrap your-phone">
                              <input
                                title="your-phone"
                                type="text"
                                name="your-phone"
                                class="form-control form-control-phone"
                              />
                            </span>
                          </p>
                        </div>
                        <div class="col-sm-6">
                          <p>
                            <span class="form-label">
                              Compañía
                            </span>
                            <span class="form-control-wrap your-company">
                              <input
                                title="your-company"
                                type="text"
                                name="your-company"
                                class="form-control your-company"
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                      <p>
                        <span class="form-label">
                          Tu Mensaje
                        </span>
                        <span class="wpcf7-form-control-wrap your-message">
                          <textarea
                            title="your-message"
                            name="your-message"
                            cols="40"
                            rows="9"
                            class="form-control your-textarea"
                          ></textarea>
                        </span>
                      </p>
                      <div class="btn-container submit">
                        <button class="single_add_to_cart_button button">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-4 no-padding">
                  <div class="form-contact-information">
                    <form action="#" class="tanajil-contact-info">
                      <h2 class="title">
                        Informacion de Contacto
                      </h2>
                      <div class="info">
                        <div class="item address">
                          <span class="icon"> </span>
                          <span class="text">
                            {{ datosTienda.dir }}
                          </span>
                        </div>
                        <div class="item phone">
                          <span class="icon"> </span>
                          <span class="text text-padding">
                            {{ datosTienda.tel }}
                          </span>
                        </div>
                        <div class="item email">
                          <span class="icon"> </span>
                          <span class="text text-padding">
                            {{ datosTienda.mail }}
                          </span>
                        </div>
                      </div>
                      <div class="socials">
                        <a href="#" class="social-item" target="_blank">
                          <span class="icon fa fa-facebook"> </span>
                        </a>
                        <a href="#" class="social-item" target="_blank">
                          <span class="icon fa fa-twitter-square"> </span>
                        </a>
                        <a href="#" class="social-item" target="_blank">
                          <span class="icon fa fa-instagram"> </span>
                        </a>
                      </div>
                    </form>
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
import { mapState } from "vuex";
export default {
  computed: mapState(["datosTienda"]),
  methods: {
    handleSubmit() {
      console.log("submited");
    },
  },
};
</script>

<style scoped></style>
