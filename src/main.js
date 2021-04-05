import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import VuePaginate from "vue-paginate";
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
Vue.use(VuePaginate);

import $ from "jquery";
window.$ = window.jQuery = $;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
