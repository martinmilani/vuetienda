<template>
<div class="container">
  <h3>DATOS DEL PEDIDO</h3>

  <FormulateForm v-if="step == 1">
    <FormulateInput type="email" name="email" label="Email:" placeholder="juanperez@mail.com" validation="required|email"/>
    <FormulateInput type="text" name="name" label="Nombre Completo:" placeholder="Juan Perez" validation="required"/>
    <FormulateInput type="tel" name="phone" label="Teléfono:" placeholder="2234556677" validation="required"/>
    <FormulateInput type="tel" name="celphone" label="Celular:" placeholder="2234556677" validation="required"/>
    <FormulateInput type="text" name="address" label="Dirección:" placeholder="Independencia 2345" validation="required"/>
    <FormulateInput type="text" name="City" label="Localidad:" placeholder="Mar del Plata" validation="required"/>
    <FormulateInput type="submit" @click="handleClick($event.target)"/>

  </FormulateForm>

  <section v-if="step == 2">
      <h3>Step 2</h3>
  </section>

  <section v-if="step == 3">
      <h3>Step 3</h3>
  </section>

  <section v-if="step == 4">
      <h3>Step 4</h3>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">          
        <div class="modal-body text-center">
          <div class="alert alert-success text-center" role="alert">Tu pedido ha sido enviado</div>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <div class="form-navButtons">
    <button :disabled="step == 1" :class="{disabled:step == 1}" @click.prevent="prevStep" type="button">Atras</button>
    <button v-if="step < totalSteps"  @click.prevent="nextStep" type="submit">Continuar</button>
    <div v-if="step == 4">
      <button type="submit" v-if="step == 4" class="modal-button" data-backdrop="false" data-toggle="modal" data-target="#orderModal">Finalizar</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            step:1,
            totalSteps:4,
            disabled:true,
        }
    },

    methods:{
      handleClick(e){
        return console.log(e)
      },  

      nextStep(){
        return this.step++
      },

      prevStep(){
        return this.step--
      },
    }

}
</script>

<style scoped>

  .form-navButtons{
    display: flex;
  }

  .modal-button,
  .form-navButtons > button{
    width: 110px;
    margin-right: 1em;
    margin-bottom: 2em;
    font-size: 14px;
  }

  .modal-button:hover,
  .form-navButtons > button:hover {
    background-color: #2d9b9b;
  }
  
  .disabled{
    background-color: grey !important;
  }

  h3{
    margin: 1em 0;
  }
</style>