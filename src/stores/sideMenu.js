import { defineStore } from 'pinia'

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    keyMap: {} // key: parentKey, value: selfKey
  }),
  actions: {
    setActiveMenu(parentKey, selfKey) {
      this.keyMap[parentKey] = selfKey;
    },
  },
})