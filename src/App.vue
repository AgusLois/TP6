<template>
  <section>
    <div id="app">
      <Home />
    </div>
  </section>
</template>

<script>

import Home from "./componentes/Home.vue";

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>

body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
</style>