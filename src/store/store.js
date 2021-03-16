import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        img: "assets/images/product-item-1.jpg",
        name: "Beat Sonic",
        price: 45,
      },
      {
        id: 2,
        img: "assets/images/product-item-2.jpg",
        name: "Shark Fin Antenna",
        price: 43,
      },
      {
        id: 3,
        img: "assets/images/product-item-3.jpg",
        name: "Billet Specialties",
        price: 100,
      },
      {
        id: 4,
        img: "assets/images/product-item-4.jpg",
        name: "Side View Mirror",
        price: 36,
      },
      {
        id: 5,
        img: "assets/images/product-item-5.jpg",
        name: "Catalytic Converter",
        price: 96,
      },
      {
        id: 6,
        img: "assets/images/product-item-6.jpg",
        name: "OE Specialty",
        price: 104,
      },
      {
        id: 7,
        img: "assets/images/product-item-7.jpg",
        name: "OE Specialty",
        price: 120.5,
      },
      {
        id: 8,
        img: "assets/images/product-item-8.jpg",
        name: "OE Specialty",
        price: 84,
      },
      {
        id: 9,
        img: "assets/images/product-item-9.jpg",
        name: "OE Specialty",
        price: 56,
      },
      {
        id: 10,
        img: "assets/images/product-item-10.jpg",
        name: "OE Specialty",
        price: 56.44,
      },
      {
        id: 11,
        img: "assets/images/product-item-11.jpg",
        name: "OE Specialty",
        price: 51.44,
      },
      {
        id: 12,
        img: "assets/images/product-item-12.jpg",
        name: "OE Specialty",
        price: 65.44,
      },
    ],
    categories: [],
    brands: [],
    product: {},
    basket: [
      {
        id: 1,
        img: "assets/images/product-item-1.jpg",
        name: "Beat Sonic",
        price: 45,
      },
      {
        id: 3,
        img: "assets/images/product-item-3.jpg",
        name: "Billet Specialties",
        price: 100,
      },
    ],
  },

  getters: {
    masVendidos: (state) => {
      return state.products.slice(0, 6);
    },
    loNuevo: (state) => {
      return state.products.slice(6, 12);
    },

    basketCount: (state) => {
      return state.basket.length;
    },

    basketEmpty: (state) => {
      return state.basketCount === 0;
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      this.state.products = products;
    },

    SET_PRODUCT(state, product) {
      this.state.product = product;
    },

    SET_CATEGORIES(state, categories) {
      this.state.categories = categories;
    },

    SET_BRANDS(state, brands) {
      this.state.brands = brands;
    },
  },

  actions: {
    loadProducts(context) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/products/getProducts"
        )
        .then((response) => {
          let products = response.data.data.example;
          context.commit("SET_PRODUCTS", products);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /* loadProduct(context, productId) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/products/view/2"
        )
        .then((response) => {
          let product = response.data.data.example;
          console.log(product);
          context.commit("SET_PRODUCT", product);
        })
        .catch((error) => {
          console.log(error);
        });
    },
 */
    loadCategories(context) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/categories/getCategory"
        )
        .then((response) => {
          let categories = response.data.data.example;
          //console.log('categories: ',response.data.data.example)
          context.commit("SET_CATEGORIES", categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadBrands(context) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/brands/getBrands"
        )
        .then((response) => {
          let brands = response.data.data.example;
          //console.log('brands: ',response.data.data.example)
          context.commit("SET_BRANDS", brands);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
