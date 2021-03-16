<template>
  <div>
    <header class="header style7">
      <div class="container">
        <div class="main-header">
          <div class="row-header">
            <div class="col-lg-3 col-md-3  col-sm-2  header-element">
              <div class="logo">
                <router-link to="/">
                  <img :src="`${logo}`" alt="img" class="img-logo" />
                </router-link>
              </div>
            </div>
            <div class="col-lg-7 col-md-6 col-sm-6">
              <div class="block-search-block">
                <form class="form-search form-search-width-category">
                  <div class="form-content">
                    <div class="category">
                      <select
                        title="cate"
                        data-placeholder="All Categories"
                        class="chosen-select"
                        tabindex="1"
                      >
                        <option value="United States">Accessories</option>
                        <option value="United Kingdom">Interior</option>
                        <option value="Afghanistan">Performance</option>
                        <option value="Aland Islands">Sofas</option>
                        <option value="Albania">New Arrivals</option>
                        <option value="Algeria">Storage</option>
                      </select>
                    </div>
                    <div class="inner">
                      <input
                        type="text"
                        class="input"
                        name="s"
                        value=""
                        placeholder="Search here"
                      />
                    </div>
                    <button class="btn-search" type="submit">
                      <span class="icon-search"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
              <div class="header-control">
                <!--  <div
                  class="block-minicart tanajil-mini-cart block-header tanajil-dropdown"
                >
                  <a
                    href="javascript:void(0);"
                    class="shopcart-icon"
                    data-tanajil="tanajil-dropdown"
                  >
                    Cart
                    <span class="count">
                      0
                    </span>
                  </a>
                  <div class="no-product tanajil-submenu">
                    <p class="text">
                      You have
                      <span>
                        0 item(s)
                      </span>
                      in your bag
                    </p>
                  </div>
                </div>
                <div class="block-account block-header tanajil-dropdown">
                  <a href="javascript:void(0);" data-tanajil="tanajil-dropdown">
                    <span class="flaticon-user"></span>
                  </a>
                  <div class="header-account tanajil-submenu">
                    <div class="header-user-form-tabs">
                      <ul class="tab-link">
                        <li class="active">
                          <a
                            data-toggle="tab"
                            aria-expanded="true"
                            href="#header-tab-login"
                            >Login</a
                          >
                        </li>
                        <li>
                          <a
                            data-toggle="tab"
                            aria-expanded="true"
                            href="#header-tab-rigister"
                            >Register</a
                          >
                        </li>
                      </ul>
                      <div class="tab-container">
                        <div id="header-tab-login" class="tab-panel active">
                          <form method="post" class="login form-login">
                            <p class="form-row form-row-wide">
                              <input
                                type="email"
                                placeholder="Email"
                                class="input-text"
                              />
                            </p>
                            <p class="form-row form-row-wide">
                              <input
                                type="password"
                                class="input-text"
                                placeholder="Password"
                              />
                            </p>
                            <p class="form-row">
                              <label class="form-checkbox">
                                <input type="checkbox" class="input-checkbox" />
                                <span>
                                  Remember me
                                </span>
                              </label>
                              <input
                                type="submit"
                                class="button"
                                value="Login"
                              />
                            </p>
                            <p class="lost_password">
                              <a href="#">Lost your password?</a>
                            </p>
                          </form>
                        </div>
                        <div id="header-tab-rigister" class="tab-panel">
                          <form method="post" class="register form-register">
                            <p class="form-row form-row-wide">
                              <input
                                type="email"
                                placeholder="Email"
                                class="input-text"
                              />
                            </p>
                            <p class="form-row form-row-wide">
                              <input
                                type="password"
                                class="input-text"
                                placeholder="Password"
                              />
                            </p>
                            <p class="form-row">
                              <input
                                type="submit"
                                class="button"
                                value="Register"
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <MiniCart />
                <MiniLogin />
                <a class="menu-bar mobile-navigation menu-toggle" href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-nav-container">
        <div class="container">
          <div class="header-nav-wapper main-menu-wapper">
            <div class="vertical-wapper block-nav-categori">
              <div class="block-title">
                <span class="icon-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="text">Categorias</span>
              </div>
              <div class="block-content verticalmenu-content">
                <ul
                  class="tanajil-nav-vertical vertical-menu tanajil-clone-mobile-menu"
                >
                  <li class="menu-item">
                    <a
                      href="#"
                      class="tanajil-menu-item-title"
                      title="New Arrivals"
                      >New Arrivals</a
                    >
                  </li>
                  <li class="menu-item">
                    <a title="Hot Sale" href="#" class="tanajil-menu-item-title"
                      >Hot Sale</a
                    >
                  </li>
                  <li class="menu-item menu-item-has-children">
                    <a
                      title="Accessories"
                      href="#"
                      class="tanajil-menu-item-title"
                      >Accessories</a
                    >
                    <span class="toggle-submenu"></span>
                    <ul role="menu" class=" submenu">
                      <li class="menu-item">
                        <a title="Audio" href="#" class="tanajil-item-title"
                          >Audio</a
                        >
                      </li>
                      <li class="menu-item">
                        <a title="Interior" href="#" class="tanajil-item-title"
                          >Interior</a
                        >
                      </li>
                      <li class="menu-item">
                        <a
                          title="New Arrivals"
                          href="#"
                          class="tanajil-item-title"
                          >New Arrivals</a
                        >
                      </li>
                      <li class="menu-item">
                        <a
                          title="Accessories"
                          href="#"
                          class="tanajil-item-title"
                          >Accessories</a
                        >
                      </li>
                      <li class="menu-item">
                        <a title="Storage" href="#" class="tanajil-item-title"
                          >Storage</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a title="Interior" href="#" class="tanajil-menu-item-title"
                      >Interior</a
                    >
                  </li>
                  <li class="menu-item">
                    <a title="Lighting" href="#" class="tanajil-menu-item-title"
                      >Lighting</a
                    >
                  </li>
                  <li class="menu-item">
                    <a title="Wheels" href="#" class="tanajil-menu-item-title"
                      >Wheels</a
                    >
                  </li>
                  <li class="menu-item">
                    <a title="Tires" href="#" class="tanajil-menu-item-title"
                      >Tires</a
                    >
                  </li>
                  <li class="menu-item">
                    <a title="Exterior" href="#" class="tanajil-menu-item-title"
                      >Exterior</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-nav">
              <div class="container-wapper">
                <ul
                  class="tanajil-clone-mobile-menu tanajil-nav main-menu "
                  id="menu-main-menu"
                >
                  <li class="menu-item ">
                    <router-link to="/store">Tienda</router-link>
                  </li>
                  <li class="menu-item ">
                    <router-link to="contact">Contactanos</router-link>
                  </li>

                  <li class="menu-item">
                    <router-link to="about"> Nosotros </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="header-device-mobile">
      <div class="wapper">
        <div class="item mobile-logo">
          <div class="logo">
            <router-link to="/">
              <img :src="`${logo}`" alt="img" class="img-logo-mobile" />
            </router-link>
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
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Enter keywords to search..."
                  />
                  <input type="submit" class="submit button" value="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="item menu-bar">
          <a class=" mobile-navigation  menu-toggle" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import MiniLogin from "./MiniLogin.vue";

export default {
  name: "TheHeader",
  components: {
    MiniCart,
    MiniLogin,
  },

  data() {
    return {
      logo:
        "assets/images/kisspng-sacred-lotus-vector-graphics-clip-art-image-symbol-5c4ef1958a1c31.4920790615486775255657.png",
    };
  },
};
</script>

<style scoped></style>
