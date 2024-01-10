<template>
  <div class="home">
    <Grid />
  </div>
</template>

<script setup>
import Grid from './Grid.vue';
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: -webkit-fill-available;
  height: -moz-fill-available;
  background-color: rgb(214, 214, 214);
  display: flex;
  align-items: center;
}
</style>
