<template>
  <div>
    <footer class="footer style7">
      <div class="container">
        <div class="container-wapper">
          <div class="row">
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div class="widget-box">
                <!-- <div class="single-img">
                  <router-link to="/">
                    <img :src="`${logo}`" alt="img" class="img-logo" />
                  </router-link>
                </div> -->
                <ul class="menu">
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="flaticon-placeholder"></span>45 Grand
                      Central Terminal New York,NY 1017 United State USA</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="fa fa-phone"></span>(+123) 456 789 - (+123)
                      666 888</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="fa fa-envelope-o"></span
                      >Contact@yourcompany.com</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a"
                      ><span class="flaticon-clock"></span>Mon-Sat 9:00pm -
                      5:00pm Sun : Closed</a
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
                    <a href="#" class="footer-a">New arrivals</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Life style</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Interior</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Lighting</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Wheels</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-2">
              <div class="tanajil-custommenu default">
                <h2 class="widgettitle">Information</h2>
                <ul class="menu">
                  <li class="menu-item">
                    <a href="#" class="footer-a">FAQs</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Track Order</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Delivery</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Contact Us</a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="footer-a">Return</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <!-- <div class="tanajil-newsletter style1">
                <div class="newsletter-head">
                  <h3 class="title">Newsletter</h3>
                </div>
                <div class="newsletter-form-wrap">
                  <div class="list">
                    Get notified of new products, limited releases, and more.
                  </div>
                  <input
                    type="email"
                    class="input-text email email-newsletter"
                    placeholder="Your email letter"
                  />
                  <button class="button btn-submit submit-newsletter">
                    SUBSCRIBE
                  </button>
                </div>
              </div> -->
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
          <div class="footer-end">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="coppyright">
                  <a href="templateshub.net">Templateshub</a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="tanajil-payment">
                  <img src="assets/images/payments.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-device-mobile">
      <div class="wapper">
        <div class="footer-device-mobile-item device-home">
          <router-link to="/">
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
export default {
  data() {
    return {
      logo:
        "assets/images/kisspng-sacred-lotus-vector-graphics-clip-art-image-symbol-5c4ef1958a1c31.4920790615486775255657.png",
    };
  },
};
</script>

<style></style>
