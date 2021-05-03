<template>
  <div>
    <header class="header style7">
      <div class="container">
        <div class="main-header">
          <div class="row-header">
            <div class="col-lg-2 col-md-2 col-sm-2  header-element">
              <div class="logo">
                <router-link :to="{ name: 'Home' }">
                  <img :src="`${logo}`" alt="img" class="img-logo" />
                </router-link>
              </div>
            </div>
            <div class="col-lg-8 col-md-7 col-sm-6">
              <div class="block-search-block">
                <form class="form-search form-search-width-category">
                  <div class="form-content">
                    <div class="inner">
                      <input
                        type="text"
                        class="input"
                        value=""
                        v-model="keyword"
                        placeholder="Buscar"
                      />
                    </div>
                    <router-link :to="{ name: 'Store' }">
                      <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </router-link>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-4">
              <div class="header-control">
                <div
                  class="block-minicart tanajil-mini-cart block-header tanajil-dropdown"
                >
                  <MiniCart :onMobile="false" />
                  <MiniLogin :onMobile="false" />
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
              <div
                class="block-content verticalmenu-content"
                id="category-filter"
              >
                <ul
                  class="tanajil-nav-vertical vertical-menu tanajil-clone-mobile-menu"
                >
                  <li
                    v-for="category in categories"
                    :key="category.id"
                    class="menu-item"
                  >
                    <router-link
                      :to="{
                        name: 'Store',
                        params: { filterCategory: category.name },
                      }"
                    >
                      <a
                        href="#"
                        class="tanajil-menu-item-title"
                        v-on:click="activeCategoryFilter(category)"
                        >{{ category.name }}</a
                      >
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header-nav">
              <div class="container-wapper">
                <ul
                  class="tanajil-clone-mobile-menu tanajil-nav main-menu"
                  id="menu-main-menu"
                >
                  <li class="menu-item">
                    <router-link :to="{ name: 'Home' }">Home</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'Store' }">Tienda</router-link>
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'Contact' }"
                      >Contactanos</router-link
                    >
                  </li>
                  <li class="menu-item">
                    <router-link :to="{ name: 'About' }">Nosotros</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Mobile Header -->
    <div class="header-device-mobile">
      <div class="wapper">
        <div class="item mobile-logo">
          <div class="logo">
            <router-link :to="{ name: 'Home' }">
              <img :src="`${logo}`" alt="img" class="img-logo-mobile" />
            </router-link>
          </div>
        </div>

        <div class="item item mobile-search-box has-sub" id="mobile-search-box">
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
                    class="search-input"
                    type="text"
                    placeholder="Buscar"
                    v-model="keyword"
                  />
                  <router-link :to="{ name: 'Store' }">
                    <input
                      type="submit"
                      class="submit button"
                      value="Buscar"
                      v-on:click="toggleSearch"
                    />
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="item menu-bar">
          <a class="mobile-navigation  menu-toggle" href="#">
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
import { mapState } from "vuex";
import MiniCart from "./MiniCart.vue";
import MiniLogin from "./MiniLogin.vue";

export default {
  name: "TheHeader",
  components: {
    MiniCart,
    MiniLogin,
  },

  computed: {
    ...mapState(["categories", "logo"]),

    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(value) {
        this.$store.commit("UPDATE_KEYWORD", value);
      },
    },
  },

  methods: {
    toggleSearch() {
      document.getElementById("mobile-search-box").classList.remove("open");
    },

    activeCategoryFilter(category) {
      document.getElementById("category-filter").classList.remove("show-up");
      let index = this.categories.indexOf(category);
      this.$store.commit("CLEAR_FILTERS");
      this.$store.commit("TOGGLE_FILTER_CATEGORIES", index);
      this.$store.commit("ADD_FILTER", {
        filterOption: "categories",
        value: category.name,
      });
    },
  },
};
</script>

<style scoped>
.searchform-wrap {
  display: flex;
  padding-bottom: 2em;
}
</style>
