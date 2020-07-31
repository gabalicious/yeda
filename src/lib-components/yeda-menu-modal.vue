<script>
export default {
  name: "YedaMenuModal", // vue component name
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <div class="yeda-menu-modal">
    <!-- Modal content -->
    <div class="yeda-menu-modal-content">
      <a href>
        <span class="close">&times;</span>
      </a>
      <p>Some text in the Modal..</p>
    </div>
  </div>
</template>

<style scoped>
.yeda-menu-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.yeda-menu-modal--show {
  display: block;
}
.yeda-menu-modal h4 {
  margin: 0 0 1em;
}

/* Modal Content/Box */
.yeda-menu-modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 55%; /* Could be more or less, depending on screen size */
  min-height: 400px;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
