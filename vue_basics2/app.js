/* eslint-disable no-undef */
Vue.createApp({
  data() {
    return {
      title: "Title",
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
    },
    removeItem(inx) {
      this.items.splice(inx, 1);
    },
    log(item) {
      console.log(item);
    },
  },
  compited: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
