<template>
  <div class="tab-details-product">
    <ul class="tab-link">
      <li class="active">
        <a data-toggle="tab" aria-expanded="true" href="#product-descriptions"
          >Descriptions</a
        >
      </li>
      <li class>
        <a data-toggle="tab" aria-expanded="true" href="#information"
          >Information</a
        >
      </li>
    </ul>
    <div class="tab-container">
      <div id="product-descriptions" class="tab-panel active">
        <p>
          Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim.
          Phasellus molestie risus non aliquet cursus. Integer vestibulum mi
          lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non
          pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec
          turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit.
        </p>
        <p>
          Proin fringilla urna vel mattis euismod. Etiam sodales, massa non
          tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus
          urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan.
        </p>
      </div>
      <div id="information" class="tab-panel">
        <table class="table table-bordered">
          <tr>
            <td>Size</td>
            <td>XS / S / M / L</td>
          </tr>
          <tr>
            <td>Color</td>
            <td>White/ Black/ Teal/ Brown</td>
          </tr>
          <tr>
            <td>Properties</td>
            <td>Colorful Dress</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsProduct",
};
</script>

<style></style>
