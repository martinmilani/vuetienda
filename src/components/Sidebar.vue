<template>
<div>

<div class="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
    <div class="wrapper-sidebar shop-sidebar">
        <div class="widget woof_Widget">
            
            <Categories class="mb-3" />
            
            <Price class="mb-3" />
            
            <Brand class="mb-3" />
            
            <Size class="mb-3" />

            <Color class="mb-3" />
            
        </div>

    </div>
</div>



</div>
</template>

<script>

import Categories from '../components/Sidebar/Categories.vue'
import Price from '../components/Sidebar/Price.vue'
import Brand from '../components/Sidebar/Brand.vue'
import Size from '../components/Sidebar/Size.vue'
import Color from '../components/Sidebar/Color.vue'

export default {
    
  name: 'TiendaIndex',
  components: {
    Categories,
    Price,
    Brand,
    Size,
    Color
  }
  
  
}
</script>

<style>

.mb-3 {
  margin-bottom: 3rem;
}

</style>