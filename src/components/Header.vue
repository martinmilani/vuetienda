<template>
  <div>
    <header class="header style7">
      <TopBarHeader />
      <div class="container">
        <div class="main-header">
          <div class="row">
            <LogoHeader />
            <div class="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
                <MainSearchBar/>
            </div>
            <div class="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
              <div class="header-control">
                <MiniCart/>
                <AccountHeader/>
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
        <NavBarHearder/>
      </div>
    </header>
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
                      <span>
                        English (USD)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        French (EUR)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        Japanese (JPY)
                      </span>
                    </a>
                  </li>
                </ul>
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
import TopBarHeader from "./header/TopBarHeader";
import LogoHeader from "./header/LogoHeader";
import MainSearchBar from "./header/MainSearchBar";
import MiniCart from "./header/MiniCart";
import AccountHeader from "./header/AccountHeader";
import NavBarHearder from "./header/NavBarHearder";

export default {
  name: "Header",
  components: {
    TopBarHeader,
    LogoHeader,
    MainSearchBar,
    MiniCart,
    AccountHeader,
    NavBarHearder
  },
};
</script>
<style scoped>
.marked {
  background: yellow !important;
}
</style>
