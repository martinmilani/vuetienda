<template>
  <div
    class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12"
  >
    <div class="site-main">
      <h3 class="custom_blog_title">
        {{ customTitle }}
      </h3>
      <ShopSortControl />
      <div v-if="filtredProducts.length > 0">
        <ul class="row list-products auto-clear equal-container product-grid">
          <li
            v-for="product in filtredProducts"
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
      </div>
      <div v-else>
        <h3>No se encontro ningun producto</h3>
      </div>

      <GridPagination />
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import ProductCard from "../components/Product-card.vue";
import ShopSortControl from "../components/gridProducts/ShopSortControl.vue";
import GridPagination from "../components/gridProducts/GridPagination.vue";

export default {
  name: "TiendaIndex",

  components: {
    ProductCard,
    ShopSortControl,
    GridPagination,
  },

  props: {
    customTitle: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      products: [
        {
          id: 1,
          img: "assets/images/product-item-1.jpg",
          name: "Beat Sonic",
          price: 45,
          colors: ["red", "black"],
          category: ["Bueno"],
          brand: ["Cisneros"],
          sizes: ["M", "L"],
        },
        {
          id: 2,
          img: "assets/images/product-item-2.jpg",
          name: "Shark Fin Antenna",
          price: 43,
          colors: ["green", "blue"],
          category: ["Barato"],
          brand: ["Patito"],
          sizes: ["XL", "L"],
        },
        {
          id: 3,
          img: "assets/images/product-item-3.jpg",
          name: "Billet Specialties",
          price: 100,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 4,
          img: "assets/images/product-item-4.jpg",
          name: "Side View Mirror",
          price: 36,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 5,
          img: "assets/images/product-item-5.jpg",
          name: "Catalytic Converter",
          price: 96,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 6,
          img: "assets/images/product-item-6.jpg",
          name: "OE Specialty",
          price: 104,
          colors: ["black", "yellow"],
          category: ["barato"],
          brand: ["Cisneros"],
          sizes: ["M"],
        },
        {
          id: 7,
          img: "assets/images/product-item-7.jpg",
          name: "OE Specialty",
          price: 120.5,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M", "S"],
        },
        {
          id: 8,
          img: "assets/images/product-item-8.jpg",
          name: "OE Specialty",
          price: 84,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 9,
          img: "assets/images/product-item-9.jpg",
          name: "OE Specialty",
          price: 56,
          colors: ["blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 10,
          img: "assets/images/product-item-10.jpg",
          name: "OE Specialty",
          price: 56.44,
          colors: ["red"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 11,
          img: "assets/images/product-item-11.jpg",
          name: "OE Specialty",
          price: 51.44,
          colors: ["red", "blue", "yellow"],
          category: ["Bonito"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 12,
          img: "assets/images/product-item-12.jpg",
          name: "OE Specialty",
          price: 65.44,
          colors: ["red", "blue"],
          category: ["Bonito"],
          brand: ["Patito"],
          sizes: ["M"],
        },
      ],
    };
  },

  computed: {
    selectedFilters() {
      return this.$store.state.selectedFilters;
    },

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
    filtredByKeyword: function(products) {
      return products.filter((product) => {
        return product.name
          .toLowerCase()
          .match(this.$route.params.keyword?.toLowerCase());
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
</style>
