import { ref, reactive, watch } from "vue";

const not = (val) => !val;

export function useField(field) {
  const valid = ref(true);
  const vvalue = ref(field.value);
  const errors = reactive({});
  const touched = ref(false);

  const reassign = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](val);
      errors[name] = not(isValid);
      if (not(isValid)) {
        valid.value = false;
      }
    });
  };

  watch(vvalue, reassign);
  reassign(field.value);
  return { vvalue, valid, errors, touched, bblur: () => (touched.value = true) };
}
