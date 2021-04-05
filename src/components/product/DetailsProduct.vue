<template>
  <div class="tab-details-product">
    <ul class="tab-link">
      <li class="active">
        <a data-toggle="tab" aria-expanded="true" href="#product-descriptions"
          >Descripción</a
        >
      </li>
      <li class>
        <a data-toggle="tab" aria-expanded="true" href="#information"
          >Información</a
        >
      </li>
    </ul>
    <div class="tab-container">
      <div id="product-descriptions" class="tab-panel active">
        <p>
          {{product.description}}
        </p>
      </div>
      <div id="information" class="tab-panel">
        <table class="table table-bordered">
          <tr>
            <td>Marca</td>
            <td>{{product.brand[0]}}</td>
          </tr>
          <tr>
            <td>Modelo</td>
            <td>{{product.model}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  
  name: "DetailsProduct",

  computed:{
    ...mapState(["product"]),
  } 

};
</script>

<style></style>
