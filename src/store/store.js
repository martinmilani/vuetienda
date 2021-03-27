import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    categories: [],
    /* Borrar al agregar metodo para levantar colores de la api */
    colors: [
      { id: 1, color: "#FFFFFF", isActive: false },
      { id: 2, color: "#222222", isActive: false },
      { id: 3, color: "#4A5365", isActive: false },
      { id: 4, color: "#84664D", isActive: false },
      { id: 5, color: "#D27D53", isActive: false },
      { id: 6, color: "#5F8EA9", isActive: false },
      { id: 7, color: "#719271", isActive: false },
    ],
    /* Borrar al agregar metodo para levantar talles de la api */
    sizes: [
      { size: "XS", isActive: false },
      { size: "S", isActive: false },
      { size: "M", isActive: false },
      { size: "L", isActive: false },
      { size: "XL", isActive: false },
      { size: "XXL", isActive: false },
    ],
    brands: [],
    product: {},
    basket: [],
    slides: [],
    logo: "",
    datosTienda: {},
    selectedFilters: {
      colors: [],
      categories: [],
      brands: [],
      sizes: [],
    },
    keyword: "",
  },

  getters: {
    loNuevo: (state) => {
      return state.products.slice(1, 7);
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
    SET_LOGO(state, logo) {
      state.logo = logo;
    },

    SET_SLIDES(state, slides) {
      state.slides = slides;
    },

    SET_DATOS_TIENDA(state, datosTienda) {
      state.datosTienda = datosTienda;
    },

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

    TOGGLE_FILTER_CATEGORIES(state, index) {
      state.categories[index].isActive = !state.categories[index].isActive;
    },

    CLEAR_FILTERS(state) {
      state.selectedFilters = {
        colors: [],
        categories: [],
        brands: [],
        sizes: [],
      };
      state.categories.forEach((elem) => {
        elem.isActive = false;
      });
    },

    ADD_FILTER(state, payload) {
      state.selectedFilters[payload.filterOption].push(payload.value);
    },

    REMOVE_FILTER(state, payload) {
      state.selectedFilters[payload.filterOption].splice(
        state.selectedFilters[payload.filterOption].indexOf(payload.value),
        1
      );
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

    UPDATE_KEYWORD(state, word) {
      state.keyword = word;
    },
  },

  actions: {
    /* Hacer llamada a api cuando esten los enpoints */
    loadLogo({ commit }) {
      commit(
        "SET_LOGO",
        "assets/images/kisspng-sacred-lotus-vector-graphics-clip-art-image-symbol-5c4ef1958a1c31.4920790615486775255657.png"
      );
    },

    loadSlides({ commit }) {
      commit("SET_SLIDES", [
        "assets/images/8-01-2021-11-25-5ff824f834673.jpg",
        "assets/images/8-02-2021-14-41-60213165a4a35.gif",
        "assets/images/19-02-2021-19-17-602ff2a716aa6.jpg",
      ]);
    },

    loadDatosTienda({ commit }) {
      commit("SET_DATOS_TIENDA", {
        dir: "45 Grand Central Terminal New York,NY 1017 United State USA",
        tel: "(+123) 456 789 - (+123) 666 888",
        mail: "Contact@yourcompany.com",
        nosotros:
          "SUSHMITA nace como el resultado de la mezcla de dos culturas, enriquecida por viajes, vivencias y pluralidad de colores, sabores que le dan esa identidad única que caracteriza nuestra marca.Un estilo de ropa que te conecta con tu feminidad, esencia y natural belleza. Para una mujer como vos, de espíritu jovial y divertido, que puede disfrutar de la identidad libre, aventurera y ultra-femenina que refleja la marca. SUSHMITA es una mujer con una sonrisa en la cara, espirando amor, vitalidad y felicidad. Llevamos mas de 8 años en el mercado de la ropa y queremos seguir siendo parte de tu elección. Gracias por elegirnos y ser nuestra musa inspiradora. Trabajamos para darte una prenda de calidad y versátil que puedas usar para cualquier ocasión en tu vida. Como nace cada una de nuestras prendas? El proceso de diseño de una prenda de SUSHMITA nace de la inspiración en tendencias,colores y lugares creando prendas diferentes. Luego hacemos una selección de estampados y géneros tomando en cuenta cada diseño para lograr una combinación perfecta, armoniosa y original. El siguiente paso es confeccionar las muestras para asegurarnos que muestran prendas sean cómodas y hermosas. Una vez seguros de cumplir con estos objetivos, comenzamos con la producción de los diseños que luego tu podrás disfrutar.",
      });
    },

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
          categories.forEach((elem) => (elem.isActive = false));
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
          brands.forEach((elem) => (elem.isActive = false));
          commit("SET_BRANDS", brands);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
