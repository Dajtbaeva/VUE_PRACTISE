import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref({});

  const fullname = computed(() =>
    user ? `${user.value.first_name} ${user.value.last_name}` : ""
  );

  function logout() {
    this.$patch((state) => {
      (state.isAuthenticated = false), (state.user = {});
    });
  }
  async function login() {
    const res = await fetch("https://reqres.in/api/users/2");
    const data = await res.json();
    user.value = data.data;
    isAuthenticated.value = true;
  }

  return {
    isAuthenticated,
    user,
    fullname,
    logout,
    login,
  };
});
