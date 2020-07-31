<script>
import YedaMenuSection from "./yeda-menu-section.vue";
import YedaMenuItem from "./yeda-menu-item.vue";

export default {
  name: "YedaMenu", // vue component name
  data() {
    return {
      menuData: this.$store.getters.getMenuData,
    };
  },
  components: {
    YedaMenuSection,
    YedaMenuItem,
  },
  computed: {},
  methods: {
    test: function () {
      console.log(this.$store.getters.getMenuData);
    },
  },
};
</script>

<template>
  <div>
    <div class="yeda-menu" v-for="(menuCategory,j) in menuData" :key="'categoryIndex' + j">
      <yeda-menu-section v-if="menuCategory.category" :title="menuCategory.category" />
      <div class="yeda-menu--container">
        <yeda-menu-item
          v-for="(menuItem, i) in menuCategory.items"
          :item="menuItem"
          :key="'menuItem' + i"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.yeda-menu {
  display: block;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
  border-radius: 8px;
}
.yeda-menu h4 {
  margin: 0 0 1em;
}
.yeda-menu--container {
  display: flex;
}
</style>
