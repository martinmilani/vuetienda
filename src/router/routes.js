const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/TiendaIndex.vue"),
    props:{msg:"Welcome to Your Vue.js App"}
  },
  {
    path: "/full",
    name: "Product",
    component: () => import("../views/FullWidthProduct.vue"),
    props:{msg:"Welcome to Your Vue.js App"}
  }
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

export default routes