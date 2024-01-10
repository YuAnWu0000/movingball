<template>
  <!-- <HelloWorld msg="Vite + Vue Zachary" /> -->
  <Navbar />
  <Home />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/common/Navbar.vue';
import Home from './components/home/Index.vue';
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  max-width: 144rem;
  padding: 0;
}
</style>
