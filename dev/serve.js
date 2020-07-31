import Vue from "vue";

import Dev from "./serve.vue";
import Yeda, {
  YedaCartPreview,
  YedaMenu,
  YedaMenuItem,
  YedaMenuModal,
  YedaMenuSection,
} from "@/entry";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
import store from "./store"; // their store, without your module
Vue.use(Yeda, { store });

const app = new Vue({
  store,
  beforeCreate() {
    this.$store.dispatch("initYedaData");
  },
  mounted() {},
  render: (h) => h(Dev),
}).$mount("#app");
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
