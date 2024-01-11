<template>
  <div class="menu">
    <div class="menu-name" :class="{hl: isHL}" @click="toggleMenu()">{{ menuData.text }}</div>
    <div v-if="menuData.children && menuData.children.length" v-show="isHL">
      <!-- recursive component -->
      <Menu v-for="item in menuData.children" :key="`menu${item.key}`" :menuData="item" :parentKey="menuData.key"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useSideMenuStore } from '../../stores/sideMenu';
const props = defineProps({
  menuData: Object,
  parentKey: String,
});
const { keyMap, setActiveMenu } = useSideMenuStore();
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = isHL.value;
  isOpen.value = !isOpen.value;
  if (isOpen.value)
    setActiveMenu(props.parentKey, props.menuData.key);
  console.log('keyMap: ', keyMap);
  console.log('nowKey: ', props.menuData.key);
}
const isHL = computed(() => isOpen.value && props.menuData.key === keyMap[props.parentKey])
</script>

<style lang="scss" scoped>
.menu {
  text-align: left;
  background-color: #808080;
  padding-left: 1rem;
  &-name {
    font-size: 1.4rem;
    color: #ffffff;
  }
  .hl {
    color: #feff0e;
  }
}
</style>