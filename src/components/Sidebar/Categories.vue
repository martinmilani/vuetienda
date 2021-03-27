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
            :checked="category.isActive"
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
  computed: mapState(["categories"]),

  methods: {
    onChange(e) {
      let index = this.categories.findIndex(
        (elem) => elem.name == e.target.value
      );
      this.$store.commit("TOGGLE_FILTER_CATEGORIES", index);
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
