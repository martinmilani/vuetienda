<template>
  <div class="container container-form">
    <h3>DATOS DEL PEDIDO</h3>

    <!-- Form -->
    <form class="form-horizontal col-md-6 col-xs-12" @submit.prevent="nextStep">
      <!-- DATOS DE CONTACTO -->
      <div class="form-group" v-if="step === 1">
        <h4>Datos de Contacto</h4>
        <label for="email" class="col-sm-12 col-xs-12">Email :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <label for="nombre" class="col-sm-12 col-xs-12">Nombre completo :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.nombre"
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          required
        />

        <label for="teléfono" class="col-sm-12 col-xs-12">Teléfono :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.tel"
          type="tel"
          name="teléfono"
          placeholder="Teléfono"
          required
        />

        <label for="dirección" class="col-sm-12 col-xs-12">Dirección :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.dir"
          type="text"
          name="dirección"
          placeholder="Dirección"
          required
        />

        <label for="localidad" class="col-sm-12 col-xs-12">Localidad :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.localidad"
          type="text"
          name="localidad"
          placeholder="Localidad"
          required
        />
      </div>

      <!-- DATOS DE ENVIO -->
      <div class="form-group" v-if="step === 2">
        <h4>Datos de Envio</h4>
        <div class="form-group">
          <div class="radio-container">
            <div class="radio-inline">
              <label>
                <input
                  type="radio"
                  id="Entrega a domicilio"
                  value="domicilio"
                  v-model="formValues.formaEnvio"
                  checked
                />
                Envio a domicilio
              </label>
            </div>
            <div class="radio-inline">
              <label>
                <input
                  type="radio"
                  id="Retira del local"
                  value="local"
                  v-model="formValues.formaEnvio"
                />
                Retiro del local
              </label>
            </div>
          </div>
          <label for="dirección" class="col-sm-12 col-xs-12">Calle :</label>
          <input
            class="form-control col-sm-12 col-xs-12"
            v-model="formValues.calle"
            type="text"
            name="calle"
            placeholder="Calle"
            :disabled="formValues.formaEnvio === 'local'"
            required
          />

          <div class="col-md-6 col-xs-6 col-num">
            <label for="numero" class="col-md-12 col-xs-12">Número :</label>
            <input
              class="form-control col-md-12 col-xs-12"
              v-model="formValues.numero"
              type="text"
              name="numero"
              placeholder="Numero"
              :disabled="formValues.formaEnvio === 'local'"
              required
            />
          </div>
          <div class="col-md-5 col-xs-5 col-dpto col-md-offset-1 col-xs-offset-1">
            <label for="departamento" class="col-md-12 col-xs-12">Dpto. :</label>
            <input
              class="form-control col-md-12 col-xs-12"
              v-model="formValues.dpto"
              type="text"
              name="departamento"
              placeholder="Departamento"
              :disabled="formValues.formaEnvio === 'local'"
            />
          </div>
          <label for="barrio" class="col-sm-12 col-xs-12">Barrio :</label>
          <input
            class="form-control col-sm-12 col-xs-12"
            v-model="formValues.barrio"
            type="text"
            name="barrio"
            placeholder="Barrio"
            :disabled="formValues.formaEnvio === 'local'"
            required
          />
          <label for="calles" class="col-sm-12 col-xs-12">Entre calles :</label>
          <input
            class="form-control col-sm-12 col-xs-12"
            v-model="formValues.calles"
            type="text"
            name="calles"
            placeholder="Calles"
            :disabled="formValues.formaEnvio === 'local'"
            required
          />
          <div class="form-group"></div>
          <div class="checkbox">
            <label>
              <input
                type="checkbox"
                id="otraPersona"
                v-model="formValues.otraPersona"
                :disabled="formValues.formaEnvio === 'domicilio'"
              />
              Retira otra Persona
            </label>
          </div>
          <label for="nombreTercero" class="col-sm-12 col-xs-12">Nombre :</label>
          <input
            class="form-control col-sm-12 col-xs-12"
            v-model="formValues.nombreTercero"
            type="text"
            name="nombreTercero"
            placeholder="Nombre"
            :disabled="!formValues.otraPersona"
            required
          />
          <label for="dniTercero" class="col-sm-12 col-xs-12">DNI :</label>
          <input
            class="form-control col-sm-12 col-xs-12"
            v-model="formValues.dniTercero"
            type="text"
            name="dniTercero"
            placeholder="DNI"
            :disabled="!formValues.otraPersona"
            required
          />
        </div>
      </div>

      <!-- DATOS DE FACTURACION -->
      <div class="form-group" v-if="step === 3">
        <h4>Datos de facturación</h4>
        <div class="radio-container">
          <div class="radio-inline">
            <label>
              <input
                type="radio"
                id="consumidor final"
                value="consumidorFinal"
                v-model="formValues.facturacion"
                checked
              />
              Soy consumidor final
            </label>
          </div>
          <div class="radio-inline">
            <label>
              <input
                type="radio"
                id="necesito factura"
                value="factura"
                v-model="formValues.facturacion"
              />
              Necesito factura
            </label>
          </div>
        </div>
        <label for="razonSocial" class="col-sm-12 col-xs-12"
          >Razón social o Nombre :</label
        >
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.razonSocial"
          type="text"
          name="razonSocial"
          placeholder="Razón Social"
          :disabled="formValues.facturacion === 'consumidorFinal'"
          required
        />
        <label for="cuitCuilDni" class="col-sm-12 col-xs-12">CUIT / CUIL / DNI :</label>
        <input
          class="form-control col-sm-12 col-xs-12"
          v-model="formValues.cuitCuilDni"
          type="text"
          name="cuitCuilDni"
          placeholder="CUIT / CUIL / DNI"
          :disabled="formValues.facturacion === 'consumidorFinal'"
          required
        />

        <label for="tipoIva" class="col-sm-12 col-xs-12">Tipo de IVA :</label>
        <select
          v-model="formValues.tipoIva"
          name="tipoIva"
          class="form-control input-lg"
          :disabled="formValues.facturacion === 'consumidorFinal'"
          required
        >
          <option disabled value="">Seleccione una opción</option>
          <option>Monotributo</option>
          <option>Inscripto</option>
          <option>Exento</option>
        </select>
      </div>

      <!-- FORMA DE PAGO -->
      <div class="form-group" v-if="step === 4">
        <h4>Forma de pago</h4>
        <div class="mercadopago-container">
          <h4 class="button-title">
            Mercado pago / Tarjetas / Servicios de pago
          </h4>
          <button 
            @click.prevent="handleClick" 
            value="tarjeta"
            type="button" 
            class="forma-pago-btn btn btn-lg" 
            :class="[formValues.formaDePago === 'tarjeta' ? 'activeClass' : '']"
          >
            PAGAR CON MERCADOPAGO
            <img
              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadopago/logo__large.png"
              alt="Mercado pago logo"
              class="forma-pago-img"
            />
          </button>
          <div class="image-container">
            <img src="assets/images/formas-de-pago.jpg" alt="formas de pago" />
          </div>
        </div>

        <div class="efectivo-container">
          <h4 class="button-title">Efectivo</h4>
          <button 
            value="efectivo"
            @click.prevent="handleClick" 
            type="button" 
            class="forma-pago-btn btn btn-lg" 
            :class="[formValues.formaDePago == 'efectivo' ? 'activeClass' : '']"
          >
            PAGO EN RETIRO<i class="fal fa-money-bill-alt forma-pago-icon"></i>
          </button>
        </div>

        <div class="textarea-container">
          <label for="notasDePedido" class="col-sm-12">Notas de pedido :</label>
          <textarea name="notasDePedido" class="form-control" rows="3"></textarea>
        </div>
      </div>

      <!-- BOTONES DE NAVEGACION -->
      <div class="btn-container">
        <button
          type="button"
          class="btn btn-default btn-lg "
          v-if="step === 1"
          disabled="disabled"
        >
          Atras
        </button>
        <button
          type="button"
          @click="prevStep"
          class="btn btn-default btn-lg"
          v-if="step != 1"
        >
          Atras
        </button>
        <button 
          v-if="step < 4"
          type="submit" 
          class="btn btn-default btn-lg"
          
        >
          Continuar
        </button>
        <button 
          v-if="step == 4"
          type="button" 
          class="btn btn-default btn-lg"
          @click="setFormValues"
          data-backdrop="static"
          data-toggle="modal"
          data-target="#orderModal"
        >
          Finalizar
        </button>
      </div>
    </form>

    <!-- Products list -->
    <div class="col-md-6 col-xs-12">
      <div class="products-list-container">
        <h4>Listado de productos</h4>
        <div class="checkOut-basket-products">
          <ul>
            <li
                  v-for="product in basket"
                  :key="product.id + product.color + product.size"
                  class="product-cart mini_cart_item center-block"
                >
                  <MiniCartItem :product="product" :plainList="true" />
                </li>
          </ul>
          <div class="checkOut-cart-subtotal">
            <span>
              Subtotal:
              <span>${{ basketSum }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div class="alert alert-success text-center" role="alert">
              Tu pedido ha sido enviado
            </div>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              <router-link class="modal-router-link" :to="{ name: 'Home'}">
                Close
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniCartItem from "../components/MiniCartItem";
import { mapGetters, mapState } from "vuex";


export default {
  name: "Checkout-Flow",
  
  components: { MiniCartItem },

  data() {
    return {
      step: 1,
      totalSteps: 4,
      formValues: {
        //Step 1
        email: "",
        nombre: "",
        tel: "",
        dir: "",
        localidad: "",
        dni: "",
        //Step 2
        formaEnvio: "domicilio",
        calle: "",
        num: "",
        dpto: "",
        barrio: "",
        calles: "",
        otraPersona: false,
        nombreTercero: "",
        dniTercero: "",
        //Step 3
        facturacion: "factura",
        razonSocial: "",
        cuitCuilDni: "",
        tipoIva: "",
        //Step 4
        formaDePago:"tarjeta",
        notaDePedido:""
      },
    };
  },

  computed: {
    ...mapState(["basket"]),
    ...mapGetters(["basketCount", "basketSum"]),
  },

  methods: {
    nextStep() {
      this.step++;
    },

    prevStep() {
      return this.step--;
    },

    handleClick(e){
      this.formValues.formaDePago = e.target.value
    },

    setFormValues(){
      console.log('submited!')
      this.$store.commit("SET_FORM_VALUES", this.formValues);
    }

  },
};
</script>

<style scoped>
/* Form styles */
.modal-router-link{
  color: inherit;
}

.form-horizontal{
  height: calc(100vh - 40px);
  position: relative;
}

label {
  margin-top: 1em;
  padding-left: 0 !important;
}

.form-horizontal .form-group {
  margin-right: 0;
  margin-left: 0;
}

.btn-default {
  margin-right: 1em;
  margin-top: 1em;
  margin-bottom: 3em;
  width: 110px;
}

.col-num,
.col-dpto {
  padding: 0;
}

.checkbox {
  padding-left: 20px;
}

.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #e3e3e3;
}

select.input-lg {
  height: 42px;
  line-height: 42px;
}

.input-lg {
  height: 42px;
  font-size: 16px;
  border-radius: 4px;
}

.form-control:focus {
  border-color: #66afe9;
  color: #868686;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.forma-pago-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgray !important;
}

.activeClass {
  background-color: #66cccc !important;
}

 .btn-container {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
  }

@media ( max-width:460px){
  .forma-pago-btn{
    flex-direction: column;
  }

  .radio-container{
    display: flex;
    flex-direction: column;
  }

  .checkbox-inline+.checkbox-inline,
  .radio-inline+.radio-inline {
    margin-top:0; 
    margin-left:0px;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    position: static;
  }

  .btn-default[data-v-11469264] {
    margin-right: 0;
    width: 45%;
  }

  .form-horizontal{
  height: auto;
  position: static;
}

}

.mercadopago-container {
  padding-top: 1.5em;
}

.efectivo-container {
  padding-top: 3em;
}

.textarea-container {
  margin-top: 3em;
}

.button-title {
  color: #868686;
  font-weight: 500;
  font-size: 16px;
}


.forma-pago-img {
  width: auto;
  height: auto;
}

.forma-pago-icon {
  font-size: 3.75rem;
  margin-right: 0.25em;
}

.modal-button:active {
  background-color: #2d9b9b;
}

h3 {
  margin: 1em 0;
}

.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    outline-offset: none;
}

/* List products styles */


.products-list-container{
  margin-left: 1em;
  height: calc(100vh - 40px);
  position: relative;
}

.products-list-container > h4 {
  text-align: center;
}

.checkOut-cart-subtotal{
  font-size: 20px;
  color: black;
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: 150px;
}

.checkOut-basket-products{
 padding: 2em;
}

.checkOut-basket-products > ul {
  height: calc(100vh - 200px);
  list-style: none;
  overflow: auto;
}

.checkOut-basket-products > ul >li {
  padding-bottom: 1em;
  padding-top: 1em;
  width: 260px;
}

@media ( max-width:460px){
  .checkOut-cart-subtotal{
  font-size: 20px;
  color: black;
  text-align: center;
  position: static;
  margin-top: 1em;
  margin-bottom: 1em;
  }

  .products-list-container{
  margin-left:0;
  height: auto;
  position: static;
  }

  .checkOut-basket-products{
    padding: 0;
  }
}
</style>
