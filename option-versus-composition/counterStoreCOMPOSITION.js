import { defineStore } from "pinia";
import { useAuthStore } from "../stores/auth";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);

  const countDigitLength = computed(() => {
    count.toString().length;
  });

  function isAuthenticated() {
    const authStore = useAuthStore();
    return authStore.isAuthenticated;
  }
  
  function increment() {
    if (isAuthenticated()) this.count++;
  }

  function decrement() {
    if (isAuthenticated()) this.count--;
  }

  return { count, countDigitLength, isAuthenticated, increment, decrement };
});
