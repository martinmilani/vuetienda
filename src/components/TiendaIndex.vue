<template>
  <div>

      <Header msg="Welcome to Your Vue.js App"/>

    
<div class="main-content main-content-product left-sidebar">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-trail breadcrumbs">
                    <ul class="trail-items breadcrumb">
                        <li class="trail-item trail-begin">
                            <a href="index-2.html">Home</a>
                        </li>
                        <li class="trail-item trail-end active">
                            Grid Products
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="content-area shop-grid-content no-banner col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <div class="site-main">
                    <h3 class="custom_blog_title">
                        Grid Products
                    </h3>
                    <div class="shop-top-control">
                        <form class="select-item select-form">
                            <span class="title">Sort</span>
                            <select title="sort" data-placeholder="12 Products/Page" class="chosen-select">
                                <option value="1">12 Products/Page</option>
                                <option value="2">9 Products/Page</option>
                                <option value="3">10 Products/Page</option>
                                <option value="4">8 Products/Page</option>
                                <option value="5">6 Products/Page</option>
                            </select>
                        </form>
                        <form class="filter-choice select-form">s
                            <span class="title">Sort by</span>
                            <select title="sort-by" data-placeholder="Price: Low to High" class="chosen-select">
                                <option value="1">Price: Low to High</option>
                                <option value="2">Sort by popularity</option>
                                <option value="3">Sort by average rating</option>
                                <option value="4">Sort by newness</option>
                                <option value="5">Sort by price: low to high</option>
                            </select>
                        </form>
                        <div class="grid-view-mode">
                            <div class="inner">
                                <a href="listproducts.html" class="modes-mode mode-list">
                                    <span></span>
                                    <span></span>
                                </a>
                                <a href="gridproducts.html" class="modes-mode mode-grid  active">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul class="row list-products auto-clear equal-container product-grid">
                        <!--<ProductCard :product="productExample" />-->
                        
                        <li v-for="producto in productos" :key="producto.id" class="product-item product-type-variable col-lg-4 col-md-6 col-sm-6 col-xs-6 col-ts-12 style-1">

                            <ProductCard :product="producto" />

                        </li>

                        
                        
                    </ul>
                    <div class="pagination clearfix style3">
                        <div class="nav-link">
                            <a href="#" class="page-numbers"><i class="icon fa fa-angle-left"
                                                                aria-hidden="true"></i></a>
                            <a href="#" class="page-numbers">1</a>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers current">3</a>
                            <a href="#" class="page-numbers"><i class="icon fa fa-angle-right"
                                                                aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Sidebar />

        </div>
    </div>
</div>

<Footer />

  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'

import ProductCard from '../components/Product-card.vue'



export default {
    
  name: 'TiendaIndex',
  components: {
    Header,
    Footer,
    Sidebar,
    ProductCard
  },

  mounted() {
        this.hacer();
    },
    methods: {
        hacer() {
            console.log(this.valor);
        }
    },
  
  data: function() {
        return {
          valor: 1,
          productos: [
          { id: 1, name: 'Lavandina Dina', image: 'assets/images/product-item-1.jpg' },
          { id: 2, name: 'Jabón Auschwitz', image: 'assets/images/product-item-2.jpg' },
          { id: 3, name: 'Raid Matatodo', image: 'assets/images/product-item-3.jpg' },
        ],
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



