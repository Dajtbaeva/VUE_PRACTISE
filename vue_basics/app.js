const App = {
  data() {
    return {
      title: "ToDo App",
      placeholder: "Add ToDo",
      inputValue: "",
      todos: ["todo 1"],
    };
  },
  methods: {
    inputChanger(event) {
      this.inputValue = event.target.value;
    },
    addToDo() {
      if (this.inputValue != "") {
        this.todos.push(this.inputValue);
        this.inputValue = "";
      }
    },
    inputKeyPress(event) {
      if (event.key === "Enter") {
        this.addToDo();
      }
    },
    deleteTodo(idx) {
      this.todos.splice(idx, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    doubledToDos() {
      return this.todos.length * 2;
    },
  },
  computed: {
    doubledToDosComputed() {
      return this.todos.length * 2;
    },
  },
  watch: {
    inputValue(newValue) {
      if (newValue.length > 10) {
        this.inputValue = "";
      }
    },
  },
};
// eslint-disable-next-line no-undef
Vue.createApp(App).mount("#app");
