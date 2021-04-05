<template>
<div class="container">
  <h3>DATOS DEL PEDIDO</h3>

  <section>
      <h3>Step 1</h3>
  </section>

  <section>
      <h3>Step 2</h3>
  </section>

  <section>
      <h3>Step 3</h3>
  </section>

  <section>
      <h3>Step 4</h3>
  </section>

</div>
</template>

<script>
export default {
    data(){
        return{
            step:1,
            totalSteps:4
        }
    }

}
</script>

<style scoped>
    h3{
        margin: 1em 0;
    }
</style>