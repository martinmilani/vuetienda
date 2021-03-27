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
          name="products"
          :list="filtredProducts"
          :per="productsOnPages"
        >
          <ul class="row list-products auto-clear equal-container product-grid">
            <li
              v-for="product in paginated('products')"
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
      </div>
      <div v-else>
        <h3 class="text-center">
          <strong>No se encontro ningun producto</strong>
        </h3>
      </div>
      <paginate-links
        for="products"
        :limit="10"
        :show-step-links="true"
      ></paginate-links>
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
      paginate: ["products"],
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
        {
          id: 13,
          img: "assets/images/product-item-1.jpg",
          name: "Beat Sonic",
          price: 45,
          colors: ["red", "black"],
          category: ["Bueno"],
          brand: ["Cisneros"],
          sizes: ["M", "L"],
        },
        {
          id: 14,
          img: "assets/images/product-item-2.jpg",
          name: "Shark Fin Antenna",
          price: 43,
          colors: ["green", "blue"],
          category: ["Barato"],
          brand: ["Patito"],
          sizes: ["XL", "L"],
        },
        {
          id: 15,
          img: "assets/images/product-item-3.jpg",
          name: "Billet Specialties",
          price: 100,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 16,
          img: "assets/images/product-item-4.jpg",
          name: "Side View Mirror",
          price: 36,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 17,
          img: "assets/images/product-item-5.jpg",
          name: "Catalytic Converter",
          price: 96,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 18,
          img: "assets/images/product-item-6.jpg",
          name: "OE Specialty",
          price: 104,
          colors: ["black", "yellow"],
          category: ["barato"],
          brand: ["Cisneros"],
          sizes: ["M"],
        },
        {
          id: 19,
          img: "assets/images/product-item-7.jpg",
          name: "OE Specialty",
          price: 120.5,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M", "S"],
        },
        {
          id: 20,
          img: "assets/images/product-item-8.jpg",
          name: "OE Specialty",
          price: 84,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 21,
          img: "assets/images/product-item-9.jpg",
          name: "OE Specialty",
          price: 56,
          colors: ["blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 22,
          img: "assets/images/product-item-10.jpg",
          name: "OE Specialty",
          price: 56.44,
          colors: ["red"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 23,
          img: "assets/images/product-item-9.jpg",
          name: "OE Specialty",
          price: 56,
          colors: ["blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 24,
          img: "assets/images/product-item-10.jpg",
          name: "OE Specialty",
          price: 56.44,
          colors: ["red"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 25,
          img: "assets/images/product-item-11.jpg",
          name: "OE Specialty",
          price: 51.44,
          colors: ["red", "blue", "yellow"],
          category: ["Bonito"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 26,
          img: "assets/images/product-item-12.jpg",
          name: "OE Specialty",
          price: 65.44,
          colors: ["red", "blue"],
          category: ["Bonito"],
          brand: ["Patito"],
          sizes: ["M"],
        },
        {
          id: 27,
          img: "assets/images/product-item-1.jpg",
          name: "Beat Sonic",
          price: 45,
          colors: ["red", "black"],
          category: ["Bueno"],
          brand: ["Cisneros"],
          sizes: ["M", "L"],
        },
        {
          id: 28,
          img: "assets/images/product-item-2.jpg",
          name: "Shark Fin Antenna",
          price: 43,
          colors: ["green", "blue"],
          category: ["Barato"],
          brand: ["Patito"],
          sizes: ["XL", "L"],
        },
        {
          id: 29,
          img: "assets/images/product-item-3.jpg",
          name: "Billet Specialties",
          price: 100,
          colors: ["red", "blue"],
          category: ["Bueno"],
          brand: ["Patito"],
          sizes: ["M"],
        },
      ],
    };
  },

  computed: {
    ...mapState(["selectedFilters", "keyword"]),

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
