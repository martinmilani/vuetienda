import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    /* Borrar el contenido para usar la api */
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
    categories: [],
    /* Borrar el contenido al agregar metodo para levantar colores de la api */
    colors: [
      { id: 1, color: "#FFFFFF", isActive: false },
      { id: 2, color: "#222222", isActive: false },
      { id: 3, color: "#4A5365", isActive: false },
      { id: 4, color: "#84664D", isActive: false },
      { id: 5, color: "#D27D53", isActive: false },
      { id: 6, color: "#5F8EA9", isActive: false },
      { id: 7, color: "#719271", isActive: false },
    ],
    /* Borrar el contenido al agregar metodo para levantar talles de la api */
    sizes: [
      { size: "XS", isActive: false },
      { size: "S", isActive: false },
      { size: "M", isActive: false },
      { size: "L", isActive: false },
      { size: "XL", isActive: false },
      { size: "XXL", isActive: false },
    ],
    brands: [],
    /* Borrar el contenido al levantar producto de la api */
    product: {
      id: 55645,
      img: [
        "assets/images/product-item-6.jpg",
        "assets/images/27-11-2020-20-15-5fc1423a77061.jpg",
        "assets/images/27-11-2020-20-15-5fc1423955014.jpg",
        "assets/images/27-11-2020-20-15-5fc1423a2e88c.jpg",
      ],
      stock: 50,
      name: "Beat Sonic",
      price: 45,
      colors: ["#FFFFFF", "#D27D53", "#719271", "#84664D"],
      category: ["Bueno"],
      brand: ["Cisneros"],
      sizes: ["M", "L"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aliquam labore dicta eaque quam impedit, non voluptates quidem in laborum, quae commodi sapiente vitae quia iure. Nihil quam ab accusantium?",
      model: "Colorful Dress",
    },
    /* Borrar el contenido al levantar colores de la api */
    productColors: [
      { id: 1, color: "#FFFFFF", isActive: false },
      { id: 2, color: "#222222", isActive: false },
      { id: 3, color: "#4A5365", isActive: false },
      { id: 4, color: "#84664D", isActive: false },
      { id: 5, color: "#D27D53", isActive: false },
      { id: 6, color: "#5F8EA9", isActive: false },
      { id: 7, color: "#719271", isActive: false },
    ],
    /* Borrar el contenido al levantar talles de la api */
    productSizes: [
      { size: "XS", isActive: false },
      { size: "S", isActive: false },
      { size: "M", isActive: false },
      { size: "L", isActive: false },
      { size: "XL", isActive: false },
      { size: "XXL", isActive: false },
    ],
    basket: [
      {
        id: 1,
        img: "assets/images/product-item-1.jpg",
        name: "Beat Sonic",
        price: 45,
        color: "#D27D53",
        category: ["Bueno"],
        brand: "Cisneros",
        size: "L",
        quantity: 1,
      },
      {
        id: 2,
        img: "assets/images/product-item-2.jpg",
        name: "Shark Fin Antenna",
        price: 43,
        color: "#4A5365",
        category: ["Barato"],
        brand: "Patito",
        size: "XL",
        quantity: 2,
      },
      {
        id: 3,
        img: "assets/images/product-item-3.jpg",
        name: "Billet Specialties",
        price: 100,
        color: "#719271",
        category: ["Bueno"],
        brand: "Patito",
        size: "M",
        quantity: 1,
      },
    ],
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
    productQuantity: 1,
    formValues: {},
    registerForm: {},
    signInForm: {},
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

    SET_PRODUCT_COLORS(state, product) {
      product.colors.forEach((color, index) => {
        state.productColors.push({
          id: index,
          color: color,
          isActive: false,
        });
      });
    },

    SET_PRODUCT_SIZES(state, product) {
      product.sizes.forEach((size, index) => {
        state.productSizes.push({
          id: index,
          size: size,
          isActive: false,
        });
      });
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
      //state.basket.push(payload);
      let index = state.basket.findIndex((elem) => elem.id == payload.id);
      if (index >= 0) {
        if (
          (state.basket[index].color === payload.color) &
          (state.basket[index].size === payload.size)
        ) {
          console.log("elemento existnete");
          state.basket[index].quantity += payload.quantity;
        } else {
          console.log("elemento no econtrado");
          state.basket.push(payload);
        }
      } else {
        console.log("elemento no econtrado");
        state.basket.push(payload);
      }
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

    UPDATE_PRODUCT_COLORS(state, color) {
      let selectedColorIndex = state.productColors.indexOf(color);
      state.productColors.forEach((elem, index) => {
        if (index == selectedColorIndex) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },

    UPDATE_PRODUCT_SIZES(state, size) {
      let selectedSizeIndex = state.productSizes.indexOf(size);
      state.productSizes.forEach((elem, index) => {
        if (index == selectedSizeIndex) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },

    UPDATE_PRODUCT_QUANTITY(state, type) {
      if (type == "-") {
        if (state.productQuantity > 1) {
          state.productQuantity -= 1;
        }
      } else {
        state.productQuantity += 1;
      }
    },

    UPDATE_BASKET_PRODUCT_QUANTITY(state, payload) {
      let index = state.basket.indexOf(payload.product);
      if (payload.operation == "-") {
        if (state.basket[index].quantity > 1) {
          state.basket[index].quantity -= 1;
        }
      } else {
        state.basket[index].quantity += 1;
      }
    },

    SET_FORM_VALUES(state, formValues) {
      state.formValues = formValues;
    },

    SET_SIGNIN_FORM_VALUES(state, signInFormValues) {
      state.signInForm = signInFormValues;
    },

    SET_REGISTER_FORM_VALUES(state, registerFormValues) {
      state.formValues = registerFormValues;
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
          commit("SET_PRODUCT_COLORS", product);
          commit("SET_RODUCT_SIZES", product);
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
