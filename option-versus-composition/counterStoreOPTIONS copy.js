import { defineStore } from "pinia";
import { useAuthStore } from "../stores/auth";

export const useCounterStore = defineStore("counterStore", {
  id: "counter",
  state: () => ({
    count: 10,
  }),
  getters: {
    countDigitLength: (state) => state.count.toString().length,

    doubleCount: (state) => state.count * 2,
  },
  actions: {
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
    increment() {
      if (this.isAuthenticated()) this.count++;
    },
    decrement() {
      if (this.isAuthenticated()) this.count--;
    },
  },
});
