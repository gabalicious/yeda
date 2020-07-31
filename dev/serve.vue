<script>
import Vue from "vue";

import {
  YedaCartPreview,
  YedaMenu,
  YedaMenuItem,
  YedaMenuModal,
  YedaMenuSection,
} from "@/entry";
import store from "./store";
export default Vue.extend({
  name: "ServeDev",
  store,
  data: function () {
    return {};
  },
  components: {
    YedaCartPreview,
    YedaMenu,
    YedaMenuItem,
    YedaMenuModal,
    YedaMenuSection,
  },
});
</script>

<template>
  <div id="app">
    <div class="row">
      <div class="col-8">
        <yeda-menu />
      </div>
      <div class="col-4">
        <yeda-cart-preview />
      </div>
    </div>

    <yeda-menu-modal />
  </div>
</template>
<style scoped>
.row {
  background: pink;
  display: flex;
  width: 70%;
  margin: 0 auto 0;
}
/* .row .col-1 {
  width: 60%;
  margin: 5px;
}
.row .col-2 {
  width: 40%;
  margin: 5px;
} */
</style>