<template>
  <div
    class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12"
  >
    <div class="site-main">
      <h3 class="custom_blog_title">
        {{ customTitle }}
      </h3>
      <div v-if="filtredProducts.length > 0">
        <ShopSortControl
          :productsOnPages="productsOnPages"
          v-on:changeQuantity="updateProductsOnPages($event)"
        />
        <paginate
          name="filtredProducts"
          :list="filtredProducts"
          :per="productsOnPages"
        >
          <ul class="row list-products auto-clear equal-container product-grid">
            <li
              v-for="product in paginated('filtredProducts')"
              :key="product.id"
              class="product-item product-type-variable col-lg-4 col-md-6 col-sm-6 col-xs-6 col-ts-12 style-1"
            >
              <router-link
                :to="{ name: 'ProductDetails', params: { id: product.id } }"
                append
              >
                <ProductCard :product="product" />
              </router-link>
            </li>
          </ul>
        </paginate>
        <paginate-links
          for="filtredProducts"
          :limit="10"
          :show-step-links="true"
        ></paginate-links>
      </div>
      <div v-else>
        <h3 class="text-center">
          <strong>No se encontro ningun producto</strong>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "../components/Product-card.vue";
import ShopSortControl from "../components/gridProducts/ShopSortControl.vue";

export default {
  name: "TiendaIndex",

  components: {
    ProductCard,
    ShopSortControl,
  },

  props: {
    customTitle: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      productsOnPages: 12,
      paginate: ["filtredProducts"],
    };
  },

  computed: {
    ...mapState(["selectedFilters", "keyword", "products"]),

    filtredProducts: function() {
      return this.filtredBySizes(
        this.filtredByColors(
          this.filtredByBrands(
            this.filtredByCategories(this.filtredByKeyword(this.products))
          )
        )
      );
    },
  },

  methods: {
    updateProductsOnPages: function(updatedQuantity) {
      this.productsOnPages = updatedQuantity;
    },

    filtredByKeyword: function(products) {
      return products.filter((product) => {
        return (
          product.name.toLowerCase().match(this.keyword.toLowerCase()) ||
          product.category.some((category) => {
            return category.toLowerCase().match(this.keyword.toLowerCase());
          }) ||
          product.brand.some((brand) => {
            return brand.toLowerCase().match(this.keyword.toLowerCase());
          })
        );
      });
    },

    filtredByCategories(products) {
      if (this.selectedFilters.categories.length > 0) {
        return products.filter((product) => {
          return this.selectedFilters.categories.some((category) => {
            return product.category == category;
          });
        });
      } else {
        return products;
      }
    },

    filtredByBrands: function(products) {
      if (this.selectedFilters.brands.length > 0) {
        return products.filter((product) => {
          return this.selectedFilters.brands.some((brand) => {
            return product.brand == brand;
          });
        });
      } else {
        return products;
      }
    },

    filtredByColors: function(products) {
      if (this.selectedFilters.colors.length > 0) {
        return products.filter((product) => {
          return this.selectedFilters.colors.some((color) => {
            return product.colors.indexOf(color) >= 0;
          });
        });
      } else {
        return products;
      }
    },

    filtredBySizes: function(products) {
      if (this.selectedFilters.sizes.length > 0) {
        return products.filter((product) => {
          return this.selectedFilters.sizes.some((size) => {
            return product.sizes.indexOf(size) >= 0;
          });
        });
      } else {
        return products;
      }
    },

    /* ...mapState(["products"]), */
  },
};
</script>

<style>
.shop-grid-content {
  margin-top: 1.25em;
}

ul.paginate-links {
  padding: 17px;
  list-style: none;
  display: flex;
  margin-top: 1.5em;
}

ul.paginate-links > li.left-arrow > a,
ul.paginate-links > li.right-arrow > a,
ul.paginate-links > li.number > a {
  display: inline-block;
  width: 42px;
  height: 42px;
  line-height: 39px;
  text-align: center;
  border: 2px solid #f1f1f1;
  font-size: 16px;
  color: #888;
  font-weight: 500;
  margin-left: 5px;
  border-radius: 4px;
}

ul.paginate-links > li.left-arrow > a:hover,
ul.paginate-links > li.right-arrow > a:hover,
ul.paginate-links > li.number > a:hover,
ul.paginate-links > li.active > a {
  color: #fff;
  border-color: transparent;
  background-color: var(--accent-color);
}
</style>
