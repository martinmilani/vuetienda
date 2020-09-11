<template>
  <div class="block-search-block">
    <form class="form-search form-search-width-category">
      <div class="form-content">
        <div class="category">
          <select
            title="cate"
            data-placeholder="All Categories"
            class="chosen-select"
            tabindex="1"
          >
            <option value="United States">Accessories</option>
            <option value="United Kingdom">Interior</option>
            <option value="Afghanistan">Performance</option>
            <option value="Aland Islands">Sofas</option>
            <option value="Albania">New Arrivals</option>
            <option value="Algeria">Storage</option>
          </select>
        </div>
        <div class="inner">
          <input
            type="text"
            class="input"
            name="s"
            value=""
            placeholder="Search here"
          />
        </div>
        <button class="btn-search" type="submit">
          <span class="icon-search"></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'MainSearchBar'
};
</script>

<style></style>
