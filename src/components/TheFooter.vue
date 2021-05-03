<template>
  <div>
    <footer class="footer style7">
      <div class="container">
        <div class="container-wapper">
          <div class="row">
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div class="widget-box">
                <ul class="menu">
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="fas fa-map-marker-alt"></span
                      >{{ datosTienda.dir }}</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="fa fa-phone"></span>{{ datosTienda.tel }}</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="fa fa-envelope-o"></span
                      >{{ datosTienda.mail }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-2">
              <div class="tanajil-custommenu default">
                <h2 class="widgettitle">Quick Menu</h2>
                <ul class="menu">
                  <li class="menu-item">
                    <router-link :to="{ name: 'Home' }" class="footer-a"
                      >Home</router-link
                    >
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'Store' }" class="footer-a"
                      >Tienda</router-link
                    >
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'Contact' }" class="footer-a"
                      >Contactanos</router-link
                    >
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'About' }" class="footer-a"
                      >Nosotros</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div class="tanajil-socials">
                <ul class="socials">
                  <li>
                    <a href="#" class="social-item" target="_blank">
                      <i class="icon fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-item" target="_blank">
                      <i class="icon fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-item" target="_blank">
                      <i class="icon fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 border-custom">
              <span></span>
            </div>
          </div>
          <div class="footer-end"></div>
        </div>
      </div>
    </footer>
    <!-- Mobile Footer -->
    <div class="footer-device-mobile">
      <MiniCart :onMobile="true" />
      <MiniLogin :onMobile="true" />

      <div class="wapper">
        <div class="footer-device-mobile-item device-home">
          <router-link :to="{ name: 'Home' }">
            <span class="icon">
              <i class="fal fa-home-lg-alt"></i>
            </span>
            Home
          </router-link>
        </div>
        <div class="footer-device-mobile-item device-home device-wishlist">
          <a href="#">
            <span class="icon">
              <i class="fa fa-whatsapp"></i>
              <img src="" alt="" />
            </span>
            Whatsapp
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-cart">
          <a href="#" @click="openNav">
            <span class="icon">
              <i class="fal fa-shopping-cart"></i>
              <span class="count-icon">
                {{ basketCount }}
              </span>
            </span>
            <span class="text">Carrito</span>
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-user">
          <a href="#" @click="openLogin">
            <span class="icon">
              <i class="fal fa-user"></i>
            </span>
            Account
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MiniCart from "./MiniCart";
import MiniLogin from "./MiniLogin";

export default {
  components: { MiniCart, MiniLogin },

  computed: {
    ...mapState(["datosTienda"]),
    ...mapGetters(["basketCount"]),
  },

  methods: {
    openNav() {
      document.getElementsByClassName("mobile")[0].style.width = "100%";
    },

    openLogin() {
      document.getElementsByClassName("mobileLogin")[0].style.width = "100%";
    },

    closeLogin() {
      document.getElementsByClassName("mobileLogin")[0].style.width = "0";
    },
  },
};
</script>

<style></style>
