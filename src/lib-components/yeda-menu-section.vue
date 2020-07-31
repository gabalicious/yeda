<script>
export default {
  name: "YedaMenuSection", // vue component name
  data() {
    return {};
  },
  computed: {},
  methods: {},
  props: { title: String },
};
</script>

<template>
  <div class="yeda-menu-section">
    <h4>{{title || 'Menu Section'}}</h4>
    <hr />
  </div>
</template>

<style scoped>
.yeda-menu-section {
}
.yeda-menu-section h4 {
  margin: 0 0 1em;
}
</style>
