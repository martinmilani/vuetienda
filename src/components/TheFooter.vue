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
                      ><span class="flaticon-placeholder"></span
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
    <div class="footer-device-mobile">
      <div class="wapper">
        <div class="footer-device-mobile-item device-home">
          <router-link :to="{ name: 'Home' }">
            <span class="icon">
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            Home
          </router-link>
        </div>
        <div class="footer-device-mobile-item device-home device-wishlist">
          <a href="#">
            <span class="icon">
              <i
                ><img
                  class="icon-image"
                  src="https://img.icons8.com/pastel-glyph/64/000000/whatsapp--v2.png"
                  alt=""
              /></i>
              <img src="" alt="" />
            </span>
            Whatsapp
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-cart">
          <a href="#">
            <span class="icon">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <span class="count-icon">
                0
              </span>
            </span>
            <span class="text">Cart</span>
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-user">
          <a href="login.html">
            <span class="icon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
            Account
          </a>
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

<style></style>
