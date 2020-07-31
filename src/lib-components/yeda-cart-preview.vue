<script>
export default {
  name: "YedaCartPreview", // vue component name
  data() {
    return {};
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartData || [];
    },
    total() {
      let total = 0;
      this.$store.getters.getCartData.forEach((element) => {
        total = total + Number(element.item.price);
      });
      return total.toFixed(2);
    },
  },
  methods: {
    checkout: function () {
      // console.log(this.$store.getters.getCartData);
    },
  },
};
</script>

<template>
  <div class="yeda-cart-preview">
    <h4>Cart Preview</h4>
    <div v-if="cartItems.length > 0">
      <div :key="'cartItem'+index" v-for="(item, index) in cartItems">
        <b>{{item.quantity}}</b>
        {{`${item.item.name} $${item.item.price}`}}
      </div>
    </div>

    <div>
      <b>Total</b>
      ${{total}}
    </div>
    <button class="btn btn-primary" @click="checkout()">Checkout</button>
  </div>
</template>

<style scoped>
.yeda-cart-preview {
  display: block;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
  border-radius: 8px;
}
.yeda-cart-preview h4 {
  margin: 0 0 1em;
}
</style>
