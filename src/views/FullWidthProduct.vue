<template>
  <div class="details-page">
    <div class="header-device-mobile">
      <div class="wapper">
        <div class="item mobile-logo">
          <div class="logo">
            <a href="#">
              <img src="assets/images/logo.png" alt="img" />
            </a>
          </div>
        </div>
        <div class="item item mobile-search-box has-sub">
          <a href="#">
            <span class="icon">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </a>
          <div class="block-sub">
            <a href="#" class="close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <div class="header-searchform-box">
              <form class="header-searchform">
                <div class="searchform-wrap">
                  <input type="text" class="search-input" placeholder="Enter keywords to search..." />
                  <input type="submit" class="submit button" value="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="item mobile-settings-box has-sub">
          <a href="#">
            <span class="icon">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </span>
          </a>
          <div class="block-sub">
            <a href="#" class="close">
              <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <div class="block-sub-item">
              <h5 class="block-item-title">Currency</h5>
              <form class="currency-form tanajil-language">
                <ul class="tanajil-language-wrap">
                  <li class="active">
                    <a href="#">
                      <span>English (USD)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>French (EUR)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Japanese (JPY)</span>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div class="item menu-bar">
          <a class="mobile-navigation menu-toggle" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
    <div class="main-content main-content-details single no-sidebar">
      <div class="container">
        <div class="row">
          <Product/>
        </div>
      </div>
    </div>
    <Footer />
    <div class="footer-device-mobile">
      <div class="wapper">
        <div class="footer-device-mobile-item device-home">
          <a href="index-2.html">
            <span class="icon">
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            Home
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-wishlist">
          <a href="#">
            <span class="icon">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </span>
            Wishlist
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-cart">
          <a href="#">
            <span class="icon">
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
              <span class="count-icon">0</span>
            </span>
            <span class="text">Cart</span>
          </a>
        </div>
        <div class="footer-device-mobile-item device-home device-user">
          <a href="#">
            <span class="icon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
            Account
          </a>
        </div>
      </div>
    </div>
    <a href="#" class="backtotop">
      <i class="fa fa-angle-double-up"></i>
    </a>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "FullWidthProduct",
  components: {
    Product
  },
};
</script>

<style></style>
