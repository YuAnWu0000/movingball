<template>
   <div class="grid">
    <div v-for="i in 9" class="box" :key="`box${i}`"></div>
    <div v-for="i in ballNumber" :class="`ball-${i}`" :key="`box${i}`">{{ i }}</div>
   </div>
</template>
<script setup>
import { ref } from 'vue';
// You can modify to 100
// const ballNumber = ref(100);
const ballNumber = ref(4);
</script>

<style lang="scss" scoped>
// You can modify to 100
// $ball-number: 100;
$ball-number: 4;
$start-point-list: (); // the length of this list equals to $ball-number
$end-point: translate(0, 0);

@for $i from 1 through $ball-number {
  @if $i % 4 == 1 {
    // This logic for start point can be changed, just for example
    $start-point-list: append($start-point-list, translate(-18rem + calc(($i - 1) * 30 / $ball-number), -15rem));
  }
  @else if $i % 4 == 2 {
    $start-point-list: append($start-point-list, translate(18rem, -15rem + calc(($i - 2) * 30 / $ball-number)));
  }
  @else if $i % 4 == 3 {
    $start-point-list: append($start-point-list, translate(18rem - calc(($i - 3) * 30 / $ball-number), 15rem));
  }
  @else {
    $start-point-list: append($start-point-list, translate(-18rem, 15rem - calc(($i - 4) * 30 / $ball-number)));
  }
  .ball-#{$i} {
    position: absolute;
    top: 15rem;
    right: auto;
    width: 3rem;
    height: 3rem;
    background-color: #A5F12B;
    border-radius: 50%;
    line-height: 3rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: #000000;
    animation: moving 2s infinite;
    transform: nth($start-point-list, $i);
  }
}

.grid {
  width: 39rem;
  height: 33rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  position: relative;
  .box {
    width: 12rem;
    height: 10rem;
    border: black solid 2px;
    background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
  }
  .box:nth-of-type(3),.box:nth-of-type(5),.box:nth-of-type(9) {
    animation: shining linear 0.5s infinite;
  }
}
@keyframes shining {
  0% {
    opacity: 100%;
  }
  50% {
    opacity: 60%;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes moving {
  100% {
    transform: $end-point;
  }
}
</style>
