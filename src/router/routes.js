import Home from "../views/Home.vue";
//import Store from "../views/TiendaIndex.vue";
//import Product from "../views/FullWidthProduct.vue";
//import About from "../views/About.vue";
//import Contact from "../views/Contact";
//import NotFound from "../views/NotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "store" */ "../views/Store.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },

  {
    path: "/full",
    name: "FullWidthProduct",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/FullWidthProduct.vue"),
  },

  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

export default routes;
