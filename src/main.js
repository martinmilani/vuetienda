import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

import $ from "jquery";
window.$ = window.jQuery = $;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
