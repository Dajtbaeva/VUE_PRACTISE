<template>
  <div class="card">
    <div class="list">
      <li class="list_item" v-for="user in users" :key="user.id">{{ user }}</li>
    </div>
  </div>
</template>
<script>
import { useUsers } from "../use/users";
export default {
  async setup() {
    const { users } = await useUsers();
    return { users };
  },
};
</script>
