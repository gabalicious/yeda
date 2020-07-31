<script>
export default {
  name: "YedaMenuItem", // vue component name
  data() {
    return {
      menuItem: { name: "Regular Slice", foodType: "pizza" },
    };
  },
  computed: {},
  methods: {
    addToCart: function (item) {
      this.$store.dispatch({
        type: "addToCart",
        item,
      });
    },
  },
  props: { item: Object },
};
</script>

<template>
  <div class="yeda-menu-item" v-if="item">
    <img :src="item.imgUrl" alt />
    <h4>{{item.name || 'Menu Item'}}</h4>
    price: ${{item.price}}
    <br />
    <button class="btn btn-danger" @click="addToCart(item)">Add to Cart</button>
  </div>
</template>

<style scoped>
.yeda-menu-item {
  margin: 2px;

  width: 50%;
}
.yeda-menu-item h4 {
  margin: 0 0 1em;
}
img {
  width: 196px;
  height: 130px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 8px;
}
</style>
