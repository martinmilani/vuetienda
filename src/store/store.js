import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    categories: [],
    brands: [],
    product: {},
    basket: [],
  },

  getters: {
    masVendidos: (state) => {
      return state.products.slice(0, 6);
    },
    loNuevo: (state) => {
      return state.products.slice(6, 12);
    },

    basketCount: (state) => {
      return state.basket.reduce((sum, item) => sum + item.quantity, 0);
    },

    basketSum: (state) => {
      return state.basket.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
    },

    getProductById: (state) => (productId) => {
      return state.products.find((product) => product.id == productId);
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_PRODUCT(state, product) {
      state.product = product;
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },

    SET_BRANDS(state, brands) {
      state.brands = brands;
    },

    ADD_TO_BASKET(state, payload) {
      state.basket.push(payload);
    },

    REMOVE_FROM_BASKET(state, payload) {
      state.basket.splice(
        state.basket.findIndex((elem) => elem.id === payload.id),
        1
      );
    },
  },

  actions: {
    loadProducts({ commit }) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/products/getProducts"
        )
        .then((response) => {
          let products = response.data.data.example;
          commit("SET_PRODUCTS", products);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadProduct({ commit }, id) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/products/view/" +
            `${id}`
        )
        .then((response) => {
          let product = response.data.data.example;
          console.log(product);
          commit("SET_PRODUCT", product);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadCategories({ commit }) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/categories/getCategory"
        )
        .then((response) => {
          let categories = response.data.data.example;
          console.log("categories: ", response.data.data.example);
          commit("SET_CATEGORIES", categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    loadBrands({ commit }) {
      axios
        .get(
          "https://private-e83de-quproapi.apiary-mock.com/api/brands/getBrands"
        )
        .then((response) => {
          let brands = response.data.data.example;
          //console.log('brands: ',response.data.data.example)
          commit("SET_BRANDS", brands);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
