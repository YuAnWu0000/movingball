import { defineStore } from 'pinia'
const storeKeyMap = JSON.parse(localStorage.getItem("keyMap"));

export const useSideMenuStore = defineStore('sideMenu', {
  state: () => ({
    keyMap: storeKeyMap ? storeKeyMap : {}, // key: parentKey, value: selfKey
  }),
  actions: {
    setActiveMenu(parentKey, selfKey) {
      const lastOpenMenuKey = this.keyMap[parentKey];
      if (lastOpenMenuKey)
        this.deleteActiveMenu(lastOpenMenuKey);
      this.keyMap[parentKey] = selfKey;
      localStorage.setItem("keyMap", JSON.stringify(this.keyMap));
    },
    // Delete its children recursively
    deleteActiveMenu(key) {
      // console.log("delete key: ", key);
      const childKey = this.keyMap[key];
      if (childKey)
        this.deleteActiveMenu(childKey)
      delete this.keyMap[key];
    }
  },
})