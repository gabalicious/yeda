import Vue from "vue";
import Vuex from "vuex";

import tomatopasta from "./tomatopasta.jpg";
import creampasta from "./creampasta.jpg";
import regpizza from "./regpizza.png";
import sqaurepizza from "./squarepizza.jpg";

Vue.use(Vuex);
let menuData = [
  {
    category: "pizza",
    items: [
      {
        name: "Regular Slice",
        price: "2.95",
        foodType: "pizza",
        imgUrl: regpizza,
      },
      {
        name: "Sqaure Slice",
        price: "2.95",
        foodType: "pizza",
        imgUrl: sqaurepizza,
      },
    ],
  },
  {
    category: "pasta",
    items: [
      {
        name: "Penne Pomodoro",
        price: "2.95",
        foodType: "pasta",
        imgUrl: tomatopasta,
      },
      {
        name: "Penne Cacio e pepe ",
        price: "2.95",
        foodType: "pasta",
        imgUrl: creampasta,
      },
    ],
  },
];
export default new Vuex.Store({
  state: {
    menuData: [],
    cartData: [],
  },
  getters: {
    getMenuData(state, getters, rootState, rootGetters) {
      return state.menuData;
    },
    getCartData(state, getters, rootState, rootGetters) {
      return state.cartData;
    },
  },
  mutations: {
    initYedaData(state, menuData) {
      state.menuData = menuData;
    },
    addToCart(state, item) {
      console.log("here2");

      state.cartData.push({ ...item, quantity: 1, options: {} });
      console.log(state.cartData);
    },
  },
  actions: {
    initYedaData({ dispatch, commit }) {
      commit("initYedaData", menuData);
    },
    addToCart({ dispatch, commit }, item) {
      console.log("here1");
      commit("addToCart", item);
    },
  },
});
