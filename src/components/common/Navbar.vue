<template>
  <div class="navbar">
    <div class="side-menu-icon" @click="toggleSideMenu()"></div>
    <Transition name="sideMenu">
    <div v-if="showSideMenu" class="side-menu-mask">
      <div class="side-menu-blank" @click="toggleSideMenu()"></div>
        <div class="side-menu-wrapper">
          <Menu v-for="item in menuDatas" :key="`menu${item.key}`" :menuData="item" parentKey="customKey"/>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Menu from './Menu.vue';

const menuDatas = ref([
  {
    key: "64f",
    text: "好喝黑糖",
    children: [{
      key: "445",
      text: "黑糖鮮奶",
      children: [{
        key: "37a",
        text: "黑糖珍珠鮮奶"
      }, {
        key: "feb",
        text: "黑糖芋圓鮮奶"
      }, {
        key: "59c",
        text: "黑糖蒟蒻鮮奶"
      }]
    }, {
      key: "29e",
      text: "黑糖冬瓜",
      children: [{
        key: "ac3",
        text: "黑糖冬瓜牛奶"
      }, {
        key: "ca0",
        text: "黑糖冬瓜珍珠"
      }]
    }]
  },
  {
    key: "6c3",
    text: "茶",
    children: [{
      key: "5dc",
      text: "烏龍綠"
    }, {
      key: "b5f",
      text: "綠茶"
    }, {
      key: "b09",
      text: "紅茶"
    }, {
      key: "887",
      text: "青茶"
    }]
  }, {
    key: "c81",
    text: "咖啡",
    children: [{
      key: "e02",
      text: "黑咖啡",
      children: [{
        key: "d20",
        text: "濃縮咖啡"
      }, {
        key: "1f8",
        text: "美式咖啡"
      }]
    }, {
      key: "d7a",
      text: "牛奶咖啡",
      children: [{
        key: "c09",
        text: "拿鐵",
        children: [{
          key: "db2",
          text: "黑糖拿鐵"
        }, {
          key: "9f6",
          text: "榛果拿鐵"
        }, {
          key: "b61",
          text: "香草拿鐵"
        }]
      }, {
        key: "9ac",
        text: "卡布奇諾"
      }, {
        key: "ce8",
        text: "摩卡"
      }]
    }]
  }
]);
const showSideMenu = ref(false);
const toggleSideMenu = () => {
  showSideMenu.value = !showSideMenu.value;
}
</script>

<style lang="scss" scoped>
.sideMenu-enter-active,
.sideMenu-leave-active {
  transition: all 0.5s ease;
}

.sideMenu-enter-from,
.sideMenu-leave-to {
  transform: translateX(18rem);
}
.navbar {
  width: 100%;
  max-width: 144rem;
  height: 3rem;
  position: fixed;
  z-index: 999;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .side-menu {
    &-icon {
      width: 4rem;
      height: 2.8rem;
      background: url(../../assets/menu.png) no-repeat center / cover;
    }
    &-mask {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      display: flex;
    }
    &-blank {
      opacity: 0;
      width: 21rem;
    }
    &-wrapper {
      width: 18rem;
      background-color: rgba(0,0,0, 0.95);
      padding-top: 1rem;
      transform: translateX(0);
    }
  }
}
</style>
  