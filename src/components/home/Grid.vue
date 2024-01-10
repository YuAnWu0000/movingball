<template>
   <div class="grid">
    <div v-for="i in 9" class="box" :key="`box${i}`"></div>
   </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
   .box {
    width: 30%;
    height: 100px;
    border: black solid 2px;
    background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
   }
}
</style>
