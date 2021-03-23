<template>
  <div class="shop-top-control">
    <form class="select-item select-form">
      <span class="title">Sort</span>
      <select
        title="sort"
        data-placeholder="12 Products/Page"
        class="chosen-select"
      >
        <option value="1">12 Products/Page</option>
        <option value="2">24 Products/Page</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShopSortControl",
};
</script>

<style></style>
