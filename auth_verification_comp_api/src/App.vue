<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>
      <h3 v-if="error">{{ error }}</h3>
      <div
        class="form-control"
        :class="{ invalid: !form.email.valid && form.email.touched }"
      >
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email.value"
          @blur="form.email.bblur"
        />
        <small v-if="form.email.errors.required && form.email.touched"
          >Email field is required</small
        >
      </div>
      <div
        class="form-control"
        :class="{ invalid: !form.password.valid && form.password.touched }"
      >
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password.value"
          @blur="form.password.bblur"
        />
        <small v-if="form.password.errors.required && form.password.touched"
          >Password field is required</small
        >
        <small
          v-else-if="form.password.errors.minLength && form.password.touched"
          >Password length must be minimum 8 symbols. Now it is
          {{ form.password.value.length }}.</small
        >
      </div>

      <button class="btn primary" type="submit" :disabled="!form.valid">
        Submit
      </button>
    </form>
    <Suspense v-if="submitted">
      <UsersList />
      <template #fallback>
        <div class="loader"></div>
      </template>
    </Suspense>
  </div>
</template>
<script>
import { ref, onErrorCaptured } from "vue";
import { useForm } from "./use/form";
import UsersList from "./components/UsersList.vue";

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  setup() {
    const submitted = ref(false);
    const error = ref();
    const form = useForm({
      email: {
        value: "",
        validators: { required },
      },
      password: {
        value: "",
        validators: { required, minLength: minLength(8) },
      },
    });

    function submit() {
      console.log("Email:", form.email.value);
      console.log("Password:", form.password.value);
      submitted.value = true;
    }

    onErrorCaptured((e) => {
      error.value = e.message;
      submitted.value = false;
      // console.log(error.value);
      // console.log(submitted.value);
    });

    return { form, submit, submitted, error };
  },
  components: {
    UsersList,
  },
};
</script>
