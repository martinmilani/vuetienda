<template>
  <div>
    <div class="widget widget-categories">
      <h3 class="widgettitle">Categorias</h3>
      <ul class="list-categories">
        <li v-for="category in categories" :key="category.id">
          <input
            type="checkbox"
            :id="`${category.name + category.id}`"
            :value="`${category.name}`"
            v-on:change="onChange"
          />
          <label :for="`${category.name + category.id}`" class="label-text">
            {{ category.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["categories", "selectedFilters"]),

  methods: {
    onChange(e) {
      if (e.target.checked) {
        this.$store.commit("ADD_FILTER", {
          filterOption: "categories",
          value: e.target.value,
        });
      } else {
        this.$store.commit("REMOVE_FILTER", {
          filterOption: "categories",
          value: e.target.value,
        });
      }
    },
  },
};
</script>
