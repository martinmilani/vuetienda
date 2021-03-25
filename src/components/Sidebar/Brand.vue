<template>
  <div>
    <div class="widget widget-brand">
      <h3 class="widgettitle">Marcas</h3>
      <ul class="list-brand">
        <li v-for="brand in brands" :key="brand.id">
          <input
            :id="`${brand.name + brand.id}`"
            type="checkbox"
            :value="`${brand.name}`"
            v-on:change="onChange"
          />
          <label :for="`${brand.name + brand.id}`" class="label-text">{{
            brand.name
          }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["brands", "selectedFilters"]),

  methods: {
    onChange(e) {
      if (e.target.checked) {
        this.$store.commit("ADD_FILTER", {
          filterOption: "brands",
          value: e.target.value,
        });
      } else {
        this.$store.commit("REMOVE_FILTER", {
          filterOption: "brands",
          value: e.target.value,
        });
      }
    },
  },
};
</script>
